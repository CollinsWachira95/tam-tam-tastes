
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span
              className={cn(
                "font-playfair font-bold text-2xl transition-colors duration-300",
                isScrolled ? "text-tamtam-orange-600" : "text-white"
              )}
            >
              TAM TAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname === "/" && "text-tamtam-orange-600"
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "px-4 py-2 text-sm font-medium bg-transparent hover:text-tamtam-orange-600 hover:bg-transparent transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname.includes("/menu") && "text-tamtam-orange-600"
                    )}
                  >
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/menu"
                            className="flex flex-col gap-1 p-4 rounded-lg bg-tamtam-cream hover:bg-tamtam-orange-50 transition-colors"
                          >
                            <div className="font-playfair font-medium">Full Menu</div>
                            <p className="text-sm text-tamtam-gray-600">
                              Browse our complete authentic Kenyan menu
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/menu/main-courses"
                            className="block p-3 rounded-lg hover:bg-accent"
                          >
                            Main Courses
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/menu/appetizers"
                            className="block p-3 rounded-lg hover:bg-accent"
                          >
                            Appetizers
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/menu/sides"
                            className="block p-3 rounded-lg hover:bg-accent"
                          >
                            Sides
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/menu/desserts"
                            className="block p-3 rounded-lg hover:bg-accent"
                          >
                            Desserts
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/butchery" 
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname === "/butchery" && "text-tamtam-orange-600"
                    )}
                  >
                    Butchery
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname === "/about" && "text-tamtam-orange-600"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/catering" 
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname === "/catering" && "text-tamtam-orange-600"
                    )}
                  >
                    Catering
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/locations" 
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:text-tamtam-orange-600 transition-colors",
                      isScrolled ? "text-tamtam-gray-700" : "text-white",
                      location.pathname === "/locations" && "text-tamtam-orange-600"
                    )}
                  >
                    Locations
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart">
              <button className="relative" aria-label="View cart">
                <ShoppingCart className={`h-5 w-5 ${isScrolled ? 'text-tamtam-gray-700' : 'text-white'}`} />
                <span className="absolute -top-1 -right-1 bg-tamtam-orange-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </Link>
            
            {/* Order Now Button */}
            <Link to="/menu" className="hidden md:block">
              <Button 
                className={`btn-premium ${isScrolled ? 'bg-tamtam-orange-600 hover:bg-tamtam-orange-700' : 'bg-white/90 text-tamtam-orange-600 hover:bg-white'}`}
              >
                Order Now
              </Button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-tamtam-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-tamtam-gray-700' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Menu
            </Link>
            <Link
              to="/butchery"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Butchery
            </Link>
            <Link
              to="/about"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              to="/catering"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Catering
            </Link>
            <Link
              to="/locations"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Locations
            </Link>
            <Link
              to="/cart"
              className="text-xl font-playfair font-medium p-3 border-b border-gray-100"
            >
              Cart
            </Link>
            <Link
              to="/menu"
              className="mt-4"
            >
              <Button className="w-full bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white text-lg py-6">
                Order Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
