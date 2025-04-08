
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-tamtam-green/20 to-tamtam-cream"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-tamtam-black/20 to-white/0"></div>
        <div className="kenyan-pattern opacity-10 absolute inset-0"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-5">
            Our Purpose
          </span>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-tamtam-black leading-tight tracking-tight">
            Building healthier communities by connecting people to{" "}
            <span className="text-tamtam-orange relative inline-block">
              authentic Kenyan cuisine
              <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-tamtam-orange/30" viewBox="0 0 100 16" preserveAspectRatio="none">
                <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
              </svg>
            </span>
          </h1>
          
          <div className="h-0.5 w-20 bg-tamtam-green rounded-full my-8"></div>
          
          <p className="text-tamtam-gray mb-8 text-lg leading-relaxed">
            Our mission is to preserve and share Kenya's rich culinary heritage while supporting sustainable food systems and fostering community connections. We believe food should nourish not just the body, but also cultural understanding.
          </p>
          
          <Button className="bg-tamtam-black hover:bg-tamtam-black/90 text-white rounded-full shadow-elegant group px-8 py-6 h-auto font-neutra">
            Learn Our Story 
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-24 h-24 border-r-4 border-t-4 border-tamtam-orange/20 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-4 border-b-4 border-tamtam-orange/20 rounded-bl-lg"></div>
    </div>
  );
};

export default AboutHero;
