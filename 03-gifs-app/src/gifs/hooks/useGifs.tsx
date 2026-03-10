import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifList, setGifList] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  //uso del useRef para hacer algo similar a lo que se hizo arriba comentado. 
  //la idea es que esta linea del use ref este dentro del hook pero que no haga el rerender
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async(term: string) => {


    if( gifsCache.current[term]){
        setGifList(gifsCache.current[term])
        return;
    }

    const gifs = await getGifsByQuery(term)
    setGifList(gifs)
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    //le sacamos los espacios y le sacamos las mayusculas
    query = query.trim().toLowerCase();
    //validar que query no este vacio
    if (query.length === 0) return;
    //valido que query no exista en previous terms
    if (previousTerms.includes(query)) return;
    //actualizamos previousTerms agregando el nuevo termino al inicio y limitando a 8 elementos maximo
    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    console.log({ gifs });
    setGifList(gifs);

    gifsCache.current[query] = gifs

  };
  return {
    //properties
    gifList,
    previousTerms,
    //methods
    handleTermClicked,
    handleSearch,
  };
};
