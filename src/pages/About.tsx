import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from training to delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong relationships.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical standards in all our dealings.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
              About Circlon
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Empowering the Future of
              <br />
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-emerald-600"> Technology</span>
            </h1>
            <p className="text-blue-900 sm:text-xl font-semibold leading-relaxed">
              We are a technology hub dedicated to bridging the gap between education 
              and industry through innovative training and software solutions.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900      mb-6">
                Building Tomorrow's Tech Leaders
              </h2>
              <p className="text-muted-foreground text-blue-900 leading-relaxed mb-6">
                Circlon was founded with a simple yet powerful vision: to create a bridge 
                between academic learning and real-world industry demands. We recognized that 
                traditional education often leaves gaps that prevent talented individuals from 
                reaching their full potential in the tech industry.
              </p>
              <p className="text-muted-foreground text-blue-900 leading-relaxed mb-6">
                Our team of experienced professionals, with backgrounds in leading tech companies, 
                came together to create a comprehensive ecosystem that combines cutting-edge 
                software development services with industry-relevant training programs.
              </p>
              <p className="text-muted-foreground text-blue-900 leading-relaxed mb-6">
                Today, we're proud to have trained hundreds of students who have gone on to 
                successful careers at top tech companies, while also delivering innovative 
                software solutions to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
                  <div className="text-muted-foreground">Students Trained</div>
                </div>
                <div className="p-6 rounded-2xl bg-blue-900 text-primary-foreground shadow-soft">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-primary-foreground/80">Placement Rate</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-2xl bg-blue-900 text-primary-foreground shadow-soft">
                  <div className="text-4xl font-bold  mb-2">10+</div>
                  <div className="text-primary-foreground/80">Projects Delivered</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <div className="text-4xl font-bold text-blue-900 mb-2">5+</div>
                  <div className="text-muted-foreground">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-blue-900 flex items-center justify-center mb-6 shadow-soft">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-blue-900 leading-relaxed text-lg">
                To become a trusted technology hub that empowers individuals and businesses 
                with cutting-edge digital skills and innovative software solutions. We envision 
                a future where quality tech education is accessible to all, and where our 
                solutions drive digital transformation across industries.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-blue-900 flex items-center justify-center mb-6 shadow-soft">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full text-blue-900 bg-primary mt-2" />
                  <span>To deliver high-quality software development services that drive business success</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full text-blue-900 bg-primary mt-2" />
                  <span>To train students with industry-relevant skills in Full Stack technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full text-blue-900 bg-primary mt-2" />
                  <span>To bridge the gap between education and real-world industry needs through internships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-blue-900 leading-relaxed">
              Our core values guide everything we do, from how we teach to how we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="group p-6 rounded-2xl bg-white border border-gray-200 
             hover:border-blue-900 hover:shadow-lg 
             transition-all duration-300 text-center"
            style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="w-14 h-14 rounded-2xl bg-blue-100 
                  flex items-center justify-center mx-auto mb-4 
                  group-hover:bg-blue-900 group-hover:shadow-md 
                  transition-all duration-300">
                <value.icon className="w-7 h-7 text-blue-900 
                           group-hover:text-white 
                           transition-colors duration-300" />
                  </div>

            <h3 className="text-lg font-bold text-blue-900 mb-2">
             {value.title}
            </h3>

            <p className="text-sm text-blue-900 leading-relaxed">
               {value.description}
             </p>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg text-blue-900  mb-8">
              Whether you're looking to learn, grow, or build, Circlon is here to help you succeed.
            </p>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
           size="lg"
            className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300 flex items-center gap-2"
          asChild>
               <Link to="/contact">
                          Get in Touch
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
            <Link to="/training">Explore Programs</Link>
            </Button>

</div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
