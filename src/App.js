import React from "react";
import NavigationLink from "./components/atoms/navigationLink/NavigationLink";
import LandingBackground from "./components/landing-elements/landing-background/LandingBackground";

function App() {
  return (
    <div>
      <NavigationLink navigationLink={`Hi! At the moment I'm Work In Progress Page! Come here soon! :)`}/>
      <LandingBackground />
    </div>
  );
}

export default App;
