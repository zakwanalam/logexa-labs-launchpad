import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, Trash2, Calendar, Clock, Mail, Phone, Briefcase, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { Input } from "@/components/ui/input";

interface BookingEntry {
  id: string;
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
  submittedAt: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<BookingEntry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isClearing, setIsClearing] = useState(false);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!url) throw new Error("Google Sheets URL not configured");

      const response = await fetch(url, { redirect: 'follow' });
      const text = await response.text();
      console.log("Raw response from Apps Script:", text);
      try {
        const data = JSON.parse(text);
        // Handle both simple arrays and wrapped objects
        const bookingsArray = data?.bookings || (Array.isArray(data) ? data : []);
        setBookings(bookingsArray);
        
        if (data?.debugInfo) {
          console.log("Connect Info:", data.debugInfo);
        }
      } catch {
        console.error("Invalid JSON response from Google Sheets");
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
      toast.error("Failed to load bookings from Google Sheets.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem("logexa_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("logexa_admin_auth", "true");
      toast.success("Welcome, Admin.");
      fetchBookings();
    } else {
      toast.error("Invalid password");
    }
  };

  const exportToExcel = () => {
    if (bookings.length === 0) {
      toast.error("No bookings to export.");
      return;
    }

    const rows = bookings.map((b) => ({
      Name: b.name,
      Email: b.email,
      Phone: b.phone,
      Company: b.company || "—",
      Service: b.service,
      Industry: b.industry || "—",
      Timeline: b.timeline || "—",
      Source: b.source || "—",
      Budget: b.budget,
      Description: b.description || "—",
      "Call Date": b.date,
      "Time Slot": b.timeSlot,
      "Submitted At": new Date(b.submittedAt).toLocaleString(),
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bookings");
    XLSX.writeFile(wb, `logexa-bookings-${new Date().toISOString().slice(0, 10)}.xlsx`);
    toast.success("Excel file downloaded!");
  };

  const clearAll = async () => {
    if (!confirm("Are you sure you want to delete all bookings? This cannot be undone.")) return;

    try {
      setIsClearing(true);
      const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      if (!url) throw new Error("Google Sheets URL not configured");

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ action: "clear" }),
      });

      // With no-cors, we can't read the response, so assume success
      setBookings([]);
      toast.success("All bookings cleared.");
    } catch (error) {
      console.error("Failed to clear bookings:", error);
      toast.error("Could not clear bookings. Try again.");
    } finally {
      setIsClearing(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 glass-card p-8 w-full max-w-md text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 glow-border-primary border border-primary/30">
            <Lock size={28} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold mb-2">Admin Access</h1>
          <p className="text-muted-foreground mb-6 text-sm">
            Please enter your password to view bookings.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-background/50 text-center"
              autoFocus
            />
            <Button type="submit" variant="hero" className="w-full">
              Login
            </Button>
          </form>

          <button
            onClick={() => navigate("/")}
            className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">
              Booking <span className="text-primary neon-text-primary">Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {bookings.length} booking{bookings.length !== 1 ? "s" : ""} total
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="hero" onClick={exportToExcel} className="gap-2" disabled={bookings.length === 0 || isLoading}>
              <Download size={16} /> Export Excel
            </Button>
            {bookings.length > 0 && (
              <Button variant="heroOutline" onClick={clearAll} className="gap-2" disabled={isClearing || isLoading}>
                {isClearing ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                {isClearing ? "Clearing..." : "Clear All"}
              </Button>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="glass-card p-16 text-center flex flex-col items-center justify-center">
            <Loader2 size={40} className="text-primary animate-spin mb-4" />
            <p className="text-muted-foreground font-medium">Loading bookings from Google Sheets...</p>
          </div>
        ) : bookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-16 text-center"
          >
            <Calendar size={48} className="mx-auto mb-4 text-muted-foreground opacity-40" />
            <p className="text-muted-foreground text-lg">No bookings yet.</p>
            <p className="text-muted-foreground text-sm mt-1">
              Bookings will appear here once leads fill out the form.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            <AnimatePresence>
              {bookings.map((b, i) => (
                <motion.div
                  key={b.id || i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-6 hover:glow-border-primary transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-display text-lg font-semibold">{b.name}</h3>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Mail size={13} /> {b.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Phone size={13} /> {b.phone}
                        </span>
                        {b.company && (
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={13} /> {b.company}
                          </span>
                        )}
                        {b.submittedAt && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={13} /> {new Date(b.submittedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      {b.description && (
                        <p className="text-sm text-muted-foreground mt-1">{b.description}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end lg:text-right shrink-0">
                      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {b.service}
                        </span>
                        {b.industry && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {b.industry}
                          </span>
                        )}
                        {b.timeline && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {b.timeline}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                          {b.budget}
                        </span>
                        {b.source && (
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            Source: {b.source}
                          </span>
                        )}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                        {b.date} · {b.timeSlot}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
