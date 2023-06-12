import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import HelpUs from "../pages/HelpUs";
import TheCats from "../pages/TheCats";
import PhotosAndMore from "../pages/PhotosAndMore";
import Wishlist from "../pages/Wishlist";
import Volunteer from "../pages/Volunteer";
import Memorials from "../pages/Memorials";
import WatchLive from "../pages/WatchLive";
import styles from "./App.module.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/HelpUs" element={<HelpUs />} />
        <Route path="/TheCats" element={<TheCats />} />
        <Route path="/PhotosAndMore" element={<PhotosAndMore />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Memorials" element={<Memorials />} />
        <Route path="/WatchLive" element={<WatchLive />} />
      </Routes>
    </Layout>
  );
}

export default App;
