import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Pages/Homepage";
import { FicheLogement } from "./Pages/AnnouncementDetails";
import { Apropos } from "./Pages/Apropos";
import Header from "./component/Header";
import { Footer } from "./component/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/aPropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
