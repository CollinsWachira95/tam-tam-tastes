
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface VideoSectionProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  buttonText: string;
  buttonLink: string;
  isReversed?: boolean;
  posterUrl?: string;
}

const VideoSection = ({
  title,
  subtitle,
  description,
  videoUrl,
  buttonText,
  buttonLink,
  isReversed = false,
  posterUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
}: VideoSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="bg-white section relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 kenyan-texture opacity-10"></div>
      
      <div className="container-custom">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:flex lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-6">
              {title}
            </h2>
            <div className="h-1 w-24 bg-tamtam-green rounded-full mb-6"></div>
            <p className="text-tamtam-gray mb-8 font-neutra">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white group font-neutra">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
          
          {/* Video Player */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl group animate-fade-in">
            {/* Loading indicator */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 rounded-full border-4 border-tamtam-orange border-t-transparent animate-spin"></div>
              </div>
            )}
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-tamtam-orange/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-tamtam-green/20 rounded-full blur-xl"></div>
            
            {/* Video with controls */}
            <div className="relative z-10 border-8 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.01]">
              <video
                className="w-full h-full object-cover"
                controls
                poster={posterUrl}
                preload="metadata"
                onLoadedData={() => setIsLoading(false)}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay with play icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="p-4 bg-white/80 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tamtam-orange">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-tamtam-orange/50 rounded-tl-lg"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-tamtam-orange/50 rounded-tr-lg"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-tamtam-orange/50 rounded-bl-lg"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-tamtam-orange/50 rounded-br-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
