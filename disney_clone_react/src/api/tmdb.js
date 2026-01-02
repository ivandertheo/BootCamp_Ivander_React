const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = import.meta.env.VITE_TMDB_API;

if (!TOKEN) {
  throw new Error("TMDB TOKEN is missing");
}

export const fetchTMDB = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB Error ${res.status}`);
  }

  return res.json();
};