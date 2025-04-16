
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users, Info, UtensilsCrossed } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ErrorBoundary } from "./ui/error-boundary";

// Available time slots
const TIME_SLOTS = [
  "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", 
  "1:00 PM", "1:30 PM", 
  "2:00 PM", "2:30 PM", 
  "5:00 PM", "5:30 PM", 
  "6:00 PM", "6:30 PM", 
  "7:00 PM", "7:30 PM", 
  "8:00 PM", "8:30 PM"
];

// Party size options
const PARTY_SIZES = Array.from({ length: 10 }, (_, i) => i + 1);

// Form schema for validation
const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\- ]+$/, "Please enter a valid phone number"),
  date: z.date({
    required_error: "Please select a date",
  }),
  time: z.string({
    required_error: "Please select a time",
  }),
  partySize: z.number({
    required_error: "Please select party size",
  }),
  specialRequests: z.string().optional(),
  location: z.string({
    required_error: "Please select a location",
  }),
});

type ReservationValues = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  locations: { id: string; name: string }[];
  onReservationComplete?: (data: ReservationValues) => void;
}

export function ReservationForm({ 
  locations = [], 
  onReservationComplete 
}: ReservationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Set default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: tomorrow,
      time: "",
      partySize: 2,
      specialRequests: "",
      location: locations.length > 0 ? locations[0].id : "",
    },
  });

  function onSubmit(data: ReservationValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Reservation Confirmed!",
        description: `Your table for ${data.partySize} on ${format(data.date, "MMMM do, yyyy")} at ${data.time} has been reserved.`,
        variant: "default",
      });
      
      if (onReservationComplete) {
        onReservationComplete(data);
      }
      
      // Reset form
      form.reset({
        name: "",
        email: "",
        phone: "",
        date: tomorrow,
        time: "",
        partySize: 2,
        specialRequests: "",
        location: locations.length > 0 ? locations[0].id : "",
      });
    }, 1500);
  }

  return (
    <ErrorBoundary>
      <Card className="w-full max-w-2xl mx-auto shadow-md">
        <CardHeader className="bg-tamtam-orange-50 border-b">
          <CardTitle className="text-2xl font-playfair text-tamtam-orange-800">Book Your Table</CardTitle>
          <CardDescription>
            Reserve your dining experience at Tam Tam
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+254 XXX XXX XXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.id} value={location.id}>
                              {location.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => {
                              // Disable dates in the past
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time">
                              {field.value ? (
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  {field.value}
                                </div>
                              ) : (
                                "Select a time"
                              )}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {TIME_SLOTS.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="partySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Party Size</FormLabel>
                      <Select 
                        onValueChange={(value) => field.onChange(parseInt(value))} 
                        defaultValue={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select party size">
                              {field.value ? (
                                <div className="flex items-center">
                                  <Users className="mr-2 h-4 w-4" />
                                  {field.value} {field.value === 1 ? "person" : "people"}
                                </div>
                              ) : (
                                "Select party size"
                              )}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {PARTY_SIZES.map((size) => (
                            <SelectItem key={size} value={size.toString()}>
                              {size} {size === 1 ? "person" : "people"}
                            </SelectItem>
                          ))}
                          <SelectItem value="11">Large party (11+)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        For parties larger than 10, please call us directly.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="specialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any dietary restrictions, allergies, or special occasions?" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      We'll do our best to accommodate your requests.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between items-center rounded-lg border p-3 bg-muted/50">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-tamtam-orange-600" />
                  <div className="text-sm">
                    <p className="font-medium">Reservation Policy</p>
                    <p className="text-muted-foreground">Tables are held for 15 minutes past reservation time</p>
                  </div>
                </div>
                <UtensilsCrossed className="h-10 w-10 text-tamtam-orange-200" />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  By making a reservation, you agree to our <a href="#" className="text-tamtam-orange-600 hover:underline">reservation policy</a>.
                </p>
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Processing..." : "Reserve Table"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center border-t bg-muted/30 py-4">
          <p className="text-sm text-center text-muted-foreground">
            For assistance or last-minute reservations, please call us at <span className="font-medium text-foreground">+254 700 123 456</span>
          </p>
        </CardFooter>
      </Card>
    </ErrorBoundary>
  );
}
