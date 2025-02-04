import "./App.css";
import Home from "./components/pages/home";
import AboutUs from "./components/pages/aboutUs";
import Blog from "./components/pages/blog";
import ContactUs from "./components/pages/contactUs";
import First from "./components/pages/Blog/first";
import Second from "./components/pages/Blog/second";
import Third from "./components/pages/Blog/third";
import Seo from "./components/pages/services/seo";
import Ppc from "./components/pages/services/ppc";
import ContentMarketing from "./components/pages/services/contentMarketing";
import SocialMediaMarketing from "./components/pages/services/socialMediaMarketing";
import EmailMarketing from "./components/pages/services/emailMarketing";
import WebDesigning from "./components/pages/services/webDesigning";
import UiUxDesigning from "./components/pages/services/uiuxDesigning";
import GraphicDesigning from "./components/pages/services/graphicDesigning";
import LogoDesigning from "./components/pages/services/logoDesigning";
import VideoEditing from "./components/pages/services/videoEditing";
import IosAppDevelopment from "./components/pages/services/iosAppDevelopment";
import AndroidAppDevelopment from "./components/pages/services/androidAppDevelopment";
import WebDevelopment from "./components/pages/services/webDevelopment";
import WindowsDevelopment from "./components/pages/services/windowsDevelopment";
import Hosting from "./components/pages/services/hosting";
import AnimatedVideos from "./components/pages/services/animatedVideos";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/Ppc" element={<Ppc />} />
        <Route path="/ContentMarketing" element={<ContentMarketing />} />
        <Route path="/SocialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/WebDesigning" element={<WebDesigning />} />
        <Route path="/UiUxDesigning" element={<UiUxDesigning />} />
        <Route path="/GraphicDesigning" element={<GraphicDesigning />} />
        <Route path="/LogoDesigning" element={<LogoDesigning />} />
        <Route path="/VideoEditing" element={<VideoEditing />} />
        <Route path="/IosAppDevelopment" element={<IosAppDevelopment />} />
        <Route path="/AndroidAppDevelopment" element={<AndroidAppDevelopment />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/WindowsDevelopment" element={<WindowsDevelopment />} />
        <Route path="/Hosting" element={<Hosting />} />
        <Route path="/AnimatedVideos" element={<AnimatedVideos />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
