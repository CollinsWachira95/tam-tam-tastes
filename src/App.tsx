
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ChatBot from "@/components/ChatBot";

// Lazy loaded pages for performance optimization
const Menu = lazy(() => import("@/pages/Menu"));
const Butchery = lazy(() => import("@/pages/Butchery"));
const About = lazy(() => import("@/pages/About"));
const Catering = lazy(() => import("@/pages/Catering"));
const Locations = lazy(() => import("@/pages/Locations"));
const Cart = lazy(() => import("@/pages/Cart"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// ScrollToTop component to fix page scroll position when navigating
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tamtam-orange-600"></div>
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/butchery" element={<Butchery />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ChatBot />
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
