
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { FullPageSpinner } from "@/components/ui/spinner";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";

// Eagerly loaded components
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
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Reservations = lazy(() => import("@/pages/Reservations"));
const Profile = lazy(() => import("@/pages/Profile"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <FullPageSpinner />;
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

// Public route that redirects authenticated users
const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <FullPageSpinner />;
  }
  
  if (user) {
    // Redirect to the page they came from or to profile
    const from = location.state?.from?.pathname || "/profile";
    return <Navigate to={from} replace />;
  }
  
  return <>{children}</>;
};

const AppContent = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<FullPageSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/butchery" element={<Butchery />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/login" 
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicOnlyRoute>
                  <Register />
                </PublicOnlyRoute>
              } 
            />
            <Route 
              path="/reservations" 
              element={<Reservations />} 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
