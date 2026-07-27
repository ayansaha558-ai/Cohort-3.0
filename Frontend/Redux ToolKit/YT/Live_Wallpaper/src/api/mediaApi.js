import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: query || "nature", page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  return res.data.results;
};

export const fetchVideos = async (query, per_page = 15) => {
  const res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query: query || "nature", per_page },
    headers: { Authorization: PEXELS_KEY },
  });

  return res.data.videos;
};

export const fetchGifs = async (query, limit = 15) => {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_KEY,
      q: query || "nature",
      limit: limit,
    },
  });
  return res.data.data;
};
