
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-tamtam-light overflow-hidden">
      {/* Add Kenyan-inspired background pattern */}
      <div className="absolute inset-0 kenyan-texture opacity-70"></div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <span className="inline-block bg-tamtam-orange/10 text-tamtam-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Authentic Kenyan Experience
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-greneette font-bold text-tamtam-black mb-4 leading-tight">
              Taste The Soul of <span className="text-tamtam-orange relative">
                Kenya
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-tamtam-orange/30" viewBox="0 0 100 16" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <div className="h-1 w-24 bg-tamtam-green my-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-tamtam-gray mb-8 font-sweet-sans">
              Fresh ingredients, bold spices, and traditional recipes served with a modern twist. Experience the vibrant flavors that celebrate our heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white text-lg px-8 py-6 btn-kenyan group">
                View Our Menu
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
              <Link to="/locations">
                <Button variant="outline" className="border-tamtam-green text-tamtam-green hover:bg-tamtam-green hover:text-white text-lg px-8 py-6 transition-all duration-300">
                  Find Location <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tamtam-green/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tamtam-orange/20 rounded-full blur-2xl"></div>
            
            <div className="h-full w-full bg-gradient-to-r from-tamtam-orange/30 to-tamtam-green/30 flex items-center justify-center rounded-lg relative border border-white/20">
              {/* African tribal pattern overlay */}
              <div className="absolute inset-0 kenyan-pattern opacity-30"></div>
              
              <div className="text-center p-8 relative z-10 transform transition-transform duration-700 hover:scale-105">
                <div className="inline-block relative">
                  <span className="absolute -inset-1 bg-tamtam-orange/10 rounded-lg blur"></span>
                  <div className="relative text-5xl font-greneette font-bold text-tamtam-black mb-4">TAM TAM</div>
                </div>
                <div className="text-xl text-tamtam-black relative">
                  <span className="relative">
                    Authentic Kenyan Cuisine
                    <div className="absolute h-1 w-full bottom-0 left-0 bg-tamtam-green/40 rounded-full"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.55,68.29,120.07,67.23,175,66.07c55.44-1.34,104.88-7.54,145.51-15.17,40.8-7.68,75.55-18.63,120.15-26.06Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
