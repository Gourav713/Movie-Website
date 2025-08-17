import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loading() {
  return (
    <div className="h-screen w-screen bg-[#1f1e24] p-10">
      <DotLottieReact
        src="https://lottie.host/54f396b3-1462-4e8b-a487-889c9f5a1d7c/JTAPyKjb17.lottie"
        loop
        autoplay
      />
    </div>
  );
}

export default Loading
