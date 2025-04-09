import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Butchery from "@/pages/Butchery";
import About from "@/pages/About";
import Catering from "@/pages/Catering";
import Locations from "@/pages/Locations";
import Cart from "@/pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/butchery" element={<Butchery />} />
        <Route path="/about" element={<About />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
