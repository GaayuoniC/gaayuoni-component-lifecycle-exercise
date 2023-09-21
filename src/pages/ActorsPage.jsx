import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   console.log("Its loading", isLoading);
  //   console.log(actors);

  useEffect(() => {
    async function loadActorData() {
      try {
        setIsLoading(true);
        const actorsUrl =
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors";
        const response = await axios.get(actorsUrl);
        setActors(response.data);
        // console.log(actors);//this does not work!!!
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadActorData();
  }, []);
  if (isLoading) {
    return (
      <>
        <img
          src="https://t4.ftcdn.net/jpg/02/60/13/55/360_F_260135521_QbRRhWkNaktGCFkVwGQTEgsWouWmTfbk.jpg"
          alt=""
        />
        <p>Please Just a minute! Loading!</p>
      </>
    );
  }

  return (
    <>
      <main>
        <header>
          {" "}
          <h2>Actors</h2>
        </header>

        <ul>
          {actors.map((actor) => {
            return (
              <Link to={"/actors/" + actor.id} key={actor.id}>
                <li
                  className="actors"
                  onClick={() => {
                    console.log("has been clicked ", actor.id);
                  }}
                >
                  {actor.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </>
  );
}
