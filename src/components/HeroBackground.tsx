import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(73 92% 48%)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-32 h-32 border border-primary/20 rounded-lg"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute top-[20%] right-[15%] w-20 h-20 border border-primary/15"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-16 h-16 border border-accent/20 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-24 h-24 border border-primary/10"
        animate={{ rotate: 180, y: [0, 15, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Diagonal accent lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%" y1="60%" x2="40%" y2="20%"
          stroke="hsl(73 92% 48%)"
          strokeWidth="0.5"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.line
          x1="60%" y1="80%" x2="100%" y2="30%"
          stroke="hsl(73 92% 48%)"
          strokeWidth="0.5"
          strokeOpacity="0.08"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        <motion.line
          x1="30%" y1="100%" x2="70%" y2="0%"
          stroke="hsl(174 16% 62%)"
          strokeWidth="0.3"
          strokeOpacity="0.06"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
        />
      </svg>

      {/* Animated dots / nodes */}
      {[
        { cx: "20%", cy: "30%", delay: 0 },
        { cx: "75%", cy: "25%", delay: 0.3 },
        { cx: "85%", cy: "65%", delay: 0.6 },
        { cx: "15%", cy: "70%", delay: 0.9 },
        { cx: "50%", cy: "15%", delay: 1.2 },
        { cx: "40%", cy: "80%", delay: 0.5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
          style={{ left: dot.cx, top: dot.cy }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}

      {/* Connection lines between dots */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 20% 30% Q 47% 20% 75% 25%"
          fill="none"
          stroke="hsl(73 92% 48%)"
          strokeWidth="0.5"
          strokeOpacity="0.06"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 75% 25% Q 80% 45% 85% 65%"
          fill="none"
          stroke="hsl(73 92% 48%)"
          strokeWidth="0.5"
          strokeOpacity="0.06"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-[140px]"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/6 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />

      {/* Hexagonal wireframe */}
      <motion.svg
        className="absolute top-[10%] right-[5%] w-48 h-48 opacity-[0.06]"
        viewBox="0 0 100 100"
        animate={{ rotate: 60 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(73 92% 48%)" strokeWidth="0.8" />
        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="hsl(73 92% 48%)" strokeWidth="0.5" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[15%] left-[5%] w-36 h-36 opacity-[0.05]"
        viewBox="0 0 100 100"
        animate={{ rotate: -60 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="hsl(174 16% 62%)" strokeWidth="0.8" />
      </motion.svg>
    </div>
  );
};

export default HeroBackground;
