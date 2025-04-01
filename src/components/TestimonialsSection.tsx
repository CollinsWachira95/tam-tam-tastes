
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michelle Omondi",
    review: "Tam Tam brings back memories of my grandmother's cooking in Kisumu. The Nyama Choma is perfectly seasoned and reminds me of home.",
    rating: 5
  },
  {
    id: 2,
    name: "David Kimani",
    review: "Finally, authentic Kenyan food that doesn't compromise on flavor! The Pilau is fragrant and delicious. A must-visit restaurant.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    review: "As someone new to Kenyan cuisine, Tam Tam was the perfect introduction. The staff explained each dish, and everything was delicious!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-4">What Our Customers Say</h2>
          <p className="text-tamtam-gray max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their Tam Tam experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
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
                <p className="text-tamtam-gray italic mb-6">"{testimonial.review}"</p>
                <p className="font-sweet-sans font-semibold text-tamtam-black">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
