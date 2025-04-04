
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-tamtam-black text-white relative">
      {/* Kenyan-inspired pattern overlay */}
      <div className="absolute inset-0 kenyan-pattern opacity-5"></div>
      
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-tamtam-orange via-tamtam-green to-tamtam-orange"></div>
      
      {/* Main content */}
      <div className="container-custom pt-20 pb-12 relative z-10">
        {/* Back to top button */}
        <div className="absolute right-8 -top-7">
          <button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-tamtam-orange to-tamtam-accent hover:from-tamtam-accent hover:to-tamtam-orange text-white p-4 rounded-full shadow-elegant hover:shadow-lg transition-all duration-500 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo and Description */}
          <div className="animate-fade-in">
            <div className="inline-block relative mb-7 group">
              <span className="absolute -inset-1 -skew-y-3 bg-tamtam-orange rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></span>
              <h3 className="text-3xl font-neutra text-tamtam-orange relative tracking-tight">TAM TAM</h3>
            </div>
            <p className="text-gray-400 mb-7 border-l-2 border-tamtam-orange/40 pl-5 leading-relaxed">
              Authentic Kenyan cuisine using fresh, locally-sourced ingredients. Experience the vibrant flavors of Kenya in every bite, served with our signature hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-500 bg-white/5 p-3 rounded-full" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-500 bg-white/5 p-3 rounded-full" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-500 bg-white/5 p-3 rounded-full" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center mb-7">
              <div className="h-6 w-0.5 bg-gradient-to-b from-tamtam-orange to-tamtam-green rounded-full mr-3"></div>
              <h4 className="text-xl font-neutra font-bold tracking-tight">Quick Links</h4>
            </div>
            <ul className="space-y-4">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors relative link-hover flex items-center group">
                  <span className="text-tamtam-orange mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors relative link-hover flex items-center group">
                  <span className="text-tamtam-orange mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-white transition-colors relative link-hover flex items-center group">
                  <span className="text-tamtam-orange mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-400 hover:text-white transition-colors relative link-hover flex items-center group">
                  <span className="text-tamtam-orange mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>
                  Catering
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors relative link-hover flex items-center group">
                  <span className="text-tamtam-orange mr-2 transition-transform duration-300 group-hover:translate-x-1">•</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center mb-7">
              <div className="h-6 w-0.5 bg-gradient-to-b from-tamtam-orange to-tamtam-green rounded-full mr-3"></div>
              <h4 className="text-xl font-neutra font-bold tracking-tight">Contact Us</h4>
            </div>
            <div className="space-y-5">
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-500">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors duration-500">
                  <MapPin className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">123 Kimathi Street, Nairobi, Kenya</p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-500">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors duration-500">
                  <Phone className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">+254 123 456 789</p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-500">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors duration-500">
                  <Mail className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <a href="mailto:info@tamtam.com" className="text-gray-400 group-hover:text-white transition-colors duration-300">info@tamtam.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 text-center text-gray-500 relative">
          {/* Custom divider */}
          <div className="kenyan-divider w-full mb-8"></div>
          
          <p className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm tracking-wide">
            <span>&copy; {new Date().getFullYear()} Tam Tam Restaurant.</span>
            <span className="hidden md:inline text-tamtam-orange/50">•</span>
            <span>All rights reserved.</span>
            <span className="hidden md:inline text-tamtam-orange/50">•</span>
            <span>Made with <span className="text-tamtam-orange">♥</span> in Kenya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
