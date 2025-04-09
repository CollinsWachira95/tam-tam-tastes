
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger
} from "@/components/ui/popover";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

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
            <span className="text-2xl font-bold text-tamtam-orange-600 font-playfair">
              Tam Tam
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`nav-link ${
                location.pathname === "/menu" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Menu
            </Link>
            <Link
              to="/butchery"
              className={`nav-link ${
                location.pathname === "/butchery" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Butchery
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "text-tamtam-orange-600" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/catering"
              className={`nav-link ${
                location.pathname === "/catering" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Catering
            </Link>
            <Link
              to="/locations"
              className={`nav-link ${
                location.pathname === "/locations" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Locations
            </Link>
            <Link
              to="/reservations"
              className={`nav-link ${
                location.pathname === "/reservations" ? "text-tamtam-orange-600" : ""
              }`}
            >
              Reservations
            </Link>
          </div>

          {/* Right Side - Auth and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                    <span className="font-semibold text-tamtam-orange-600">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <div className="grid gap-4">
                    <div className="font-medium">{user?.name}</div>
                    <hr />
                    <Link 
                      to="/profile" 
                      className="flex items-center gap-2 text-sm hover:text-tamtam-orange-600"
                    >
                      <User size={14} /> Your Profile
                    </Link>
                    <Link 
                      to="/reservations" 
                      className="flex items-center gap-2 text-sm hover:text-tamtam-orange-600"
                    >
                      Make a Reservation
                    </Link>
                    <hr />
                    <button
                      onClick={logout} 
                      className="flex items-center gap-2 text-sm hover:text-tamtam-orange-600"
                    >
                      Sign Out
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    size="sm" 
                    className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            
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
          <Link to="/" className="mobile-nav-link block">
            Home
          </Link>
          <Link to="/menu" className="mobile-nav-link block">
            Menu
          </Link>
          <Link to="/butchery" className="mobile-nav-link block">
            Butchery
          </Link>
          <Link to="/about" className="mobile-nav-link block">
            About
          </Link>
          <Link to="/catering" className="mobile-nav-link block">
            Catering
          </Link>
          <Link to="/locations" className="mobile-nav-link block">
            Locations
          </Link>
          <Link to="/reservations" className="mobile-nav-link block">
            Reservations
          </Link>
          
          <div className="pt-4 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-tamtam-orange-200 flex items-center justify-center mr-3">
                    <span className="font-semibold text-tamtam-orange-600">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div className="font-medium">{user?.name}</div>
                </div>
                <Link to="/profile" className="mobile-nav-link block">
                  Your Profile
                </Link>
                <button
                  onClick={logout} 
                  className="mobile-nav-link block w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
