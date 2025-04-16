
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

// Lazy loaded pages for performance optimization
const Menu = lazy(() => import("@/pages/Menu"));
const Butchery = lazy(() => import("@/pages/Butchery"));
const About = lazy(() => import("@/pages/About"));
const Catering = lazy(() => import("@/pages/Catering"));
const Locations = lazy(() => import("@/pages/Locations"));
const Cart = lazy(() => import("@/pages/Cart"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/butchery" element={<Butchery />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
