import "./App.css";
import { HeroParallaxDemo } from "../src/components/ui/HeroParallaxDemo.tsx";
import Landing from "./pages/Landing/landing.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services/services.js";
import ServicesMain from "./pages/Services/servicesMain.tsx";
import Photo from "./sections/Photo/photo.jsx";
import Testimonials from "./components/Testimonials/testimonials.jsx";
import { TracingBeamDemo } from "./components/ui/TracingBeamDemo.tsx";
import Work from "./pages/Work/work.jsx";
import Branding from "./sections/Branding/branding.jsx";
import About from "./pages/About/about.tsx";
import Project1 from "./sections/Branding/project1.jsx";
import Project2 from "./sections/Branding/project2.jsx";
import Project3 from "./sections/Branding/project3.jsx";
import HeroSection from "./sections/Marketing/marketing.jsx";
import Marketing from "./sections/Marketing/marketing.jsx";
// import Contact from "./pages/Contact/contact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/blog" element={<TracingBeamDemo />} />
        <Route path="/photography" element={<Photo />} />
        <Route path="/branding" element={<Branding />} />

        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Marketing />} />
        <Route path="/project/3" element={<Project3 />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
