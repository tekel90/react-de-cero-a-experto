import { giphiApi } from "../api/giphy.api";

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await giphiApi<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 10,
      // lang: "es",
      // api_key: import.meta.env.VITE_GIPHY_API_KEY,
    },
  });
  // fetch(`https://api.giphy.com/v1/gifs/search?api_key=uwHYjPC5Xti28P5odcxgW5GcNFD6KLQm&q=${query}&limit=10&lang=en`)

  // console.log(response.data)

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
