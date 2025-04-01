
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  location?: string;
  date?: string;
}

const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michelle Omondi",
    review: "Tam Tam brings back memories of my grandmother's cooking in Kisumu. The Nyama Choma is perfectly seasoned and reminds me of home.",
    rating: 5,
    location: "Nairobi",
    date: "March 2023"
  },
  {
    id: 2,
    name: "David Kimani",
    review: "Finally, authentic Kenyan food that doesn't compromise on flavor! The Pilau is fragrant and delicious. A must-visit restaurant.",
    rating: 5,
    location: "Mombasa",
    date: "January 2023"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    review: "As someone new to Kenyan cuisine, Tam Tam was the perfect introduction. The staff explained each dish, and everything was delicious!",
    rating: 4,
    location: "New York",
    date: "February 2023"
  },
  {
    id: 4,
    name: "James Mwaniki",
    review: "The Ugali and Sukuma Wiki took me right back to my childhood. The ambiance is warm and welcoming, and the service is excellent.",
    rating: 5,
    location: "Kisumu",
    date: "April 2023"
  },
  {
    id: 5,
    name: "Emma Thompson",
    review: "I've tried many Kenyan restaurants, but Tam Tam truly stands out. Their Samosas are the best I've ever had!",
    rating: 5,
    location: "London",
    date: "May 2023"
  },
  {
    id: 6,
    name: "Daniel Kariuki",
    review: "The flavors at Tam Tam are authentic and rich. I particularly enjoyed their version of Mandazi - perfect with Kenyan tea!",
    rating: 4,
    location: "Eldoret",
    date: "June 2023"
  }
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>(allTestimonials.slice(0, 3));
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="bg-white section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-4">What Our Customers Say</h2>
          <p className="text-tamtam-gray max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their Tam Tam experience.
          </p>
        </div>

        {isMobile ? (
          // Mobile Carousel Version
          <Carousel className="w-full">
            <CarouselContent>
              {allTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        ) : (
          // Desktop Grid Version
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
        
        {!isMobile && visibleTestimonials.length === 3 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setVisibleTestimonials(allTestimonials)}
              className="text-tamtam-orange hover:text-tamtam-orange/80 font-sweet-sans font-medium transition-colors"
            >
              View More Testimonials
            </button>
          </div>
        )}
        
        {!isMobile && visibleTestimonials.length > 3 && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setVisibleTestimonials(allTestimonials.slice(0, 3))}
              className="text-tamtam-orange hover:text-tamtam-orange/80 font-sweet-sans font-medium transition-colors"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
    <CardContent className="p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < testimonial.rating ? "#F97316" : "none"}
            className={i < testimonial.rating ? "text-tamtam-orange" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-tamtam-gray italic mb-6 flex-grow">"{testimonial.review}"</p>
      <div>
        <p className="font-sweet-sans font-semibold text-tamtam-black">{testimonial.name}</p>
        {(testimonial.location || testimonial.date) && (
          <p className="text-sm text-tamtam-gray mt-1">
            {testimonial.location}{testimonial.location && testimonial.date ? ' • ' : ''}{testimonial.date}
          </p>
        )}
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
