
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
      <div className="container-custom py-12">
        {/* Back to top button */}
        <div className="absolute right-8 -top-5">
          <button 
            onClick={scrollToTop}
            className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-greneette text-tamtam-orange mb-4">TAM TAM</h3>
            <p className="text-gray-300 mb-4">
              Authentic Kenyan cuisine using fresh, locally-sourced ingredients. Experience the vibrant flavors of Kenya in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-tamtam-orange transition-colors hover:scale-110 transform duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h4 className="text-xl font-sweet-sans font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-tamtam-orange transition-colors relative link-hover">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tamtam-orange transition-colors relative link-hover">Our Story</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-tamtam-orange transition-colors relative link-hover">Locations</Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-300 hover:text-tamtam-orange transition-colors relative link-hover">Catering</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-tamtam-orange transition-colors relative link-hover">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h4 className="text-xl font-sweet-sans font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-tamtam-orange h-5 w-5 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 group-hover:text-white transition-colors">123 Kimathi Street, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 group-hover:text-white transition-colors">+254 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="text-tamtam-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@tamtam.com" className="text-gray-300 group-hover:text-white transition-colors">info@tamtam.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tam Tam Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
