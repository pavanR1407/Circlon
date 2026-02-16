import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Technologies", href: "/technologies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center shadow-soft group-hover:shadow-hover transition-all duration-300">
              <span className="text-white font-bold text-xl">C</span>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-blue-900">
                Cir<span className="text-blue-900">clon</span>
              </span>
              <span className="text-[13px] font-semibold text-blue-900">
                Collect, Collaborate, Create
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "text-blue-900 bg-blue-100"
                    : "text-muted-foreground hover:text-blue-900"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="default"
              className="border border-blue-900 text-blue-900 bg-transparent 
                         hover:bg-blue-900 hover:text-white 
                         transition-all duration-300"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-900" />
            ) : (
              <Menu className="w-6 h-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-white rounded-2xl shadow-card p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-4 py-3 rounded-lg font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "text-blue-900 bg-blue-100"
                    : "text-blue-900 hover:bg-blue-50"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-2">
         <Button
          size="default"
          className="w-full border border-blue-900 bg-blue-900 text-white
             hover:bg-blue-900 hover:border-blue-900 hover:text-white
             transition-none"
               asChild>
            <Link to="/contact">Get Started</Link>
        </Button>


            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
