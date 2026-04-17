import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, TrendingUp, 
  ShoppingCart, Sparkles, Database, Calendar, Award,
  Twitter, Linkedin, MessageCircle, ArrowRight, Globe, ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactLinks = {
    email: "mailto:iyanuayobami@gmail.com",
    x: "https://x.com/TheAngelsWonder?s=20",
    linkedin: "https://linkedin.com/in/iyanuoluwa-ayobami-800b702a8",
    whatsapp: "https://wa.me/2348140894439",
    phone: "+234 814 089 4439"
  };

  const services = [
    {
      icon: <Calendar className="w-10 h-10 text-indigo-400" />,
      title: "Executive Admin & Ops",
      description: "Streamlining workflows, managing complex calendars, and handling email triage for international clients. I turn operational chaos into seamless daily execution."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-emerald-400" />,
      title: "Financial Analysis",
      description: "Managed portfolios up to $850K. Expert in KPI reporting, variance analysis, and building robust financial models using SQL and Advanced Excel."
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-amber-400" />,
      title: "E-Commerce & Logistics",
      description: "End-to-end management from product listings (Amazon, Shopify, TikTok) to handling high-volume 3PL claims and negotiating with major carriers."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-pink-400" />,
      title: "Creative & AI Content",
      description: "Producing brand-aligned visual assets, editing videos, and leveraging cutting-edge AI tools (Higgsfield AI) to boost audience engagement."
    }
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Financial Analyst",
      company: "AlphaCapitalGroup, UK",
      details: "Built financial models guiding strategic decisions, placed profitable trades managing up to $850k in portfolio funds, and performed monthly variance forecasting."
    },
    {
      year: "2025 - 2026",
      role: "Graphics Designer & AI Creator",
      company: "AVSTUDIOS / Higgsfield AI",
      details: "Designed visual assets and produced AI-assisted video content for social channels. Developed storyboards to support brand campaign objectives."
    },
    {
      year: "2022 - 2024",
      role: "Financial Analyst & 3PL Support",
      company: "Zenith Carex International",
      details: "Managed high-volume 3PL claims lifecycle. Negotiated with UPS, FedEx, DHL, accelerating recovery and resolutions while ensuring strict policy compliance."
    },
    {
      year: "2021 - 2022",
      role: "Administrative & Ops VA",
      company: "Remote (US Clients)",
      details: "Provided top-tier administrative support, optimizing core functions, managing schedules, and dramatically improving response times for remote executives."
    },
    {
      year: "2018 - 2020",
      role: "Regional Store Manager",
      company: "Finrel Supermarket",
      details: "Led regional operations, inventory control, and staff training. Managed Amazon, Shopify, and TikTok e-commerce channels to elevate online sales."
    }
  ];

  const skillCategories = [
    {
      name: "Tech & Data",
      skills: ["SQL", "Advanced Excel", "Google Sheets", "Notion", "Zendesk", "Freshdesk"]
    },
    {
      name: "E-Commerce & Finance",
      skills: ["Helium 10", "Jungle Scout", "Keepa", "TradingView", "MT5", "SMC Expert"]
    },
    {
      name: "Creative & Design",
      skills: ["Photoshop", "Illustrator", "Video Editing", "Higgsfield AI", "UGC Models"]
    },
    {
      name: "Core Strengths",
      skills: ["Critical Thinking", "Detail-Oriented", "Independent Worker", "Team Leadership"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 relative overflow-x-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-24 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] -right-24 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              WONDER
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400 mr-8">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#expertise" className="hover:text-indigo-400 transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href={contactLinks.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={contactLinks.x} target="_blank" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href={contactLinks.whatsapp} target="_blank" className="text-slate-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
              <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
              <a href={contactLinks.email} className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/25">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-32 px-6 flex flex-col justify-center items-center">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 mb-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">Available for Global Remote Work</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 leading-[1.05] text-white">
              Operations & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Financial Insights.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Physics-educated strategic partner specializing in business optimization, portfolio management, and e-commerce growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#expertise" className="px-12 py-5 rounded-full bg-white text-slate-950 font-black hover:bg-indigo-50 transition-all w-full sm:w-auto shadow-2xl">
                See My Work
              </a>
              <a href="#contact" className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto flex items-center justify-center font-bold">
                Let's Talk <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/50 border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight text-white tracking-tighter uppercase">Strategic Partner.</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg font-light">
                <p>
                  With a Bachelor's in Physics and a foundation in Computer Science, my brain is wired for logic, problem-solving, and efficiency.
                </p>
                <p>
                  Whether I'm diving deep into SQL databases to extract actionable financial insights, negotiating complex carrier claims, or generating eye-catching AI video content, my goal remains the same: <span className="text-indigo-300 font-medium">To make your business run smoother.</span>
                </p>
                <p>
                  I pride myself on being reliable, highly detail-oriented, and capable of working independently. You set the target; I build the path to hit it.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/50 transition-colors shadow-lg">
                <Database className="w-10 h-10 text-indigo-400 mb-6" />
                <div className="text-4xl font-black text-white mb-2">$850K</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest">Funds Managed</div>
              </div>
              <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-colors shadow-lg">
                <Briefcase className="w-10 h-10 text-emerald-400 mb-6" />
                <div className="text-4xl font-black text-white mb-2">8+</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 hover:border-pink-500/50 transition-colors col-span-2 shadow-lg flex items-center gap-6">
                <Award className="w-12 h-12 text-pink-400 flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white mb-1 tracking-tight">Certified Financial Analyst</div>
                  <div className="text-sm text-slate-400 font-light">AlphaCapitalGroup (2023) | Best First Year Student (Physics B.Sc)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter">Capabilities.</h2>
              <p className="text-slate-400 text-xl font-light">Versatile solutions for the modern enterprise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-white/5 p-12 rounded-[3rem] group hover:bg-slate-900/60 transition-all duration-500">
                  <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center mb-10 border border-white/5 shadow-inner">
                    {s.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">{s.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 bg-slate-900/20 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-24 text-center text-white tracking-tighter">Experience.</h2>
            
            <div className="flex flex-col space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md z-10 flex-shrink-0 transition-transform group-hover:scale-125"></div>
                    {index !== experiences.length - 1 && (
                      <div className="w-[1px] h-full bg-white/10 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="pb-12 flex-1">
                    <span className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-black text-[10px] tracking-[0.2em] uppercase mb-4">
                      {exp.year}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{exp.role}</h3>
                    <div className="text-indigo-400 font-medium mb-6 flex items-center gap-2">
                       <span className="w-4 h-[1px] bg-indigo-400"></span> {exp.company}
                    </div>
                    <p className="text-slate-400 leading-relaxed bg-white/5 p-8 rounded-[2rem] border border-white/5 font-light group-hover:border-white/10 transition-colors">
                      {exp.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Stack Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-24 text-center text-white tracking-tighter">Stack.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all">
                  <h3 className="text-xs font-black text-slate-500 mb-8 pb-4 border-b border-white/5 tracking-[0.3em] uppercase">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-950 text-slate-300 border border-white/5 hover:bg-slate-800 transition-colors cursor-default tracking-tight">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Connect Section */}
        <section id="contact" className="py-48 px-6">
          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-[4rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-3xl p-16 md:p-24 rounded-[4rem] text-center border border-white/10 shadow-3xl">
              <h2 className="text-5xl md:text-8xl font-black mb-10 text-white tracking-tighter">Hire Wonder.</h2>
              <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Reach out via your preferred platform to discuss projects, strategy, or high-level support.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a href={contactLinks.email} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <Mail className="text-indigo-400" />
                    <span className="font-bold">Email</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
                <a href={contactLinks.linkedin} target="_blank" className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-blue-400" />
                    <span className="font-bold">LinkedIn</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
                <a href={contactLinks.x} target="_blank" className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <Twitter className="text-slate-100" />
                    <span className="font-bold">X (Twitter)</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
                <a href={contactLinks.whatsapp} target="_blank" className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="text-emerald-400" />
                    <span className="font-bold">WhatsApp</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 text-center border-t border-white/5 bg-slate-950 text-slate-500">
          <div className="flex justify-center items-center gap-3 mb-6 text-xs font-black tracking-[0.3em] uppercase text-slate-400">
            <Globe className="w-4 h-4 text-indigo-500 animate-spin-slow" />
            Nigeria / Remote
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">© {new Date().getFullYear()} Wonder Ayobami. Powered by Logic.</p>
        </footer>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
