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
    { name: "Training", href: "/training" },
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
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-blue-900 font-bold">
                Cir<span className="text-blue-900">clon</span>
              </span>
            </Link>
            <p className="text-blue-900 mb-6 max-w-sm leading-relaxed">
              Collect, Collaborate, Create .<br />
            Empowering individuals and businesses with cutting-edge digital skills and software solutions.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@Circlon.com" className="flex items-center gap-3 text-blue-900 hover:text-sky transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@Circlon.com</span>
              </a>
              <a href="tel:8925246499" className="flex items-center gap-3 text-blue-900 hover:text-sky transition-colors">
                <Phone className="w-5 h-5" />
                <span>8925246499</span>
              </a>
              <div className="flex items-start gap-3 text-blue-900">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Bangalore <br />Karnataka</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-blue-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-900 hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-blue-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-900  hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold text-blue-900 mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-900 hover:text-sky transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-blue-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-900 text-sm">
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
          className="w-10 h-10 rounded-lg 
             bg-white 
             flex items-center justify-center 
             text-blue-900
             hover:bg-blue-900 hover:text-white
             transition-all duration-300"
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
