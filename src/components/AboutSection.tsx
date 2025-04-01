
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-tamtam-light section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="h-[400px] bg-gradient-to-br from-tamtam-green/30 to-tamtam-orange/30 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="font-greneette text-4xl mb-4 text-tamtam-black">Our Story</div>
                <div className="bg-white/80 h-px w-24 mx-auto my-4"></div>
                <div className="font-sweet-sans text-lg text-tamtam-black/80">
                  From Nairobi to Your Table
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-6 text-tamtam-black">
              From Kenya With Love
            </h2>
            <p className="text-tamtam-gray mb-4">
              Founded in 2018 by Chef James Kamau, Tam Tam brings the authentic flavors of Kenya to food lovers. Our journey began with a simple mission: to share the rich culinary heritage of Kenya through dishes that honor tradition while embracing innovation.
            </p>
            <p className="text-tamtam-gray mb-6">
              We source ingredients locally whenever possible, supporting Kenyan farmers and ensuring the freshest flavors in every dish. Our spices are imported directly from Kenya, creating an authentic experience that transports you to the streets of Nairobi.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/about">
                <Button className="bg-tamtam-black hover:bg-tamtam-black/90 text-white">
                  Read Our Full Story <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
