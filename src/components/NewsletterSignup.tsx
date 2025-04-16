
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MailIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

interface NewsletterSignupProps {
  variant?: "default" | "footer" | "sidebar";
  title?: string;
  description?: string;
  buttonText?: string;
}

export function NewsletterSignup({
  variant = "default",
  title = "Subscribe to Our Newsletter",
  description = "Get the latest updates on new menu items, events, and exclusive offers.",
  buttonText = "Subscribe",
}: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Subscription Successful!",
        description: "You've been added to our newsletter.",
      });
      
      // Reset form
      form.reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  if (variant === "footer") {
    return (
      <div className="w-full">
        <h4 className="font-semibold text-base mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2">
                      <div className="relative flex-grow">
                        <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          placeholder="Your email address"
                          type="email"
                          className="pl-10"
                          disabled={isSubmitting || isSuccess}
                          {...field}
                        />
                        {isSuccess && (
                          <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                        )}
                      </div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || isSuccess}
                        className="shrink-0"
                      >
                        {buttonText}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="w-full p-4 bg-muted/50 rounded-lg border">
        <h4 className="font-semibold text-base mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Your email address"
                        type="email"
                        className="pl-10"
                        disabled={isSubmitting || isSuccess}
                        {...field}
                      />
                      {isSuccess && (
                        <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="w-full"
            >
              {isSuccess ? "Subscribed!" : buttonText}
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  // Default variant
  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Your email address"
                      type="email"
                      className="pl-10"
                      disabled={isSubmitting || isSuccess}
                      {...field}
                    />
                    {isSuccess && (
                      <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting || isSuccess}
            size="lg"
            className="w-full sm:w-auto min-w-[140px]"
          >
            {isSuccess ? "Subscribed!" : buttonText}
          </Button>
        </form>
      </Form>
    </div>
  );
}
