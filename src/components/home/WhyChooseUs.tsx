import { Users, BookOpen, Briefcase, Award, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "Industry-Oriented Training",
    description: "Curriculum designed with real industry requirements and latest technologies in mind.",
  },
  {
    icon: Users,
    title: "Experienced Mentors",
    description: "Learn from industry professionals with years of hands-on experience in top companies.",
  },
  {
    icon: Briefcase,
    title: "Practical Exposure",
    description: "Work on live projects that give you real-world experience and portfolio-ready work.",
  },
  {
    icon: Target,
    title: "Career-Focused Approach",
    description: "We focus on making you job-ready with placement assistance and interview preparation.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive industry-recognized certificates that validate your skills to employers.",
  },
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Accelerated programs designed to get you skilled and employed in the shortest time.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Success Is
              <br />
              <span className="text-gradient">Our Priority</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At TechSphere, we don't just teach technology—we transform careers. 
              Our unique approach combines theoretical knowledge with practical 
              application, ensuring you're ready for the real world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">20 +</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Happy customers</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-soft transition-all duration-300">
                  <reason.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
