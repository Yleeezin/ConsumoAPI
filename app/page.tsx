import React from "react";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getCharacters();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <strong>Rick and Morty Characters</strong>
      <br />
      <br />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.results.map((character: Character) => (
          <div
            key={character.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              style={{ borderRadius: "10px", width: "100%" }}
            />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
