import React from "react";
import Footer from "./components/organism/footer/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div>
      <Routing />
      <Footer content={'Coded by Martyna | 2022/2023'}/>
    </div>
  );
}

export default App;
