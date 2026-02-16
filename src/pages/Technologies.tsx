import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Description } from "@radix-ui/react-toast";

const technologies = {
  "Programming Languages": [
    { name: "Python", description: "Versatile language for web, data science, and AI" },
    { name: "Java", description: "Enterprise-grade applications and Android development" },
    { name: "JavaScript", description: "The language of the web for frontend and backend" },
    { name: "TypeScript", description: "Type-safe JavaScript for scalable applications" },
  ],
  "Frontend Technologies": [
    { name: "React", description: "Modern UI library for building interactive interfaces" },
    { name: "Angular", description: "Full-featured framework for enterprise applications" },
    { name: "Next.js", description: "React framework with SSR and static generation" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling" },
  ],
  "Backend Technologies": [
    { name: "Node.js", description: "JavaScript runtime for scalable server applications" },
    { name: "Django", description: "High-level Python framework for rapid development" },
    { name: "Spring Boot", description: "Java framework for microservices architecture" },
    { name: "Express.js", description: "Minimal and flexible Node.js web framework" },
  ],
  "Databases": [
    { name: "MongoDB", description: "NoSQL database for flexible, scalable data storage" },
    { name: "MySQL", description: "Reliable relational database for structured data" },
    { name: "PostgreSQL", description: "Advanced open-source relational database" },
   
  ],
  "DevOps & Cloud": [
    { name: "Git", description: "Version control for collaborative development" },
    { name: "Docker", description: "Containerization for consistent deployments" },
    { name: "AWS", description: "Comprehensive cloud computing platform" },
    { name: "CI/CD", description: "Automated testing and deployment pipelines" },
  ],
  "Data science":[
    {name:"Power BI", description:"Power BI is a business analytics and data visualization tool developed by Microsoft that helps users transform raw data"},
    {name:"Pandas", description:"Pandas is a powerful open-source Python library used for data manipulation and analysis. It provides easy-to-use data structures"},
    {name:"Jupyter Notebook", description:"Jupyter Notebook is an open-source web-based application used for writing and executing code interactively."},
    {name:"google colab",description:"Google Colab (Google Colaboratory) is a free, cloud-based Jupyter Notebook environment provided by Google that allows users to write and execute Python code directly in the browser"}
  ]
};

const Technologies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
              Our Technology Stack
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Technologies We 
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-red-600"> Offer & Teach</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-900 leading-relaxed max-w-2xl mx-auto">
              We work with cutting-edge technologies and equip our students with 
              skills that are in high demand across the industry.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <div key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">{category}</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group p-6 rounded-2xl bg-card border border-border hover:blue-900 hover:shadow-card transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4 shadow-soft group-hover:white transition-transform duration-300">
                        <span className="text-white font-bold text-lg">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-blue-900 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Technologies */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
                Why These Technologies???
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Industry-Driven Technology Selection
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">90%</div>
                <div className="text-blue-900">
                  of job postings require skills we teach
                </div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
                <div className="text-blue-900">
                  projects built with these technologies
                </div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-blue-900 mb-2">4.5★</div>
                <div className="text-blue-900">
                  rated training by our students
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl bg-black/10 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-40 h-40 bg-sky rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 py-16 px-8 lg:py-20 lg:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Ready to Learn These Technologies?
              </h2>
              <p className="text-lg text-blue-900 max-w-2xl mx-auto mb-10">
                Join our training programs and master the most in-demand technologies in the industry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white " size="lg" asChild>
                  <Link to="/training">
                    View Training Programs
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technologies;
