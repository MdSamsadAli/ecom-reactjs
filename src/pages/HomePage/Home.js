import React from "react";
import Features from "../../components/Features";
import Products from "../../components/Products";
import HomeSlide from "../../components/Slider";

export default function Home() {
  return (
    <>
      <HomeSlide />
      <Features />
      <Products />
    </>
  );
}
