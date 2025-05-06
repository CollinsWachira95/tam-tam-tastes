
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const SustainabilityCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const sustainabilityItems = [
    {
      title: "Local Sourcing",
      description: "We source from local farmers to reduce carbon footprint and support the community. Our commitment to sustainability extends to our daily practices.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Waste Reduction",
      description: "We've implemented comprehensive waste reduction strategies, from composting food scraps to using every part of our ingredients in creative ways.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "All our takeout containers and utensils are made from biodegradable materials, reducing our environmental impact and plastic waste.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    }
  ];

  return (
    <section className="section bg-white py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tamtam-green/10 text-tamtam-green rounded-full text-sm font-medium mb-4 font-playfair">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 relative inline-block">
            Sustainability
            <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto font-playfair">
            Our commitment to sustainability guides everything we do, from sourcing ingredients to serving our guests.
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto px-4" opts={{
          align: "center",
          loop: true,
        }}>
          <CarouselContent>
            {sustainabilityItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-3/4 lg:basis-3/4">
                <div className="p-1">
                  <Card className="border-0 overflow-hidden shadow-premium">
                    <CardContent className="flex flex-col md:flex-row p-0">
                      <div className="w-full md:w-1/2 h-64 md:h-auto">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-playfair font-bold text-tamtam-black mb-4">
                          {item.title}
                        </h3>
                        <p className="text-tamtam-gray font-playfair">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === current - 1 ? 'bg-tamtam-orange' : 'bg-tamtam-gray/30'}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default SustainabilityCarousel;
