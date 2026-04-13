"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  X
} from "lucide-react";

// Static imports for better image optimization (blur placeholders, automatic sizing)
import logoImg from "../../public/logo.jpeg";
import altarImg from "../../public/altar-main.jpeg";
import metropolitanImg from "../../public/metropolitan.webp";
import nicholovosImg from "../../public/Grace Zachariah Mar Nicholovos.jpg";
import vicarImg from "../../public/vicar.jpeg";
import faithImg from "../../public/faith.webp";

export default function Home() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showFullMetropolitanBio, setShowFullMetropolitanBio] = useState(false);
  const [showFullNicholovosBio, setShowFullNicholovosBio] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar theme
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
                ST. PETER & ST. PAUL
              </span>
              <span className="text-[10px] md:text-[10px] uppercase tracking-widest text-gold-primary font-bold">
                Orthodox Syrian Church, Victoria
              </span>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-10 font-outfit text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <a href="#faith" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Our Faith</a>
            <a href="#metropolitan" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Supreme Head</a>
            <a href="#tradition" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Tradition</a>
            <a href="#gallery" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Gallery</a>
            <a href="#worship" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Worship</a>
            <a href="#contact" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Connect</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-sacral-blue/5 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-8 space-y-6 font-outfit text-xs font-bold uppercase tracking-[0.3em] text-sacral-blue">
                {[
                  { id: "faith", label: "Our Faith" },
                  { id: "metropolitan", label: "Supreme Head" },
                  { id: "tradition", label: "Tradition" },
                  { id: "gallery", label: "Gallery" },
                  { id: "worship", label: "Worship" },
                  { id: "contact", label: "Connect" },
                ].map((item) => (
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

      {/* Hero Section: Majestic Entrance */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-sacral-blue">
        {/* Atmospheric Background Style */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sacral-blue via-[#0d1b2a] to-sacral-blue" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,165,114,0.1),transparent_70%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sacral-blue/40 rounded-full blur-[150px]" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-white/10" />
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
            A community preserving the timeless faith established by St. Thomas.
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
            <a href="#tradition" className="w-full sm:w-auto glass-dark text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold transition-premium">
              Our Tradition
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Faith Section */}
      <section id="about" className="w-full py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 md:mb-24">
            <h3 className="text-4xl md:text-7xl font-playfair font-bold text-sacral-blue mb-8">Our Church</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="text-deep-slate/80 leading-relaxed font-inter space-y-6">
                <p className="text-2xl font-playfair italic text-sacral-blue border-l-4 border-gold-primary pl-8 py-2">
                  St. Peter and St. Paul&apos;s Syrian Orthodox Congregation, Victoria, British Columbia
                </p>
                <p>
                  St. Peter and St. Paul&apos;s Syrian Orthodox Congregation in Victoria, British Columbia is a parish of the Malankara Orthodox Syrian Church under the Diocese of Canada.
                </p>
                <p>
                  The congregation was founded on February 4, 2023. At that time, it fell under the Southwest American Diocese, and permission to establish the congregation was granted by His Grace Thomas Mar Ivanios, the then Bishop of the Diocese of Southwest America. The venerable Fr. Zera Paul served as the first vicar.
                </p>
                <p>
                  With the formation of the Diocese of Canada, the congregation came under the pastoral care of His Eminence Zacharias Mar Nicholovos, Metropolitan of the Northeast American Diocese, who oversees the Canadian Diocese.
                </p>
                <p>
                  The current vicar is <span className="text-sacral-blue font-bold">M.C. Kuriakose Ramban, Mekkattil</span>.
                </p>
                
                <div className="pt-8 border-t border-sacral-blue/10">
                  <h4 className="text-gold-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Mission</h4>
                  <p className="italic text-lg">
                    &quot;The congregation was established to provide spiritual services to students arriving to study on Vancouver Island, and to serve the Orthodox faithful living in Victoria.&quot;
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative h-[500px] lg:h-[700px] rounded-[40px] overflow-hidden shadow-3xl"
            >
              <Image 
                src={altarImg} 
                alt="Holy Altar" 
                fill 
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-xs uppercase tracking-[0.4em] font-bold mb-4 opacity-70">Apostolic Foundation</p>
                <h4 className="text-4xl font-playfair font-bold leading-tight">Preserving Ancient Christian Heritage</h4>
              </div>
            </motion.div>
          </div>


        </div>
      </section>

      {/* Spiritual Leadership Section */}
      <section id="metropolitan" className="w-full py-32 bg-sacral-blue/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Our Spiritual Leadership</h2>
            <h3 className="text-3xl md:text-6xl font-playfair font-bold text-sacral-blue">Guidance in Faith</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Supreme Head */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl transition-premium">
              <div className="relative h-[400px] overflow-hidden">
                <Image 
                  src={metropolitanImg} 
                  alt="H.H. Baselios Marthoma Mathews III" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-2">The Supreme Head</p>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">H.H. Baselios Marthoma Mathews III</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className={`space-y-4 text-deep-slate/70 text-sm leading-relaxed font-inter transition-all duration-700 overflow-hidden ${showFullMetropolitanBio ? "max-h-[1000px]" : "max-h-[120px]"}`}>
                  <p className="font-bold text-sacral-blue/90">Present Catholicos of the East and Malankara Metropolitan.</p>
                  <p>Enthroned in Oct 2021 at Parumala Church, succeeding Baselios Marthoma Paulose II.</p>
                  {showFullMetropolitanBio && (
                    <div className="space-y-4 pt-2">
                       <p>A distinguished theologian with a Doctorate from Rome, His Holiness has established numerous charitable initiatives and continues to lead the global Orthodox community with wisdom and compassion.</p>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setShowFullMetropolitanBio(!showFullMetropolitanBio)}
                  className="mt-6 flex items-center gap-2 text-gold-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:text-sacral-blue transition-premium"
                >
                  {showFullMetropolitanBio ? "Show Less" : "Read Bio"}
                  <ChevronRight className={`w-3 h-3 ${showFullMetropolitanBio ? "rotate-90" : ""}`} />
                </button>
              </div>
            </motion.div>

            {/* Diocese Metropolitan */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl transition-premium">
              <div className="relative h-[400px] overflow-hidden">
                <Image 
                  src={nicholovosImg} 
                  alt="Metropolitan Zachariah Mar Nicholovos" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-2">Diocese Assistant Metropolitan</p>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">Metropolitan Zachariah Mar Nicholovos</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className={`space-y-4 text-deep-slate/70 text-sm leading-relaxed font-inter transition-all duration-700 overflow-hidden ${showFullNicholovosBio ? "max-h-[3000px]" : "max-h-[120px]"}`}>
                  <p className="font-bold text-sacral-blue/90">Ruling Metropolitan of the Northeast American Diocese.</p>
                  <p>Born into the Poothicote family in Mepral on August 13, 1959. Much of his spiritual upbringing centered around Saint John&apos;s Orthodox Church, Mepral.</p>
                  
                  {showFullNicholovosBio && (
                    <div className="space-y-4 pt-2">
                       <p>At the age of 9, he was called to the service of the Holy Altar. He was blessed to spend time with spiritual giants like Metropolitan Thoma Mar Dionysius, Metropolitan Thomas Mar Thimithios (later H.H. Catholicos Didymus I), and Rev. Fr. M. V. George (later Metropolitan Dr. Geevarghese Mar Osthathios).</p>
                       <p>He completed his Bachelor of Divinity and Master of Theology from United Theological College, Bangalore. He was ordained to the Holy Diaconate on Jan 4, 1986, and to the Priesthood on May 16, 1990.</p>
                       <p>Consecrated as Metropolitan on August 15, 1993, he has served as Assistant Metropolitan and now Ruling Metropolitan of the Northeast American Diocese since 2011.</p>
                       <div className="pt-6 border-t border-sacral-blue/10">
                        <h5 className="text-sacral-blue font-bold uppercase tracking-widest text-[10px] mb-4">Ecumenical Roles</h5>
                        <ul className="space-y-2 text-xs">
                          {[
                            "President of the Dept of Ecumenical Relations (MOSC)",
                            "Executive Committee Member - WCC",
                            "Governing Board Member - NCCUSA",
                            "Board of Trustees - St. Vladimir's Seminary",
                            "Board of Directors - Church World Services"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-gold-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                       </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setShowFullNicholovosBio(!showFullNicholovosBio)}
                  className="mt-6 flex items-center gap-2 text-gold-primary font-bold uppercase tracking-[0.2em] text-[10px] hover:text-sacral-blue transition-premium"
                >
                  {showFullNicholovosBio ? "Show Less" : "Read Bio"}
                  <ChevronRight className={`w-3 h-3 ${showFullNicholovosBio ? "rotate-90" : ""}`} />
                </button>
              </div>
            </motion.div>

            {/* The Vicar */}
            <motion.div {...fadeIn} className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sacral-blue/5 group hover:shadow-2xl transition-premium">
              <div className="relative h-[400px] overflow-hidden bg-sacral-blue/5">
                <Image 
                  src={vicarImg} 
                  alt="Mekkattil M.C Kuriakose Rambachen" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-2">The Vicar</p>
                  <h4 className="text-xl font-playfair font-bold text-white leading-tight">Mekkattil M.C Kuriakose Rambachen</h4>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faith Section */}
      <section id="faith" className="w-full py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn} className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={faithImg} 
                alt="Our Faith" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-gold-primary text-[10px] uppercase font-bold tracking-[0.4em]">Our Core Values</h4>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-sacral-blue leading-tight mb-8">Our <span className="text-gold-primary italic">Faith</span></h3>
              </div>

              <div className="space-y-6 text-deep-slate/70 text-base leading-relaxed font-inter">
                <p className="text-lg font-bold text-sacral-blue/90">
                  Remain as a benevolent community of St. Thomas, one of the twelve apostles of Jesus Christ who came to India in AD 52.
                </p>
                <p>
                  This is a community of Malankara Orthodox Christians. The Malankara Orthodox Church traces its roots to the arrival of St. Thomas in India and his evangelical mission.
                </p>
                
                <div className="space-y-6">
                  <div className="p-8 rounded-[2rem] bg-sacral-blue/5 border-l-4 border-gold-primary">
                    <p className="text-sacral-blue font-bold mb-2">St. George Malankara Orthodox Church</p>
                    <p className="text-sm">Location: 15151 72 Ave Surrey, BC V3S 2G3</p>
                    <p className="text-sm mt-2">
                      With a revolving strength of 35 or more families and the Intercession of our patron saint St. George, we continue to grow in faith.
                    </p>
                  </div>
                  <p>
                    Our church is a member parish of the South-West American Diocese. The Supreme Head is the Catholicos of the East and Malankara Metropolitan with headquarters at Devalokam, Kerala. Our Diocese Metropolitan is H.G. Thomas Mar Ivanios.
                  </p>
                  
                  <div className="pt-8 space-y-4">
                    <h5 className="text-sacral-blue font-bold uppercase tracking-widest text-xs">An Invitation to You</h5>
                    <p>
                      We invite everyone to come and worship with us, be part of God&apos;s will and become the purpose of life. We gathered together to worship God in the ways he has revealed in the Bible.
                    </p>
                    <p>
                      We care, share and work towards mutual support and supporting the community at large. Welcome and be part of us.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tradition Section - Parish History & Oversight */}
      <section id="tradition" className="w-full py-32 bg-sacral-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div {...fadeIn}>
              <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">Ecclesiastical Oversight</h2>
              <h3 className="text-3xl md:text-6xl font-playfair font-bold mb-10 leading-tight">
                Our Parish <br />
                <span className="text-gold-primary italic">St. Peter & St. Paul</span>
              </h3>
              
              <div className="space-y-8 text-white/70 text-lg leading-relaxed font-inter">
                <p>
                  St. Peter and St. Paul Orthodox Syrian Church, Victoria is a growing faith community under the Canadian Diocese of the Malankara Orthodox Syrian Church.
                </p>
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 space-y-6">
                  <div>
                    <p className="text-gold-primary text-[10px] uppercase font-bold tracking-widest mb-1">Head Office</p>
                    <p className="text-sm">Catholicate Palace, Devalokam, Kottayam, Kerala, India</p>
                  </div>
                  <div>
                    <p className="text-gold-primary text-[10px] uppercase font-bold tracking-widest mb-1">Head of the Church</p>
                    <p className="text-sm">H.H. Baselios Marthoma Mathews III, Catholicos of the East & Malankara Metropolitan</p>
                  </div>
                </div>
                <p className="text-base text-white/50 italic">
                  Serving Orthodox Christians and all who seek Christ in the Greater Victoria area.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-10">
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10">
                <h4 className="text-gold-primary text-[10px] uppercase font-bold tracking-[0.4em] mb-6">Community & Membership</h4>
                <p className="text-white/70 text-base leading-relaxed font-inter mb-4">
                  Our congregation currently consists of 10 families, including eight resident families and additional members who have come as emigrants.
                </p>
                <p className="text-white/70 text-base leading-relaxed font-inter">
                  A significant portion of our congregation members are students studying in local colleges, contributing to the vibrant growth of our parish.
                </p>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-gold-primary text-sacral-blue shadow-2xl shadow-gold-primary/20">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-6 font-bold">Worship & Liturgical Life</h4>
                <div className="space-y-4">
                  <p className="font-bold leading-relaxed">
                    Since its inception, the congregation has maintained one Holy Qurbana (Holy Communion) per month without interruption.
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">
                    Currently, worship is offered in the auditorium of the Ukrainian St. Nicholas Catholic Church in Victoria, BC.
                  </p>
                  <p className="text-sm font-bold pt-2">
                    Note: Our Vicar, MC Kuriakose Rambachen, travels from the St. George Malankara Orthodox Church in Surrey to offer Holy Qurbana here, requiring travel by ferry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Our Parish Life</h2>
            <h3 className="text-3xl md:text-6xl font-playfair font-bold">Community in Action</h3>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              "tradition-1",
              "tradition-2",
              2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23
            ].slice(0, showAllPhotos ? undefined : 8).map((img) => (
              <motion.div 
                key={img}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-premium break-inside-avoid"
              >
                <Image 
                  src={typeof img === "number" ? `/gallery-${img}.jpeg` : `/${img}.jpeg`} 
                  alt={`Church Life ${img}`}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowAllPhotos(!showAllPhotos)}
              className="border-2 border-sacral-blue text-sacral-blue hover:bg-sacral-blue hover:text-white px-10 py-4 rounded-full font-bold transition-premium active:scale-95"
            >
              {showAllPhotos ? "Show Less" : "View All Photos"}
            </button>
          </div>
        </div>
      </section>

      {/* Worship & Liturgical Life */}
      <section id="worship" className="w-full py-32 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 text-center">Worship and Liturgical Life</h2>
            <h3 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-8">Sacramental Journey</h3>
            <div className="max-w-3xl mx-auto text-deep-slate/70 text-lg leading-relaxed font-inter space-y-6">
              <p>
                Since its inception, the congregation has maintained one Holy Qurbana (Holy Communion) per month without interruption. In the beginning, a respectable service was established and has continued faithfully.
              </p>
              <p>
                Due to not having a dedicated church building, Holy Communion has been conducted in various rented locations. Currently, worship is being offered in the Ukrainian St. Nicholas Catholic Church.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-sacral-blue/5 border border-sacral-blue/5 group hover:border-gold-primary/20 transition-premium">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-sacral-blue flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-premium">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-xs text-gold-dark">Time</h4>
                    <p className="text-2xl font-playfair font-bold text-sacral-blue mb-1">
                      Saturday, April 11
                    </p>
                    <p className="text-lg text-deep-slate/60 font-medium">09:30 AM</p>
                    <div className="mt-4 flex items-center gap-2 text-sacral-blue font-bold text-[10px] uppercase tracking-[0.2em]">
                      <Info className="w-3 h-3 text-gold-primary" />
                      Easter Special Refreshments After Qurbana
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-sacral-blue/5 border border-sacral-blue/5 group hover:border-gold-primary/20 transition-premium">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-primary flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-premium">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase tracking-widest text-xs text-gold-dark">Location</h4>
                    <p className="font-bold text-sacral-blue text-lg mb-1">Ukrainian St. Nicholas Catholic Church</p>
                    <address className="not-italic text-deep-slate/60 text-sm leading-relaxed mb-4">
                      1110 Caledonia Ave,<br />
                      Victoria, BC V8T 1G1
                    </address>
                    <a 
                      href="https://www.google.com/maps?q=Ukrainian+Catholic+Church+of+St+Nicholas,+1110+Caledonia+Ave,+Victoria,+BC+V8T+1G1&ftid=0x548f747d62c47fbd:0xd7784bcf1010ca58&entry=gps&shh=CAE&lucs=,94297699,94284493,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjE0LjAuODkxOTAzMTgwMBgAIIgnKkgsOTQyOTc2OTksOTQyODQ0OTMsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNB&skid=af8d7abe-cf7e-4c7d-8867-2952cb1b858a&g_st=iw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-gold-primary hover:text-sacral-blue transition-premium uppercase tracking-widest"
                    >
                      <MapPin className="w-4 h-4" /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-sacral-blue text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-gold-primary/20 group-hover:text-gold-primary/40 transition-premium">
                <ShieldCheck className="w-32 h-32 rotate-12" />
              </div>
              <h4 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contact & Leadership</h4>
              
              <div className="space-y-8 relative z-10">
                <div className="group/item">
                  <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-2">The Vicar</p>
                  <h5 className="text-2xl font-playfair font-bold group-hover/item:text-gold-primary transition-colors">Mekkattil M.C Kuriakose Rambachen</h5>
                  <a href="tel:7782370597" className="text-lg font-outfit text-white/80 hover:text-white transition-colors flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-gold-primary" /> 778-237-0597
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Trustee</p>
                    <p className="text-sm font-bold text-white mb-1">Varughese Koshy</p>
                    <a href="tel:+12507101874" className="text-xs text-white/70 hover:text-gold-primary transition-colors flex items-center gap-2">
                       +1 (250) 710-1874
                    </a>
                  </div>
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Secretary</p>
                    <p className="text-sm font-bold text-white mb-1">Ashish Philip Cheriyan</p>
                    <a href="tel:+17785353885" className="text-xs text-white/70 hover:text-gold-primary transition-colors flex items-center gap-2">
                       +1 (778) 535-3885
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-2">Email ID</p>
                  <a href="mailto:stpetersandstpaulsmosc@gmail.com" className="text-sm font-bold hover:text-gold-primary transition-colors flex items-center gap-2 break-all">
                    <Mail className="w-4 h-4 text-gold-primary" /> stpetersandstpaulsmosc@gmail.com
                  </a>
                </div>
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
              <div className="flex items-center space-x-4 mb-10">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-gold-primary/30 shadow-2xl">
                  <Image 
                    src={logoImg} 
                    alt="Footer Logo" 
                    fill
                    sizes="64px"
                    className="object-cover"
                    placeholder="blur"
                  />
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
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Quick Links</h5>
              <ul className="space-y-5 text-white/50 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-gold-primary transition-premium">Home</a></li>
                <li><a href="#about" className="hover:text-gold-primary transition-premium">Our Faith</a></li>
                <li><a href="#tradition" className="hover:text-gold-primary transition-premium">Tradition</a></li>
                <li><a href="#worship" className="hover:text-gold-primary transition-premium">Worship</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-gold-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Worship Location</h5>
              <div className="flex gap-4">
                <MapPin className="text-gold-primary w-5 h-5 flex-shrink-0" />
                <address className="text-white/50 text-sm not-italic leading-relaxed font-inter">
                  Ukrainian St. Nicholas Catholic Church<br />
                  1110 Caledonia Ave,<br />
                  Victoria, BC V8T 1G1
                </address>
              </div>
              <a 
                href="https://www.google.com/maps?q=Ukrainian+Catholic+Church+of+St+Nicholas,+1110+Caledonia+Ave,+Victoria,+BC+V8T+1G1&ftid=0x548f747d62c47fbd:0xd7784bcf1010ca58&entry=gps&shh=CAE&lucs=,94297699,94284493,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI2LjE0LjAuODkxOTAzMTgwMBgAIIgnKkgsOTQyOTc2OTksOTQyODQ0OTMsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkNB&skid=af8d7abe-cf7e-4c7d-8867-2952cb1b858a&g_st=iw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-gold-primary hover:text-white transition-premium uppercase tracking-[0.2em]"
              >
                <MapPin className="w-3 h-3" /> Get Directions
              </a>
              <p className="mt-8 text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
                Contact our Trustee or Secretary for monthly Holy Qurbana schedules.
              </p>
            </div>
          </div>

          {/* <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            <p>© 2026 St. Peter & St. Paul Orthodox Syrian Church. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-premium">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-premium">Terms of Service</a>
            </div>
          </div> */}
        </div>
      </footer>
    </main>
  );
}
