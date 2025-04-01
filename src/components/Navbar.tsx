
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-tamtam-light sticky top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-greneette font-bold text-tamtam-orange">
              TAM TAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition">
              Home
            </Link>
            <Link to="/menu" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition">
              Menu
            </Link>
            <Link to="/about" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition">
              Our Story
            </Link>
            <Link to="/locations" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition">
              Locations
            </Link>
            <Link to="/catering" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition">
              Catering
            </Link>
          </div>

          {/* Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex items-center space-x-2">
              <span>Order Now</span>
              <ShoppingBag size={16} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-tamtam-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition py-2 px-4" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/menu" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition py-2 px-4" onClick={toggleMenu}>
                Menu
              </Link>
              <Link to="/about" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition py-2 px-4" onClick={toggleMenu}>
                Our Story
              </Link>
              <Link to="/locations" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition py-2 px-4" onClick={toggleMenu}>
                Locations
              </Link>
              <Link to="/catering" className="font-sweet-sans text-tamtam-black hover:text-tamtam-orange transition py-2 px-4" onClick={toggleMenu}>
                Catering
              </Link>
              <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex items-center space-x-2 mx-4">
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
