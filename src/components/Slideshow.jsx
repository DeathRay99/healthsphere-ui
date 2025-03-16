"use client";

import { Carousel } from "./ui/carousel";

export function Slideshow() {
  const slideData = [
    {
      title: "Invest in your health",
      src: "/assets/jogging_man.avif",
    },
    {
      title: "Fuel your body, feed your soul",
      src: "/assets/meal1.jpg",
    },
    {
      title: "Healthy choices, happy life",
      src: "/assets/meal2.avif",
    },
    {
      title: "Live actively, live vibrantly",
      src: "/assets/workout1.jpg",
    },
    {
      title: "Wellness is a way of life",
      src: "/assets/workout2.avif",
    },
    {
      title: "Embrace the journey to a healthier you",
      src: "/assets/workout3.jpg",
    },
  ];
  return (
    (<div className="relative overflow-hidden w-full h-full pt-6 pb-12">
      <Carousel slides={slideData} />
    </div>)
  );
}
