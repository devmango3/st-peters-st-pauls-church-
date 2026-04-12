"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  Info
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-warm-white text-sacral-blue selection:bg-gold-primary/30">
      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-sacral-blue/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gold-primary rounded-full flex items-center justify-center shadow-lg shadow-gold-primary/20 transition-premium hover:scale-110">
              <Plus className="text-white w-6 h-6 rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-sm md:text-base tracking-tight leading-none">
                ST. PETER & ST. PAUL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold">
                Orthodox Syrian Church, Victoria
              </span>
            </div>
          </div>
          <div className="hidden lg:flex space-x-10 font-outfit text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Our Faith</a>
            <a href="#governance" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Governance</a>
            <a href="#worship" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Worship</a>
            <a href="#contact" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Connect</a>
          </div>
          <button className="bg-sacral-blue text-white hover:bg-gold-primary px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-premium shadow-xl shadow-sacral-blue/10">
            Join Us
          </button>
        </div>
      </nav>

      {/* Hero Section: Majestic Entrance */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/church-hero.png"
          alt="Orthodox Church Interior"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sacral-blue/60 via-sacral-blue/40 to-warm-white" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass-dark border border-white/10 text-gold-light text-[10px] uppercase font-bold tracking-[0.3em]"
          >
            A Congregation of the Malankara Orthodox Syrian Church
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 leading-[1.1]"
          >
            Faith Rooted in <br />
            <span className="text-gold-primary italic">Apostolic Tradition</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-white/90 font-inter mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to the St. Peter and St. Paul Orthodox Syrian Church in Victoria, BC. 
            A growing community seeking Christ in the beauty of holiness.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#worship" className="w-full sm:w-auto bg-gold-primary text-white hover:bg-white hover:text-gold-primary px-10 py-4 rounded-full font-bold transition-premium shadow-2xl shadow-gold-primary/30 flex items-center justify-center gap-2">
              Plan Your Visit <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#about" className="w-full sm:w-auto glass-dark text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-premium">
              Our Vision
            </a>
          </motion.div>
        </div>
        
        {/* Floating Stat/Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-12 hidden xl:flex items-center gap-6 glass-dark p-6 rounded-2xl border border-white/10"
        >
          <div className="w-12 h-12 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Ecclesiastical Oversight</p>
            <p className="text-sm text-white font-playfair">Canadian Diocese</p>
          </div>
        </motion.div>
      </section>

      {/* Welcome & Community Section */}
      <section id="about" className="w-full py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeIn}>
              <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-xs mb-6">Welcome Message</h2>
              <h3 className="text-4xl md:text-6xl font-playfair font-bold mb-8 leading-tight">
                A Growing Faith Community in Victoria
              </h3>
              <p className="text-deep-slate/80 text-xl leading-relaxed mb-10 font-inter italic">
                &quot;We serve Orthodox Christians and all who seek Christ in the Greater Victoria area, under the Canadian Diocese of the Malankara Orthodox Syrian Church.&quot;
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Anchor />, title: "Rooted in Tradition", desc: "Preserving the timeless liturgical beauty of the Malankara Church." },
                  { icon: <Users />, title: "Open Community", desc: "Welcoming all seekers to experience the Orthodox faith." },
                ].map((item, id) => (
                  <div key={id} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-xl shadow-sacral-blue/5 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-white transition-premium">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-deep-slate/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative h-[600px] rounded-[40px] overflow-hidden shadow-3xl alternate-shadow"
            >
              <Image 
                src="/church-hero.png" 
                alt="Worship" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[40px]" />
            </motion.div>
          </div>

          {/* Membership & Demographics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeIn} className="glass p-10 rounded-[2.5rem] border border-sacral-blue/5">
              <h4 className="text-3xl font-playfair font-bold text-gold-primary mb-4">10</h4>
              <p className="font-bold text-sacral-blue uppercase tracking-widest text-xs mb-4">Parish Families</p>
              <p className="text-deep-slate/60 text-sm leading-relaxed">
                Our congregation currently consists of ten dedicated families, including eight resident families and members who have joined us as emigrants.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass p-10 rounded-[2.5rem] border border-sacral-blue/5">
              <div className="w-12 h-12 bg-gold-primary/10 rounded-xl flex items-center justify-center text-gold-primary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Student Life</h4>
              <p className="text-deep-slate/60 text-sm leading-relaxed">
                A significant portion of our congregation members are vibrant students pursuing their studies in local colleges across the Greater Victoria area.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="glass p-10 rounded-[2.5rem] border border-sacral-blue/5">
              <div className="w-12 h-12 bg-sacral-blue/5 rounded-xl flex items-center justify-center text-sacral-blue mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Diverse Unity</h4>
              <p className="text-deep-slate/60 text-sm leading-relaxed">
                From long-term residents to new emigrants and collegiate youth, we are united in our shared faith and heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hierarchy & Governance Section */}
      <section id="governance" className="w-full py-32 bg-sacral-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.div {...fadeIn}>
              <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-xs mb-4">Foundation & Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold">Ecclesiastical Oversight</h3>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -12 }} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 transition-premium hover:bg-white/10">
              <p className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-6">Head Office</p>
              <h4 className="text-2xl font-playfair font-bold mb-4">Catholicate Palace</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Devalokam, Kottayam,<br />
                Kerala, India
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -12 }} className="p-10 rounded-[2rem] bg-gold-primary text-sacral-blue transition-premium shadow-2xl shadow-gold-primary/20">
              <p className="text-sacral-blue/60 text-xs font-bold uppercase tracking-widest mb-6">Head of the Church</p>
              <h4 className="text-2xl font-playfair font-bold mb-4 leading-tight">H.H. Baselios Marthoma Mathews III</h4>
              <p className="text-sacral-blue/80 text-sm font-bold">
                Catholicos of the East & <br />
                Malankara Metropolitan
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -12 }} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 transition-premium hover:bg-white/10">
              <p className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-6">Diocese</p>
              <h4 className="text-2xl font-playfair font-bold mb-4">Canada Diocese</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Functioning under the spiritual guidance of the Canada Diocese of the Malankara Orthodox Syrian Church.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worship & Liturgical Life */}
      <section id="worship" className="w-full py-32 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 text-center">Liturgical Life</h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-8">Worship & Sacrament</h3>
            <p className="text-center max-w-3xl mx-auto text-deep-slate/70 text-lg leading-relaxed font-inter">
              Since its inception, our congregation has maintained one Holy Qurbana (Holy Communion) per month without interruption, continuing a legacy of faithful service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-sacral-blue/5 border border-sacral-blue/5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-sacral-blue flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Service Times</h4>
                    <p className="text-deep-slate/60 text-sm leading-relaxed mb-4">
                      Monthly Holy Qurbana — Date and time are announced regularly to our members.
                    </p>
                    <div className="flex items-center gap-2 text-gold-dark font-bold text-xs uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
                      Next Service: TBA
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-sacral-blue/5 border border-sacral-blue/5">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-primary flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Current Location</h4>
                    <p className="text-deep-slate/60 text-sm leading-relaxed mb-4">
                      While we do not have a dedicated building in Victoria, we currently worship in the auditorium of:
                    </p>
                    <p className="font-bold text-sacral-blue">Ukrainian St. Nicholas Catholic Church</p>
                    <p className="text-sm text-deep-slate/60">Surrey, BC</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[2.5rem] bg-sacral-blue text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-gold-primary/20 group-hover:text-gold-primary/40 transition-premium">
                <ShieldCheck className="w-32 h-32 rotate-12" />
              </div>
              <h4 className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-6">The Vicar</h4>
              <h5 className="text-3xl font-playfair font-bold mb-6">MC Kuriakose Rambachan</h5>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Rambachan travels from the St. George Malankara Orthodox Church to offer Holy Qurbana here, requiring cross-strait travel by ferry to serve our congregation.
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/10">
                <Plus className="text-gold-primary w-5 h-5" />
                <span className="text-sm font-bold tracking-widest uppercase">Dedicated Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="w-full bg-sacral-blue text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center shadow-lg shadow-gold-primary/20">
                  <Plus className="text-white w-7 h-7 rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold text-2xl tracking-tight leading-none uppercase">
                    ST. PETER & ST. PAUL
                  </span>
                  <span className="text-xs uppercase tracking-widest text-gold-primary font-bold mt-1">
                    Orthodox Syrian Church, Victoria
                  </span>
                </div>
              </div>
              <p className="text-white/50 mb-10 text-lg max-w-md font-inter leading-relaxed">
                Providing a sanctuary for spiritual growth, fellowship, and traditional Orthodox worship in British Columbia.
              </p>
              <div className="flex space-x-5">
                {[Phone, Mail, MapPin].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-primary hover:border-gold-primary transition-premium cursor-pointer group">
                    <Icon className="w-5 h-5 text-white/40 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Quick Links</h5>
              <ul className="space-y-5 text-white/50 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-gold-primary transition-premium">Home</a></li>
                <li><a href="#about" className="hover:text-gold-primary transition-premium">Our Faith</a></li>
                <li><a href="#governance" className="hover:text-gold-primary transition-premium">Leadership</a></li>
                <li><a href="#worship" className="hover:text-gold-primary transition-premium">Worship</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Worship Location</h5>
              <div className="flex gap-4">
                <MapPin className="text-gold-primary w-5 h-5 flex-shrink-0" />
                <address className="text-white/50 text-sm not-italic leading-relaxed font-inter">
                  Ukrainian St. Nicholas Catholic Church (Auditorium)<br />
                  Surrey, BC, Canada
                </address>
              </div>
              <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                Contact us for monthly Holy Qurbana schedules and visitor information.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            <p>© 2026 St. Peter & St. Paul Orthodox Syrian Church. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-premium">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-premium">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
