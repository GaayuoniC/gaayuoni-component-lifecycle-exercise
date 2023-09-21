import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function MovieDetails() {
  const { moviesId } = useParams();
  const [movieDetail, setMovieDetail] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMovieDetail() {
      try {
        setIsLoading(true);
        const movieDetailUrl =
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/" +
          moviesId;
        const response = await axios.get(movieDetailUrl);
        setMovieDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (moviesId) {
      loadMovieDetail();
    }
  }, [moviesId]);
  if (isLoading) {
    return (
      <>
        <img
          src="https://t4.ftcdn.net/jpg/02/60/13/55/360_F_260135521_QbRRhWkNaktGCFkVwGQTEgsWouWmTfbk.jpg"
          alt="loading"
        />
      </>
    );
  }

  return (
    <>
      <main>
        <header>
          <h2>Movie Details</h2>
        </header>
        <p>{moviesId}</p>
        {movieDetail ? (
          <>
            <h2> Title : {movieDetail.title}</h2>
            <h4>Tagline : {movieDetail.tagline}</h4>
            <img src={movieDetail.image} alt="" className="movie-detail" />
            {/* Try out the cast with mapping here */}
            {movieDetail.cast.map((cast) => {
              return (
                <>
                  <Link to={"/actors/" + cast.id} key={cast.id}>
                    <li> {cast.character}</li>
                  </Link>
                </>
              );
            })}

            {/* <p>Cast :{movieDetail.cast}</p> */}
          </>
        ) : undefined}
      </main>

      <Link to="/movies">Back to movies list</Link>
    </>
  );
}
