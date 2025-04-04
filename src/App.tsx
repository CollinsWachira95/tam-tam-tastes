
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Catering from "./pages/Catering";
import Privacy from "./pages/Privacy";
import Butchery from "./pages/Butchery";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

// Add this to ensure font is loaded
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

const App = () => {
  // Show cookie consent toast when the app loads
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted") === "true";
    
    if (!hasAcceptedCookies) {
      toast({
        title: "Cookie Notice",
        description: "We use cookies to enhance your experience on our website.",
        action: (
          <button 
            onClick={() => {
              localStorage.setItem("cookiesAccepted", "true");
            }}
            className="bg-tamtam-orange text-white px-4 py-2 rounded-md text-xs font-medium font-neutra"
          >
            Accept
          </button>
        ),
        duration: 10000, // 10 seconds
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/ajf8ggy.css" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/neutra-text-alt" />
        <style>{`
          @font-face {
            font-family: 'Neutra Text';
            src: url('https://fonts.cdnfonts.com/css/neutra-text-alt') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Neutra Text';
            src: url('https://fonts.cdnfonts.com/css/neutra-text-alt') format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          
          body {
            font-family: 'Neutra Text', sans-serif;
            font-feature-settings: "liga", "kern";
            text-rendering: optimizeLegibility;
          }
        `}</style>
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/butchery" element={<Butchery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
