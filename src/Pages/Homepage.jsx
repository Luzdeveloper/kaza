import React from "react";
import { Card } from "../component/Cards";
import annoncesData from "../data/logement.json";
import { Banner } from "../component/Banner";
import "../style/home.scss";

let title = "Chez vous, partout et ailleurs";

export function Home() {
  console.log("Donnee dans Home:", annoncesData);

  return (
    <div>
      <Banner title={title} image="src/assets/banner2.png" />
      <Card annonceData={annoncesData} />
    </div>
  );
}
