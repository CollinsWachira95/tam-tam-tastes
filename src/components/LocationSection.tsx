
import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="bg-tamtam-black text-white section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-6 text-tamtam-orange">
              Visit Us Today
            </h2>
            <p className="text-gray-300 mb-8">
              Located in the heart of Nairobi, our restaurant offers a warm, welcoming atmosphere where you can enjoy authentic Kenyan cuisine. Come experience the flavors of Kenya in a modern setting.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-tamtam-orange h-6 w-6 mt-1" />
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">123 Kimathi Street, Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-tamtam-orange h-6 w-6 mt-1" />
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1">Contact</h4>
                  <p className="text-gray-300">+254 123 456 789</p>
                  <p className="text-gray-300">info@tamtam.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-tamtam-orange h-6 w-6 mt-1" />
                <div>
                  <h4 className="text-lg font-sweet-sans font-semibold mb-1">Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-300">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white">
              Get Directions
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="h-[400px] bg-gradient-to-br from-tamtam-black to-tamtam-orange/40 flex items-center justify-center p-8">
              <div className="bg-tamtam-black/60 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-greneette text-white mb-4">Reserve a Table</h3>
                <p className="text-gray-300 mb-4">Skip the wait and book your dining experience in advance.</p>
                <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white w-full">
                  Make a Reservation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
