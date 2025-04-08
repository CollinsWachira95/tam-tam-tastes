
import { useState } from "react";

interface CateringGalleryProps {
  galleryImages: string[];
}

const CateringGallery = ({ galleryImages }: CateringGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
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
              className="relative group overflow-hidden rounded-lg bg-gray-100"
              style={{ height: '240px' }}
            >
              {!loadedImages[index] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-tamtam-orange border-t-transparent animate-spin"></div>
                </div>
              )}
              
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
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
  );
};

export default CateringGallery;
