"use client"

import { useState, useEffect } from "react";

export default function CounterAnimation() {
  const [count, setCount] = useState(0);
  const [coun, setCoun] = useState(0);
  const [cou, setCou] = useState(0);
  const [no, setNo] = useState(0);
  const [co, setCo] = useState(0);

  useEffect(() => {
    const finalCount = 500;
    
    const animationDuration = 1500; // Time in milliseconds
    const interval = 9;
    const step = Math.floor(finalCount * interval / animationDuration);


    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + step;
        return nextCount >= finalCount ? finalCount : nextCount;
      });
    }, interval);
    
    

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex gap-24 mb-40 items-center justify-center ">
      <p className="bg-[#282863] text-white font-bold p-10 rounded-xl opacity-25">Start-Ups : {count} +</p>
      <p  className="bg-[#282863] text-white font-bold p-10 rounded-xl opacity-25">Incubators : {count} +</p>
      <p  className="bg-[#282863] text-white font-bold p-10 rounded-xl opacity-25">Accelators : {count} +</p>
      <p  className="bg-[#282863] text-white font-bold p-10 rounded-xl opacity-25">Mentors : {count} +</p>
      <p  className="bg-[#282863] text-white font-bold p-10 rounded-xl opacity-25">Investors : {count} +</p>
    </div>
  );
}