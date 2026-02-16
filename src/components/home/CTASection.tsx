import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl bg-black/10 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-sky rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white blur-3xl" />
          </div>
          <div className="absolute inset-0 bg-white/60" />

          <div className="relative z-10 py-16 px-8 lg:py-20 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-black/60 mb-6">
              <Sparkles className="w-4 h-4 text-blue-900" />
              <span className="text-sm font-medium text-blue-900">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-red-500"> Tech Career ?</span>
            </h2>

            <p className="text-lg text-blue-900 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're a student looking to learn, or a business seeking solutions, 
              <br />
              Circlon is your partner in digital success.
            </p>

            <div className="flex flex-col sm:flex-row items-center  text-blue-900 justify-center gap-4">
   <Button
  size="lg"
  asChild
  className="border border-blue-900 text-blue-900 bg-transparent 
             hover:bg-blue-900 hover:text-white 
             transition-all duration-300 
             flex items-center gap-2 px-6 py-3 rounded-lg"
>
  <Link to="/training" className="flex items-center gap-2">
    Enroll in Training
    <ArrowRight className="w-5 h-5" />
  </Link>
</Button>

<Button
  size="lg"
  asChild
className="border border-blue-900 text-blue-900 bg-transparent 
             hover:bg-blue-900 hover:text-white 
             transition-all duration-300 
             flex items-center gap-2 px-6 py-3 rounded-lg"
>
  <Link to="/services" className="flex items-center gap-2">
    Explore Services
  </Link>
</Button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
