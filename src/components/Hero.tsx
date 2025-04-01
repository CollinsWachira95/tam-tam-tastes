
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-tamtam-light overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-greneette font-bold text-tamtam-black mb-6">
              Experience Authentic <span className="text-tamtam-orange">Kenyan</span> Flavors
            </h1>
            <p className="text-lg md:text-xl text-tamtam-gray mb-8">
              Fresh ingredients, bold spices, and traditional recipes served with a modern twist. Taste the essence of Kenya at Tam Tam.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white text-lg px-8 py-6">
                View Our Menu
              </Button>
              <Link to="/locations">
                <Button variant="outline" className="border-tamtam-green text-tamtam-green hover:bg-tamtam-green hover:text-white text-lg px-8 py-6">
                  Find Location <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <div className="bg-tamtam-orange absolute inset-0 opacity-20 z-10 rounded-lg"></div>
            <div className="h-full w-full bg-gradient-to-r from-tamtam-orange/30 to-tamtam-green/30 flex items-center justify-center rounded-lg">
              <div className="text-center p-8">
                <div className="text-5xl font-greneette font-bold text-tamtam-black mb-4">TAM TAM</div>
                <div className="text-xl text-tamtam-black">Authentic Kenyan Cuisine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
