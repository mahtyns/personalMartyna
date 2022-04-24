import React from "react";
import Alert from "./components/atoms/alert/Alert";
import Footer from "./components/organism/footer/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <Alert />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
