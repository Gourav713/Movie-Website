import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1f1e24] via-[#252431] to-[#6556CD] p-4">
      <div className="w-40 h-40 flex items-center justify-center mb-6">
        <DotLottieReact
          src="https://lottie.host/54f396b3-1462-4e8b-a487-889c9f5a1d7c/JTAPyKjb17.lottie"
          loop
          autoplay
        />
      </div>
      <h2 className="text-lg md:text-2xl font-bold text-white/80 tracking-wide animate-pulse text-center">
        Loading, please wait...
      </h2>
    </div>
  );
}

export default Loading;
