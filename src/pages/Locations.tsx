
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Navigation } from "lucide-react";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Tam Tam Nairobi",
    address: "123 Kimathi Street, Nairobi",
    phone: "+254 123 456 789",
    hours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM"
    }
  },
  {
    id: 2,
    name: "Tam Tam Mombasa",
    address: "45 Nyali Beach Road, Mombasa",
    phone: "+254 987 654 321",
    hours: {
      weekdays: "11:00 AM - 9:30 PM",
      weekends: "10:00 AM - 10:30 PM"
    }
  },
  {
    id: 3,
    name: "Tam Tam Kisumu",
    address: "78 Lake Market Avenue, Kisumu",
    phone: "+254 456 789 123",
    hours: {
      weekdays: "11:30 AM - 9:00 PM",
      weekends: "10:30 AM - 10:00 PM"
    }
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-tamtam-light py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-greneette font-bold mb-6">Our Locations</h1>
            <p className="text-tamtam-gray max-w-2xl mx-auto">
              Find a Tam Tam restaurant near you and experience authentic Kenyan cuisine.
            </p>
          </div>
        </div>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-tamtam-orange/20 to-tamtam-green/20 flex items-center justify-center">
                    <h3 className="font-greneette text-2xl text-tamtam-black">{location.name}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="text-tamtam-orange h-5 w-5 mt-1" />
                        <p className="text-tamtam-gray">{location.address}</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="text-tamtam-orange h-5 w-5 mt-1" />
                        <p className="text-tamtam-gray">{location.phone}</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="text-tamtam-orange h-5 w-5 mt-1" />
                        <div>
                          <p className="text-tamtam-gray">Mon-Fri: {location.hours.weekdays}</p>
                          <p className="text-tamtam-gray">Sat-Sun: {location.hours.weekends}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex-1">
                        Reserve
                      </Button>
                      <Button variant="outline" className="border-tamtam-orange text-tamtam-orange hover:bg-tamtam-orange hover:text-white flex-1">
                        <Navigation className="mr-2 h-4 w-4" /> Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-tamtam-light rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-greneette font-bold mb-4">Private Events</h2>
                <p className="text-tamtam-gray max-w-2xl mx-auto">
                  Looking to host a private event? Tam Tam offers catering services and private dining spaces for your special occasions.
                </p>
              </div>
              <div className="text-center">
                <Button className="bg-tamtam-black hover:bg-tamtam-black/90 text-white">
                  Inquire About Events
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
