
import { Utensils, Heart, Globe } from "lucide-react";

const OurPhilosophy = () => {
  return (
    <section className="section bg-tamtam-cream py-16 md:py-24 relative overflow-hidden">
      {/* Kenyan pattern background */}
      <div className="absolute inset-0 kenyan-texture opacity-10"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 relative inline-block">
            Our Philosophy
            <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto">
            At Tam Tam, we believe that food is more than sustenance – it's a cultural experience that tells the story of a people and their land. Our philosophy is built on three key principles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-premium-hover transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform">
            <div className="bg-tamtam-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Utensils className="text-tamtam-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-tamtam-orange mb-4">Authentic Recipes</h3>
            <p className="text-tamtam-gray">
              We honor traditional Kenyan cooking methods while adding our own creative touch. Each dish tells a story of our heritage and brings the flavors of Kenya to your table.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-premium-hover transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform">
            <div className="bg-tamtam-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="text-tamtam-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-tamtam-green mb-4">Fresh Ingredients</h3>
            <p className="text-tamtam-gray">
              We source locally whenever possible, ensuring the freshest flavors in every dish. Our spices are imported directly from Kenya to create an authentic experience.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-card hover:shadow-premium-hover transition-shadow duration-300 transform hover:translate-y-[-5px] transition-transform">
            <div className="bg-tamtam-black/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="text-tamtam-black h-8 w-8" />
            </div>
            <h3 className="text-xl font-playfair font-bold text-tamtam-black mb-4">Sustainable Practices</h3>
            <p className="text-tamtam-gray">
              We're committed to environmentally responsible practices in all aspects of our business, from reducing waste to using eco-friendly packaging materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
