
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Tam Tam" className="h-10 mr-2" />
            <span className="text-2xl font-bold text-tamtam-orange-600">
              Tam Tam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`nav-link font-semibold ${
                location.pathname === "/" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`nav-link font-semibold ${
                location.pathname === "/menu" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/butchery"
              className={`nav-link font-semibold ${
                location.pathname === "/butchery" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              Butchery
            </Link>
            <Link
              to="/about"
              className={`nav-link font-semibold ${
                location.pathname === "/about" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/catering"
              className={`nav-link font-semibold ${
                location.pathname === "/catering" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              Catering
            </Link>
            <Link
              to="/locations"
              className={`nav-link font-semibold ${
                location.pathname === "/locations" ? "text-tamtam-orange-600" : "text-tamtam-black"
              }`}
            >
              Locations
            </Link>
          </div>

          {/* Right Side - Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" className="relative p-2">
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-tamtam-orange-600 text-white text-xs flex items-center justify-center rounded-full">
                  2
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="mr-4">
              <Button variant="ghost" size="sm" className="relative p-1">
                <ShoppingCart size={18} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-tamtam-orange-600 text-white text-[8px] flex items-center justify-center rounded-full">
                  2
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
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
          <Link to="/" className="mobile-nav-link block font-semibold">
            Home
          </Link>
          <Link to="/menu" className="mobile-nav-link block font-semibold">
            Menu
          </Link>
          <Link to="/butchery" className="mobile-nav-link block font-semibold">
            Butchery
          </Link>
          <Link to="/about" className="mobile-nav-link block font-semibold">
            About
          </Link>
          <Link to="/catering" className="mobile-nav-link block font-semibold">
            Catering
          </Link>
          <Link to="/locations" className="mobile-nav-link block font-semibold">
            Locations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
