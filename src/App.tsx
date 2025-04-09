
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "@/pages/Menu";
import Butchery from "@/pages/Butchery";
import About from "@/pages/About";
import Catering from "@/pages/Catering";
import Locations from "@/pages/Locations";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Reservations from "@/pages/Reservations";
import Profile from "@/pages/Profile";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/butchery" element={<Butchery />} />
          <Route path="/about" element={<About />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
