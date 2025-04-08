
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Users } from "lucide-react";
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

interface CateringPackagesProps {
  cateringItems: CateringMenuItem[];
}

const CateringPackages = ({ cateringItems }: CateringPackagesProps) => {
  return (
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
                  loading="lazy"
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
                  loading="lazy"
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
                    <Clock size={20} className="text-tamtam-orange mr-2" />
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
                  loading="lazy"
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
  );
};

export default CateringPackages;
