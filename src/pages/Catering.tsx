
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
import { 
  Calendar, 
  Check, 
  ChevronRight, 
  Loader2, 
  Users, 
  Clock, 
  Volume2, 
  VolumeX 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DishCard from "@/components/DishCard";

interface CateringMenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  featured?: boolean;
  imagePath?: string;
  badges?: string[];
}

const cateringItems: CateringMenuItem[] = [
  {
    id: 1,
    name: "Corporate Package",
    description: "Perfect for business meetings and conferences. Includes a selection of Kenyan appetizers, main dishes, and desserts.",
    price: "From $25/person",
    category: "corporate",
    calories: 450,
    protein: 22,
    carbs: 45,
    fat: 15,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    badges: ["Popular"]
  },
  {
    id: 2,
    name: "Wedding Celebration",
    description: "A luxurious spread of authentic Kenyan cuisine to make your special day memorable. Customizable to match your theme.",
    price: "From $35/person",
    category: "weddings",
    calories: 550,
    protein: 25,
    carbs: 55,
    fat: 18,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    badges: ["Premium"]
  },
  {
    id: 3,
    name: "Private Event Package",
    description: "Birthday parties, family reunions, and more. Our private event catering brings authentic Kenyan flavors to your celebration.",
    price: "From $30/person",
    category: "private",
    calories: 500,
    protein: 23,
    carbs: 50,
    fat: 16,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    badges: ["Customizable"]
  },
  {
    id: 4,
    name: "Breakfast & Brunch",
    description: "Start your day with traditional Kenyan breakfast items like mandazi, chai tea, and egg dishes.",
    price: "From $20/person",
    category: "corporate",
    calories: 380,
    protein: 18,
    carbs: 48,
    fat: 12,
    imagePath: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  },
  {
    id: 5,
    name: "Buffet Setup",
    description: "Elegant buffet service with chafing dishes, serving utensils, and professional staff.",
    price: "From $28/person",
    category: "weddings",
    calories: 520,
    protein: 26,
    carbs: 52,
    fat: 17,
    imagePath: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
  },
  {
    id: 6,
    name: "Cocktail Reception",
    description: "Passed appetizers and drinks perfect for networking events or pre-dinner receptions.",
    price: "From $22/person",
    category: "private",
    calories: 350,
    protein: 15,
    carbs: 30,
    fat: 20,
    imagePath: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
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

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  eventDate: z.string().min(1, { message: "Please select an event date" }),
  guestCount: z.string().min(1, { message: "Please enter number of guests" }),
  eventType: z.string().min(1, { message: "Please select an event type" }),
  message: z.string().optional(),
});

const Catering = () => {
  const { toast } = useToast();
  const [videoMuted, setVideoMuted] = useState(true);
  
  // Form handling with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", values);
    
    toast({
      title: "Inquiry Received",
      description: "We'll contact you within 24 hours to discuss your catering needs.",
    });
    
    // Reset form
    form.reset();
  };

  const toggleMute = () => {
    setVideoMuted(!videoMuted);
    
    // Find the video element and toggle mute
    const videoElement = document.getElementById('heroVideo') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Video Section */}
        <section className="relative h-[80vh] bg-tamtam-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              id="heroVideo"
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
          
          {/* Video Controls */}
          <button 
            onClick={toggleMute} 
            className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
            aria-label={videoMuted ? "Unmute video" : "Mute video"}
          >
            {videoMuted ? <Volume2 className="h-5 w-5 text-white" /> : <VolumeX className="h-5 w-5 text-white" />}
          </button>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 tracking-tight animate-fade-in">
                  Elevate Your Events with Authentic Kenyan Cuisine
                </h1>
                <p className="text-xl text-white/90 mb-8 font-opensans max-w-2xl mx-auto animate-fade-in">
                  From breakfast meetings to large conferences, we bring the vibrant flavors of Kenya to your event.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#catering-packages">
                    <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8 py-6 h-auto font-neutra text-lg group animate-fade-in shadow-premium-hover">
                      Explore Our Catering
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <a href="#inquiry-form">
                    <Button variant="outline" className="border-white bg-transparent hover:bg-white/20 text-white px-8 py-6 h-auto font-neutra text-lg group animate-fade-in">
                      Get a Quote
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-16 left-16 w-12 h-12 border-t-4 border-l-4 border-white/30 rounded-tl-lg"></div>
          <div className="absolute top-16 right-16 w-12 h-12 border-t-4 border-r-4 border-white/30 rounded-tr-lg"></div>
          <div className="absolute bottom-16 left-16 w-12 h-12 border-b-4 border-l-4 border-white/30 rounded-bl-lg"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 border-b-4 border-r-4 border-white/30 rounded-br-lg"></div>
        </section>

        {/* Catering Options */}
        <section id="catering-packages" className="section bg-tamtam-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 relative inline-block">
                Catering Packages
                <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
              </h2>
              <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
              <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
                From corporate events to weddings and private celebrations, we offer customizable catering packages to suit your needs and budget.
              </p>
            </div>
            
            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-tamtam-cream/50">
                <TabsTrigger value="corporate" className="font-neutra data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">Corporate</TabsTrigger>
                <TabsTrigger value="weddings" className="font-neutra data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">Weddings</TabsTrigger>
                <TabsTrigger value="private" className="font-neutra data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">Private Events</TabsTrigger>
              </TabsList>
              
              {/* Corporate Tab */}
              <TabsContent value="corporate" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                      alt="Corporate catering setup" 
                      className="rounded-lg w-full h-80 object-cover shadow-elegant"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-playfair font-bold mb-4">Corporate Catering</h3>
                    <p className="mb-4 font-neutra">Impress your clients and team with our authentic Kenyan cuisine. From breakfast meetings to large conferences, we provide professional service and delicious food.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Full-service catering for meetings and events</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Customizable menu options</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Breakfast, lunch, and dinner options</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Serving staff available</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Clock size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">24hr advance notice</span>
                      </div>
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Users size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">Min. 10 guests</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-neutra font-bold mt-6 bg-tamtam-orange/10 text-tamtam-orange p-2 rounded-md inline-block">
                      Starting at $25 per person
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {cateringItems
                    .filter(item => item.category === 'corporate')
                    .map(item => (
                      <DishCard key={item.id} item={item} />
                    ))
                  }
                </div>
              </TabsContent>
              
              {/* Wedding Tab */}
              <TabsContent value="weddings" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                      alt="Wedding catering setup" 
                      className="rounded-lg w-full h-80 object-cover shadow-elegant"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-playfair font-bold mb-4">Wedding Celebrations</h3>
                    <p className="mb-4 font-neutra">Make your special day even more memorable with our wedding catering services. We offer a range of options from casual buffets to elegant plated meals.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Customized menus to match your theme</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Full-service catering including setup and cleanup</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Bar service options available</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Cake cutting and serving</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Calendar size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">Book 3+ months ahead</span>
                      </div>
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Users size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">Groups of any size</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-neutra font-bold mt-6 bg-tamtam-orange/10 text-tamtam-orange p-2 rounded-md inline-block">
                      Starting at $35 per person
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {cateringItems
                    .filter(item => item.category === 'weddings')
                    .map(item => (
                      <DishCard key={item.id} item={item} />
                    ))
                  }
                </div>
              </TabsContent>
              
              {/* Private Events Tab */}
              <TabsContent value="private" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                      alt="Private event catering" 
                      className="rounded-lg w-full h-80 object-cover shadow-elegant"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-playfair font-bold mb-4">Private Events</h3>
                    <p className="mb-4 font-neutra">From birthday parties to family reunions, our private event catering brings authentic Kenyan flavors to your celebration.</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Flexible menu options for any size gathering</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Buffet, family-style, or plated service</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Optional décor and setup assistance</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 p-1 bg-tamtam-orange/10 rounded-full">
                          <Check size={16} className="text-tamtam-orange" />
                        </div>
                        <p className="font-neutra">Special dietary accommodations available</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Clock size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">48hr advance notice</span>
                      </div>
                      <div className="flex items-center p-3 bg-tamtam-orange/10 rounded-lg">
                        <Users size={20} className="text-tamtam-orange mr-2" />
                        <span className="font-neutra text-sm">Min. 15 guests</span>
                      </div>
                    </div>
                    
                    <p className="text-lg font-neutra font-bold mt-6 bg-tamtam-orange/10 text-tamtam-orange p-2 rounded-md inline-block">
                      Starting at $30 per person
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {cateringItems
                    .filter(item => item.category === 'private')
                    .map(item => (
                      <DishCard key={item.id} item={item} />
                    ))
                  }
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
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 relative inline-block">
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
                    <span className="text-white font-neutra capitalize">
                      {index === 0 ? "Corporate Lunch Setup" :
                       index === 1 ? "Wedding Reception" :
                       index === 2 ? "Buffet Service" :
                       index === 3 ? "Private Event" :
                       index === 4 ? "Plated Service" :
                       index === 5 ? "Outdoor Catering" :
                       index === 6 ? "Breakfast Meeting" :
                       "Special Occasion"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="inquiry-form" className="section bg-tamtam-light">
          <div className="absolute inset-0 kenyan-texture opacity-40"></div>
          
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Request a Catering Quote</h2>
              <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
              <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
                Fill out the form below and our catering team will contact you within 24 hours to discuss your event needs.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-premium relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-tamtam-orange-100/40 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tamtam-green-100/30 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 kenyan-dots opacity-20"></div>
              
              <div className="relative z-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Full Name</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                placeholder="Your name"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Email Address</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Phone Number</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="tel"
                                placeholder="+254 XXX XXX XXX"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Event Date</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="date"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="guestCount"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Number of Guests</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="number"
                                placeholder="50"
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="font-medium font-neutra">Event Type</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              >
                                <option value="">Select an event type</option>
                                <option value="corporate">Corporate</option>
                                <option value="wedding">Wedding</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="other">Other</option>
                              </select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="space-y-2 md:col-span-2">
                            <FormLabel className="font-medium font-neutra">Additional Details</FormLabel>
                            <FormControl>
                              <textarea
                                {...field}
                                rows={4}
                                placeholder="Tell us about your event, any specific requirements or questions you have..."
                                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <div className="md:col-span-2 flex justify-center pt-4">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-tamtam-orange to-tamtam-accent hover:from-tamtam-accent hover:to-tamtam-orange text-white px-10 py-6 h-auto rounded-xl font-neutra text-lg shadow-premium-hover transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Inquiry
                              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Order Now Button */}
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
          <Link to="/menu">
            <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-6 py-6 h-auto rounded-full font-neutra text-base shadow-premium-hover">
              Order Now
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catering;
