import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  subtext?: string;
  link: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Experience Authentic Kenyan Cuisine",
    description: "Fresh ingredients, bold spices, and traditional recipes served with a modern twist.",
    subtext: "Where tradition meets modernity in every flavorful bite",
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
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get current slide
  const currentSlide = heroSlides[currentIndex];

  return (
    <div className="relative bg-tamtam-light overflow-hidden h-[650px] md:h-[700px] -mt-[80px]">
      {/* Background pattern */}
      <div className="absolute inset-0 african-pattern opacity-30"></div>
      
      {/* Slides */}
      <div className="h-full relative">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image */}
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-tamtam-black/70 via-tamtam-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-start pt-20">
              <div className="container-custom">
                <Link to={slide.link}>
                  <div className="max-w-2xl pl-6 md:pl-12 bg-black/40 backdrop-blur-[3px] p-8 rounded-lg border border-white/20 shadow-lg">
                    <span className="inline-block bg-tamtam-orange-600/90 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 tracking-wide font-playfair">
                      Authentic Kenyan Experience
                    </span>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-4 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    
                    <div className="h-0.5 w-28 bg-amber-400 my-6 rounded-full"></div>
                    
                    <p className="text-lg md:text-xl text-white/90 mb-4 tracking-tight font-playfair">
                      {slide.description}
                    </p>
                    
                    {slide.subtext && (
                      <p className="text-base italic text-white/80 mb-8 font-playfair">
                        {slide.subtext}
                      </p>
                    )}
                    
                    <Button 
                      className="mt-4 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white group transition-all duration-300 shadow-md font-playfair"
                    >
                      Explore Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation controls */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 z-20 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-tamtam-black/40 hover:bg-tamtam-black/60 text-white border border-white/20 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 z-20 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-tamtam-black/40 hover:bg-tamtam-black/60 text-white border border-white/20 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-tamtam-orange-600 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
