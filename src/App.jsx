import "./App.css";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Blog from "./components/pages/blog";
import ContactUs from "./components/pages/contactUs";
import Services from "./components/pages/services";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
