
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";

const CateringHero = () => {
  const [videoMuted, setVideoMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMute = () => {
    setVideoMuted(!videoMuted);
    
    // Find the video element and toggle mute
    const videoElement = document.getElementById('heroVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
    }
  };

  return (
    <section className="relative h-[80vh] bg-tamtam-black overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-tamtam-black">
          <div className="w-12 h-12 rounded-full border-4 border-tamtam-orange border-t-transparent animate-spin"></div>
        </div>
      )}
      
      <div className="absolute inset-0 z-0">
        <video 
          id="heroVideo"
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src="https://res.cloudinary.com/demo/video/upload/c_scale,w_720/v1630566833/samples/elephants.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Video Controls */}
      <button 
        onClick={toggleMute} 
        className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
        aria-label={videoMuted ? "Unmute video" : "Mute video"}
      >
        {videoMuted ? <Volume2 className="h-5 w-5 text-white" /> : <VolumeX className="h-5 w-5 text-white" />}
      </button>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 tracking-tight animate-fade-in">
              Elevate Your Events with Authentic Kenyan Cuisine
            </h1>
            <p className="text-xl text-white/90 mb-8 font-opensans max-w-2xl mx-auto animate-fade-in">
              From breakfast meetings to large conferences, we bring the vibrant flavors of Kenya to your event.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#catering-packages">
                <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8 py-6 h-auto font-neutra text-lg group animate-fade-in shadow-premium-hover">
                  Explore Our Catering
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#inquiry-form">
                <Button variant="outline" className="border-white bg-transparent hover:bg-white/20 text-white px-8 py-6 h-auto font-neutra text-lg group animate-fade-in">
                  Get a Quote
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-16 left-16 w-12 h-12 border-t-4 border-l-4 border-white/30 rounded-tl-lg"></div>
      <div className="absolute top-16 right-16 w-12 h-12 border-t-4 border-r-4 border-white/30 rounded-tr-lg"></div>
      <div className="absolute bottom-16 left-16 w-12 h-12 border-b-4 border-l-4 border-white/30 rounded-bl-lg"></div>
      <div className="absolute bottom-16 right-16 w-12 h-12 border-b-4 border-r-4 border-white/30 rounded-br-lg"></div>
    </section>
  );
};

export default CateringHero;
