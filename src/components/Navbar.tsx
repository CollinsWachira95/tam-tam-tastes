
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
      "sticky top-0 z-50 transition-all duration-300",
      scrollPosition > 50 
        ? "bg-white shadow-md py-2" 
        : "bg-tamtam-light py-4"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-greneette font-bold text-tamtam-orange group-hover:scale-105 transition-transform">
              TAM TAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={cn(
                "font-sweet-sans transition-colors duration-200 relative",
                isActive("/") 
                  ? "text-tamtam-orange after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={cn(
                "font-sweet-sans transition-colors duration-200 relative",
                isActive("/menu") 
                  ? "text-tamtam-orange after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "font-sweet-sans transition-colors duration-200 relative",
                isActive("/about") 
                  ? "text-tamtam-orange after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              Our Story
            </Link>
            <Link 
              to="/locations" 
              className={cn(
                "font-sweet-sans transition-colors duration-200 relative",
                isActive("/locations") 
                  ? "text-tamtam-orange after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              Locations
            </Link>
            <Link 
              to="/catering" 
              className={cn(
                "font-sweet-sans transition-colors duration-200 relative",
                isActive("/catering") 
                  ? "text-tamtam-orange after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-tamtam-orange" 
                  : "text-tamtam-black hover:text-tamtam-orange"
              )}
            >
              Catering
            </Link>
          </div>

          {/* Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex items-center space-x-2 hover:scale-105 transition-transform">
              <span>Order Now</span>
              <ShoppingBag size={16} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-tamtam-black p-2 hover:bg-tamtam-light rounded-full transition-colors">
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
                  "font-sweet-sans py-2 px-4 rounded-md transition-all duration-200",
                  isActive("/") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={cn(
                  "font-sweet-sans py-2 px-4 rounded-md transition-all duration-200",
                  isActive("/menu") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "font-sweet-sans py-2 px-4 rounded-md transition-all duration-200",
                  isActive("/about") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                Our Story
              </Link>
              <Link 
                to="/locations" 
                className={cn(
                  "font-sweet-sans py-2 px-4 rounded-md transition-all duration-200",
                  isActive("/locations") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                Locations
              </Link>
              <Link 
                to="/catering" 
                className={cn(
                  "font-sweet-sans py-2 px-4 rounded-md transition-all duration-200",
                  isActive("/catering") 
                    ? "bg-tamtam-orange/10 text-tamtam-orange" 
                    : "text-tamtam-black hover:bg-tamtam-orange/5 hover:text-tamtam-orange"
                )}
              >
                Catering
              </Link>
              <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex items-center space-x-2 mx-4 mt-2">
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
