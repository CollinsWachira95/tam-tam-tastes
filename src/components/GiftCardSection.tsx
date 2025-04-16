
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Gift, CreditCard, Mail, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ErrorBoundary } from "./ui/error-boundary";

// Gift card amounts
const GIFT_CARD_AMOUNTS = ["25", "50", "75", "100", "150", "200", "custom"];

// Gift card form schema
const giftCardSchema = z.object({
  amount: z.string({
    required_error: "Please select an amount",
  }),
  customAmount: z.string().optional(),
  recipientName: z.string().min(2, "Recipient name must be at least 2 characters"),
  recipientEmail: z.string().email("Please enter a valid email"),
  senderName: z.string().min(2, "Your name must be at least 2 characters"),
  senderEmail: z.string().email("Please enter a valid email"),
  message: z.string().optional(),
  deliveryDate: z.string().optional(),
});

type GiftCardFormValues = z.infer<typeof giftCardSchema>;

// Gift card check form schema
const giftCardCheckSchema = z.object({
  giftCardNumber: z.string().min(5, "Please enter a valid gift card number"),
  pin: z.string().min(4, "PIN must be at least 4 characters"),
});

type GiftCardCheckValues = z.infer<typeof giftCardCheckSchema>;

export function GiftCardSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingBalance, setIsCheckingBalance] = useState(false);
  const { toast } = useToast();
  
  const giftCardForm = useForm<GiftCardFormValues>({
    resolver: zodResolver(giftCardSchema),
    defaultValues: {
      amount: "",
      customAmount: "",
      recipientName: "",
      recipientEmail: "",
      senderName: "",
      senderEmail: "",
      message: "",
      deliveryDate: "",
    },
  });
  
  const balanceCheckForm = useForm<GiftCardCheckValues>({
    resolver: zodResolver(giftCardCheckSchema),
    defaultValues: {
      giftCardNumber: "",
      pin: "",
    },
  });
  
  const onSubmitGiftCard = (data: GiftCardFormValues) => {
    setIsSubmitting(true);
    
    // Calculate the final amount
    const finalAmount = data.amount === "custom" ? data.customAmount : data.amount;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Gift Card Purchase Successful!",
        description: `Your gift card for $${finalAmount} has been sent to ${data.recipientEmail}.`,
      });
      
      // Reset form
      giftCardForm.reset();
    }, 1500);
  };
  
  const onCheckBalance = (data: GiftCardCheckValues) => {
    setIsCheckingBalance(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsCheckingBalance(false);
      
      // Simulate a random balance between $10 and $200
      const randomBalance = Math.floor(Math.random() * 190) + 10;
      
      toast({
        title: "Gift Card Balance",
        description: `Your gift card balance is $${randomBalance.toFixed(2)}.`,
      });
      
      // Reset form
      balanceCheckForm.reset();
    }, 1500);
  };
  
  return (
    <ErrorBoundary>
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
                Perfect Gift
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                TamTam Gift Cards
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Share the taste of authentic Kenyan cuisine with friends and family. Our gift cards make the perfect present for any occasion.
              </p>
            </div>
            
            <Card className="shadow-md">
              <Tabs defaultValue="purchase">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="purchase" className="flex items-center gap-2">
                    <Gift className="h-4 w-4" />
                    Purchase Gift Card
                  </TabsTrigger>
                  <TabsTrigger value="check" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Check Balance
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="purchase">
                  <CardHeader>
                    <CardTitle>Purchase a Gift Card</CardTitle>
                    <CardDescription>
                      Send a digital gift card directly to your recipient's email.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...giftCardForm}>
                      <form onSubmit={giftCardForm.handleSubmit(onSubmitGiftCard)} className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Gift Card Details</h3>
                          
                          <FormField
                            control={giftCardForm.control}
                            name="amount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Gift Card Amount</FormLabel>
                                <Select 
                                  onValueChange={(value) => {
                                    field.onChange(value);
                                    if (value !== "custom") {
                                      giftCardForm.setValue("customAmount", "");
                                    }
                                  }}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select amount" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {GIFT_CARD_AMOUNTS.map((amount) => (
                                      <SelectItem key={amount} value={amount}>
                                        {amount === "custom" ? "Custom Amount" : `$${amount}`}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {giftCardForm.watch("amount") === "custom" && (
                            <FormField
                              control={giftCardForm.control}
                              name="customAmount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Custom Amount</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
                                      <Input 
                                        type="number"
                                        min="5"
                                        max="500"
                                        placeholder="Enter amount"
                                        className="pl-8"
                                        {...field} 
                                      />
                                    </div>
                                  </FormControl>
                                  <FormDescription>
                                    Enter an amount between $5 and $500
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Recipient Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={giftCardForm.control}
                              name="recipientName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Recipient's Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Jane Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={giftCardForm.control}
                              name="recipientEmail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Recipient's Email</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                      <Input 
                                        type="email"
                                        placeholder="jane.doe@example.com"
                                        className="pl-10"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={giftCardForm.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Personal Message (Optional)</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Add a personal message to the recipient"
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Maximum 200 characters
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={giftCardForm.control}
                            name="deliveryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Delivery Date (Optional)</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="date"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Leave blank to send immediately
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Your Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={giftCardForm.control}
                              name="senderName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Your Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                      <Input 
                                        placeholder="John Doe"
                                        className="pl-10"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={giftCardForm.control}
                              name="senderEmail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Your Email</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                      <Input 
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="pl-10"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing..." : "Purchase Gift Card"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </TabsContent>
                
                <TabsContent value="check">
                  <CardHeader>
                    <CardTitle>Check Gift Card Balance</CardTitle>
                    <CardDescription>
                      Enter your gift card details to check the current balance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...balanceCheckForm}>
                      <form onSubmit={balanceCheckForm.handleSubmit(onCheckBalance)} className="space-y-4">
                        <FormField
                          control={balanceCheckForm.control}
                          name="giftCardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gift Card Number</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                  <Input 
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    className="pl-10"
                                    {...field}
                                  />
                                </div>
                              </FormControl>
                              <FormDescription>
                                Enter the 16-digit number from your gift card
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={balanceCheckForm.control}
                          name="pin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>PIN</FormLabel>
                              <FormControl>
                                <Input 
                                  type="password" 
                                  placeholder="Enter PIN"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Enter the 4-digit PIN from your gift card
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isCheckingBalance}
                        >
                          {isCheckingBalance ? "Checking..." : "Check Balance"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </TabsContent>
              </Tabs>
              <CardFooter className="bg-muted/30 flex justify-center py-4 text-sm text-center text-muted-foreground">
                Gift cards are valid for 1 year from the date of purchase and can be used at any TamTam location.
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Perfect for Any Occasion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Birthdays, anniversaries, holidays, or just to say thank you – a TamTam gift card is always appreciated.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Easy to Redeem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Simply present your gift card in-store or enter the code during online checkout to redeem.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">No Expiry for 1 Year</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your gift card is valid for a full year from purchase, giving plenty of time to enjoy the experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
