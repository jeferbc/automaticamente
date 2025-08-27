"use client";
import React, { useEffect } from "react";
// import Custom Components
import BannerSection from "../../containers/layouts/sections/automaticamente/banner";
import FeatureSection from "../../containers/layouts/sections/automaticamente/feature";
import BuildSection from "../../containers/layouts/sections/automaticamente/build";
import WorkSection from "../../containers/layouts/sections/automaticamente/work";
import PriceSection from "../../containers/layouts/sections/automaticamente/price";
import TestimonialSection from "../../containers/layouts/sections/automaticamente/testimonial";
import SubscribeSection from "../../containers/layouts/sections/automaticamente/subscribe";
import FaqSection from "../../containers/layouts/sections/automaticamente/faq";
import ClientSection from "../../containers/layouts/sections/automaticamente/client";
import FooterSection from "../../containers/layouts/sections/automaticamente/footer";
import Copyright from "../../containers/layouts/sections/automaticamente/copyright";
import Header from "../../containers/common/header";

const Automaticamente = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#2563eb");
    document.body.style.setProperty("--secondary", "#1e40af");
    document.body.style.setProperty("--light", "#3b82f6");
    document.body.style.setProperty("--dark", "#1d4ed8");
  });

  return (
    <div>
      <Header className="saas1" />
      <BannerSection />
      <FeatureSection />
      {/* <BuildSection /> */}
      <SubscribeSection />
      <WorkSection />
      <PriceSection />
      <TestimonialSection />
      <FaqSection />
      {/* <ClientSection /> */}
      {/* <FooterSection /> */}
      <Copyright />
    </div>
  );
};

export default Automaticamente;
