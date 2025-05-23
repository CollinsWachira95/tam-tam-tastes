
import { useState } from "react";
import { Check, Loader2, MessageSquare, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-white p-7 md:p-9 rounded-xl shadow-elegant animate-scale-in relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-tamtam-orange/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-tamtam-green/5 rounded-full blur-2xl"></div>
      
      {/* African pattern overlay */}
      <div className="absolute inset-0 kenyan-dots opacity-10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-5">
          <div className="h-10 w-1 bg-gradient-to-b from-tamtam-orange to-tamtam-green rounded-full mr-4"></div>
          <h3 className="text-2xl font-neutra text-tamtam-black font-bold tracking-tight">Contact Us</h3>
        </div>
        <p className="text-tamtam-gray mb-7 border-b border-dashed border-tamtam-orange/20 pb-5 leading-relaxed">
          Have questions? Send us a message and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-tamtam-black mb-1.5 group-focus-within:text-tamtam-orange transition-colors">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all pl-11 bg-gray-50/50"
                placeholder="Your name"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tamtam-gray/50 group-focus-within:text-tamtam-orange transition-colors">
                <User className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-tamtam-black mb-1.5 group-focus-within:text-tamtam-orange transition-colors">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all pl-11 bg-gray-50/50"
                placeholder="your.email@example.com"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tamtam-gray/50 group-focus-within:text-tamtam-orange transition-colors">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="phone" className="block text-sm font-medium text-tamtam-black mb-1.5 group-focus-within:text-tamtam-orange transition-colors">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all pl-11 bg-gray-50/50"
                placeholder="+254 XXX XXX XXX"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tamtam-gray/50 group-focus-within:text-tamtam-orange transition-colors">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-tamtam-black mb-1.5 group-focus-within:text-tamtam-orange transition-colors">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all pl-11 bg-gray-50/50"
                placeholder="How can we help you?"
              ></textarea>
              <div className="absolute left-3 top-6 text-tamtam-gray/50 group-focus-within:text-tamtam-orange transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div className="pt-3">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-tamtam-orange to-tamtam-accent hover:from-tamtam-accent hover:to-tamtam-orange text-white py-6 rounded-lg relative overflow-hidden group shadow-button hover:shadow-lg transition-all duration-500 h-auto"
              disabled={isSubmitting || isSuccess}
            >
              <span className="relative z-10 flex items-center justify-center font-neutra tracking-wide">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </span>
            </Button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-3 right-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-tamtam-orange/20">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
