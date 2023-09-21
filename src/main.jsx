import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ActorsPage } from "./pages/ActorsPage.jsx";
import { ActorDetails } from "./pages/ActorDetails.jsx";
import { MoviesPage } from "./pages/MoviesPage.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "actors",
        children: [
          { index: true, element: <ActorsPage /> },

          { path: ":actorsId", element: <ActorDetails /> },
        ],
        //Up to here works alright
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: ":moviesId",
            element: <MovieDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
