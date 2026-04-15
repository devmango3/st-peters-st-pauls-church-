"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Plus,
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight, 
  Calendar, 
  Users, 
  Heart,
  Anchor,
  ShieldCheck,
  Info,
  Menu,
  X,
  Star,
  Cross
} from "lucide-react";

import { churchContent } from "../data/content";

// Static imports for better image optimization (blur placeholders, automatic sizing)
import logoImg from "../../public/logo.jpeg";
import altarImg from "../../public/altar-main.jpeg";
import metropolitanImg from "../../public/metropolitan.webp";
import nicholovosImg from "../../public/Grace Zachariah Mar Nicholovos.jpg";
import vicarImg from "../../public/vicar.jpg";
import faithImg from "../../public/faith.webp";
import patronImg from "../../public/st.petrs and paul.jpeg";

/* ─────────────────────────────────────────────
   Decorative SVG Components
───────────────────────────────────────────── */
const CrossIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="currentColor">
    <rect x="17" y="2" width="6" height="36" rx="2"/>
    <rect x="2" y="14" width="36" height="6" rx="2"/>
  </svg>
);

const OrnamentDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="h-px bg-gradient-to-r from-transparent to-gold-primary/60 w-24" />
    <CrossIcon className="w-5 h-5 text-gold-primary/60" />
    <div className="h-px bg-gradient-to-l from-transparent to-gold-primary/60 w-24" />
  </div>
);

const GeometricAccent = () => (
  <svg viewBox="0 0 200 20" className="w-full opacity-20" preserveAspectRatio="none">
    <path d="M0 10 L20 2 L40 10 L60 2 L80 10 L100 2 L120 10 L140 2 L160 10 L180 2 L200 10" 
          stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

const FloralBorder = () => (
  <div className="flex items-center gap-2 justify-center">
    {[...Array(9)].map((_, i) => (
      <div key={i} className={`rounded-full bg-gold-primary/30 ${i === 4 ? "w-3 h-3" : i === 3 || i === 5 ? "w-2 h-2" : "w-1.5 h-1.5"}`} />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   Section Label Component
───────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 px-4 text-center">
    <div className="h-px w-8 md:w-12 bg-gold-primary/50" />
    <span className="text-gold-primary font-bold uppercase tracking-[0.2em] md:tracking-[0.45em] text-[9px] md:text-[11px]">{children}</span>
    <div className="h-px w-8 md:w-12 bg-gold-primary/50" />
  </div>
);

export default function Home() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showFullMetropolitanBio, setShowFullMetropolitanBio] = useState(false);
  const [showFullNicholovosBio, setShowFullNicholovosBio] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blobY1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const blobY2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
  
  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 }
    },
    viewport: { once: true }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-warm-white text-sacral-blue selection:bg-gold-primary/30 overflow-x-hidden">

      {/* Premium Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light z-[100] origin-left shadow-lg"
        style={{ scaleX }}
      />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 w-full z-50 transition-premium ${isScrolled ? "glass-dark border-b border-white/5 shadow-2xl py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-gold-primary/20 shadow-lg transition-premium hover:scale-110">
              <Image 
                src={logoImg} 
                alt="Church Logo" 
                fill 
                priority
                sizes="(max-width: 768px) 40px, 48px"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xs md:text-base tracking-tight leading-none text-white transition-premium">
                {churchContent.churchName.primary}
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gold-primary font-bold hidden md:block">
                {churchContent.churchName.secondary}
              </span>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-10 font-outfit text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            {churchContent.navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">
                {link.label}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-sacral-blue/5 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-8 space-y-6 font-outfit text-xs font-bold uppercase tracking-[0.3em] text-sacral-blue">
                {churchContent.navLinks.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-gold-primary transition-colors py-2 border-b border-sacral-blue/5 last:border-0"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-sacral-blue">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sacral-blue via-[#0d1b2a] to-sacral-blue" />
          {/* Radial light burst */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,165,114,0.18)_0%,transparent_65%)]" />
          {/* Fine grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}} />
          {/* Decorative corner ornaments */}
          <div className="absolute top-20 left-10 text-gold-primary/10">
            <CrossIcon className="w-24 h-24" />
          </div>
          <div className="absolute bottom-20 right-10 text-gold-primary/10 rotate-45">
            <CrossIcon className="w-16 h-16" />
          </div>
          {/* Animated halos */}
          <motion.div 
            style={{ y: blobY1 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            style={{ y: blobY2 }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sacral-blue/40 rounded-full blur-[150px]" 
          />
          {/* Concentric ring decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold-primary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-primary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-primary/8 pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-white/10" />

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-32 md:pt-0 pb-12 md:pb-0"
        >
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-flex items-center justify-center gap-2 md:gap-3 mb-8 px-4 md:px-5 py-2 rounded-full glass-dark border border-white/10 text-gold-light text-[7px] md:text-[10px] uppercase font-bold tracking-[0.1em] md:tracking-[0.3em] max-w-[95vw] md:max-w-none"
            >
              <CrossIcon className="w-2.5 h-2.5 md:w-3 h-3 text-gold-primary flex-shrink-0" />
              <span className="flex-1">{churchContent.hero.label}</span>
              <CrossIcon className="w-2.5 h-2.5 md:w-3 h-3 text-gold-primary flex-shrink-0" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-7xl font-playfair font-bold text-white mb-4 md:mb-6 leading-[1.1]"
            >
              {churchContent.hero.title} <br />
              <span className="text-gold-primary italic">{churchContent.hero.subtitle}</span>
            </motion.h1>

            {/* Animated ornament under headline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8 w-full"
            >
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-gold-primary/70" />
              <CrossIcon className="w-3 h-3 md:w-4 h-4 text-gold-primary/80" />
              <div className="h-px w-12 md:w-20 bg-gold-primary/50" />
              <div className="w-1.5 h-1.5 md:w-2 h-2 rounded-full bg-gold-primary/60" />
              <div className="h-px w-12 md:w-20 bg-gold-primary/50" />
              <CrossIcon className="w-3 h-3 md:w-4 h-4 text-gold-primary/80" />
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-gold-primary/70 lg:hidden" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-sm md:text-lg text-white/90 font-inter mb-6 md:mb-10 max-w-xl leading-relaxed"
            >
              {churchContent.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full lg:w-auto"
            >
              <a href="#worship" className="w-full sm:w-auto bg-gold-primary text-white hover:bg-white hover:text-gold-primary px-8 py-3.5 rounded-full font-bold transition-premium shadow-2xl shadow-gold-primary/30 flex items-center justify-center gap-2 group">
                Plan Your Visit 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#tradition" className="w-full sm:w-auto glass-dark text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold transition-premium border border-white/10">
                Our Tradition
              </a>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-60 h-60 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] group"
            >
              {/* Animated glow behind the image */}
              <div className="absolute inset-0 bg-gold-primary/20 rounded-full blur-[80px] group-hover:bg-gold-primary/30 transition-premium" />
              
              {/* Decorative rotating ring */}
              <div className="absolute -inset-6 border border-gold-primary/20 rounded-full animate-[spin_40s_linear_infinite] opacity-50 pointer-events-none" 
                   style={{ borderStyle: 'dashed' }} />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold-primary/30 shadow-3xl z-10 transition-premium group-hover:scale-105">
                <Image 
                  src={patronImg} 
                  alt="St. Peter and St. Paul" 
                  fill 
                  priority
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              
              {/* Decorative cross ornament */}
              <div className="absolute top-0 right-0 z-20 bg-gold-primary border-4 border-sacral-blue p-3 rounded-full shadow-2xl rotate-12">
                <CrossIcon className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gold-primary/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Our Congregation ── */}
      <section id="about" className="w-full py-32 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-sacral-blue/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20 md:mb-24">
            <SectionLabel>{churchContent.ourCongregation.established}</SectionLabel>
            <h3 className="text-4xl md:text-7xl font-playfair font-bold text-sacral-blue mb-6">{churchContent.ourCongregation.title}</h3>
            <FloralBorder />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="text-deep-slate/80 leading-relaxed font-inter space-y-6">
                {/* Decorative quote block */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-primary/80 via-gold-primary/40 to-transparent rounded-full" />
                  <p className="text-2xl font-playfair italic text-sacral-blue pl-8 py-2">
                    {churchContent.ourCongregation.quote}
                  </p>
                </div>

                {churchContent.ourCongregation.history.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p>
                  The current vicar is <span className="text-sacral-blue font-bold">{churchContent.ourCongregation.vicarLabel}</span>.
                </p>
                
                {/* Mission card */}
                <div className="pt-8 mt-4 rounded-3xl bg-gradient-to-br from-sacral-blue/5 to-gold-primary/5 border border-gold-primary/15 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CrossIcon className="w-5 h-5 text-gold-primary" />
                    <h4 className="text-gold-primary text-xs font-bold uppercase tracking-[0.3em]">Our Mission</h4>
                  </div>
                  <OrnamentDivider />
                  <p className="italic text-lg text-sacral-blue/80 font-playfair leading-relaxed">
                    &quot;{churchContent.ourCongregation.mission}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-3xl group"
            >
              {/* Decorative frame */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-[40px] border-2 border-gold-primary/20 z-20 pointer-events-none" />
              <Image 
                src={altarImg} 
                alt="Holy Altar" 
                fill 
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/80 via-sacral-blue/20 to-transparent" />
              {/* Decorative overlay pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{backgroundImage:"radial-gradient(circle, rgba(197,165,114,0.4) 1px, transparent 1px)", backgroundSize:"30px 30px"}}
              />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold-primary/70" />
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-70">Apostolic Foundation</p>
                </div>
                <h4 className="text-4xl font-playfair font-bold leading-tight">Preserving Ancient Christian Heritage</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Spiritual Leadership ── */}
      <section id="metropolitan" className="w-full py-32 relative overflow-hidden"
        style={{background:"linear-gradient(160deg, #f5f0e8 0%, #fff 40%, #f0f4f8 100%)"}}>
        {/* Watermark cross */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sacral-blue/3 pointer-events-none">
          <CrossIcon className="w-[500px] h-[500px]" />
        </div>
        {/* Top decorative border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <SectionLabel>Our Spiritual Leadership</SectionLabel>
            <h3 className="text-3xl md:text-6xl font-playfair font-bold text-sacral-blue mb-4">Guidance in Faith</h3>
            <FloralBorder />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Supreme Head */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image 
                  src={metropolitanImg} 
                  alt="H.H. Baselios Marthoma Mathews III" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-sacral-blue/20 to-transparent" />
                {/* Gold top accent bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-gold-primary/60" />
                    <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold">{churchContent.leadership[0].role}</p>
                  </div>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">{churchContent.leadership[0].name}</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-sacral-blue/3">
                <div className={`space-y-4 text-deep-slate/70 text-sm leading-relaxed font-inter transition-all duration-700 overflow-hidden ${showFullMetropolitanBio ? "max-h-[1000px]" : "max-h-[120px]"}`}>
                  <p className="font-extrabold text-sacral-blue/90">{churchContent.leadership[0].title}</p>
                </div>
              </div>
            </motion.div>

            {/* Diocese Metropolitan */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden">
                <Image 
                  src={nicholovosImg} 
                  alt="Metropolitan Zachariah Mar Nicholovos" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-sacral-blue/20 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-gold-primary/60" />
                    <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold">{churchContent.leadership[1].role}</p>
                  </div>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">{churchContent.leadership[1].name}</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-sacral-blue/3">
                <div className={`space-y-4 text-deep-slate/70 text-sm leading-relaxed font-inter transition-all duration-700 overflow-hidden ${showFullNicholovosBio ? "max-h-[3000px]" : "max-h-[120px]"}`}>
                  <p className="font-extrabold text-sacral-blue/90">{churchContent.leadership[1].title}</p>
                </div>
              </div>
            </motion.div>

            {/* The Vicar */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-[400px] overflow-hidden bg-sacral-blue/5">
                <Image 
                  src={vicarImg} 
                  alt="Rev. Mekkattil M.C. Kuriakose Ramban" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-transparent to-transparent" />
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-gold-primary/60" />
                    <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold">{churchContent.leadership[2].role}</p>
                  </div>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">{churchContent.leadership[2].name}</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-white to-sacral-blue/3" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
      </section>

      {/* ── Faith Section ── */}
      <section id="faith" className="w-full py-32 bg-white relative overflow-hidden">
        {/* Corner ornaments */}
        <div className="absolute top-16 left-16 text-gold-primary/8">
          <CrossIcon className="w-32 h-32" />
        </div>
        <div className="absolute bottom-16 right-16 text-gold-primary/8 rotate-12">
          <CrossIcon className="w-20 h-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div {...fadeIn} className="lg:sticky lg:top-32 relative h-[400px] lg:h-[850px] rounded-[3rem] overflow-hidden shadow-2xl group">
              {/* Double frame effect */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[3rem] border-2 border-gold-primary/15 z-20 pointer-events-none" />
              <Image 
                src={faithImg} 
                alt="Our Faith" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/70 via-transparent to-transparent" />
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{backgroundImage:"radial-gradient(circle, rgba(197,165,114,0.6) 1px, transparent 1px)", backgroundSize:"24px 24px"}}
              />
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="space-y-4">
                <SectionLabel>{churchContent.faith.subtitle}</SectionLabel>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-sacral-blue leading-tight">
                  Malankara Orthodox <br /><span className="text-gold-primary italic">Syrian Church</span>
                </h3>
                <OrnamentDivider />
              </div>

              <div className="space-y-6 text-deep-slate/70 text-base leading-relaxed font-inter">
                <p className="text-xl font-playfair italic text-sacral-blue font-bold">Faith</p>
                {churchContent.faith.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                
                <div className="pt-12 mt-12 border-t border-sacral-blue/10 space-y-8">
                  <OrnamentDivider />
                  <div className="space-y-4">
                    <h4 className="text-2xl md:text-4xl font-playfair font-bold text-sacral-blue leading-tight mb-2">{churchContent.faith.doctrines.title}</h4>
                  </div>
                  <div className="space-y-6">
                    {churchContent.faith.doctrines.content.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="pt-8">
                    <a 
                      href="https://mosc.in/the_church/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-gold-primary hover:text-sacral-blue font-bold tracking-[0.2em] uppercase text-xs transition-premium group"
                    >
                      Click here for more information
                      <div className="w-8 h-8 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary group-hover:text-white transition-premium">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tradition Section ── */}
      <section id="tradition" className="w-full py-32 bg-sacral-blue text-white overflow-hidden relative">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:"repeating-linear-gradient(45deg, rgba(197,165,114,0.5) 0px, rgba(197,165,114,0.5) 1px, transparent 0, transparent 50%)", backgroundSize:"30px 30px"}}
        />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent" />
        {/* Large decorative cross */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-white/4 pointer-events-none">
          <CrossIcon className="w-80 h-80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeIn}>
              <SectionLabel>Ecclesiastical Oversight</SectionLabel>
              <h3 className="text-3xl md:text-6xl font-playfair font-bold mb-10 leading-tight">
                Our Congregation <br />
                <span className="text-gold-primary italic">St. Peter & St. Paul</span>
              </h3>
              
              {/* Decorative rule */}
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-16 bg-gold-primary/50" />
                <CrossIcon className="w-4 h-4 text-gold-primary/50" />
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-8 text-white/70 text-lg leading-relaxed font-inter">
                <p>
                  {churchContent.tradition.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section id="gallery" className="w-full py-32 px-6 bg-warm-white overflow-hidden relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <SectionLabel>{churchContent.gallery.label}</SectionLabel>
            <h3 className="text-3xl md:text-6xl font-playfair font-bold mb-4">{churchContent.gallery.title}</h3>
            <FloralBorder />
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              "tradition-1",
              "tradition-2",
              2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
            ].slice(0, showAllPhotos ? undefined : 8).map((img) => (
              <motion.div 
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-premium break-inside-avoid group"
              >
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-gold-primary/0 group-hover:border-gold-primary/40 transition-all duration-500 z-10 pointer-events-none" />
                <Image 
                  src={typeof img === "number" ? `/gallery-${img}.jpeg` : `/${img}.jpeg`} 
                  alt={`Church Life ${img}`}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowAllPhotos(!showAllPhotos)}
              className="relative border-2 border-sacral-blue text-sacral-blue hover:bg-sacral-blue hover:text-white px-10 py-4 rounded-full font-bold transition-premium active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10">{showAllPhotos ? "Show Less" : "View All Photos"}</span>
              <div className="absolute inset-0 bg-sacral-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-10">
                {showAllPhotos ? "Show Less" : "View All Photos"}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Worship & Liturgical Life ── */}
      <section id="worship" className="w-full py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
        {/* Subtle diagonal stripe */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{backgroundImage:"repeating-linear-gradient(-45deg, #1a2a40 0px, #1a2a40 1px, transparent 0, transparent 20px)"}}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <SectionLabel>Worship and Liturgical Life</SectionLabel>
            <FloralBorder />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location card */}
            <div className="relative p-12 rounded-[2.5rem] bg-white shadow-2xl shadow-sacral-blue/8 border border-sacral-blue/8 group hover:border-gold-primary/30 transition-premium flex flex-col justify-center overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-bl-[5rem]" />
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
              
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold-primary to-gold-dark flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-premium shadow-lg shadow-gold-primary/30">
                  <MapPin className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gold-dark font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2">Location</h4>
                    <p className="text-2xl md:text-3xl font-playfair font-bold text-sacral-blue leading-tight mb-2 italic">{churchContent.contact.location.churchName}</p>
                  </div>
                  <address className="not-italic text-deep-slate/60 text-base md:text-lg leading-relaxed font-inter">
                    {churchContent.contact.location.addressPrimary}<br />
                    {churchContent.contact.location.addressSecondary}
                  </address>
                  <div className="pt-4">
                    <a 
                      href={churchContent.contact.location.mapsUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-xs md:text-sm font-bold text-gold-primary hover:text-sacral-blue transition-premium uppercase tracking-[0.2em] group/link"
                    >
                      <div className="w-8 h-8 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover/link:bg-gold-primary group-hover/link:text-white transition-premium">
                        <MapPin className="w-4 h-4" />
                      </div>
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="p-10 rounded-[2.5rem] bg-sacral-blue text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5"
                style={{backgroundImage:"radial-gradient(circle, rgba(197,165,114,0.8) 1px, transparent 1px)", backgroundSize:"20px 20px"}}
              />
              <div className="absolute top-0 right-0 p-8 text-gold-primary/15 group-hover:text-gold-primary/30 transition-premium">
                <ShieldCheck className="w-32 h-32 rotate-12" />
              </div>
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent" />

              <h4 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Contact & Leadership</h4>
              <OrnamentDivider />
              
              <div className="space-y-8 relative z-10">
                <div className="group/item">
                  <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-2">The Vicar</p>
                  <h5 className="text-2xl font-playfair font-bold group-hover/item:text-gold-primary transition-colors">{churchContent.contact.vicar.name}</h5>
                  <a href={`tel:${churchContent.contact.vicar.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-outfit text-white/80 hover:text-white transition-colors flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-gold-primary" /> {churchContent.contact.vicar.phone}
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Trustee</p>
                    <p className="text-sm font-bold text-white mb-1">{churchContent.contact.trustee.name}</p>
                    <a href={`tel:${churchContent.contact.trustee.phone.replace(/[^0-9+]/g, '')}`} className="text-xs text-white/70 hover:text-gold-primary transition-colors flex items-center gap-2">
                       {churchContent.contact.trustee.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Secretary</p>
                    <p className="text-sm font-bold text-white mb-1">{churchContent.contact.secretary.name}</p>
                    <a href={`tel:${churchContent.contact.secretary.phone.replace(/[^0-9+]/g, '')}`} className="text-xs text-white/70 hover:text-gold-primary transition-colors flex items-center gap-2">
                       {churchContent.contact.secretary.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-2">Email ID (Interact)</p>
                  <a href={`mailto:${churchContent.contact.email}`} className="text-sm font-bold hover:text-gold-primary transition-colors flex items-center gap-2 break-all">
                    <Mail className="w-4 h-4 text-gold-primary" /> {churchContent.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="w-full bg-sacral-blue text-white pt-32 pb-12 relative overflow-hidden">
        {/* Footer background textures */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:"repeating-linear-gradient(45deg, rgba(197,165,114,0.5) 0px, rgba(197,165,114,0.5) 1px, transparent 0, transparent 40px)"}}
        />
        {/* Large faded cross watermark */}
        <div className="absolute bottom-0 right-0 text-white/3 pointer-events-none">
          <CrossIcon className="w-[400px] h-[400px]" />
        </div>
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-primary/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-10">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-gold-primary/30 shadow-2xl group cursor-pointer ring-2 ring-gold-primary/10 ring-offset-2 ring-offset-sacral-blue">
                  <Image 
                    src={logoImg} 
                    alt="Footer Logo" 
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold text-2xl tracking-tight leading-none uppercase">
                    {churchContent.churchName.primary}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-gold-primary font-bold mt-1">
                    {churchContent.churchName.secondary}
                  </span>
                </div>
              </div>

              {/* Footer ornament */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gold-primary/40" />
                <CrossIcon className="w-4 h-4 text-gold-primary/40" />
                <div className="h-px w-24 bg-white/10" />
              </div>

              <p className="text-white/50 mb-10 text-lg max-w-md font-inter leading-relaxed">
                {churchContent.footer.description}
              </p>
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Quick Links</h5>
              <ul className="space-y-5 text-white/50 text-sm font-bold uppercase tracking-widest">
                {churchContent.navLinks.slice(0, 4).map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="hover:text-gold-primary transition-premium flex items-center gap-2 group">
                      <div className="w-0 group-hover:w-4 h-px bg-gold-primary transition-all duration-300 overflow-hidden" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Worship Location</h5>
              <div className="flex gap-4">
                <MapPin className="text-gold-primary w-5 h-5 flex-shrink-0 mt-1" />
                <address className="text-white/50 text-sm not-italic leading-relaxed font-inter">
                  {churchContent.contact.location.churchName}<br />
                  {churchContent.contact.location.addressPrimary}<br />
                  {churchContent.contact.location.addressSecondary}
                </address>
              </div>
              <a 
                href={churchContent.contact.location.mapsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-gold-primary hover:text-white transition-premium uppercase tracking-[0.2em] group"
              >
                <div className="w-6 h-6 rounded-full border border-gold-primary/30 flex items-center justify-center group-hover:bg-gold-primary transition-premium">
                  <MapPin className="w-3 h-3" />
                </div>
                Get Directions
              </a>
              <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                Contact our Trustee or Secretary for monthly Holy Qurbana schedules.
              </p>
            </div>
          </div>

          {/* Footer bottom ornament */}
          <div className="pt-12 border-t border-white/8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-20 bg-gold-primary/30" />
              <CrossIcon className="w-5 h-5 text-gold-primary/40" />
              <div className="h-px w-20 bg-gold-primary/30" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
