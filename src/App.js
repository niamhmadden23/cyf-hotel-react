import React from "react";
import Header from "./components/Header";
import TouristInfoCard from "./components/TouristInfoCard";
import Footer from "./components/Footer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Bookings />
      <Header />
      <TouristInfoCard />
      <Footer
        data={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
