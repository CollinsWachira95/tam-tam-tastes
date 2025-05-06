
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen 
          ? "bg-white shadow-md py-3" 
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Tam Tam" className="h-14 mr-2" />
            <span className={`text-2xl font-extrabold font-playfair tracking-tight ${
              isScrolled || isOpen ? "text-tamtam-orange-600" : "text-white"
            }`}>
              Tam Tam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/butchery", label: "Butchery" },
              { path: "/about", label: "About" },
              { path: "/catering", label: "Catering" },
              { path: "/locations", label: "Locations" },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link font-playfair text-base tracking-wide transition-colors duration-300 hover:text-tamtam-orange-500 ${
                  location.pathname === path 
                    ? "text-tamtam-orange-600 font-semibold" 
                    : isScrolled ? "text-tamtam-black" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side - Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button 
                variant={isScrolled ? "ghost" : "outline"} 
                className={`relative p-2 font-playfair ${
                  !isScrolled && "border-white text-white hover:bg-white/20"
                }`}
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-tamtam-orange-600 text-white text-xs flex items-center justify-center rounded-full font-medium">
                  2
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-4">
              <Button 
                variant={isScrolled ? "ghost" : "outline"} 
                size="sm" 
                className={`relative p-1 font-playfair ${
                  !isScrolled && "border-white text-white hover:bg-white/20"
                }`}
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-tamtam-orange-600 text-white text-[8px] flex items-center justify-center rounded-full font-medium">
                  2
                </span>
              </Button>
            </Link>
            <Button
              variant={isScrolled ? "ghost" : "outline"}
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`font-playfair ${!isScrolled && "border-white text-white hover:bg-white/20"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen pb-8" : "max-h-0"
        }`}
      >
        <div className="container-custom mx-auto px-4 space-y-4 py-2">
          {[
            { path: "/", label: "Home" },
            { path: "/menu", label: "Menu" },
            { path: "/butchery", label: "Butchery" },
            { path: "/about", label: "About" },
            { path: "/catering", label: "Catering" },
            { path: "/locations", label: "Locations" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`mobile-nav-link block py-3 font-playfair border-b border-gray-100 text-lg ${
                location.pathname === path ? "text-tamtam-orange-600" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
