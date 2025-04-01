
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedDishes />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
        
        {/* Contact Section */}
        <section className="section bg-tamtam-light">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-4">Get In Touch</h2>
              <p className="text-tamtam-gray max-w-2xl mx-auto">
                Have questions or want to make a reservation? Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Phone Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <Phone className="h-6 w-6 text-tamtam-orange" />
                    </div>
                    <div>
                      <h3 className="font-sweet-sans font-semibold text-tamtam-black mb-1">Call Us</h3>
                      <p className="text-tamtam-gray">+254 123 456 789</p>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <Mail className="h-6 w-6 text-tamtam-orange" />
                    </div>
                    <div>
                      <h3 className="font-sweet-sans font-semibold text-tamtam-black mb-1">Email Us</h3>
                      <p className="text-tamtam-gray">info@tamtam.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Hours Card */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tamtam-orange/10 p-3 rounded-full group-hover:bg-tamtam-orange/20 transition-colors">
                      <Clock className="h-6 w-6 text-tamtam-orange" />
                    </div>
                    <div>
                      <h3 className="font-sweet-sans font-semibold text-tamtam-black mb-1">Opening Hours</h3>
                      <p className="text-tamtam-gray">Mon-Fri: 11:00 AM - 10:00 PM</p>
                      <p className="text-tamtam-gray">Sat-Sun: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
