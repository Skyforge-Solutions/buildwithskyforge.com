import { useState } from "react";
import Lottie from "react-lottie";

// Lottie
import lottie from "./assets/lotties/development.json";

// CSS
import "./App.css";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className="main__container">
      <Lottie options={defaultOptions} height={400} width={400} />
      <div>
      <h1>Skyforge System Solutions</h1>
      <h2>Something is cooking</h2>
      <p>Contact us on <em>partners@buildwithskyforge.com</em></p>

      </div>      
    </main>
  );
}

export default App;
