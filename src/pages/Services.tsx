import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Settings, 
  Cloud, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Build powerful, scalable, and responsive web applications that deliver exceptional user experiences across all devices.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Performance optimization",
    ],
    technologies: ["React", "spring", "Node.js", "Python", "HTML","Django"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Create stunning native and cross-platform mobile applications that engage users and drive business growth.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: ["React Native", "Flutter", "Node.js", "Expo"],
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    features: [
      "Business process automation",
      "Enterprise software development",
      "Legacy system modernization",
      "System integration",
      "Custom CRM/ERP solutions",
      "Workflow management systems",
    ],
    technologies: ["Java", "Python", ".NET", "Microservices"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing to build scalable, reliable, and cost-effective solutions.",
    features: [
      "Cloud migration services",
      "AWS/Azure/GCP solutions",
      "Serverless architecture",
      "Cloud-native development",
      "DevOps implementation",
      "Container orchestration",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Design and implement robust database architectures that ensure data integrity and optimal performance.",
    features: [
      "Database design and modeling",
      "SQL and NoSQL solutions",
      "Data migration services",
      "Performance tuning",
      "Backup and recovery",
      "Real-time data processing",
    ],
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  

];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Typescript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
 
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky text-blue-900 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Software Development
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto">
              From web and mobile applications to custom enterprise solutions, 
              we deliver technology that transforms businesses.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24 text-blue-900 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 rounded-3xl text-blue-900 bg-card border border-border hover:border-primary/30 shadow-card hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl text-blue-900   bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-blue-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-blue-900 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 text-blue-900 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-blue-900">
                          <CheckCircle className="w-4 h-4 text-blue-900 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-primary/10 text-blue-900 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Built With Modern Technologies
            </h2>
            <p className="text-lg text-blue-900/70 mt-4">
              We use the latest and most reliable technologies to build robust solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="font-semibold text-blue-900">{tech.name}</div>
                <div className="text-xs text-blue-900/100">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-hero overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-sky rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 py-16 px-8 lg:py-20 lg:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
                Let's discuss how we can help bring your ideas to life with our 
                expertise in software development.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
