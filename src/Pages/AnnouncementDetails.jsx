import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import annoncesData from "../data/logement.json";
import { Collapsible } from "../component/Collapse";
import { Slide } from "../component/Slide";
import { Tags } from "../component/Tag";

export function AnnouncementDetails() {
  const [announcement, setAnnouncement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnnouncement = () => {
      const announcement = annoncesData.find((a) => a.id === id);
      setAnnouncement(announcement);
    };

    fetchAnnouncement();
  }, [id, annoncesData]);

  if (!announcement) {
    return <p>Chargement de l'annonce...</p>;
  }

  return (
    <div className="announcement-details">
      <h1>{announcement.title}</h1>
      <img
        src={announcement.cover}
        alt={`photo de l'annonce ${announcement.title}`}
      />
      <p>{announcement.description}</p>
    </div>
  );
}
