// src/components/ButtonWithAnimation.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ButtonWithAnimation() {
  const btnRef = useRef();

  useEffect(() => {
    // 初始进入动画
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });

    // 悬浮动画
    const el = btnRef.current;
    const onEnter = () => gsap.to(el, { scale: 1.1, duration: 0.2 });
    const onLeave = () => gsap.to(el, { scale: 1, duration: 0.2 });

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="px-4 py-2 bg-[#4b41c8] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
    >
      Try Guidance Now Hello World
    </button>
  );
}
