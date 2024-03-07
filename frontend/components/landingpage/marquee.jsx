"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="marquee-container">
        <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden marquee1">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
         </div>
         <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden marquee2">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
         </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Université de Fianarantsoa",
  },
  {
     name: "Ecole Nationale d'Informatique",
  },
  {
    name: "Université de Fianarantsoa",
  },
  {
    name: "Ecole Nationale d'Informatique",
  },
  { 
    name: "Université de Fianarantsoa",
  },
];
