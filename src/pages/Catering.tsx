
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";

const cateringSlides = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Catering setup"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Corporate event catering"
  },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    alt: "Wedding catering"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3"
];

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
        {/* Hero Carousel Section */}
        <section className="relative h-[60vh] bg-tamtam-black">
          <Carousel className="h-full">
            <CarouselContent className="h-full">
              {cateringSlides.map((slide, index) => (
                <CarouselItem key={index} className="h-full">
                  {slide.type === "image" ? (
                    <div className="relative h-full w-full">
                      <img 
                        src={slide.src} 
                        alt={slide.alt || "Catering service"} 
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <video 
                        className="w-full h-full object-cover opacity-70"
                        autoPlay
                        muted
                        loop
                        poster={slide.poster}
                      >
                        <source src={slide.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-neutra font-bold mb-4">
                        Catering Services
                      </h1>
                      <p className="text-xl font-neutra max-w-2xl mx-auto">
                        Authentic Kenyan cuisine for your special events, corporate gatherings, and celebrations
                      </p>
                      <Button className="mt-8 bg-tamtam-orange hover:bg-tamtam-orange/90 text-white text-lg px-8 font-neutra">
                        Request a Quote
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 text-white" />
            <CarouselNext className="right-4 text-white" />
          </Carousel>
        </section>

        {/* Catering Options */}
        <section className="section bg-tamtam-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-2 relative inline-block">
                Catering Packages
                <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
              </h2>
              <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
            </div>
            
            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="corporate" className="font-neutra">Corporate</TabsTrigger>
                <TabsTrigger value="weddings" className="font-neutra">Weddings</TabsTrigger>
                <TabsTrigger value="private" className="font-neutra">Private Events</TabsTrigger>
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
                    <h3 className="text-2xl font-neutra font-bold mb-4">Corporate Catering</h3>
                    <p className="mb-4 font-neutra">Impress your clients and team with our authentic Kenyan cuisine. From breakfast meetings to large conferences, we provide professional service and delicious food.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1 font-neutra">
                      <li>Full-service catering for meetings and events</li>
                      <li>Customizable menu options</li>
                      <li>Breakfast, lunch, and dinner options</li>
                      <li>Serving staff available</li>
                    </ul>
                    <p className="text-lg font-neutra font-bold">Starting at $25 per person</p>
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
                    <h3 className="text-2xl font-neutra font-bold mb-4">Wedding Celebrations</h3>
                    <p className="mb-4 font-neutra">Make your special day even more memorable with our wedding catering services. We offer a range of options from casual buffets to elegant plated meals.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1 font-neutra">
                      <li>Customized menus to match your theme</li>
                      <li>Full-service catering including setup and cleanup</li>
                      <li>Bar service options available</li>
                      <li>Cake cutting and serving</li>
                    </ul>
                    <p className="text-lg font-neutra font-bold">Starting at $35 per person</p>
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
                    <h3 className="text-2xl font-neutra font-bold mb-4">Private Events</h3>
                    <p className="mb-4 font-neutra">From birthday parties to family reunions, our private event catering brings authentic Kenyan flavors to your celebration.</p>
                    <ul className="list-disc list-inside mb-6 space-y-1 font-neutra">
                      <li>Flexible menu options for any size gathering</li>
                      <li>Buffet, family-style, or plated service</li>
                      <li>Optional décor and setup assistance</li>
                      <li>Special dietary accommodations available</li>
                    </ul>
                    <p className="text-lg font-neutra font-bold">Starting at $30 per person</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-green/10 text-tamtam-green rounded-full text-sm font-medium mb-4 font-neutra">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-2 relative inline-block">
                Catering Gallery
                <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
              </h2>
              <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
              <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
                Browse through our gallery to see examples of our catering services and the quality of our presentation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-neutra">View Larger</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="section bg-tamtam-light">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-neutra font-bold text-center mb-12">Request a Catering Quote</h2>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium font-neutra">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium font-neutra">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium font-neutra">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventDate" className="block font-medium font-neutra">Event Date</label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="block font-medium font-neutra">Number of Guests</label>
                    <input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      required
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="block font-medium font-neutra">Event Type</label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    >
                      <option value="">Select an event type</option>
                      <option value="corporate">Corporate</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="message" className="block font-medium font-neutra">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded font-neutra"
                    />
                  </div>
                  
                  <div className="md:col-span-2 flex justify-center">
                    <Button type="submit" className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8 font-neutra">
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
