"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
const featuredProducts = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg",
  "/images/pmmodi.jpg"
];

let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 1000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
  };


  
  return (
    <div
      ref={slideRef}
      className="w-screen h-[460px]  select-none relative   "
    >
      <div className="ml-96  mt-20">
        <Image
          src={featuredProducts[currentIndex]}
          alt=""
          height={300}
          width={700}
          className=""
        />
      </div>
    </div>
  );
}
