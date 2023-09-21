import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../pages/MoviesPage.css"

export function MoviesPage() {
  const { moviesList } = useParams();
  const [movies, setMovies] = useState([{ name: "christian" }]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(movies)
  // console.log(isLoading);
  useEffect(() => {
    async function loadMovieList() {
      try {
        setIsLoading(true);
        const movieUrl =
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/";
        const response = await axios.get(movieUrl);
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieList();
  }, []);
  if (isLoading) {
    return (
      <>
        <img
          src="https://www.vecteezy.com/video/8174698-animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-video-spinner-gif-video-loading-animation-video-loading-on-black-background"
          alt=""
        />
        <p>Its loading</p>
      </>
    );
  }

  return (
    <>
      <main>
        <header>
          <h2>Movies</h2>
          <div className="movies-page-buttons">
            <button>All</button>
            <button>Drama</button>
            <button>Crime</button>
            <button>Action</button>
            <button>Western</button>{" "}
          </div>
        </header>
        <p>{moviesList}</p>
        <ul>
          {movies.map((movie) => {
            return (
              <Link
                to={"/movies/" + movie.id}
                key={movie.id}
                className="movies"
              >
                <li>{movie.title}</li>{" "}
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
