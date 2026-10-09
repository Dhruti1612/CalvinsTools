import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home/HomePage";
import TrailerRental from "./components/TrailerRental/TrailerRental";
import TrailersForSale from "./components/TrailersForSale/TrailersForSale";
import CustomTrailers from "./components/CustomTrailers/CustomTrailers";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import Certifications from "./components/Certification/Certifications";
import Blog from "./components/Blog/Blog";
import RentalTrailerDetail from "./components/TrailerRental/RentalTrailerDetail";
import SaleTrailerDetail from "./components/TrailersForSale/SaleTrailerDetail";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        <Route
          path="/trailer-rental"
          element={<TrailerRental />}
        />


        <Route
    path="/trailer-rental/:slug"
    element={<RentalTrailerDetail />}
  />

       

        <Route
          path="/trailers-for-sale"
          element={<TrailersForSale />}
        />

        
<Route
  path="/trailers-for-sale/:slug"
  element={<SaleTrailerDetail />}
/>
        


         <Route
          path="/custom-trailers"
          element={<CustomTrailers />}
        />


        <Route
          path="/how-it-works"
          element={<HowItWorks />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;