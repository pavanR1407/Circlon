import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  // 🔹 Add your images inside public folder
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
   // "/hero3.jpg",
    "/hero4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🔥 Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-150" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky/50 rounded-full blur-3xl" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
         

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
            Collect , Collaborate
            <br />
            
              Create
            
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2">
            Transform your career with industry-leading software development services,
            comprehensive training programs, and hands-on internship opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/training">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up stagger-4">
            
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-sky/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Software Development</h3>
              <p className="text-white/80 text-sm">
                Custom web and mobile solutions built with cutting-edge technologies
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-sky/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Training Programs</h3>
              <p className="text-white/80 text-sm">
                Industry-focused courses in Full Stack, MERN, and MEAN technologies
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-sky/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Internships</h3>
              <p className="text-white/80 text-sm">
                Hands-on experience with live projects and expert mentorship
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
