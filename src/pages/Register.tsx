
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EnhancedCard, EnhancedCardHeader, EnhancedCardContent, EnhancedCardTitle, EnhancedCardDescription, EnhancedCardFooter } from "@/components/ui/enhanced-card";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { InlineError } from "@/components/ui/error-boundary";
import { UserPlus, ArrowRight, Lock, Mail, User } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password);
      toast({
        title: "Registration successful",
        description: "Welcome to Tam Tam!",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "There was a problem creating your account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center py-16 bg-gradient-to-b from-tamtam-light to-white">
        <EnhancedCard 
          variant="elevated" 
          shadow="md" 
          className="w-full max-w-md mx-4 animate-fade-in"
        >
          <EnhancedCardHeader className="text-center">
            <div className="mx-auto bg-tamtam-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <UserPlus className="text-tamtam-orange-600 h-6 w-6" />
            </div>
            <EnhancedCardTitle>Create Account</EnhancedCardTitle>
            <EnhancedCardDescription>Join the Tam Tam family</EnhancedCardDescription>
          </EnhancedCardHeader>
          
          <EnhancedCardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-tamtam-gray-500" /> Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.name && <InlineError message={errors.name} />}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-tamtam-gray-500" /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.email && <InlineError message={errors.email} />}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-tamtam-gray-500" /> Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.password && <InlineError message={errors.password} />}
                {!errors.password && (
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-tamtam-gray-500" /> Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? "border-red-300 focus:ring-red-500" : ""}
                />
                {errors.confirmPassword && <InlineError message={errors.confirmPassword} />}
              </div>
              
              <Button
                type="submit"
                variant="premium"
                className="w-full mt-6"
                loading={isLoading}
                trailingIcon={<ArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </EnhancedCardContent>
          
          <EnhancedCardFooter align="center" className="flex-col space-y-4 border-t border-gray-100 mt-4 pt-6">
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link to="/login" className="text-tamtam-orange-600 hover:underline font-medium">
                Sign in
              </Link>
            </div>
            
            <p className="text-xs text-center text-muted-foreground max-w-xs mx-auto pt-4 border-t border-gray-100">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          </EnhancedCardFooter>
        </EnhancedCard>
      </div>
    </Layout>
  );
};

export default Register;
