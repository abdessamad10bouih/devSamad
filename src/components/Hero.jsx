import React from "react";
import WordPullUp from "@/components/ui/word-pull-up";
import ShimmerButton from "@/components/ui/shimmer-Button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import TypingAnimation from "@/components/ui/typing-animation";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      <FlickeringGrid
        className="z-0 absolute w-full inset-0 "
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <TypingAnimation
        className="text-7xl mb-4 sm:text-2xl"
        duration={50}
        text="Generate Borders, Color Palettes and Tailwind Gradient, with DevSamad"
      />
      <div className="w-full h-20 flex justify-center space-x-3 items-center">
        <Link to={"/Border-Generator"}>
          <ShimmerButton background="#14b8a6">Get Started</ShimmerButton>
        </Link>
        <Link to={"/palette"}>
          <ShimmerButton
            background="#ffffff"
            shimmerColor="#14b8a6"
            className="text-black shadow-lg"
          >
            Color Palette
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
