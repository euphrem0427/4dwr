import React from "react";
import { useParams } from "react-router-dom";
import useGetImages from "./hooks/useGetImages";

const AnimeInfo = () => {
  const { title } = useParams();
  const [status, animes] = useGetImages(title);
  return status === "loaded" ? (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <img
          src={animes[0].images.jpg.large_image_url}
          alt={animes[0].title}
          style={{
            height: "15rem",
          }}
        />
      </div>
      <div
        style={{
          paddingLeft: "1rem",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <p>
          Titre: <b>{animes[0].title}</b>
        </p>
        <p>
          Titre en japonais : <b>{animes[0].title_japanese}</b>
        </p>

        <p>
          Nombre d'épisodes: <b>{animes[0].episodes}</b>
        </p>
        <p>
          {animes[0].synopsis}
        </p>
    
      </div>
    </div>
  ) : (
    <div>Chargement...</div>
  );
};

export default AnimeInfo;
