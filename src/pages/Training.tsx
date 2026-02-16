import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Code2, 
  Briefcase,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Laptop,
  Video
} from "lucide-react";

const courses = [
  {
    title: "Full Stack Development with Python",
    duration: "3 or 6 Months",
    mode: "Online ",
    description: "Master Python backend development with Django/Flask and modern frontend technologies.",
    topics: ["Python Fundamentals", "Django/Flask", "REST APIs", "React Integration", "Database Design", "Deployment"],
    price: "",
    popular: false,
  },
  {
    title: "Full Stack Development with Java",
    duration: "3 or 6 Months",
    mode: "Online ",
    description: "Comprehensive Java development covering Spring Boot, Microservices, and modern frontend.",
    topics: ["Java Core", "Spring Boot", "Microservices", "Angular/React", "MySQL", "JDBC"],
    price: "",
    popular: true,
  },
  {
    title: "Data Science",
    duration: "3 Months",
    mode: "Online ",
    description: "Learn Python, R, Statistics, Probability, Data Cleaning, Data Visualization, Exploratory Data Analysis (EDA), Machine Learning, Deep Learning, SQL, Big Data, Feature Engineering,",
    topics: ["SQL", "Python", "R", "Deep learning", "Power BI ", "Natural Language processing"],
    price: "",
    popular: true,
  },
  {
    title: "Web Designing",
    duration: "3 or 6 Months",
    mode: "Online ",
    description: "Learn UI Design, UX Principles, Layout Design, Grid Systems, Color Theory, Typography, Wireframing, Prototyping.",
    topics: ["Figma","Canva","Adobe XD","photoshop"],
    price: "",
    popular: false,
  },
];

const internshipFeatures = [
  {
    icon: Code2,
    title: "Live Projects",
    description: "Work on real client projects and build your portfolio with production-ready code.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals with years of experience at top companies.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive industry-recognized certificates that boost your resume and credibility.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Interview preparation, resume building, and placement assistance for top companies.",
  },
];

const benefits = [
  "Hands-on project-based learning",
  "Industry-experienced instructors",
  "Small batch sizes for personalized attention",
  "Real-world case studies and projects",
  "Job placement assistance",
  "Lifetime access to course materials",
  "Certificate of completion",
  "Flexible learning schedules",
];

const Training = () => {
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
              Training & Internships
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Launch Your
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-pink-500"> Tech Career</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-900 leading-relaxed max-w-2xl mx-auto">
              Industry-focused training programs and internships designed to make you 
              job-ready with hands-on experience and expert mentorship.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
              Training Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              Comprehensive Courses for Every Learner
            </h2>
            <p className="text-lg text-blue-900 mb-8">
              Choose from our carefully crafted courses designed with industry requirements in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className={`relative p-8 rounded-3xl text-blue-900 bg-card border shadow-card hover-lift ${
                  course.popular ? "border-primary/50" : "border-border hover:border-primary/30"
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-4 py-1 rounded-full bg-blue-900 text-white text-xs font-semibold shadow-soft">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                    <div className="flex items-center gap-4  text-blue-900">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Laptop className="w-4 h-4" />
                        {course.mode}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{course.description}</p>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-blue-900 mb-3">What You'll Learn:</div>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full bg-secondary text-blue-900 text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="text-lg font-bold text-primary">{course.price}</div>
                  <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300" asChild>
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
                Internship Program
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Gain Real Experience with <br />
                <span className="text-red-500 "> Live Projects</span>
              </h2>
              <p className="text-lg text-blue-900 muted-foreground leading-relaxed mb-8">
                Our internship cum training program bridges the gap between learning and 
                working. Get hands-on experience with real projects while being mentored 
                by industry experts.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                    <span className="text-blue-900">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300" size="lg" asChild>
                <Link to="/contact">
                  Apply for Internship
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {internshipFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card
                   transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:shadow-soft transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-900 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-blue-900 text-sm font-medium mb-4">
              Program Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-blue-900 flex-shrink-0" />
                <span className="text-blue-900 text-sm">{benefit}</span>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-blue-900  mb-8">
              Join hundreds of students who have transformed their careers with TechSphere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white 
               transition-all duration-300"  size="lg" asChild>
                <Link to="/technologies">View Technologies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
