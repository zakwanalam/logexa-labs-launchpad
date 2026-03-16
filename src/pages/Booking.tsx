import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Calendar, User, Briefcase, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { format, addDays } from "date-fns";

const SERVICE_OPTIONS = [
  "Website That Converts",
  "Landing Page / Funnel",
  "AI Automation",
  "SaaS Product Development",
  "Custom Development",
  "Website Redesign",
  "E-commerce Improvement",
  "Custom Business System",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "Under Rs. 50,000",
  "Rs. 50,000 – 150,000",
  "Rs. 150,000 – 300,000",
  "Rs. 300,000 – 500,000",
  "Rs. 500,000+",
];

const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Finance",
  "E-commerce",
  "Education",
  "Real Estate",
  "Technology",
  "Agency / Services",
  "Local Business",
  "Other",
];

const TIMELINE_OPTIONS = ["ASAP (1-2 weeks)", "2-4 Weeks", "1-2 Months", "Flexible / Not sure yet"];

const SOURCE_OPTIONS = ["Facebook", "Instagram", "LinkedIn", "Referral", "Google Search", "Other"];

const TIME_SLOTS = [
  "12:00 PM – 01:00 PM",
  "01:00 PM – 02:00 PM",
  "02:00 PM – 03:00 PM",
  "03:00 PM – 04:00 PM",
  "04:00 PM – 05:00 PM",
  "05:00 PM – 06:00 PM",
  "06:00 PM – 07:00 PM",
  "07:00 PM – 08:00 PM",
  "08:00 PM – 09:00 PM",
];

interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  industry: string;
  timeline: string;
  source: string;
  date: string;
  timeSlot: string;
}

const STEPS = [
  { label: "Contact", icon: User },
  { label: "Project Details", icon: Briefcase },
  { label: "Schedule", icon: Calendar },
];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [existingBookings, setExistingBookings] = useState<any[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
    industry: "",
    timeline: "",
    source: "",
    date: "",
    timeSlot: "",
  });

  const update = (field: keyof BookingData, value: string) => setData((prev) => ({ ...prev, [field]: value }));

  const normalizeSlot = (s: string) => {
    if (!s) return "";
    return String(s).toLowerCase().replace(/:00/g, "").replace(/\s+/g, "").replace(/[\u2013\u2014\u2212\-]/g, "-").replace(/(^|-)+0+/g, "$1").trim();
  };

  const isSlotBooked = (slot: string) => {
    const selectedDate = String(data.date).split("T")[0].trim();
    const normalizedCurrentSlot = normalizeSlot(slot);

    return existingBookings.some((b: any) => {
      if (!b.date || !b.timeSlot) return false;
      const bookingDate = String(b.date).split("T")[0].trim();
      const normalizedBookingSlot = normalizeSlot(b.timeSlot);
      return bookingDate === selectedDate && normalizedBookingSlot === normalizedCurrentSlot;
    });
  };

  const availableDates = Array.from({ length: 3 }, (_, i) => {
    const d = addDays(new Date(), i + 1);
    return { value: format(d, "yyyy-MM-dd"), label: format(d, "EEE, MMM d") };
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoadingSlots(true);
        const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
        if (!url) return;
        const response = await fetch(url, { redirect: "follow" });
        const text = await response.text();
        try {
          const json = JSON.parse(text);
          const bookingsArray = json?.bookings || (Array.isArray(json) ? json : []);
          setExistingBookings(bookingsArray);
        } catch {
          console.error("Invalid JSON response from Google Sheets");
        }
      } catch (error) {
        console.error("Failed to fetch existing bookings:", error);
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    if (data.timeSlot && isSlotBooked(data.timeSlot)) {
      setData((prev) => ({ ...prev, timeSlot: "" }));
    }
  }, [existingBookings, data.date, data.timeSlot]);

  const canNext = () => {
    if (step === 0) return data.name && data.email && data.phone;
    if (step === 1) return data.service && data.budget && data.industry && data.timeline && data.source && data.description.length >= 15;
    if (step === 2) return data.date && data.timeSlot && !isSlotBooked(data.timeSlot);
    return false;
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!url) {
        toast.error("Booking system is not fully configured yet.");
        return;
      }

      const entry = { ...data, id: crypto.randomUUID(), submittedAt: new Date().toISOString() };
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(entry),
      });

      toast.success("Consultation booked! We'll be in touch shortly.");
      setStep(3);
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Book Your <span className="text-primary neon-text-primary">Free Consultation</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you need a website, landing page, SaaS product, custom development, or automation help, we’ll help you identify the clearest next step.
            </p>
          </motion.div>

          {step < 3 && (
            <div className="grid sm:grid-cols-3 gap-3 mb-8 text-sm">
              <div className="glass-card p-4 text-center">Project or workflow review</div>
              <div className="glass-card p-4 text-center">Practical recommendations</div>
              <div className="glass-card p-4 text-center">Clear next steps</div>
            </div>
          )}

          {step < 3 && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${i < step ? "bg-primary border-primary text-primary-foreground" : i === step ? "border-primary text-primary glow-border-primary" : "border-border text-muted-foreground"}`}>
                    {i < step ? <Check size={16} /> : <s.icon size={16} />}
                  </div>
                  {i < STEPS.length - 1 && <div className={`w-16 h-0.5 transition-all duration-500 ${i < step ? "bg-primary" : "bg-border"}`} />}
                </div>
              ))}
            </div>
          )}

          <motion.div layout className="glass-card p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="step0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h2 className="font-display text-xl font-semibold mb-1">Contact Information</h2>
                  <p className="text-sm text-muted-foreground mb-4">How should we reach you after the consultation?</p>
                  <div className="space-y-4">
                    <div><Label htmlFor="name">Full Name *</Label><Input id="name" placeholder="John Doe" value={data.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5 bg-background/50" /></div>
                    <div><Label htmlFor="email">Email Address *</Label><Input id="email" type="email" placeholder="john@company.com" value={data.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5 bg-background/50" /></div>
                    <div><Label htmlFor="phone">Phone Number *</Label><Input id="phone" type="tel" placeholder="+92..." value={data.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1.5 bg-background/50" /></div>
                    <div><Label htmlFor="company">Business Name</Label><Input id="company" placeholder="Your business name (optional)" value={data.company} onChange={(e) => update("company", e.target.value)} className="mt-1.5 bg-background/50" /></div>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h2 className="font-display text-xl font-semibold mb-1">Project Details</h2>
                  <p className="text-sm text-muted-foreground mb-4">Tell us what you need help with.</p>
                  <div className="space-y-5">
                    <div>
                      <Label>What do you need help with? *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                        {SERVICE_OPTIONS.map((s) => (
                          <button key={s} onClick={() => update("service", s)} className={`text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${data.service === s ? "border-primary bg-primary/10 text-primary glow-border-primary" : "border-border bg-background/50 text-foreground hover:border-primary/40"}`}>{s}</button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><Label>Your Industry *</Label><Select onValueChange={(v) => update("industry", v)} value={data.industry}><SelectTrigger className="mt-1.5 bg-background/50"><SelectValue placeholder="Select industry" /></SelectTrigger><SelectContent>{INDUSTRY_OPTIONS.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select></div>
                      <div><Label>Preferred Timeline *</Label><Select onValueChange={(v) => update("timeline", v)} value={data.timeline}><SelectTrigger className="mt-1.5 bg-background/50"><SelectValue placeholder="Select timeline" /></SelectTrigger><SelectContent>{TIMELINE_OPTIONS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent></Select></div>
                    </div>

                    <div><Label>How did you hear about us? *</Label><Select onValueChange={(v) => update("source", v)} value={data.source}><SelectTrigger className="mt-1.5 bg-background/50"><SelectValue placeholder="Select source" /></SelectTrigger><SelectContent>{SOURCE_OPTIONS.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent></Select></div>

                    <div>
                      <Label>Estimated Budget *</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
                        {BUDGET_OPTIONS.map((b) => (
                          <button key={b} onClick={() => update("budget", b)} className={`px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${data.budget === b ? "border-primary bg-primary/10 text-primary glow-border-primary" : "border-border bg-background/50 text-foreground hover:border-primary/40"}`}>{b}</button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5"><Label htmlFor="desc">Tell us about your project *</Label><span className={`text-[10px] font-medium ${data.description.length >= 15 ? "text-primary" : "text-muted-foreground"}`}>{data.description.length}/15 min</span></div>
                      <Textarea id="desc" placeholder="Share what you're building, what problem you're trying to solve, or what kind of help you need. The more context you give, the better the consultation will be." value={data.description} onChange={(e) => update("description", e.target.value)} className={`bg-background/50 min-h-[100px] transition-all duration-200 ${data.description.length > 0 && data.description.length < 15 ? "border-red-500/50 focus-visible:ring-red-500/20" : ""}`} />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }} className="space-y-5">
                  <h2 className="font-display text-xl font-semibold mb-1">Schedule Your Consultation</h2>
                  <p className="text-sm text-muted-foreground mb-4">Choose a date and time that works for you.</p>
                  <div className="space-y-5">
                    <div>
                      <Label>Select a Date *</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {availableDates.map((d) => (
                          <button key={d.value} onClick={() => { update("date", d.value); update("timeSlot", ""); }} className={`px-4 py-4 rounded-lg border text-center transition-all duration-200 ${data.date === d.value ? "border-primary bg-primary/10 text-primary glow-border-primary" : "border-border bg-background/50 text-foreground hover:border-primary/40"}`}>
                            <Calendar size={18} className="mx-auto mb-1.5 opacity-60" />
                            <span className="text-sm font-medium">{d.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mt-2 mb-1.5"><Label>Select a Time Slot *</Label>{isLoadingSlots && <Loader2 size={14} className="animate-spin text-muted-foreground" />}</div>
                      <div className="grid grid-cols-2 gap-2.5 mt-2">
                        {TIME_SLOTS.map((t) => {
                          const isBooked = isSlotBooked(t);
                          return (
                            <button key={t} onClick={() => !isBooked && update("timeSlot", t)} disabled={isBooked || !data.date || isLoadingSlots} className={`px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${isBooked ? "opacity-50 cursor-not-allowed border-red-500/30 bg-red-500/5 text-muted-foreground line-through decoration-red-500/60" : data.timeSlot === t ? "border-primary bg-primary/10 text-primary glow-border-primary" : !data.date || isLoadingSlots ? "border-border bg-background/50 text-foreground opacity-50 cursor-not-allowed" : "border-border bg-background/50 text-foreground hover:border-primary/40"}`}>
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 glow-border-primary border border-primary/30"><Check size={28} className="text-primary" /></div>
                  <h2 className="font-display text-2xl font-bold mb-2">Consultation Booked!</h2>
                  <p className="text-muted-foreground mb-2">Your free consultation is scheduled for:</p>
                  <p className="text-primary font-semibold text-lg mb-1">{data.date && (() => { const [year, month, day] = data.date.split("-").map(Number); return format(new Date(year, month - 1, day), "EEEE, MMMM d, yyyy"); })()}</p>
                  <p className="text-foreground font-medium mb-6">{data.timeSlot}</p>
                  <p className="text-sm text-muted-foreground mb-8">We’ll follow up at <strong className="text-foreground">{data.email}</strong> with the meeting details.</p>
                  <Button variant="hero" onClick={() => navigate("/")}>Back to Home <ArrowRight size={16} /></Button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 3 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button variant="ghost" onClick={() => setStep((s) => s - 1)} disabled={step === 0} className="text-muted-foreground"><ArrowLeft size={16} /> Back</Button>
                {step < 2 ? (
                  <Button variant="hero" onClick={() => setStep((s) => s + 1)} disabled={!canNext()}>Continue <ArrowRight size={16} /></Button>
                ) : (
                  <Button variant="hero" onClick={handleSubmit} disabled={!canNext() || isSubmitting}>{isSubmitting ? <Loader2 size={16} className="animate-spin mr-2" /> : null}{isSubmitting ? "Confirming..." : "Confirm Consultation Booking"} {!isSubmitting && <Check size={16} />}</Button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
