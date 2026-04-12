"use client";

import { useState } from "react";
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
import tradition1Img from "../../public/tradition-1.jpeg";
import tradition2Img from "../../public/tradition-2.jpeg";

export default function Home() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showFullMetropolitanBio, setShowFullMetropolitanBio] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
              <span className="font-playfair font-bold text-xs md:text-base tracking-tight leading-none">
                ST. PETER & ST. PAUL
              </span>
              <span className="text-[10px] md:text-[10px] uppercase tracking-widest text-gold-primary font-bold">
                Orthodox Syrian Church, Victoria
              </span>
            </div>
          </div>
          
          <div className="hidden lg:flex space-x-10 font-outfit text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Our Faith</a>
            <a href="#metropolitan" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Metropolitan</a>
            <a href="#tradition" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Tradition</a>
            <a href="#gallery" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Gallery</a>
            <a href="#worship" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Worship</a>
            <a href="#contact" className="hover:text-gold-primary transition-premium border-b-2 border-transparent hover:border-gold-primary pb-1">Connect</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-sacral-blue"
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
                  { id: "about", label: "Our Faith" },
                  { id: "metropolitan", label: "Metropolitan" },
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
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/church-hero-new.jpeg"
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-sacral-blue/60 via-sacral-blue/20 to-warm-white" />
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
            <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">Our Faith</h2>
            <h3 className="text-4xl md:text-7xl font-playfair font-bold text-sacral-blue mb-8">Our Church</h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
            <motion.div {...fadeIn} className="space-y-8">
              <div className="text-deep-slate/80 leading-relaxed font-inter space-y-6">
                <p className="text-2xl font-playfair italic text-sacral-blue border-l-4 border-gold-primary pl-8 py-2">
                  Remain as a benevolent community of St. Thomas, one of the twelve apostles of Jesus Christ who came to India in AD 52.
                </p>
                <p>
                  This is a community of Malankara Orthodox Christians. The Malankara Orthodox Church traces its roots to the arrival of St. Thomas in India and his evangelical mission.
                </p>
                <p>
                  Our parish is presently located in Surrey at <span className="text-sacral-blue font-bold">15151 72 Ave Surrey, BC V3S 2G3</span>, with a revolving strength of 35 or more families. With the Intercession of our patron saint St. George, we continue to grow in faith and by the grace and blessings of our Lord Jesus Christ our needs and requirements are being met.
                </p>
                <p>
                  Our church is a member parish of the <span className="text-sacral-blue font-bold">South-West American Diocese</span> of the Malankara Orthodox Church. The Supreme Head of the church is the Catholicos of the East and Malankara Metropolitan enthroned on the Apostolic Throne of St. Thomas with headquarters at Devalokam, Kerala (India). The Church has a regional Diocesan Metropolitan headquartered in Houston USA. Our Diocese Metropolitan is <span className="text-sacral-blue font-bold">H.G. Thomas Mar Ivanios</span>. The Church, strictly follows the traditional Oriental Orthodox faith and liturgy.
                </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <motion.div {...fadeIn} className="p-12 rounded-[3rem] bg-sacral-blue text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Heart className="w-64 h-64" />
              </div>
              <h4 className="text-gold-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">This is our invitation to you</h4>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed font-inter italic">
                <p>
                  &quot;At St George Malankara Orthodox Church, we invite everyone to come and worship with us, be part of the God&apos;s will and become the purpose of life.&quot;
                </p>
                <p>
                  &quot;We do anything and everything to make this church a place where you feel welcome and comfortable.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-12 rounded-[3rem] glass border border-sacral-blue/5 flex flex-col justify-center">
              <h4 className="text-sacral-blue text-xs font-bold uppercase tracking-[0.3em] mb-8">Nourishing the Soul</h4>
              <div className="space-y-6 text-deep-slate/70 text-base leading-relaxed font-inter">
                <p>
                  We are at a stage where the church of God has so little influence over the world is because the world has so much influence over the church.
                </p>
                <p>
                  Our church exists to glorify God through worshipping him. We gather together to worship God in the ways he has revealed in the Bible. Our practices are carefully drawn from and centered upon the Bible. Our worship services are a means of grace through which God speaks to us and transforms us by his Word.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeIn} 
            className="w-full py-16 px-12 rounded-[4rem] bg-gold-primary text-sacral-blue text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h4 className="text-4xl md:text-5xl font-playfair font-bold mb-8">Welcome and be part of us</h4>
              <p className="text-xl md:text-2xl font-inter font-medium max-w-4xl mx-auto leading-relaxed italic">
                &quot;We care, share and work towards mutual support and supporting the community at large.&quot;
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-6 h-full w-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-sacral-blue/20 h-full" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Metropolitan Section */}
      <section id="metropolitan" className="w-full py-32 bg-sacral-blue/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              {...fadeIn}
              className="relative h-[600px] lg:h-[800px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={metropolitanImg} 
                alt="H.G. Zachariah Mar Nicholovos" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105" 
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacral-blue/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                <p className="text-gold-primary text-xs uppercase tracking-[0.4em] font-bold mb-4">Our Metropolitan</p>
                <h4 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight">His Grace <br /> Zachariah Mar Nicholovos</h4>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-gold-primary text-[10px] uppercase font-bold tracking-[0.4em]">Diocesan Leadership</h3>
                <h4 className="text-3xl md:text-4xl font-playfair font-bold text-sacral-blue mb-6 leading-tight">
                  Metropolitan of the <br /> 
                  <span className="text-gold-primary italic">Northeast American Diocese</span>
                </h4>
                <div className="flex flex-col gap-3 border-l-4 border-gold-primary pl-6 py-2 mb-8">
                  <p className="text-xs font-bold text-sacral-blue/60 uppercase tracking-widest leading-relaxed">
                    Consecrated: Aug 15, 1993  |  Appointed: Feb 26, 2011  |  Enthroned: May 21, 2011
                  </p>
                </div>
              </div>

              <div className={`space-y-6 text-deep-slate/70 text-base leading-relaxed font-inter transition-all duration-700 overflow-hidden ${showFullMetropolitanBio ? "max-h-[2000px]" : "max-h-[400px]"}`}>
                <p>
                  His Grace, Metropolitan Zachariah Mar Nicholovos was born on August 13, 1959 to the famous Poothicote family in Mepral. His boyhood name was Cheriyachen, and was the fourth of five children. Much of his spiritual upbringing centered around his home parish, Saint John&apos;s Orthodox Church in Mepral, Kerala, India. It is at this church, His Grace Thoma Mar Dionysius, Metropolitan of Niranam Diocese, called young Cheriyachen to the service of the Holy Altar at the young age of 9.
                </p>
                <p>
                  This initiated a strong interest in aspects of Orthodox spirituality, and the overall life of the Church. Not only was he blessed to spend time with Metropolitan Thoma Mar Dionysius of Blessed Memory, but also with spiritual giants like His Grace, Metropolitan Thomas Mar Thimithios, and famous convention speaker Father M. V. George.
                </p>
                
                {showFullMetropolitanBio && (
                  <>
                    <p>
                      Upon finishing his high school education, he enrolled in Malabar Christian College for his undergraduate education. Later, he completed his Bachelors in Arts (English) from Saint Joseph College in Calicut. He joined United Theological College in Bangalore where he completed his Bachelor of Divinity and Master of Theology degree. He was ordained to the Holy Diaconate on January 4th, 1986 and to the Priesthood on May 16, 1990.
                    </p>
                    <p>
                      On August 5, 1993, he was tonsured as a monk at Saint Thomas Orthodox Cathedral in Moovattupuzha. He was consecrated as Metropolitan on August 15, 1993. In 2002, he was appointed as the Assistant Metropolitan of the American Diocese, and later in February 2011 was appointed as the ruling Metropolitan of the Northeast American Diocese.
                    </p>
                    <div className="pt-8 border-t border-sacral-blue/10">
                      <h5 className="text-sacral-blue font-bold uppercase tracking-widest text-xs mb-6">Additional Responsibilities</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        {[
                          "President of Ecumenical Relations (MOSC)",
                          "Executive Committee Member (WCC)",
                          "Governing Board (NCCUSA)",
                          "Board of Trustees (St. Vladimir's Seminary)",
                          "Board of Directors (Church World Services)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              {!showFullMetropolitanBio && (
                <div className="h-24 -mt-24 pointer-events-none bg-gradient-to-t from-warm-white to-transparent" />
              )}

              <button 
                onClick={() => setShowFullMetropolitanBio(!showFullMetropolitanBio)}
                className="group flex items-center gap-3 text-gold-primary font-bold uppercase tracking-[0.2em] text-xs hover:text-sacral-blue transition-premium mt-8"
              >
                {showFullMetropolitanBio ? "Show Less" : "View More Details"}
                <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${showFullMetropolitanBio ? "rotate-90" : ""}`} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section id="tradition" className="w-full py-32 bg-sacral-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Image 
            src={tradition1Img} 
            alt="Pattern" 
            fill 
            sizes="33vw"
            className="object-cover" 
            placeholder="blur"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-gold-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6">Our Heritage</h2>
              <h3 className="text-3xl md:text-6xl font-playfair font-bold mb-10 leading-tight">
                An Apostolic Legacy <br />
                <span className="text-gold-primary italic text-2xl md:text-6xl">Since 52 AD</span>
              </h3>
              <div className="space-y-8 text-white/70 text-lg leading-relaxed font-inter">
                <p>
                  The Malankara Orthodox Syrian Church is an autocephalous Oriental Orthodox church centered in the Indian state of Kerala. It is one of the apostolic churches founded by <strong className="text-white">St. Thomas the Apostle</strong> in 52 AD.
                </p>
                <p>
                  Rooted in the West Syriac liturgical tradition, we maintain the ancient faith of the undivided church. Under the spiritual leadership of the Catholicos of the East, our community thrives across the globe, bringing the beauty of Orthodox worship to the modern world.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Liturgy of St. James — One of the oldest Christian liturgies.",
                    "Autocephalous administration under the Catholicos of the East.",
                    "Part of the global Oriental Orthodox communion.",
                    "Preservation of West Syriac spiritual and musical heritage."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold tracking-wide">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <div className="relative h-[700px]">
              <motion.div 
                {...fadeIn}
                className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-20"
              >
                <Image 
                  src={tradition2Img} 
                  alt="Tradition" 
                  fill 
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover" 
                  placeholder="blur"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-0 right-0 w-3/4 h-3/5 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-sacral-blue z-10"
              >
                <Image 
                  src={tradition1Img} 
                  alt="Rite" 
                  fill 
                  sizes="(max-width: 1024px) 75vw, 37vw"
                  className="object-cover" 
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-gold-primary">Ecumenical Relations</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Active member of the World Council of Churches and maintains strong ties with other Orthodox and Christian denominations worldwide.
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-gold-primary text-sacral-blue shadow-2xl shadow-gold-primary/20">
              <h4 className="text-xl font-bold mb-4">Spiritual Head</h4>
              <p className="text-sm font-bold mb-2">H.H. Baselios Marthoma Mathews III</p>
              <p className="text-xs opacity-70">Enthroned as the Catholicos of the East & Malankara Metropolitan, leading millions in faith.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-gold-primary">Global Presence</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                From its base in Kottayam, India, the church has established dioceses across Americas, Europe, and the Pacific.
              </p>
            </div>
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
            {(showAllPhotos 
              ? [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23] 
              : [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            ).map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-premium break-inside-avoid"
              >
                <Image 
                  src={`/gallery-${num}.jpeg`} 
                  alt={`Church Life ${num}`}
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
                  <h5 className="text-2xl font-playfair font-bold group-hover/item:text-gold-primary transition-colors">V. Rev. Fr. M.C Kuriakose Ramban</h5>
                  <a href="tel:7782370597" className="text-lg font-outfit text-white/80 hover:text-white transition-colors flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-gold-primary" /> 778-237-0597
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Trustee</p>
                    <a href="tel:+12507101874" className="text-sm font-bold hover:text-gold-primary transition-colors flex items-center gap-2">
                       +1 (250) 710-1874
                    </a>
                  </div>
                  <div>
                    <p className="text-gold-light/50 text-[10px] uppercase font-bold tracking-widest mb-1">Secretary</p>
                    <a href="tel:+17785353885" className="text-sm font-bold hover:text-gold-primary transition-colors flex items-center gap-2">
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
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gold-primary/30 shadow-2xl">
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
