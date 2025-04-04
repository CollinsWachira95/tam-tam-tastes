
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PremiumCtaProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  accentColor?: 'orange' | 'green' | 'gold';
}

const PremiumCta: React.FC<PremiumCtaProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  accentColor = 'orange'
}) => {
  const getAccentClasses = () => {
    switch (accentColor) {
      case 'green':
        return 'bg-tamtam-green';
      case 'gold':
        return 'bg-tamtam-gold';
      default:
        return 'bg-tamtam-orange';
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 kenyan-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center mb-6">
            <div className={`w-20 h-0.5 ${getAccentClasses()}/60 rounded-full`}></div>
            <div className={`w-3 h-3 mx-3 ${getAccentClasses()} rounded-full`}></div>
            <div className={`w-20 h-0.5 ${getAccentClasses()}/60 rounded-full`}></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            {title}
          </h2>
          
          <p className="text-tamtam-gray-600 text-lg mb-10 max-w-2xl mx-auto font-opensans leading-relaxed">
            {description}
          </p>
          
          <Link to={buttonLink}>
            <Button className="btn-cta group">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-tamtam-orange-400/40 rounded-tl-lg"></div>
      <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-tamtam-orange-400/40 rounded-tr-lg"></div>
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-tamtam-orange-400/40 rounded-bl-lg"></div>
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-tamtam-orange-400/40 rounded-br-lg"></div>
    </div>
  );
};

export default PremiumCta;
