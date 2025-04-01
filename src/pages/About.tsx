
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Utensils, Heart, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-tamtam-light py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-greneette font-bold mb-6">Our Story</h1>
            <p className="text-tamtam-gray max-w-2xl mx-auto">
              From the heart of Kenya to your plate - the journey of Tam Tam.
            </p>
          </div>
        </div>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-greneette font-bold mb-6 text-tamtam-black">
                  Our Beginning
                </h2>
                <p className="text-tamtam-gray mb-4">
                  Tam Tam began in 2018 when Chef James Kamau, who had worked in prestigious restaurants across Europe, decided to return to his Kenyan roots and share the authentic flavors of his homeland with the world.
                </p>
                <p className="text-tamtam-gray mb-4">
                  Born and raised in Nairobi, Chef Kamau grew up surrounded by the rich aromas and flavors of traditional Kenyan cooking. His grandmother's kitchen was his first classroom, where he learned the importance of fresh ingredients and traditional techniques.
                </p>
                <p className="text-tamtam-gray">
                  After culinary training in Paris and years working in Michelin-starred restaurants, he returned to Kenya with a vision: to create a restaurant that honored traditional Kenyan cuisine while incorporating modern culinary techniques.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="h-[400px] bg-gradient-to-br from-tamtam-green/30 to-tamtam-orange/30 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-greneette text-4xl mb-4 text-tamtam-black">Our Chef</div>
                    <div className="bg-white/80 h-px w-24 mx-auto my-4"></div>
                    <div className="font-sweet-sans text-lg text-tamtam-black/80">
                      James Kamau
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <div className="h-[400px] bg-gradient-to-br from-tamtam-orange/30 to-tamtam-green/30 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-greneette text-4xl mb-4 text-tamtam-black">Our Philosophy</div>
                    <div className="bg-white/80 h-px w-24 mx-auto my-4"></div>
                    <div className="font-sweet-sans text-lg text-tamtam-black/80">
                      Authentic. Fresh. Sustainable.
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-greneette font-bold mb-6 text-tamtam-black">
                  Our Philosophy
                </h2>
                <p className="text-tamtam-gray mb-4">
                  At Tam Tam, we believe that food is more than sustenance – it's a cultural experience that tells the story of a people and their land. Our philosophy is built on three key principles:
                </p>
                <div className="space-y-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-tamtam-orange/10 p-3 rounded-full">
                      <Utensils className="text-tamtam-orange h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sweet-sans font-semibold mb-1">Authentic Recipes</h4>
                      <p className="text-tamtam-gray">We honor traditional Kenyan cooking methods while adding our own creative touch.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-tamtam-green/10 p-3 rounded-full">
                      <Heart className="text-tamtam-green h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sweet-sans font-semibold mb-1">Fresh Ingredients</h4>
                      <p className="text-tamtam-gray">We source locally whenever possible, ensuring the freshest flavors in every dish.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-tamtam-black/10 p-3 rounded-full">
                      <Globe className="text-tamtam-black h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-sweet-sans font-semibold mb-1">Sustainable Practices</h4>
                      <p className="text-tamtam-gray">We're committed to environmentally responsible practices in all aspects of our business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-greneette font-bold mb-6 text-tamtam-black">
                Meet Our Team
              </h2>
              <p className="text-tamtam-gray max-w-2xl mx-auto mb-8">
                The passionate people behind Tam Tam who bring Kenyan flavors to your table every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-64 bg-gradient-to-br from-tamtam-orange/20 to-tamtam-black/10 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-tamtam-black/40" />
                </div>
                <h3 className="font-greneette text-xl mb-2">James Kamau</h3>
                <p className="text-tamtam-orange font-medium mb-2">Executive Chef & Founder</p>
                <p className="text-tamtam-gray">Bringing 15 years of culinary experience and a passion for Kenyan flavors.</p>
              </div>
              
              <div className="text-center">
                <div className="h-64 bg-gradient-to-br from-tamtam-green/20 to-tamtam-black/10 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-tamtam-black/40" />
                </div>
                <h3 className="font-greneette text-xl mb-2">Amina Wanjiku</h3>
                <p className="text-tamtam-orange font-medium mb-2">Head Chef</p>
                <p className="text-tamtam-gray">Expert in traditional spice blends and authentic Kenyan recipes.</p>
              </div>
              
              <div className="text-center">
                <div className="h-64 bg-gradient-to-br from-tamtam-orange/20 to-tamtam-green/20 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-tamtam-black/40" />
                </div>
                <h3 className="font-greneette text-xl mb-2">David Omondi</h3>
                <p className="text-tamtam-orange font-medium mb-2">Restaurant Manager</p>
                <p className="text-tamtam-gray">Creating memorable dining experiences with warm Kenyan hospitality.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
