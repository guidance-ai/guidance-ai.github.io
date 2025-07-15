// src/components/QuickstartCard.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function QuickstartCard() {
  const cardRef = useRef();

  useEffect(() => {
    const el = cardRef.current;

    // 
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });

    // 
    const onEnter = () => {
      gsap.to(el, {
        y: -8,
        scale: 1.02,
        boxShadow: "0px 12px 24px rgba(147, 52, 233, 0.3)",
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        duration: 0.4,
        ease: "power2.inOut"
      });
    };

    //el.addEventListener("mouseenter", onEnter);
    //el.addEventListener("mouseleave", onLeave);

   //return () => {
   //   el.removeEventListener("mouseenter", onEnter);
   //   el.removeEventListener("mouseleave", onLeave);
    //};
  }, []);

  return (
    <div
      ref={cardRef}
      class="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg"

    >
      <div className="flex items-center">
        <span className="text-[#DB2877] text-2xl">🚀</span>
        <h2 className="text-lg font-bold text-gray-900 ml-3">Quickstart</h2>
      </div>
      <p className="text-gray-700 mt-2 max-w-xl">
        Get up and running in minutes. Learn the basics of Guidance and write your first program.
      </p>
      <ul className="list-none mt-4 ml-3 space-y-2">
        <li className="flex items-center">
          <span className="mr-2 text-gray-500">›</span>
          <a href="/docs/todo" className="text-gray-500 hover:underline">Installation</a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-gray-500">›</span>
          <a href="/docs/todo" className="text-gray-500 hover:underline">Basic Usage</a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-gray-500">›</span>
          <a href="/docs/todo" className="text-gray-500 hover:underline">First Steps</a>
        </li>
      </ul>
    </div>
  );
}
