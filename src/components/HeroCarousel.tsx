
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  subtext?: string; // Added field for additional context
  link: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Experience Authentic Kenyan Cuisine",
    description: "Fresh ingredients, bold spices, and traditional recipes served with a modern twist.",
    subtext: "Where tradition meets modernity in every flavorful bite", // Added context
    link: "/menu"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Discover Our Butchery",
    description: "Premium cuts of meat, sourced from local farmers and prepared by expert butchers.",
    subtext: "Quality and tradition in every cut, from our family to yours",
    link: "/butchery"
  },
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Catering For All Occasions",
    description: "From small gatherings to large events, we bring the taste of Kenya to your celebration.",
    subtext: "Making your special moments memorable with authentic Kenyan flavors",
    link: "/catering"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Find Us Near You",
    description: "Visit one of our restaurant or butchery locations throughout Kenya.",
    subtext: "Experience the warmth of Kenyan hospitality at any of our locations",
    link: "/locations"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Add animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 6000); // Slightly longer interval for better reading time
    
    return () => clearInterval(interval);
  }, []);

  // Add scroll observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={carouselRef} className="relative bg-tamtam-light overflow-hidden h-[700px]">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 african-pattern opacity-40"></div>
      
      <Carousel className="h-full">
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full overflow-hidden">
                {/* Image with enhanced overlay for better text contrast */}
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-[1.01] hover:scale-105 transition-transform duration-7000"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-tamtam-black/70 via-tamtam-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="container-custom">
                    <Link to={slide.link}>
                      <div 
                        className={`max-w-2xl pl-6 md:pl-12 bg-black/40 backdrop-blur-[3px] p-8 rounded-lg border border-white/20 shadow-elegant fade-in-element ${isVisible ? 'visible' : ''}`}
                      >
                        <span className="inline-block bg-tamtam-orange-600/90 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 tracking-wide">
                          Authentic Kenyan Experience
                        </span>
                        
                        {/* Enhanced typography for headings */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight tracking-tight">
                          {slide.title}
                        </h1>
                        
                        <div className="h-0.5 w-28 bg-tamtam-gold my-6 rounded-full"></div>
                        
                        <p className="text-lg md:text-xl text-white/90 mb-4 font-opensans tracking-tight">
                          {slide.description}
                        </p>
                        
                        {/* Added subtext for context */}
                        {slide.subtext && (
                          <p className="text-base italic text-white/80 mb-8 font-opensans">
                            {slide.subtext}
                          </p>
                        )}
                        
                        {/* Enhanced CTA button */}
                        <Button 
                          className="mt-4 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white group transition-all duration-300 font-opensans"
                        >
                          Explore Now
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced navigation controls */}
        <CarouselPrevious className="left-4 text-white bg-tamtam-black/40 hover:bg-tamtam-black/60 transition-colors duration-300 border-white/20" />
        <CarouselNext className="right-4 text-white bg-tamtam-black/40 hover:bg-tamtam-black/60 transition-colors duration-300 border-white/20" />
        
        {/* Added carousel indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-tamtam-orange-600 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
