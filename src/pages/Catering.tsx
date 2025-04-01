
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const Catering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Inquiry Received",
      description: "We'll contact you within 24 hours to discuss your catering needs.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-tamtam-black">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Catering spread" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="relative z-10 container-custom h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              Catering Services
            </h1>
            <p className="text-xl text-white max-w-2xl">
              Authentic Kenyan cuisine for your special events, corporate gatherings, and celebrations
            </p>
          </div>
        </section>

        {/* Catering Options */}
        <section className="section bg-tamtam-light">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Catering Packages</h2>
            
            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="weddings">Weddings</TabsTrigger>
                <TabsTrigger value="private">Private Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="corporate" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                      alt="Corporate catering setup" 
                      className="rounded-lg w-full h-80 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Corporate Catering</h3>
                    <p className="mb-4">Impress your clients and team with our authentic Kenyan cuisine. From breakfast meetings to large conferences, we provide professional service and delicious food.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1">
                      <li>Full-service catering for meetings and events</li>
                      <li>Customizable menu options</li>
                      <li>Breakfast, lunch, and dinner options</li>
                      <li>Serving staff available</li>
                    </ul>
                    <p className="text-lg font-bold">Starting at $25 per person</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="weddings" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                      alt="Wedding catering setup" 
                      className="rounded-lg w-full h-80 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Wedding Celebrations</h3>
                    <p className="mb-4">Make your special day even more memorable with our wedding catering services. We offer a range of options from casual buffets to elegant plated meals.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1">
                      <li>Customized menus to match your theme</li>
                      <li>Full-service catering including setup and cleanup</li>
                      <li>Bar service options available</li>
                      <li>Cake cutting and serving</li>
                    </ul>
                    <p className="text-lg font-bold">Starting at $35 per person</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="private" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                      alt="Private event catering" 
                      className="rounded-lg w-full h-80 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Private Events</h3>
                    <p className="mb-4">From birthday parties to family reunions, our private event catering brings authentic Kenyan flavors to your celebration.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1">
                      <li>Flexible menu options for any size gathering</li>
                      <li>Buffet, family-style, or plated service</li>
                      <li>Optional décor and setup assistance</li>
                      <li>Special dietary accommodations available</li>
                    </ul>
                    <p className="text-lg font-bold">Starting at $30 per person</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Menu Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                    alt="Appetizers" 
                    className="rounded-lg w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Appetizers</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Samosas with tamarind chutney</li>
                    <li>Kenyan-style kebabs (mshikaki)</li>
                    <li>Cassava chips with kachumbari</li>
                    <li>Roasted plantains with pili pili sauce</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                    alt="Main Courses" 
                    className="rounded-lg w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Main Courses</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Nyama choma (grilled meat)</li>
                    <li>Pilau (spiced rice)</li>
                    <li>Ugali with sukuma wiki</li>
                    <li>Coconut curry chicken</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                    alt="Desserts" 
                    className="rounded-lg w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">Desserts</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Mandazi (Kenyan donuts)</li>
                    <li>Tropical fruit platters</li>
                    <li>Coconut cake</li>
                    <li>Kenyan chai tea service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="section bg-tamtam-light">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Request a Catering Quote</h2>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="block font-medium">Event Date</label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="block font-medium">Number of Guests</label>
                    <input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      required
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="block font-medium">Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select an event type</option>
                      <option value="corporate">Corporate</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="message" className="block font-medium">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="md:col-span-2 flex justify-center">
                    <Button type="submit" className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8">
                      Submit Inquiry
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catering;
