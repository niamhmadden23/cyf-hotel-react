import React from "react";
import Header from "./components/Header";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Bookings />
      <Header />
    </div>
  );
};

export default App;
