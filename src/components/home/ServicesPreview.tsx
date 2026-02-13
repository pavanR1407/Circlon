import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Build powerful, scalable web applications using modern frameworks and best practices. From startups to enterprises.",
    features: ["React & Next.js", "Node.js Backend", "Cloud Deployment"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Create stunning cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "Native Performance"],
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed to meet your unique business requirements and drive growth.",
    features: ["Business Analysis", "Custom APIs", "Integration"],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transforming Ideas Into
            <br />
            <span className="text-gradient"> Digital Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We deliver end-to-end software development services that help businesses 
            innovate, scale, and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
