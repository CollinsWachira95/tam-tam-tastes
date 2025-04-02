
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Track scroll position to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      scrollPosition > 50 
        ? "bg-white/95 backdrop-blur-sm shadow-md py-2 border-b border-tamtam-orange/10" 
        : "bg-tamtam-light py-4"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="absolute -inset-1 -skew-y-3 bg-tamtam-orange rounded opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="text-2xl font-greneette font-bold text-tamtam-orange relative group-hover:scale-105 transition-transform duration-500">
                TAM TAM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Home</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/menu" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/menu") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Menu</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/menu") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/butchery" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/butchery") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Butchery</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/butchery") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/about") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Our Story</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/about") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/locations" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/locations") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Locations</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/locations") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
            <Link 
              to="/catering" 
              className={cn(
                "font-sweet-sans transition-colors duration-300 relative group",
                isActive("/catering") 
                  ? "text-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              <span>Catering</span>
              <span className={cn(
                "absolute bottom-[-5px] left-0 w-full h-0.5 bg-tamtam-orange transform transition-transform duration-300",
                isActive("/catering") 
                  ? "scale-x-100" 
                  : "scale-x-0 group-hover:scale-x-100"
              )}></span>
            </Link>
          </div>

          {/* Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-tamtam-green to-tamtam-green/90 hover:from-tamtam-green/90 hover:to-tamtam-green text-white flex items-center space-x-2 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg group">
              <span>Order Now</span>
              <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-tamtam-black p-2 hover:bg-tamtam-orange/10 rounded-full transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Home
              </Link>
              <Link 
                to="/menu" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/menu") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Menu
              </Link>
              <Link 
                to="/butchery" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/butchery") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Butchery
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/about") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Our Story
              </Link>
              <Link 
                to="/locations" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/locations") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Locations
              </Link>
              <Link 
                to="/catering" 
                className={cn(
                  "font-sweet-sans py-3 px-4 rounded-md transition-all duration-300 flex items-center",
                  isActive("/catering") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                <span className="text-tamtam-orange/70 mr-2">•</span>
                Catering
              </Link>
              <Button className="bg-gradient-to-r from-tamtam-green to-tamtam-green/90 text-white flex items-center justify-center space-x-2 mx-4 mt-2 shadow-md">
                <span>Order Now</span>
                <ShoppingBag size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
