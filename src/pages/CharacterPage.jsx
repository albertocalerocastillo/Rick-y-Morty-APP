import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <div>
      {character ? (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} style={{ width: '250px', height: 'auto' }} />
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <h3>Episodios:</h3>
          <ul>
            {character.episode.map((url) => {
              const episodeId = url.split("/").pop();
              return (
                <li key={episodeId}>
                  <Link to={`/episode/${episodeId}`}>{episodeId}</Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Cargando...</p>
      )}

      <Link to="/" className="back-button">
        Volver a la lista de episodios
      </Link>
    </div>
  );
};

export default CharacterPage;