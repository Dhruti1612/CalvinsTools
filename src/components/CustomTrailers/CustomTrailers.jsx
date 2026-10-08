import CustomHero from "./CustomHero";
import CustomBuildTypes from "./CustomBuildTypes";
import CustomBaseModels from "./CustomBaseModels";
import CustomConfigurator from "./CustomConfigurator";
import CustomHowBuild from "./CustomHowBuild";
import CustomRecentBuilds from "./CustomRecentBuilds";
import CustomFAQ from "./CustomFAQ";
import CTA from "../Home/CTA"

function CustomTrailers() {
  return (
    <div>
      <CustomHero />
      <CustomBuildTypes />
      <CustomBaseModels />
      <CustomConfigurator />
      <CustomHowBuild />
      <CustomRecentBuilds />
      <CustomFAQ />
      <CTA />

    </div>
  )
}

export default CustomTrailers
