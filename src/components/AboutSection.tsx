
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-tamtam-light section relative">
      {/* Kenyan pattern background */}
      <div className="absolute inset-0 kenyan-texture opacity-80"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl transform hover:rotate-1 transition-transform duration-500 relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-tamtam-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tamtam-green/20 rounded-full blur-2xl"></div>
            
            <div className="h-[400px] bg-gradient-to-br from-tamtam-green/30 to-tamtam-orange/30 flex items-center justify-center p-8 relative border border-white/50">
              {/* African pattern overlay */}
              <div className="absolute inset-0 kenyan-pattern opacity-30"></div>
              
              <div className="text-center relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="font-greneette text-4xl mb-4 text-tamtam-black relative inline-block">
                  Our Story
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-tamtam-orange/60" viewBox="0 0 100 16" preserveAspectRatio="none">
                    <path d="M0,16 Q50,0 100,16" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="bg-white/80 h-px w-24 mx-auto my-4"></div>
                <div className="font-sweet-sans text-lg text-tamtam-black/80 relative">
                  From Nairobi to Your Table
                  <span className="absolute -right-4 -top-4 text-3xl text-tamtam-orange/70">•</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-6 text-tamtam-black">
              From Kenya With <span className="text-tamtam-orange relative inline-block">
                Love
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-tamtam-orange/30" viewBox="0 0 100 16" preserveAspectRatio="none">
                  <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                </svg>
              </span>
            </h2>
            
            <div className="h-1 w-16 bg-tamtam-green rounded-full my-6"></div>
            
            <p className="text-tamtam-gray mb-4 relative border-l-2 border-tamtam-orange/30 pl-4">
              Founded in 2018 by Chef James Kamau, Tam Tam brings the authentic flavors of Kenya to food lovers. Our journey began with a simple mission: to share the rich culinary heritage of Kenya through dishes that honor tradition while embracing innovation.
            </p>
            <p className="text-tamtam-gray mb-6">
              We source ingredients locally whenever possible, supporting Kenyan farmers and ensuring the freshest flavors in every dish. Our spices are imported directly from Kenya, creating an authentic experience that transports you to the streets of Nairobi.
            </p>
            
            {/* Custom divider */}
            <hr className="kenyan-divider w-1/3 my-6" />
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about">
                <Button className="bg-tamtam-black hover:bg-tamtam-black/90 text-white rounded-full shadow-md group">
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
