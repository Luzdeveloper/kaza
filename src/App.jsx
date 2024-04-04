import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Homepage";
import { FicheLogement } from "./Pages/AnnouncementDetails";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Apropos } from "./Pages/Apropos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/aPropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
