import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loading() {
  return (
    <div className="h-screen w-screen p-10">
      <DotLottieReact
        src="https://lottie.host/364900c7-8299-424c-840f-7621913319d0/uzYqU1qaOE.lottie"
        loop
        autoplay
      />
    </div>
  );
}

export default Loading
