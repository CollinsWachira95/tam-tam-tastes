
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

interface HeroSlide {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    title: "Experience Authentic Kenyan Cuisine",
    description: "Fresh ingredients, bold spices, and traditional recipes served with a modern twist.",
    link: "/menu",
    linkText: "View Our Menu"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Discover Our Butchery",
    description: "Premium cuts of meat, sourced from local farmers and prepared by expert butchers.",
    link: "/butchery",
    linkText: "Visit Butchery"
  },
  {
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Catering For All Occasions",
    description: "From small gatherings to large events, we bring the taste of Kenya to your celebration.",
    link: "/catering",
    linkText: "Explore Catering"
  },
  {
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Find Us Near You",
    description: "Visit one of our restaurant or butchery locations throughout Kenya.",
    link: "/locations",
    linkText: "Find Locations"
  }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-tamtam-light overflow-hidden h-[600px]">
      {/* Add Kenyan-inspired background pattern */}
      <div className="absolute inset-0 kenyan-texture opacity-70"></div>
      
      <Carousel className="h-full">
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover brightness-[0.7]"
                />
                
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="container-custom">
                    <div className="max-w-xl animate-fade-in pl-6 md:pl-12 backdrop-blur-sm bg-black/20 p-8 rounded-lg">
                      <span className="inline-block bg-tamtam-orange/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Authentic Kenyan Experience
                      </span>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-neutra font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <div className="h-1 w-24 bg-tamtam-green my-6 rounded-full"></div>
                      <p className="text-lg md:text-xl text-white mb-8 font-neutra">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to={slide.link}>
                          <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white text-lg px-8 py-6 btn-kenyan group font-neutra">
                            {slide.linkText}
                            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white" />
        <CarouselNext className="right-4 text-white" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
