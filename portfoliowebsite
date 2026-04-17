import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, ChevronRight, Briefcase, TrendingUp, 
  ShoppingCart, Sparkles, Database, Calendar, Award 
} from 'lucide-react';

// --- DATA ---
const services = [
  {
    icon: <Calendar className="w-8 h-8 text-indigo-400" />,
    title: "Executive Admin & Ops",
    description: "Streamlining workflows, managing complex calendars, and handling email triage for US and international clients. I turn operational chaos into seamless daily execution."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    title: "Financial Analysis",
    description: "Managed portfolios up to $850K. Expert in KPI reporting, variance analysis, and building robust financial models using SQL and Advanced Excel."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-amber-400" />,
    title: "E-Commerce & Logistics",
    description: "End-to-end management from product listings (Amazon, Shopify, TikTok) to handling high-volume 3PL claims and negotiating with major carriers."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-400" />,
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

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 relative">
      
      {/* Ambient Vibrant Background (Fixed to stay visible while scrolling) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl -translate-y-1/2 opacity-50"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Wonder.VA
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#services" className="hover:text-indigo-400 transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            </div>
            <a href="mailto:iyanuayobami@gmail.com" className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition-all transform hover:scale-105">
              Hire Me
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
          <div className={`max-w-4xl mx-auto text-center z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-3 bg-slate-800/50 rounded-full px-5 py-2 border border-slate-700 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Available for global remote work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Hi, I'm Wonder. <br />
              Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Operations Powerhouse.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              I bridge the gap between data-driven strategy and flawless daily execution. 
              From managing $850K portfolios to negotiating 3PL claims and streamlining executive workflows, 
              I give you back your most valuable asset: <strong className="text-slate-200">Time.</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#services" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all w-full sm:w-auto text-center">
                See How I Can Help
              </a>
              <a href="mailto:iyanuayobami@gmail.com" className="px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-700 transition-all w-full sm:w-auto flex items-center justify-center">
                Let's Talk <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">More than just an assistant.<br/>I'm a strategic partner.</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
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
              <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-indigo-500/50 transition-colors shadow-lg">
                <Database className="w-10 h-10 text-indigo-400 mb-6" />
                <div className="text-4xl font-extrabold text-white mb-2">$850K</div>
                <div className="text-sm text-slate-400 font-medium">Portfolio Funds Managed</div>
              </div>
              <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500/50 transition-colors shadow-lg">
                <Briefcase className="w-10 h-10 text-emerald-400 mb-6" />
                <div className="text-4xl font-extrabold text-white mb-2">8+</div>
                <div className="text-sm text-slate-400 font-medium">Years Professional Exp.</div>
              </div>
              <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-pink-500/50 transition-colors col-span-2 shadow-lg flex items-center gap-6">
                <Award className="w-12 h-12 text-pink-400 flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white mb-1">Certified Financial Analyst</div>
                  <div className="text-sm text-slate-400">AlphaCapitalGroup (2023) | Best First Year Student (Physics B.Sc)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">My Core Expertise</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">A multi-disciplinary skill set designed to support every facet of your business, from administration to creative growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-10 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900 transition-all group shadow-xl">
                  <div className="bg-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-800 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-100">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-slate-900/40 border-y border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Career Journey</h2>
            
            <div className="flex flex-col space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-md z-10 flex-shrink-0"></div>
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-800 mt-2"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="pb-8">
                    <span className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-bold text-xs tracking-wider mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-slate-400 font-medium mb-4">{exp.company}</div>
                    <p className="text-slate-400 leading-relaxed bg-slate-900/50 p-5 rounded-2xl border border-slate-800/50">
                      {exp.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Stack Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">The Tool Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 hover:border-slate-600 transition-colors">
                  <h3 className="text-lg font-bold text-slate-200 mb-6 pb-4 border-b border-slate-800">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 text-sm font-medium rounded-xl bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-900/10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 bg-slate-900/80 backdrop-blur-2xl border border-slate-700 p-10 md:p-16 rounded-[3rem] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to optimize your workflow?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              I'm currently available for freelance or full-time virtual assistant roles. Let's discuss how my unique blend of administrative and analytical skills can benefit your team.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <a href="mailto:iyanuayobami@gmail.com" className="flex items-center text-slate-300 hover:text-white transition-colors bg-slate-950/50 px-6 py-3 rounded-full border border-slate-800">
                <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                iyanuayobami@gmail.com
              </a>
              <a href="tel:+2348140894439" className="flex items-center text-slate-300 hover:text-white transition-colors bg-slate-950/50 px-6 py-3 rounded-full border border-slate-800">
                <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                +234 814 089 4439
              </a>
            </div>
            
            <a href="mailto:iyanuayobami@gmail.com" className="inline-flex items-center px-10 py-5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
              Send me an Email <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="flex items-center text-slate-500 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-2 text-slate-400" /> Ibadan, Nigeria (Open to global remote work)
          </div>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Wonder Ayobami. Designed for impact.</p>
        </footer>
      </div>
    </div>
  );
}
