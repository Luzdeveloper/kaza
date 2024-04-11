import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Homepage";
import { FicheLogement } from "./Pages/AnnouncementDetails";
import { Apropos } from "./Pages/Apropos";
import { Error } from "./Pages/Erreur404";
import "../src/style/index.scss";
import { Header } from "./component/Header";
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
