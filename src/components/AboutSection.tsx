
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-tamtam-cream section relative overflow-visible">
      {/* Kenyan pattern background */}
      <div className="absolute inset-0 kenyan-texture opacity-50"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-elegant transform hover:rotate-1 transition-transform duration-700 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-tamtam-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tamtam-green/20 rounded-full blur-2xl"></div>
            
            <div className="h-[450px] bg-gradient-to-br from-tamtam-green/20 to-tamtam-orange/20 flex items-center justify-center p-8 relative border border-white/70 rounded-lg">
              {/* African pattern overlay */}
              <div className="absolute inset-0 kenyan-pattern opacity-20 rounded-lg"></div>
              
              <div className="text-center relative z-10 transform hover:scale-105 transition-transform duration-700">
                <div className="font-neutra text-4xl mb-6 text-tamtam-black relative inline-block">
                  Our Story
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-tamtam-orange/60" viewBox="0 0 100 16" preserveAspectRatio="none">
                    <path d="M0,16 Q50,0 100,16" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="bg-white/90 h-px w-24 mx-auto my-5"></div>
                <div className="font-neutra text-lg text-tamtam-black/80 relative">
                  From Nairobi to Your Table
                  <span className="absolute -right-4 -top-4 text-3xl text-tamtam-orange/70">•</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-5">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-6 text-tamtam-black leading-tight tracking-tight">
              From Kenya With <span className="text-tamtam-orange relative inline-block">
                Love
                <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-tamtam-orange/30" viewBox="0 0 100 16" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h2>
            
            <div className="h-0.5 w-20 bg-tamtam-green rounded-full my-8"></div>
            
            <p className="text-tamtam-gray mb-5 relative border-l-2 border-tamtam-orange/40 pl-5 text-lg leading-relaxed">
              Founded in 2018 by Chef James Kamau, Tam Tam brings the authentic flavors of Kenya to food lovers. Our journey began with a simple mission: to share the rich culinary heritage of Kenya through dishes that honor tradition while embracing innovation.
            </p>
            <p className="text-tamtam-gray mb-8 text-lg leading-relaxed">
              We source ingredients locally whenever possible, supporting Kenyan farmers and ensuring the freshest flavors in every dish. Our spices are imported directly from Kenya, creating an authentic experience that transports you to the streets of Nairobi.
            </p>
            
            {/* Custom divider */}
            <hr className="kenyan-divider w-1/3 my-8" />
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about">
                <Button className="bg-tamtam-black hover:bg-tamtam-black/90 text-white rounded-full shadow-elegant group px-8 py-6 h-auto font-neutra">
                  Read Our Full Story 
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
