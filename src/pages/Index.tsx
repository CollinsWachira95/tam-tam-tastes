
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedDishes from "@/components/FeaturedDishes";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />
        <FeaturedDishes />
        
        {/* Our Journey Section with Video */}
        <VideoSection 
          title="Our Journey"
          subtitle="About Us"
          description="Tam Tam was founded in 2015 with a passion for bringing authentic Kenyan flavors to food lovers everywhere. We started as a small family restaurant and have grown to become a beloved destination for experiencing the rich culinary traditions of Kenya. Our recipes have been passed down through generations, and we take pride in sharing our heritage through our food."
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          buttonText="Learn More About Us"
          buttonLink="/about"
        />
        
        <TestimonialsSection />
        
        {/* Catering Section with Video */}
        <VideoSection 
          title="Catering Services"
          subtitle="Special Events"
          description="Make your special occasions unforgettable with our authentic Kenyan catering services. Whether it's a corporate event, wedding, birthday party, or family gathering, we bring the same passion for quality and flavor that defines our restaurant to your celebration. Our catering team works closely with you to create a menu that satisfies your guests and creates a memorable experience."
          videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          buttonText="Explore Catering Options"
          buttonLink="/catering"
          isReversed={true}
        />
        
        <LocationSection />
        
        {/* Butchery Showcase Section */}
        <section className="section bg-white relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 kenyan-texture opacity-10"></div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
                  Premium Meats
                </span>
                <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-6">
                  Visit Our Butchery
                </h2>
                <div className="h-1 w-24 bg-tamtam-green rounded-full mb-6"></div>
                <p className="text-tamtam-gray mb-8 font-neutra">
                  At Tam Tam Butchery, we offer premium cuts of meat sourced from local farmers and prepared by expert butchers. Our selection includes beef, goat, lamb, chicken, and other specialty meats prepared in traditional Kenyan styles. Visit one of our five butchery locations across Kenya for the freshest meats and personalized service.
                </p>
                <Link to="/butchery">
                  <Button className="bg-tamtam-green hover:bg-tamtam-green/90 text-white group font-neutra">
                    Explore Our Butchery
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              
              {/* Butchery Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl group animate-fade-in">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-tamtam-orange/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-tamtam-green/20 rounded-full blur-xl"></div>
                
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                  <img 
                    src="https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80" 
                    alt="Tam Tam Butchery"
                    className="w-full rounded-lg shadow-lg"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="bg-white/80 text-tamtam-black px-3 py-1 rounded-full text-sm font-neutra">
                        5 locations across Kenya
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-tamtam-orange/50 rounded-tl-lg"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-tamtam-orange/50 rounded-tr-lg"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-tamtam-orange/50 rounded-bl-lg"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-tamtam-orange/50 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Order Online CTA Section */}
        <section className="bg-tamtam-orange py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-neutra font-bold text-white mb-6">
              Ready to Order?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 font-neutra">
              Skip the wait! Order online for pickup or delivery and enjoy authentic Kenyan cuisine from the comfort of your home.
            </p>
            <Link to="/menu">
              <Button className="bg-white text-tamtam-orange hover:bg-white/90 text-lg px-8 py-6 shadow-lg group font-neutra">
                Order Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
