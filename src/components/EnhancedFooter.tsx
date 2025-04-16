
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">About TamTam</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              TamTam offers authentic Kenyan cuisine using fresh, locally-sourced ingredients. Experience the rich flavors and traditions of Kenya in a modern dining setting.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/catering" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  Catering
                </Link>
              </li>
              <li>
                <Link to="/butchery" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  Butchery
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-tamtam-orange-400 transition-colors text-sm">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-tamtam-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Mombasa Road<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-tamtam-orange-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+254 700 123 456</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-tamtam-orange-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@tamtam.com</p>
              </div>
              
              <div className="pt-2">
                <h5 className="text-sm font-semibold mb-2">Hours</h5>
                <p className="text-gray-300 text-sm">
                  Monday - Friday: 11AM - 10PM<br />
                  Saturday - Sunday: 10AM - 11PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <NewsletterSignup 
              variant="footer"
              title="Join Our Mailing List"
              description="Subscribe to receive special offers and updates from TamTam."
              buttonText="Subscribe"
            />
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} TamTam Authentic Kenyan Cuisine. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-tamtam-orange-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
