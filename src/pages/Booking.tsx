import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Calendar, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { format, addDays } from "date-fns";

const SERVICE_OPTIONS = [
  "Custom Website Development",
  "E-commerce Platform",
  "Web Application (SaaS)",
  "Landing Page / Marketing Site",
  "Website Redesign",
  "CMS / Blog Development",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
];

const TIME_SLOTS = [
  "09:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 01:00 PM",
  "01:00 PM – 02:00 PM",
  "02:00 PM – 03:00 PM",
  "03:00 PM – 04:00 PM",
  "04:00 PM – 05:00 PM",
];

interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  date: string;
  timeSlot: string;
}

const STEPS = [
  { label: "Contact", icon: User },
  { label: "Project", icon: Briefcase },
  { label: "Schedule", icon: Calendar },
];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
    date: "",
    timeSlot: "",
  });

  const update = (field: keyof BookingData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const availableDates = Array.from({ length: 3 }, (_, i) => {
    const d = addDays(new Date(), i + 1);
    return { value: format(d, "yyyy-MM-dd"), label: format(d, "EEE, MMM d") };
  });

  const canNext = () => {
    if (step === 0) return data.name && data.email && data.phone;
    if (step === 1) return data.service && data.budget;
    if (step === 2) return data.date && data.timeSlot;
    return false;
  };

  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("logexa_bookings") || "[]");
    const entry = { ...data, id: crypto.randomUUID(), submittedAt: new Date().toISOString() };
    existing.push(entry);
    localStorage.setItem("logexa_bookings", JSON.stringify(existing));
    toast.success("Booking confirmed! We'll be in touch shortly.");
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Start Your <span className="text-primary neon-text-primary">Project</span>
            </h1>
            <p className="text-muted-foreground">
              Tell us about your web development needs and book a discovery call.
            </p>
          </motion.div>

          {/* Step indicator */}
          {step < 3 && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      i < step
                        ? "bg-primary border-primary text-primary-foreground"
                        : i === step
                        ? "border-primary text-primary glow-border-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check size={16} /> : <s.icon size={16} />}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`w-16 h-0.5 transition-all duration-500 ${
                        i < step ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form card */}
          <motion.div
            layout
            className="glass-card p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {/* Step 0 - Contact */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-semibold mb-1">Contact Information</h2>
                  <p className="text-sm text-muted-foreground mb-4">How can we reach you?</p>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="mt-1.5 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="mt-1.5 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="mt-1.5 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Acme Inc. (optional)"
                        value={data.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="mt-1.5 bg-background/50"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 1 - Project */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-semibold mb-1">Project Details</h2>
                  <p className="text-sm text-muted-foreground mb-4">What are you looking to build?</p>

                  <div className="space-y-5">
                    <div>
                      <Label>Service Needed *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                        {SERVICE_OPTIONS.map((s) => (
                          <button
                            key={s}
                            onClick={() => update("service", s)}
                            className={`text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                              data.service === s
                                ? "border-primary bg-primary/10 text-primary glow-border-primary"
                                : "border-border bg-background/50 text-foreground hover:border-primary/40"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Estimated Budget *</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-2">
                        {BUDGET_OPTIONS.map((b) => (
                          <button
                            key={b}
                            onClick={() => update("budget", b)}
                            className={`px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                              data.budget === b
                                ? "border-primary bg-primary/10 text-primary glow-border-primary"
                                : "border-border bg-background/50 text-foreground hover:border-primary/40"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="desc">Project Description</Label>
                      <Textarea
                        id="desc"
                        placeholder="Briefly describe your project goals, features, or any specific requirements..."
                        value={data.description}
                        onChange={(e) => update("description", e.target.value)}
                        className="mt-1.5 bg-background/50 min-h-[100px]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 - Schedule */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="font-display text-xl font-semibold mb-1">Schedule a Discovery Call</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pick a day and a 1-hour slot that works for you.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <Label>Select a Date *</Label>
                      <div className="grid grid-cols-3 gap-3 mt-2">
                        {availableDates.map((d) => (
                          <button
                            key={d.value}
                            onClick={() => update("date", d.value)}
                            className={`px-4 py-4 rounded-lg border text-center transition-all duration-200 ${
                              data.date === d.value
                                ? "border-primary bg-primary/10 text-primary glow-border-primary"
                                : "border-border bg-background/50 text-foreground hover:border-primary/40"
                            }`}
                          >
                            <Calendar size={18} className="mx-auto mb-1.5 opacity-60" />
                            <span className="text-sm font-medium">{d.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Select a Time Slot *</Label>
                      <div className="grid grid-cols-2 gap-2.5 mt-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            onClick={() => update("timeSlot", t)}
                            className={`px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
                              data.timeSlot === t
                                ? "border-primary bg-primary/10 text-primary glow-border-primary"
                                : "border-border bg-background/50 text-foreground hover:border-primary/40"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 - Confirmation */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 glow-border-primary border border-primary/30">
                    <Check size={28} className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mb-2">
                    Your discovery call is scheduled for:
                  </p>
                  <p className="text-primary font-semibold text-lg mb-1">
                    {data.date && format(new Date(data.date + "T00:00:00"), "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-foreground font-medium mb-6">{data.timeSlot}</p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We'll send a confirmation email to <strong className="text-foreground">{data.email}</strong> with the meeting details.
                  </p>
                  <Button variant="hero" onClick={() => navigate("/")}>
                    Back to Home <ArrowRight size={16} />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            {step < 3 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 0}
                  className="text-muted-foreground"
                >
                  <ArrowLeft size={16} /> Back
                </Button>

                {step < 2 ? (
                  <Button
                    variant="hero"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canNext()}
                  >
                    Continue <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Button
                    variant="hero"
                    onClick={handleSubmit}
                    disabled={!canNext()}
                  >
                    Confirm Booking <Check size={16} />
                  </Button>
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
