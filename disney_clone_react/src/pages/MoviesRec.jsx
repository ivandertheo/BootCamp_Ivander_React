import { useEffect, useState } from "react";
import { fetchTMDB } from "../api/tmdb";
export const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchTMDB("/movie/upcoming");
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>

      <ul>
        {movies.map(movie => (
            <div key={movie.id}>
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="150"
                />
                <p>{movie.title}</p>
            </div>
            ))}
      </ul>
    </div>
  );
}
