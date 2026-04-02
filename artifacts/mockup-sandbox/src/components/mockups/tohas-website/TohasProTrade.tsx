import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Bot,
  TrendingUp,
  BarChart,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Star,
  Zap,
  Target,
  Database,
  Cpu
} from "lucide-react";

export function TohasProTrade() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary/30 selection:text-primary">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              T
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              TohasProTrade
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all border-none">
            Get Started
          </Button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-8 py-1.5 px-4 border-primary/30 bg-primary/10 text-primary uppercase tracking-wider backdrop-blur-sm">
            <SparklesIcon className="w-3.5 h-3.5 mr-2 inline" />
            The Future of Global Trade
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 max-w-5xl leading-[1.1]">
            AI-Powered Growth For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#7c3aed] to-primary animate-gradient-x">
              Global Visionaries
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed">
            We merge cutting-edge AI automation with elite global trade expertise to scale your business across borders. Precision, power, and measurable ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)] border-none hover:scale-105 transition-all">
              Book a Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 backdrop-blur-sm">
              Explore Services
            </Button>
          </div>
        </section>

        {/* Stats / About */}
        <section className="py-20 px-6 border-y border-white/5 bg-black/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Active Clients", value: "150+" },
                { label: "Client Retention", value: "98%" },
                { label: "Countries Served", value: "50+" },
                { label: "Revenue Generated", value: "$10M+" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Command Your Market</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end solutions designed to dominate. We leverage proprietary AI systems to give you an unfair advantage.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart,
                  title: "Digital Marketing",
                  desc: "Hyper-targeted campaigns powered by predictive AI. SEO, Paid Ads, and Social Media strategies that convert.",
                  color: "from-blue-500 to-cyan-400"
                },
                {
                  icon: Bot,
                  title: "AI Automation",
                  desc: "Custom AI agents, intelligent workflow automation, and CRM integrations that operate 24/7.",
                  color: "from-violet-500 to-fuchsia-400"
                },
                {
                  icon: Globe,
                  title: "Foreign Trade",
                  desc: "Global sourcing, export/import logistics, and market penetration consulting with data-driven insights.",
                  color: "from-emerald-400 to-cyan-400"
                }
              ].map((service, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all" />
                    
                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10`}>
                      <service.icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-left" />
          <div className="container mx-auto relative z-10">
            <div className="mb-16 md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Engine</h2>
              <p className="text-muted-foreground">Our methodology is systematic, rigorous, and proven across dozens of markets.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
              
              {[
                { step: "01", title: "Discovery", desc: "Deep audit of your current systems and market positioning." },
                { step: "02", title: "Strategy", desc: "Architecting a bespoke roadmap integrating AI and trade data." },
                { step: "03", title: "Execution", desc: "Deploying automation, campaigns, and global outreach." },
                { step: "04", title: "Optimization", desc: "Continuous iteration via machine learning algorithms." }
              ].map((p, i) => (
                <div key={i} className="relative pt-8 md:pt-16">
                  <div className="absolute top-0 md:top-8 left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    {p.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 px-6 border-y border-white/5">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-12 text-muted-foreground">Powered by Elite Technology</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['React', 'Node.js', 'MongoDB', 'n8n', 'OpenAI', 'GPT-4', 'Zapier', 'Make'].map((tech, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Investment</h2>
              <p className="text-muted-foreground">Scalable solutions tailored to your operational velocity.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Starter", price: "$499", desc: "Essential digital presence and basic AI tooling.", features: ["SEO Optimization", "Basic Chatbot setup", "Monthly Reporting", "Email Support"] },
                { name: "Growth", price: "$1,499", desc: "Comprehensive growth engine for scaling brands.", popular: true, features: ["Advanced AI Agents", "Full-funnel Paid Ads", "CRM Automation", "Priority Slack Support", "Trade Consulting"] },
                { name: "Enterprise", price: "Custom", desc: "Full-scale global domination architecture.", features: ["Custom AI Models", "Global Supply Chain Tech", "Dedicated Account Manager", "24/7 Phone Support", "White-glove Service"] }
              ].map((tier, i) => (
                <Card key={i} className={`relative bg-white/[0.02] backdrop-blur-sm overflow-hidden ${tier.popular ? 'border-primary shadow-[0_0_30px_rgba(0,212,255,0.15)] -translate-y-4' : 'border-white/10'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                  )}
                  <CardContent className="p-8 flex flex-col h-full">
                    {tier.popular && <Badge className="w-fit mb-4 bg-primary/20 text-primary hover:bg-primary/20 border-none">Most Popular</Badge>}
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(0,212,255,0.4)]' : 'bg-white/10 hover:bg-white/20 text-white border-none'}`}>
                      {tier.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-black/40 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Initiate Protocol</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to scale your global operations? Our team of AI engineers and trade specialists is standing by.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-white font-medium">hello@tohasprotrade.com</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="text-white font-medium">+1 (555) 000-0000</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">First Name</label>
                        <Input placeholder="John" className="bg-black/50 border-white/10 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Last Name</label>
                        <Input placeholder="Doe" className="bg-black/50 border-white/10 focus:border-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Email Address</label>
                      <Input type="email" placeholder="john@company.com" className="bg-black/50 border-white/10 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Project Details</label>
                      <Textarea placeholder="How can we help scale your business?" className="min-h-[120px] bg-black/50 border-white/10 focus:border-primary resize-none" />
                    </div>
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(0,212,255,0.3)] border-none">
                      Send Transmission
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6 text-center md:text-left">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  T
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  TohasProTrade
                </span>
              </div>
              <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
                The premier AI-powered digital marketing and global trade agency. Precision engineering for international growth.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2025 TohasProTrade. All Rights Reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
