import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChildSafety from "./pages/ChildSafety";
import Cybersecurity from "./pages/Cybersecurity";
import LegalResources from "./pages/LegalResources";
import Emergency from "./pages/Emergency";
import Ministries from "./pages/Ministries";
import BlogsNews from "./pages/BlogsNews";
import Nutrition from "./pages/Nutrition";
import Initiatives from "./pages/Initiatives";
import India from "./components/countries/India";
import USA from "./components/countries/USA";
import China from "./components/countries/China";
import Russia from "./components/countries/Russia";
import Japan from "./components/countries/Japan";
import Australia from "./components/countries/Australia";
import Finland from "./components/countries/Finland";
import UK from "./components/countries/UK";
import Canada from "./components/countries/Canada";
import Germany from "./components/countries/Germany";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="md:pt-16 sm:pt-18 bg-blue-900"> {/* padding to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/legal-resources" element={<LegalResources />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/blogs-news" element={<BlogsNews />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/countries/India" element={<India />} />
          <Route path="/countries/USA" element={<USA />} />
          <Route path="/countries/China" element={<China />} />
          <Route path="/countries/Russia" element={<Russia />} />
          <Route path="/countries/Japan" element={<Japan />} />
          <Route path="/countries/Australia" element={<Australia />} />
          <Route path="/countries/Finland" element={<Finland />} />
          <Route path="/countries/UK" element={<UK />} />
          <Route path="/countries/Canada" element={<Canada />} />
          <Route path="/countries/Germany" element={<Germany />} />
          <Route path="/blogs-news/:slug" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
