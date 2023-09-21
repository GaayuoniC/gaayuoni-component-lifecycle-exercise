import "../pages/HomePage.css";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function HomePage() {
  const [movies, setMovies] = useState([{ name: "docteur" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [randomMovieIndex, setRandomMovieIndex] = useState();
  //   console.log(movies); //test station for usestate

  useEffect(() => {
    async function loadMoviesData() {
      try {
        setIsLoading(true);
        const moviesUrl =
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/";
        const response = await axios.get(moviesUrl);
        setMovies(response.data);
        const randomIndex = Math.floor(response.data.length * Math.random());
        console.log(randomIndex);
        setRandomMovieIndex(randomIndex);
        //   console.log(randomMovieIndex)*Non working spot..dont freakout!!
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMoviesData();
  }, []);
  if (isLoading) {
    return (
      <>
        <img />
        <p> Loading! Please wait...</p>
      </>
    );
  }

  return (
    <>
      <h2>Home Page</h2>
      {/* <p>Random movie index is : {randomMovieIndex}</p> */}

      {randomMovieIndex ? (
        <ul className="movie-title">
          <li> {movies[randomMovieIndex].title}</li>
          <img src={movies[randomMovieIndex].thumbnail} />
        </ul>
      ) : (
        "loading"
      )}
    </>
  );
}
