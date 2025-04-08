
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const TeamSection = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };
  
  const teamMembers: TeamMember[] = [
    {
      name: "James Kamau",
      role: "Executive Chef & Founder",
      bio: "Bringing 15 years of culinary experience and a passion for Kenyan flavors.",
    },
    {
      name: "Amina Wanjiku",
      role: "Head Chef",
      bio: "Expert in traditional spice blends and authentic Kenyan recipes.",
    },
    {
      name: "David Omondi",
      role: "Restaurant Manager",
      bio: "Creating memorable dining experiences with warm Kenyan hospitality.",
    },
    {
      name: "Sarah Njeri",
      role: "Sous Chef",
      bio: "Specializing in modern interpretations of classic Kenyan dishes.",
    }
  ];

  return (
    <section className="section bg-tamtam-light py-16 md:py-24 relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 kenyan-texture opacity-5"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
            The People Behind Tam Tam
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 relative inline-block">
            Meet Our Team
            <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
            The passionate people behind Tam Tam who bring Kenyan flavors to your table every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-tamtam-cream">
                    <div className="w-6 h-6 rounded-full border-2 border-tamtam-orange border-t-transparent animate-spin"></div>
                  </div>
                )}
                <img 
                  src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
              
              <h3 className="font-playfair text-xl mb-2 text-tamtam-orange font-bold">{member.name}</h3>
              <p className="text-tamtam-green font-medium mb-3 text-sm">{member.role}</p>
              <p className="text-tamtam-gray text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
