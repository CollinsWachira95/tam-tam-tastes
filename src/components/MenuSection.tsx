
import { ReactNode } from "react";

interface MenuSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const MenuSection = ({ title, description, children }: MenuSectionProps) => {
  return (
    <section className="container-custom my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3 tracking-tight text-tamtam-black">
          {title}
        </h2>
        
        {description && (
          <>
            <div className="h-1 w-20 bg-tamtam-green-500 mx-auto my-4 rounded-full"></div>
            <p className="text-tamtam-gray-600 max-w-2xl mx-auto font-opensans">
              {description}
            </p>
          </>
        )}
      </div>
      
      {children}
    </section>
  );
};

export default MenuSection;
