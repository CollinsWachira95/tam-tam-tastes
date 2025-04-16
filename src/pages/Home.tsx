
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout, { PageSection } from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedDishes from "@/components/FeaturedDishes";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import PremiumCta from "@/components/PremiumCta";
import { Button } from "@/components/ui/button";
import { EnhancedBadge } from "@/components/ui/enhanced-badge";

const Home = () => {
  return (
    <Layout>
      <HeroCarousel />
      
      <PageSection>
        <FeaturedDishes />
      </PageSection>
      
      {/* Our Journey Section with Video */}
      <VideoSection 
        title="Our Journey"
        subtitle="About Us"
        description="Tam Tam was founded in 2015 with a passion for bringing authentic Kenyan flavors to food lovers everywhere. We started as a small family restaurant and have grown to become a beloved destination for experiencing the rich culinary traditions of Kenya. Our recipes have been passed down through generations, and we take pride in sharing our heritage through our food."
        videoUrl="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        buttonText="Learn More About Us"
        buttonLink="/about"
      />
      
      <PageSection>
        <TestimonialsSection />
      </PageSection>
      
      {/* Premium CTA */}
      <PremiumCta 
        title="Experience Authentic Kenyan Fine Dining"
        description="Join us for an unforgettable culinary journey through Kenya's rich food traditions. Our expert chefs blend time-honored recipes with contemporary techniques to create dishes that delight all senses."
        buttonText="Reserve Your Table"
        buttonLink="/reservations"
        accentColor="gold"
      />
      
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
      
      <PageSection>
        <LocationSection />
      </PageSection>
      
      {/* Butchery Showcase Section */}
      <PageSection background="pattern" className="overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <EnhancedBadge variant="fancy" className="mb-4">
              Premium Meats
            </EnhancedBadge>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Visit Our Butchery
            </h2>
            
            <div className="h-1 w-24 bg-tamtam-green rounded-full mb-6"></div>
            
            <p className="text-tamtam-gray mb-8 text-lg leading-relaxed font-opensans">
              At Tam Tam Butchery, we offer premium cuts of meat sourced from local farmers and prepared by expert butchers. Our selection includes beef, goat, lamb, chicken, and other specialty meats prepared in traditional Kenyan styles. Visit one of our five butchery locations across Kenya for the freshest meats and personalized service.
            </p>
            
            <Link to="/butchery">
              <Button 
                variant="green" 
                size="lg"
                rounded="full" 
                withAnimation 
                trailingIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />}
                className="group"
              >
                Explore Our Butchery
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
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <EnhancedBadge variant="white" size="sm" className="text-tamtam-black">
                    5 locations across Kenya
                  </EnhancedBadge>
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
      </PageSection>
      
      {/* Order Online CTA Section */}
      <PageSection className="bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 py-16 relative overflow-hidden" container={false}>
        {/* Overlay pattern */}
        <div className="absolute inset-0 tribal-pattern opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-tamtam-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tamtam-orange-800/20 rounded-full blur-3xl"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 font-opensans">
            Skip the wait! Order online for pickup or delivery and enjoy authentic Kenyan cuisine from the comfort of your home.
          </p>
          <Link to="/menu">
            <Button 
              variant="white" 
              size="xl" 
              rounded="full"
              withAnimation 
              trailingIcon={<ArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />}
              className="group"
            >
              Order Now
            </Button>
          </Link>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg hidden md:block"></div>
        <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg hidden md:block"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg hidden md:block"></div>
        <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg hidden md:block"></div>
      </PageSection>
    </Layout>
  );
};

export default Home;
