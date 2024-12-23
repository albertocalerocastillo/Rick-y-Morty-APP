import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EpisodePage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await response.json();
      const charactersWithNames = await Promise.all(
        data.characters.map(async (url) => {
          const res = await fetch(url);
          const character = await res.json();
          return { id: character.id, name: character.name };
        })
      );
      setEpisode({ ...data, characters: charactersWithNames });
    };

    fetchEpisode();
  }, [id]);

  return (
    <div>
      <h1>{episode?.name}</h1>
      <p><strong>Fecha de estreno:</strong> {episode?.air_date}</p>
      <p><strong>Código del episodio:</strong> {episode?.episode}</p>
      <h3>Personajes:</h3>
      <ul>
        {episode?.characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="back-button">
        Volver a la lista de episodios
      </Link>
    </div>
  );
};

export default EpisodePage;