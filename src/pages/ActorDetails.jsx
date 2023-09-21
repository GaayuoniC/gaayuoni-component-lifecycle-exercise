import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function ActorDetails() {
  const { actorsId } = useParams();
  const [actorDetail, setActorDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadActorDetails() {
      try {
        setIsLoading(true);
        const url =
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors/" +
          actorsId;
        const response = await axios.get(url);
        console.log(response.data);
        setActorDetail(response.data);
        // console.log(actorDetail) this does not work!!!
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    //Take note of this part of the code with the if statement
    if (actorsId) {
      loadActorDetails();
    }
  }, [actorsId]);
  if (isLoading) {
    return (
      <>
        <img
          src="https://t4.ftcdn.net/jpg/02/60/13/55/360_F_260135521_QbRRhWkNaktGCFkVwGQTEgsWouWmTfbk.jpg"
          alt=""
        />
      </>
    );
  }

  return (
    <>
      <main>
        {" "}
        <header>
          {" "}
          <h2>Actor Details</h2>{" "}
        </header>{" "}
      </main>
      <section>
        <p>{actorsId}</p>
        {actorDetail ? (
          <>
            <p>Actor: {actorDetail.name}</p>
            <p >Character : {actorDetail.character}</p>
            <img src={actorDetail.image} alt="" className="actor-details"/>
          </>
        ) : undefined}
      </section>

      <Link to="/actors"> Back to Actors</Link>
    </>
  );
}
