import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    // 1. Validar que el query no esté vacío
    // 2. Convertir el query a minúsculas y eliminar espacios en blanco
    // 3. Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    // 4. Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.

    //le sacamos los espacios y le sacamos las mayusculas
    query = query.trim().toLowerCase();
    //validar que query no este vacio
    if (query.length === 0) return;
    //valido que query no exista en previous terms
      if (previousTerms.includes(query)) return;
      //actualizamos previousTerms agregando el nuevo termino al inicio y limitando a 8 elementos maximo
      const currentTerms = previousTerms.slice(0,6)
      currentTerms.unshift(query)
      setPreviousTerms(currentTerms)
  };;

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      {/* SearchBar */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};
