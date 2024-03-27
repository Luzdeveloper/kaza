import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Homepage";
import { AnnouncementDetails } from "./Pages/AnnouncementDetails";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<AnnouncementDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
