import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ next: null, prev: null });

  // Obtengo los episodios
  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
      const data = await response.json();

      const updatedEpisodes = await Promise.all(
        data.results.map(async (episode) => {
            //Esperamos a obtener toda la información antes de continuar, que se resuelvan todas las solicitudes a la API
          const characters = await Promise.all(
            episode.characters.map(async (url) => {
              const res = await fetch(url);
              const character = await res.json();
              return { id: character.id, name: character.name };
            })
          );
          return { ...episode, characters };
        })
      );

      setEpisodes(updatedEpisodes);
      setPageInfo(data.info);
    };

    fetchEpisodes();
  }, [currentPage]);

  const goToNextPage = () => {
    if (pageInfo.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageInfo.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Episodios</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <h2>
              <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
            </h2>
            <p>Personajes del episodio:</p>
            <ul>
              {episode.characters.map((character) => (
                <li key={character.id}>
                  <Link to={`/character/${character.id}`}>{character.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="pagination-buttons">
        <div className="anterior-button">
          <button
            disabled={!pageInfo.prev}
            onClick={goToPrevPage}
          >
            Anterior
          </button>
        </div>
        <div className="siguiente-button">
          <button
            disabled={!pageInfo.next}
            onClick={goToNextPage}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;