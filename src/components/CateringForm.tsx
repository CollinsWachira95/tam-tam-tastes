
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  eventDate: z.string().min(1, { message: "Please select an event date" }),
  guestCount: z.string().min(1, { message: "Please enter number of guests" }),
  eventType: z.string().min(1, { message: "Please select an event type" }),
  message: z.string().optional(),
});

const CateringForm = () => {
  const { toast } = useToast();

  // Form handling with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      guestCount: "",
      eventType: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", values);
    
    toast({
      title: "Inquiry Received",
      description: "We'll contact you within 24 hours to discuss your catering needs.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <section id="inquiry-form" className="section bg-tamtam-light">
      <div className="absolute inset-0 kenyan-texture opacity-40"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4 font-neutra">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2">Request a Catering Quote</h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-green/50 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
            Fill out the form below and our catering team will contact you within 24 hours to discuss your event needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-premium relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-tamtam-orange-100/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tamtam-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 kenyan-dots opacity-20"></div>
          
          <div className="relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Full Name</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            placeholder="Your name"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Email Address</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Phone Number</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="tel"
                            placeholder="+254 XXX XXX XXX"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Event Date</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="date"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Number of Guests</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="number"
                            placeholder="50"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-medium font-neutra">Event Type</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          >
                            <option value="">Select an event type</option>
                            <option value="corporate">Corporate</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2 md:col-span-2">
                        <FormLabel className="font-medium font-neutra">Additional Details</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your event, any specific requirements or questions you have..."
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tamtam-orange/30 focus:border-tamtam-orange transition-all bg-white font-neutra"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="md:col-span-2 flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-tamtam-orange to-tamtam-accent hover:from-tamtam-accent hover:to-tamtam-orange text-white px-10 py-6 h-auto rounded-xl font-neutra text-lg shadow-premium-hover transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringForm;
