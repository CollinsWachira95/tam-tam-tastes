
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ChatBot from "@/components/ChatBot";

// Custom ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Lazy loaded pages for performance optimization but with minimal loading state
const Menu = lazy(() => import("@/pages/Menu"));
const Butchery = lazy(() => import("@/pages/Butchery"));
const About = lazy(() => import("@/pages/About"));
const Catering = lazy(() => import("@/pages/Catering"));
const Locations = lazy(() => import("@/pages/Locations"));
const Cart = lazy(() => import("@/pages/Cart"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const OrderSuccess = lazy(() => import("@/pages/OrderSuccess"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<div className="h-1 w-full bg-tamtam-orange-200">
          <div className="h-1 bg-tamtam-orange-600 animate-[shimmer_1s_infinite_linear]" style={{width: '30%'}}></div>
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/butchery" element={<Butchery />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
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
