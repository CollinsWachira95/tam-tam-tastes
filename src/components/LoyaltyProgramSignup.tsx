
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BadgeDollarSign, Gift, Trophy, Users } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ErrorBoundary } from "./ui/error-boundary";

const loyaltyFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\- ]+$/, "Please enter a valid phone number"),
  birthdate: z.string().optional(),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
  acceptMarketing: z.boolean().optional(),
});

type LoyaltyFormValues = z.infer<typeof loyaltyFormSchema>;

export function LoyaltyProgramSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<LoyaltyFormValues>({
    resolver: zodResolver(loyaltyFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthdate: "",
      acceptTerms: false,
      acceptMarketing: false,
    },
  });

  function onSubmit(data: LoyaltyFormValues) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      toast({
        title: "Welcome to TamTam Rewards!",
        description: "You've successfully joined our loyalty program. Check your email for details.",
      });

      // Reset form
      form.reset();
    }, 1500);
  }

  return (
    <ErrorBoundary>
      <section className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-tamtam-orange/10 text-tamtam-orange rounded-full text-sm font-medium mb-4">
                Rewards Program
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Join TamTam Rewards
              </h2>
              <p className="text-muted-foreground mb-8">
                Become a member of our loyalty program and enjoy exclusive benefits, special offers, and earn points with every visit. It's our way of saying thank you for your continued support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-muted/40 border-none">
                  <CardHeader className="pb-2">
                    <Trophy className="h-8 w-8 text-tamtam-orange-600 mb-2" />
                    <CardTitle className="text-lg">Earn Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Earn 1 point for every $1 spent. Points can be redeemed for discounts on future visits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40 border-none">
                  <CardHeader className="pb-2">
                    <Gift className="h-8 w-8 text-tamtam-orange-600 mb-2" />
                    <CardTitle className="text-lg">Birthday Reward</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Receive a complimentary dessert during your birthday month as our gift to you.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40 border-none">
                  <CardHeader className="pb-2">
                    <BadgeDollarSign className="h-8 w-8 text-tamtam-orange-600 mb-2" />
                    <CardTitle className="text-lg">Special Offers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get access to exclusive member-only promotions, discounts, and early access to special events.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/40 border-none">
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-tamtam-orange-600 mb-2" />
                    <CardTitle className="text-lg">Refer Friends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Earn bonus points when you refer friends and family to join our loyalty program.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Sign Up for TamTam Rewards</CardTitle>
                  <CardDescription>
                    Fill out the form below to join our loyalty program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" type="email" {...field} />
                            </FormControl>
                            <FormDescription>
                              We'll send your rewards information to this email
                            </FormDescription>
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
                            <FormDescription>
                              For SMS notifications about special offers
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="birthdate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Birth Date (Optional)</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormDescription>
                              To send you a special birthday reward
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="acceptTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the{" "}
                                <a
                                  href="/terms"
                                  className="text-tamtam-orange-600 hover:underline"
                                >
                                  terms and conditions
                                </a>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="acceptMarketing"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I would like to receive promotional emails
                              </FormLabel>
                              <FormDescription>
                                You can unsubscribe at any time
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Processing..." : "Join TamTam Rewards"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="bg-muted/30 flex justify-center py-4 text-sm text-center text-muted-foreground">
                  Your privacy is important to us. Read our{" "}
                  <a href="/privacy" className="text-tamtam-orange-600 hover:underline mx-1">
                    Privacy Policy
                  </a>
                  to learn how we protect your data.
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
