// Pide varios personajes en UNA sola llamada (/api/character/1,2,3) en lugar de una
// por personaje: con una petición por personaje la API responde 429 (demasiadas peticiones).
export const fetchCharactersByUrl = async (urls) => {
  const ids = [...new Set(urls.map((url) => url.split("/").pop()))];
  if (ids.length === 0) return {};

  const response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
  const data = await response.json();
  // Con un solo id la API devuelve un objeto en vez de un array
  const characters = Array.isArray(data) ? data : [data];

  return Object.fromEntries(
    characters.map((character) => [String(character.id), { id: character.id, name: character.name }])
  );
};

export const pickCharacters = (urls, byId) =>
  urls.map((url) => byId[url.split("/").pop()]).filter(Boolean);
