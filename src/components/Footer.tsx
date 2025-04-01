
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
      <div className="absolute inset-0 kenyan-pattern opacity-10"></div>
      
      {/* Decorative top border */}
      <div className="h-2 w-full bg-gradient-to-r from-tamtam-orange via-tamtam-green to-tamtam-orange"></div>
      
      {/* Main content */}
      <div className="container-custom pt-16 pb-12 relative z-10">
        {/* Back to top button */}
        <div className="absolute right-8 -top-7">
          <button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-tamtam-orange to-tamtam-orange/80 hover:from-tamtam-orange/80 hover:to-tamtam-orange text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="animate-fade-in">
            <div className="inline-block relative mb-6 group">
              <span className="absolute -inset-1 -skew-y-3 bg-tamtam-orange rounded opacity-20 group-hover:opacity-40 transition-opacity"></span>
              <h3 className="text-3xl font-greneette text-tamtam-orange relative">TAM TAM</h3>
            </div>
            <p className="text-gray-400 mb-6 border-l-2 border-tamtam-orange/30 pl-4">
              Authentic Kenyan cuisine using fresh, locally-sourced ingredients. Experience the vibrant flavors of Kenya in every bite, served with our signature hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200 bg-white/5 p-3 rounded-full" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200 bg-white/5 p-3 rounded-full" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200 bg-white/5 p-3 rounded-full" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center mb-6">
              <div className="h-6 w-1 bg-gradient-to-b from-tamtam-orange to-tamtam-green rounded-full mr-3"></div>
              <h4 className="text-xl font-sweet-sans font-bold">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-tamtam-orange transition-colors relative link-hover flex items-center">
                  <span className="text-tamtam-orange mr-2">•</span>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-tamtam-orange transition-colors relative link-hover flex items-center">
                  <span className="text-tamtam-orange mr-2">•</span>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-tamtam-orange transition-colors relative link-hover flex items-center">
                  <span className="text-tamtam-orange mr-2">•</span>
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-400 hover:text-tamtam-orange transition-colors relative link-hover flex items-center">
                  <span className="text-tamtam-orange mr-2">•</span>
                  Catering
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-tamtam-orange transition-colors relative link-hover flex items-center">
                  <span className="text-tamtam-orange mr-2">•</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center mb-6">
              <div className="h-6 w-1 bg-gradient-to-b from-tamtam-orange to-tamtam-green rounded-full mr-3"></div>
              <h4 className="text-xl font-sweet-sans font-bold">Contact Us</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <MapPin className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">123 Kimathi Street, Nairobi, Kenya</p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <Phone className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">+254 123 456 789</p>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-2 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <Mail className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <a href="mailto:info@tamtam.com" className="text-gray-400 group-hover:text-white transition-colors">info@tamtam.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-gray-500 relative">
          {/* Custom divider */}
          <div className="kenyan-divider w-full mb-8"></div>
          
          <p className="flex flex-col md:flex-row items-center justify-center gap-2">
            <span>&copy; {new Date().getFullYear()} Tam Tam Restaurant.</span>
            <span className="hidden md:inline">•</span>
            <span>All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>Made with <span className="text-tamtam-orange">♥</span> in Kenya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
