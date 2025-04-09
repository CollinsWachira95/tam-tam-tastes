
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Reservations = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const times = [
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time) {
      toast({
        title: "Missing information",
        description: "Please select a date and time for your reservation",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // This would call an API in a real application
    setTimeout(() => {
      toast({
        title: "Reservation confirmed!",
        description: `Your table for ${guests} guests on ${format(date, 'PPP')} at ${time} has been reserved.`,
      });
      
      setIsSubmitting(false);
      if (isAuthenticated) {
        navigate("/profile");
      } else {
        navigate("/");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-tamtam-orange-50 to-tamtam-light">
        <div className="container-custom max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-center">Make a Reservation</h1>
          <p className="text-center text-tamtam-gray-600 mb-12 max-w-2xl mx-auto">
            Reserve your table at Tam Tam and experience the authentic taste of Kenya. We look forward to serving you!
          </p>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date selection */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Time selection */}
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {times.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Party size */}
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder="Select party size" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? "person" : "people"}
                          </SelectItem>
                        ))}
                        <SelectItem value="11">Large party (10+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Occasion */}
                  <div className="space-y-2">
                    <Label htmlFor="occasion">Occasion (Optional)</Label>
                    <Select value={occasion} onValueChange={setOccasion}>
                      <SelectTrigger id="occasion">
                        <SelectValue placeholder="Select an occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">None</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="business">Business Dinner</SelectItem>
                        <SelectItem value="celebration">Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Contact information */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <textarea
                      id="requests"
                      className="w-full min-h-[100px] p-3 border border-input rounded-md resize-y"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Any dietary requirements or special requests?"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Confirming Reservation..." : "Confirm Reservation"}
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  By making a reservation you agree to our reservation policy. 
                  <br />
                  A confirmation will be sent to your email.
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <h2 className="font-playfair text-2xl font-bold mb-4">Reservation Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Hours of Operation</h3>
                <ul className="space-y-2 text-tamtam-gray-600">
                  <li><span className="font-medium">Monday - Thursday:</span> 11:30 AM - 9:00 PM</li>
                  <li><span className="font-medium">Friday - Saturday:</span> 11:30 AM - 10:00 PM</li>
                  <li><span className="font-medium">Sunday:</span> 11:30 AM - 8:00 PM</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Reservation Policy</h3>
                <ul className="space-y-2 text-tamtam-gray-600">
                  <li>We hold reservations for 15 minutes past the scheduled time.</li>
                  <li>For parties of 6 or more, please call us directly.</li>
                  <li>Cancellations should be made at least 4 hours in advance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reservations;
