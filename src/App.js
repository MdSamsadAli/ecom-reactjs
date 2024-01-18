import "./App.css";
import Navbar from "./common/Navbar";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { Home, Category, Cart } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
