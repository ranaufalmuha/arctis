"use client";

import { useLayoutEffect, useRef } from "react";
import { Flip, gsap } from "../lib/gsap";

const gridAreas = [
  "[grid-area:1/1/3/2]",
  "[grid-area:1/2/2/3]",
  "[grid-area:2/2/4/3]",
  "[grid-area:1/3/3/4]",
  "[grid-area:3/1/4/2]",
  "[grid-area:3/3/5/4]",
  "[grid-area:4/1/5/2]",
  "[grid-area:4/2/5/3]",
];

const images = [
  "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
  "https://assets.codepen.io/16327/portrait-image-12.jpg",
  "https://assets.codepen.io/16327/portrait-image-8.jpg",
  "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
  "https://assets.codepen.io/16327/portrait-image-4.jpg",
  "https://assets.codepen.io/16327/portrait-image-3.jpg",
  "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
  "https://assets.codepen.io/16327/portrait-image-1.jpg",
];

export default function BentoGallery() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!galleryRef.current || !wrapRef.current) return;

    const gallery = galleryRef.current;
    const items = gallery.querySelectorAll(".gallery-item");

    const ctx = gsap.context(() => {
      gallery.classList.add("gallery-final");
      const state = Flip.getState(items);
      gallery.classList.remove("gallery-final");

      const flip = Flip.to(state, {
        simple: true,
        ease: "expoScale(1, 5)",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: gallery,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: wrapRef.current,
          },
        })
        .add(flip);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ===== GALLERY WRAP ===== */}
      <div
        ref={wrapRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          ref={galleryRef}
          className="
            gallery
            grid
            gap-[1vh]
            grid-cols-[repeat(3,32.5vw)]
            grid-rows-[repeat(4,23vh)]
            justify-center
            content-center
          "
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                gallery-item
                relative
                overflow-hidden
                ${gridAreas[i]}
              `}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
