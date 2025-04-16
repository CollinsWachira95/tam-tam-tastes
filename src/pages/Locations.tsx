
import Layout from "@/components/Layout";
import { PageSection, PageHeader } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Navigation } from "lucide-react";
import ContactForm from "@/components/ContactForm";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  type: "Restaurant" | "Butchery";
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
    type: "Restaurant",
    hours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM"
    }
  },
  {
    id: 2,
    name: "Tam Tam Butchery Westlands",
    address: "45 Westlands Road, Nairobi",
    phone: "+254 987 654 321",
    type: "Butchery",
    hours: {
      weekdays: "8:00 AM - 7:00 PM",
      weekends: "9:00 AM - 6:00 PM"
    }
  },
  {
    id: 3,
    name: "Tam Tam Butchery Mombasa",
    address: "78 Nyali Beach Road, Mombasa",
    phone: "+254 456 789 123",
    type: "Butchery",
    hours: {
      weekdays: "8:30 AM - 7:00 PM",
      weekends: "9:00 AM - 5:30 PM"
    }
  },
  {
    id: 4,
    name: "Tam Tam Butchery Kisumu",
    address: "34 Lake Market Avenue, Kisumu",
    phone: "+254 234 567 890",
    type: "Butchery",
    hours: {
      weekdays: "8:00 AM - 6:30 PM",
      weekends: "9:00 AM - 5:00 PM"
    }
  },
  {
    id: 5,
    name: "Tam Tam Butchery Nakuru",
    address: "56 Kenyatta Avenue, Nakuru",
    phone: "+254 345 678 901",
    type: "Butchery",
    hours: {
      weekdays: "8:00 AM - 7:00 PM",
      weekends: "9:00 AM - 6:00 PM"
    }
  },
  {
    id: 6,
    name: "Tam Tam Butchery Eldoret",
    address: "89 Uganda Road, Eldoret",
    phone: "+254 567 890 123",
    type: "Butchery",
    hours: {
      weekdays: "8:30 AM - 6:30 PM",
      weekends: "9:00 AM - 5:30 PM"
    }
  }
];

const Locations = () => {
  return (
    <Layout>
      <main className="flex-grow">
        <PageSection background="light" spacing="md">
          <PageHeader
            title="Our Locations & Contact"
            description="Find a Tam Tam restaurant or butchery near you and experience authentic Kenyan cuisine."
            align="center"
          />
        </PageSection>

        <PageSection background="white">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
              Our Locations
              <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
            </h2>
            <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`h-24 flex items-center justify-center ${
                  location.type === "Restaurant" 
                    ? "bg-gradient-to-br from-tamtam-orange/20 to-tamtam-green/20"
                    : "bg-gradient-to-br from-tamtam-green/20 to-tamtam-orange/20"
                }`}>
                  <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-sm font-medium mb-2">
                    {location.type}
                  </span>
                  <h3 className="text-2xl text-tamtam-black ml-3 font-semibold">{location.name}</h3>
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
                    {location.type === "Restaurant" ? (
                      <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex-1">
                        Order Online
                      </Button>
                    ) : (
                      <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white flex-1">
                        Shop Online
                      </Button>
                    )}
                    <Button variant="outline" className="border-tamtam-orange text-tamtam-orange hover:bg-tamtam-orange hover:text-white flex-1">
                      <Navigation className="mr-2 h-4 w-4" /> Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageSection>
        
        {/* Contact Form Section */}
        <PageSection background="light" className="relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 kenyan-texture opacity-50"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
                Contact Us
                <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
              </h2>
              <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
              <p className="text-tamtam-gray max-w-2xl mx-auto">
                Have questions or want to place a large order? Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Phone Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group hover:translate-y-[-5px] border border-tamtam-orange/5">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <Phone className="h-6 w-6 text-tamtam-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tamtam-black mb-1">Call Us</h3>
                      <p className="text-tamtam-gray">+254 123 456 789</p>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group hover:translate-y-[-5px] border border-tamtam-orange/5">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-tamtam-orange">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-tamtam-black mb-1">Email Us</h3>
                      <p className="text-tamtam-gray">info@tamtam.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Hours Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group hover:translate-y-[-5px] border border-tamtam-orange/5">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <Clock className="h-6 w-6 text-tamtam-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tamtam-black mb-1">Opening Hours</h3>
                      <p className="text-tamtam-gray">Mon-Fri: 11:00 AM - 10:00 PM</p>
                      <p className="text-tamtam-gray">Sat-Sun: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Kenyan decorative element */}
                <div className="relative hidden md:block">
                  <div className="kenyan-pattern p-8 rounded-lg bg-white opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl text-tamtam-orange/70">Karibu!</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </PageSection>
      </main>
    </Layout>
  );
};

export default Locations;
