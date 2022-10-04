import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Pricing from "components/pricing/ThreePlans.js"
export default () => (
  <AnimationRevealPage>
    <Hero disabled={true}/>
    <Pricing plans={[
    {
      name: "Application Photos",
      price: "Free",
      duration: "Per Photo",
      mainFeature: "Suited for Passport/LinkedIn Use",
      features: ["All Photos Edited", "Will fit photo to any job dimensions", "Studio backdrop" ],
      featured: true,
    },
    {
      name: "Headshots",
      price: "$75.00",
      duration: "Per Photo",
      mainFeature: "Suited for Professional/Website Use",
      features: ["All Photos Edited","1 Hour Studio Time", "Free Consultation"],
      featured: true,
    },
    {
      name: "Event",
      price: "$150",
      duration: "Hourly",
      mainFeature: "Suited for Professional Events",
      features: ["All Photos Edited", "You keep all digital copies", "You own the copyright", "Video Recording Available", "all physical copies are extra"],
      featured: true,
    },
    {
      name: "Special Events",
      price: "Contact US",
      duration: "One Time",
      mainFeature: "Suited for Big Events/Companies",
      features: ["All Photos Edited","Personal Consultation", "Video Recording Available" ,"Physical copies available for purchase"],
      featured: true,
    },
  ]}
  description="Love to help anyone trying to apply for a job, put their best foot forward or capture a special memory for all time."
/>
    <SliderCard />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <Footer />
  </AnimationRevealPage>
);
