
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const LocationSection = () => {
  return (
    <section className="bg-tamtam-black text-white section relative overflow-hidden">
      {/* African-inspired pattern overlay */}
      <div className="absolute inset-0 kenyan-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tamtam-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tamtam-green/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-tamtam-orange/20 text-tamtam-orange rounded-full text-sm font-medium mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-6 text-tamtam-orange">
              Visit Us <span className="text-white relative inline-block">
                Today
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-tamtam-orange/60" viewBox="0 0 100 16" preserveAspectRatio="none">
                  <path d="M0,16 Q50,0 100,16" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h2>
            
            <div className="h-1 w-16 bg-tamtam-green rounded-full my-6"></div>
            
            <p className="text-gray-300 mb-8">
              Located in the heart of Nairobi, our restaurant offers a warm, welcoming atmosphere where you can enjoy authentic Kenyan cuisine. Come experience the flavors of Kenya in a modern setting inspired by traditional aesthetics.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-3 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <MapPin className="text-tamtam-orange h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1 group-hover:text-tamtam-orange transition-colors">Address</h4>
                  <p className="text-gray-300">123 Kimathi Street, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-3 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <Phone className="text-tamtam-orange h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1 group-hover:text-tamtam-orange transition-colors">Contact</h4>
                  <p className="text-gray-300">+254 123 456 789</p>
                  <p className="text-gray-300">info@tamtam.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                <div className="bg-tamtam-orange/20 p-3 rounded-full group-hover:bg-tamtam-orange/30 transition-colors">
                  <Clock className="text-tamtam-orange h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1 group-hover:text-tamtam-orange transition-colors">Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-300">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            
            <Link to="/locations">
              <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500">
            <div className="h-[400px] bg-gradient-to-br from-tamtam-black to-tamtam-orange/40 flex items-center justify-center p-8 relative">
              {/* Pattern overlay */}
              <div className="absolute inset-0 kenyan-texture opacity-10"></div>
              
              <div className="bg-tamtam-black/60 p-8 rounded-lg backdrop-blur-sm border border-white/10 relative z-10 hover:scale-105 transition-transform duration-500">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-tamtam-orange"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-tamtam-orange"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-tamtam-orange"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-tamtam-orange"></div>
                
                <h3 className="text-2xl font-greneette text-white mb-2 relative inline-block">
                  Reserve a Table
                  <div className="h-1 w-full bg-tamtam-orange/50 absolute -bottom-1 left-0 rounded-full"></div>
                </h3>
                <p className="text-gray-300 mb-6">Skip the wait and book your dining experience in advance.</p>
                <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white w-full group rounded-full py-6">
                  Make a Reservation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
