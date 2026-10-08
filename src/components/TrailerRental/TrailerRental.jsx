import RentalPage from './RentalHero';
import RentalOptions from './RentalOptions';
import RentalTrailers from './RentalTrailers';
import RentalHowItWorks from './RentalHowItWorks';
import RentalAddons from './RentalAddons';
import RentalBeforeBook from './RentalBeforeBook';
import RentalTrailersByType from './RentalTrailersByType';
import RentalFAQ from './RentalFAQ';
import CTA from '../Home/CTA';

function TrailerRental() {
  return (
    <div>
      <RentalPage />
      <RentalOptions />
      <RentalTrailers />
      <RentalHowItWorks />
      <RentalAddons />
      <RentalBeforeBook />
      <RentalTrailersByType />
      <RentalFAQ />
      <CTA />
    </div>
  )
}

export default TrailerRental
