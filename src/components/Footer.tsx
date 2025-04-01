
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tamtam-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-greneette text-tamtam-orange mb-4">TAM TAM</h3>
            <p className="text-gray-300 mb-4">
              Authentic Kenyan cuisine using fresh, locally-sourced ingredients. Experience the vibrant flavors of Kenya in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-tamtam-orange transition">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-tamtam-orange transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-tamtam-orange transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-sweet-sans font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-tamtam-orange transition">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tamtam-orange transition">Our Story</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-tamtam-orange transition">Locations</Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-300 hover:text-tamtam-orange transition">Catering</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-tamtam-orange transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-sweet-sans font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-tamtam-orange mt-1" />
                <p className="text-gray-300">123 Kimathi Street, Nairobi, Kenya</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-tamtam-orange" />
                <p className="text-gray-300">+254 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-tamtam-orange" />
                <p className="text-gray-300">info@tamtam.com</p>
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
