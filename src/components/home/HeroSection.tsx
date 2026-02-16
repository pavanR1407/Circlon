import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GraduationCap, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  // 🔹 Add your images inside public folder
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
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
      <div className="absolute inset-0 bg-white/10 z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sky rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-20 right-10 w-50 h-50 bg-sky rounded-full  animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
       
      </div>

      {/* Grid Overlay */}


      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">

         

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-400

">Collect, </span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-400


">Collaborate</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-emerald-400

" >Create</span>
              
            
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-900 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2">
            Transform your career with industry-leading software development services,
            comprehensive training programs, and hands-on internship opportunities.
          </p>

          {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up stagger-3">
  
  <Button
    size="lg"
    className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300 flex items-center gap-2"
    asChild
  >
    <Link to="/training">
      Enroll Now
      <ArrowRight className="w-5 h-5" />
    </Link>
  </Button>

  <Button
    size="lg"
    className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300"
    asChild
  >
    <Link to="/contact">Contact Us</Link>
  </Button>

</div>


          
          

          </div>
        </div>
      

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
