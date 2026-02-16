import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  GraduationCap,
  Briefcase
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@circlon.com",
    
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "8925246499",
    
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Circlon Technologies ",
    description: "Bangalore, karnataka ",
  },
];

const inquiryTypes = [
  {
    icon: MessageSquare,
    title: "General Inquiry",
    description: "Questions about our company or services",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Course details, enrollment, and fees",
  },
  {
    icon: Briefcase,
    title: "Business Solutions",
    description: "Software development for your business",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Let's Start a
              <span className="bg-gradient-to-r from-sky to-primary bg-clip-text text-amber-800"> Conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-900 leading-relaxed max-w-2xl mx-auto">
              Whether you're interested in our training programs, need software 
              development services, or just want to say hello, we'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-blue-900">
                  Reach out through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-blue-900 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">{info.title}</h3>
                      <p className="text-blue-900/70">{info.details}</p>
                      <p className="text-sm text-blue-900">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inquiry Types */}
              <div className="pt-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  What can we help you with?
                </h3>
                <div className="space-y-3">
                  {inquiryTypes.map((type) => (
                    <div key={type.title} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                      <type.icon className="w-5 h-5 text-blue-900/70" />
                      <div>
                        <div className="font-medium text-blue-900 text-sm">{type.title}</div>
                        <div className="text-xs text-blue-900/70">{type.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6 text-blue-900">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 text-blue-900">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder=""
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    
                  </div>

                  <div className="space-y-2 text-blue-900/100">
                    <Label htmlFor="message">Description *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    
                    size="lg"
                    className="border border-blue-900 text-blue-900 bg-transparent 
               hover:bg-blue-900 hover:text-white w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
     
    </Layout>
  );
};

export default Contact;
