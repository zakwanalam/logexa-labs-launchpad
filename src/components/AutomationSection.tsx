
import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import DotPattern from "@/components/ui/dot-pattern";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-20 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] border-primary/20 hover:border-primary/50 transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  n8n: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 121.3 512.1 269.6"
      width="40"
      height="40"
    >
      <path
        d="M458.1 229.1c-25.1 0-46.2-17.2-52.2-40.4h-61.8c-13.2 0-24.4 9.5-26.6 22.5l-2.2 13.3c-2 12.2-8.2 23.4-17.5 31.6 9.3 8.2 15.5 19.3 17.5 31.6l2.2 13.3c2.2 13 13.4 22.5 26.6 22.5h7.9c6-23.2 27.1-40.4 52.2-40.4 29.8 0 53.9 24.1 53.9 53.9s-24.1 53.9-53.9 53.9c-25.1 0-46.2-17.2-52.2-40.4h-7.9c-26.3 0-48.8-19-53.2-45l-2.2-13.3c-2.2-13-13.4-22.5-26.6-22.5h-21.4c-6 23.2-27.1 40.4-52.2 40.4s-46.2-17.2-52.2-40.4H106c-6 23.2-27.1 40.4-52.2 40.4C24.1 309.9 0 285.8 0 256s24.1-53.9 53.9-53.9c25.1 0 46.2 17.2 52.2 40.4h30.3c6-23.2 27.1-40.4 52.2-40.4s46.2 17.2 52.2 40.4h21.4c13.2 0 24.4-9.5 26.6-22.5l2.2-13.3c4.3-26 26.8-45 53.2-45H406c6-23.2 27.1-40.4 52.2-40.4 29.8 0 53.9 24.1 53.9 53.9s-24.2 53.9-54 53.9m0-27c14.9 0 26.9-12.1 26.9-26.9s-12.1-26.9-26.9-26.9-26.9 12.1-26.9 26.9 12 26.9 26.9 26.9M53.9 282.9c14.9 0 26.9-12.1 26.9-26.9s-12.1-26.9-26.9-26.9-27 12-27 26.9 12.1 26.9 27 26.9M215.6 256c0 14.9-12.1 26.9-26.9 26.9s-26.9-12.1-26.9-26.9 12.1-26.9 26.9-26.9 26.9 12 26.9 26.9m215.6 80.8c0 14.9-12.1 26.9-26.9 26.9-14.9 0-26.9-12.1-26.9-26.9s12.1-26.9 26.9-26.9 26.9 12.1 26.9 26.9"
        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "white" }}
      />
    </svg>
  ),
  notion: () => (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#ffffff" />
      <path d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#000000" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  ),
  openai: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor" />
    </svg>
  ),
  googleDrive: () => (
    <svg width="24" height="24" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  ),
  whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
    </svg>
  ),
  googleDocs: () => (
    <svg width="24" height="24" viewBox="0 0 47 65" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z" fill="#4285F4" />
      <path d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z" fill="#F1F1F1" />
    </svg>
  ),
  zapier: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <rect width="16" height="16" x="12" y="16" fill="#fff" transform="rotate(-90 20 24)"></rect><polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16"></polygon><path fill="#4caf50" d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"></path><path fill="#fbc02d" d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"></path><path fill="#1565c0" d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"></path><polygon fill="#e53935" points="13,7 13,17 3,17"></polygon><polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55"></polygon><path fill="#4caf50" d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"></path>
    </svg>
  ),
  slack: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#FFB300" d="M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"></path><path fill="#00BFA5" d="M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"></path><path fill="#00BCD4" d="M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"></path><path fill="#E91E63" d="M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"></path><path fill="#388E3C" d="M33.4 17.3L31.2 10.6 24.6 12.9 26.8 19.6z"></path><path fill="#00897B" d="M17.2 15.5L10.6 17.8 12.8 24.5 19.4 22.2z"></path><path fill="#BF360C" d="M29.2 26.6L31.4 33.3 38 31 35.8 24.3z"></path><path fill="#4E342E" d="M15.1 31.5L17.3 38.2 23.9 35.9 21.7 29.2z"></path>
    </svg>
  ),
  discord: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
    </svg>
  ),
  calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <rect width="22" height="22" x="13" y="13" fill="#fff"></rect><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"></polygon><path fill="#1e88e5" d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"></path><polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38"></polygon><polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34"></polygon><path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"></path><polygon fill="#e53935" points="34,34 34,42 42,34"></polygon><path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"></path><path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"></path>
    </svg>
  ),
};

const AutomationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);

  return (
    <section id="automation" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">AI & Automation</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">Automate the Work That Slows Your Business Down</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            We use tools like <span className="text-primary font-semibold">n8n</span>, <span className="text-primary font-semibold">AI</span>, and your existing apps to automate lead follow-up, booking, reminders, and repetitive internal workflows.
          </p>
          <Link to="/booking">
            <Button size="lg" className="rounded-full px-8 shadow-lg text-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
              AI Automate My Business
            </Button>
          </Link>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            {[
              "Capture leads instantly and route them to the right place",
              "Send automatic follow-up messages so enquiries do not go cold",
              "Reduce manual admin and repetitive busywork",
              "Connect your tools so your team works with fewer bottlenecks",
            ].map((item) => (
              <div key={item} className="glass-card p-5 text-muted-foreground leading-relaxed">{item}</div>
            ))}
          </div>

          <div
            className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden glass-card p-4 sm:p-10 bg-background order-1 lg:order-2"
            ref={containerRef}
          >
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                "opacity-40"
              )}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(151,192,44,0.05)_0%,transparent_70%)] pointer-events-none" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 1 }}>
              <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} curvature={-45} gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div4Ref} curvature={45} gradientStartColor="#97c02c" gradientStopColor="#97c02c" />

              <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse gradientStartColor="#f8fafc" gradientStopColor="#97c02c" />
              <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} curvature={-45} reverse gradientStartColor="#97c02c" gradientStopColor="#97c02c" />
            </motion.div>

            <div className="flex size-full max-w-4xl flex-col items-stretch justify-between gap-10 relative z-10">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                    <Circle ref={div1Ref} className="glow-border-primary/30">
                      <Icons.googleDrive />
                    </Circle>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                    <Circle ref={div8Ref} className="glow-border-primary/30">
                      <Icons.slack />
                    </Circle>
                  </motion.div>
                </div>
                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
                    <Circle ref={div5Ref} className="glow-border-primary/30">
                      <Icons.googleDocs />
                    </Circle>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
                    <Circle ref={div9Ref} className="glow-border-primary/30">
                      <Icons.discord />
                    </Circle>
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>
                    <Circle ref={div2Ref} className="glow-border-primary/30">
                      <Icons.notion />
                    </Circle>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>
                    <Circle ref={div10Ref} className="glow-border-primary/30">
                      <Icons.calendar />
                    </Circle>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0 }}>
                  <Circle ref={div4Ref} className="size-24 border-[#ea4b71] bg-[#ea4b71] shadow-[0_0_40px_rgba(234,75,113,0.4)] border-2 z-20">
                    <div className="flex flex-col items-center gap-1">
                      <Icons.n8n />
                      <span className="text-sm font-bold text-white tracking-tighter"></span>
                    </div>
                  </Circle>
                </motion.div>
                <div className="flex flex-col gap-10">
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                    <Circle ref={div6Ref} className="glow-border-primary/30">
                      <Icons.zapier />
                    </Circle>
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <Circle ref={div3Ref} className="glow-border-primary/30">
                    <Icons.whatsapp />
                  </Circle>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                  <Circle ref={div7Ref} className="glow-border-primary/30">
                    <Icons.openai />
                  </Circle>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
