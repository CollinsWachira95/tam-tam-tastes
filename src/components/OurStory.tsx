
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-5">
              Our Journey
            </span>
            <h2 className="text-3xl font-playfair font-bold mb-6 text-tamtam-black">
              Our Beginning
            </h2>
            <div className="h-0.5 w-20 bg-tamtam-green/60 rounded-full my-6"></div>
            <p className="text-tamtam-gray mb-4">
              Tam Tam began in 2018 when Chef James Kamau, who had worked in prestigious restaurants across Europe, decided to return to his Kenyan roots and share the authentic flavors of his homeland with the world.
            </p>
            <p className="text-tamtam-gray mb-4">
              Born and raised in Nairobi, Chef Kamau grew up surrounded by the rich aromas and flavors of traditional Kenyan cooking. His grandmother's kitchen was his first classroom, where he learned the importance of fresh ingredients and traditional techniques.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-tamtam-orange mr-2">•</span>
                <span className="text-tamtam-gray">Trained at the prestigious Culinary Institute in Paris</span>
              </li>
              <li className="flex items-start">
                <span className="text-tamtam-orange mr-2">•</span>
                <span className="text-tamtam-gray">Worked in Michelin-starred restaurants across Europe</span>
              </li>
              <li className="flex items-start">
                <span className="text-tamtam-orange mr-2">•</span>
                <span className="text-tamtam-gray">Returned to Kenya to study local ingredients and techniques</span>
              </li>
            </ul>
            <p className="text-tamtam-gray">
              After culinary training in Paris and years working in Michelin-starred restaurants, he returned to Kenya with a vision: to create a restaurant that honored traditional Kenyan cuisine while incorporating modern culinary techniques.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:rotate-1 transition-transform duration-700 relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-tamtam-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tamtam-green/20 rounded-full blur-2xl"></div>
            
            <div className="h-[500px] bg-gradient-to-br from-tamtam-green/20 to-tamtam-orange/20 flex items-center justify-center p-8 relative border border-white/70 rounded-lg">
              {/* African pattern overlay */}
              <div className="absolute inset-0 kenyan-pattern opacity-20 rounded-lg"></div>
              
              <div className="text-center relative z-10 transform hover:scale-105 transition-transform duration-700">
                <div className="font-playfair text-4xl mb-6 text-tamtam-black relative inline-block">
                  Our Chef
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-tamtam-orange/60" viewBox="0 0 100 16" preserveAspectRatio="none">
                    <path d="M0,16 Q50,0 100,16" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="bg-white/90 h-px w-24 mx-auto my-5"></div>
                <div className="font-neutra text-xl text-tamtam-black/80 relative">
                  James Kamau
                  <span className="absolute -right-4 -top-4 text-3xl text-tamtam-orange/70">•</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
