import Hero from "./Hero";
import Trust from "./Trust";  
import Trailers from "./Trailers";
import Rental from "./Rental";
import BuyCustom from "./BuyCustom";
import Compliance from "./Compliance";
import ShopBySize from "./ShopBySize";
import HowItWorks from "./HowItWorks";
import WhyCalvins from "./WhyCalvins";
import CTA from "./CTA";
import Inquiry from "./Inquiry";


function HomePage() {
  return (
    <div>
      <Hero />
      <Trust />
      <Trailers />
      <Rental />
      <HowItWorks />
      <BuyCustom />
      <Compliance />
      <ShopBySize />
      <WhyCalvins />
      <CTA />
      <Inquiry />
    </div>
  )
}

export default HomePage
