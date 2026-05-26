import React from "react";
import AboutTabs from "./AboutTabs";
import AboutDetails from "./AboutDetails";

const AboutSummary = () => {
  return (
    <section className="pt-16 relative w-full overflow-hidden">
      <AboutTabs />
      <AboutDetails />
    </section>
  );
};

export default AboutSummary;
