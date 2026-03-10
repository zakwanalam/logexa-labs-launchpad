import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Trash2, Calendar, Mail, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as XLSX from "xlsx";

interface BookingEntry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  date: string;
  timeSlot: string;
  submittedAt: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<BookingEntry[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("logexa_bookings") || "[]");
    setBookings(stored);
  }, []);

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

  const clearAll = () => {
    localStorage.removeItem("logexa_bookings");
    setBookings([]);
    toast.success("All bookings cleared.");
  };

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
            <Button variant="hero" onClick={exportToExcel} className="gap-2">
              <Download size={16} /> Export Excel
            </Button>
            {bookings.length > 0 && (
              <Button variant="heroOutline" onClick={clearAll} className="gap-2">
                <Trash2 size={16} /> Clear All
              </Button>
            )}
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="glass-card p-16 text-center">
            <Calendar size={48} className="mx-auto mb-4 text-muted-foreground opacity-40" />
            <p className="text-muted-foreground text-lg">No bookings yet.</p>
            <p className="text-muted-foreground text-sm mt-1">
              Bookings will appear here once leads fill out the form.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookings.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
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
                    </div>
                    {b.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{b.description}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end lg:text-right shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {b.service}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {b.budget}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                      {b.date} · {b.timeSlot}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
