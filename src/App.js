import React from "react";
import Alert from "./components/atoms/alert/Alert";
import LandingBackground from "./components/landing-elements/landing-background/LandingBackground";
import Navbar from "./components/organism/navbar/Navbar";

function App() {
  return (
    <div>
      <Alert />
      <Navbar />
      <LandingBackground />
    </div>
  );
}

export default App;
