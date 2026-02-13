import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Custom Software", href: "/services" },
    { name: "Technologies", href: "/technologies" },
  ],
  programs: [
    { name: "Full Stack Training", href: "/training" },
    { name: "Internships", href: "/training" },
    { name: "webinars", href: "/training" },
    { name: "", href: "/training" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/techspheretechnology", label: "LinkedIn" },
  
  { icon: Instagram, href: "https://www.instagram.com/techsphere2026/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-black/70 font-bold text-lg">C</span>
              </div>
              <span className="text-black/70 font-bold">
                Cir<span className="text-sky">clon</span>
              </span>
            </Link>
            <p className="text-black/70 mb-6 max-w-sm leading-relaxed">
              Where innovation meets excellence. Empowering individuals and businesses with cutting-edge digital skills and software solutions.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@techsphere.com" className="flex items-center gap-3 text-black hover:text-sky transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@techsphere.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-black hover:text-sky transition-colors">
                <Phone className="w-5 h-5" />
                <span>8925246499</span>
              </a>
              <div className="flex items-start gap-3 text-black/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Bangalore <br />Karnataka</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-black mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-black/70 hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-black mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-black/70  hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold text-black mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-black/70 hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-black/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/60 text-sm">
            © {new Date().getFullYear()} Circlon . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
              target="_blank"
              rel="noopener noreferrer"
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-black/70 flex items-center justify-center text-primary-/70 hover:bg-sky hover:text-primary-foreground transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
