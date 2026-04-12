"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cross, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight, 
  Calendar, 
  Users, 
  Heart 
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const serviceTimes = [
    { day: "Sunday", time: "07:30 AM - 08:30 AM", event: "Morning Prayer" },
    { day: "Sunday", time: "08:30 AM - 10:30 AM", event: "Holy Qurbana" },
    { day: "Wednesday", time: "06:30 PM", event: "Evening Prayer" },
    { day: "Friday", time: "09:30 AM", event: "Fasting Prayer" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <Cross className="text-white w-6 h-6" />
            </div>
            <span className="font-playfair font-bold text-lg hidden md:block">
              ST. PETERS & ST. PAUL&apos;S
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-inter text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-gold transition-colors">About Us</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#clergy" className="hover:text-gold transition-colors">Clergy</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <button className="bg-gold hover:bg-gold/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-church.png"
          alt="Majestic Church"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
          >
            A Sanctuary of <span className="text-gold italic">Faith</span> & Tradition
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-white/80 font-inter mb-10 max-w-2xl mx-auto"
          >
            Welcome to St. Peters and St. Paul’s Orthodox Syrian Church. 
            Experience the divine beauty of the 2000-year-old tradition.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button className="bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold/90 transition-all flex items-center shadow-lg shadow-gold/20">
              Plan Your Visit <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Watch Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="services" className="w-full py-24 bg-warm-white dark:bg-sacral-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6">Weekly Service Schedule</h2>
              <p className="text-deep-slate/70 dark:text-white/60 mb-10 leading-relaxed">
                Join us for our regular services and experience the serenity of Orthodox worship. 
                Our doors are open to everyone seeking spiritual growth and community.
              </p>
              <div className="space-y-4">
                {serviceTimes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-white dark:bg-white/5 shadow-md rounded-2xl border border-gold/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{item.event}</p>
                        <p className="text-sm text-deep-slate/60 dark:text-white/40">{item.day}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/hero-church.png" 
                alt="Interior" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-gold font-bold uppercase tracking-widest text-sm mb-2">Since 1924</p>
                <h3 className="text-3xl font-playfair font-bold">A Legacy of Holiness</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-16">Faith, Community & Service</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-warm-white dark:bg-white/5 border border-gold/5 shadow-xl">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Vibrant Community</h4>
              <p className="text-sm text-deep-slate/60 dark:text-white/50 leading-relaxed">
                A diverse family of believers dedicated to supporting one another in faith and life.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-warm-white dark:bg-white/5 border border-gold/5 shadow-xl">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 mx-auto">
                <Calendar className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Apostolic Tradition</h4>
              <p className="text-sm text-deep-slate/60 dark:text-white/50 leading-relaxed">
                Preserving the timeless rituals and teachings passed down through generations.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-warm-white dark:bg-white/5 border border-gold/5 shadow-xl">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 mb-6 mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Compassionate Outreach</h4>
              <p className="text-sm text-deep-slate/60 dark:text-white/50 leading-relaxed">
                Serving the marginalized and needy through various charitable initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full bg-sacral-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Cross className="text-white w-6 h-6" />
              </div>
              <span className="font-playfair font-bold text-2xl">
                ST. PETERS & ST. PAUL&apos;S
              </span>
            </div>
            <p className="text-white/60 mb-8 max-w-sm">
              An Orthodox Syrian Church dedicated to the glory of God and the salvation of souls.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all cursor-pointer">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-8">Quick Links</h5>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">History</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Our Priest</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sunday School</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Youth Wing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-8">Location</h5>
            <p className="text-white/60 text-sm leading-relaxed">
              123 Faith Avenue,<br />
              Hebron Heights,<br />
              Holy City, 456789
            </p>
            <button className="mt-6 text-gold font-bold flex items-center hover:underline">
              Get Directions <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 St. Peters and St. Paul&apos;s Orthodox Syrian Church. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
