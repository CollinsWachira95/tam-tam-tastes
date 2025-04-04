
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={heroRef} className="relative bg-tamtam-cream overflow-hidden min-h-[85vh] flex flex-col justify-center">
      {/* Enhanced Kenyan-inspired background pattern */}
      <div className="absolute inset-0 kenyan-texture opacity-70"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-tamtam-orange-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-tamtam-green-100/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="fade-up">
              <span className="inline-block bg-tamtam-orange-500/10 text-tamtam-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 fancy-badge">
                <span className="mr-2">✦</span>
                Authentic Kenyan Experience
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-neutra font-bold text-tamtam-black mb-4 leading-tight">
                Taste The Soul of{" "}
                <span className="relative text-tamtam-orange-500">
                  Kenya
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-tamtam-green-400/30 rounded-full"></span>
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-tamtam-green-400 to-tamtam-green-600 my-6 rounded-full"></div>
              <p className="text-lg md:text-xl text-tamtam-gray-600 mb-8 font-neutra max-w-xl">
                Fresh ingredients, bold spices, and traditional recipes served with a modern twist. Experience the vibrant flavors that celebrate our heritage and transport you to the heart of Kenya.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/menu">
                  <Button className="btn-premium group">
                    View Our Menu
                    <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </Link>
                <Link to="/locations">
                  <Button variant="outline" className="btn-outline-premium group">
                    Find Location
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="fade-up delay-300">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-premium">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-tamtam-green-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tamtam-orange-500/20 rounded-full blur-2xl"></div>
              
              {/* Card background with refined styling */}
              <div className="h-full w-full bg-gradient-to-br from-tamtam-orange-100/90 to-tamtam-green-50/90 flex items-center justify-center rounded-2xl relative border border-white/30 backdrop-blur-sm shadow-elegant overflow-hidden group transition-all duration-700 hover:shadow-intense">
                {/* Enhanced African tribal pattern overlay */}
                <div className="absolute inset-0 kenyan-pattern opacity-20 transition-opacity duration-500 group-hover:opacity-30"></div>
                <div className="absolute inset-0 tribal-pattern opacity-10 transition-opacity duration-500 group-hover:opacity-20"></div>
                
                <div className="text-center p-8 relative z-10 transform transition-transform duration-700 hover:scale-105">
                  <div className="inline-block relative mb-4">
                    <span className="absolute -inset-1 bg-tamtam-orange-500/10 rounded-lg blur"></span>
                    <div className="relative px-8 py-4 backdrop-blur-sm bg-white/40 rounded-xl">
                      <div className="text-5xl md:text-6xl font-neutra font-bold text-tamtam-black mb-2 tracking-wide">TAM TAM</div>
                      <div className="h-1 w-1/2 mx-auto bg-tamtam-green-500/40 rounded-full my-2"></div>
                    </div>
                  </div>
                  
                  <div className="text-xl text-tamtam-black/90 relative font-neutra mt-6">
                    <span className="relative inline-block after:content-[''] after:absolute after:h-1 after:w-full after:bottom-0 after:left-0 after:bg-tamtam-green-500/40 after:rounded-full">
                      Authentic Kenyan Cuisine
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-tamtam-orange-400/50 rounded-tl-lg"></div>
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-tamtam-orange-400/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-tamtam-orange-400/50 rounded-bl-lg"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-tamtam-orange-400/50 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.55,68.29,120.07,67.23,175,66.07c55.44-1.34,104.88-7.54,145.51-15.17,40.8-7.68,75.55-18.63,120.15-26.06Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
