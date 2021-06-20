import React, { useState } from "react";
import MovieRow from "./MovieRow";
import Banner from "./Banner";
import requests from "../API/requests";
import Header from "./Header";

function MainPage() {
  const [movieAPIs, setMovieAPIs] = useState([
    { Title: "NETFLIX ORIGINALS", FetchURL: requests.fetchNetlflixOriginals, isBanner: true },
    { Title: "Trending Now", FetchURL: requests.fetchTrending },
    { Title: "Top Rated", FetchURL: requests.fetchTopRated },
    { Title: "Action Movies", FetchURL: requests.fetchActionMovies },
    { Title: "Comedy Movies", FetchURL: requests.fetchComedyMovies },
    { Title: "Horror Movies", FetchURL: requests.fetchHorrorMovies },
    { Title: "Romance Movies", FetchURL: requests.fetchRomanceMovies },
    { Title: "Documentaries", FetchURL: requests.fetchDocumentaries },
  ]);
  return (
    <div>
      <Header />
      <Banner />
      {movieAPIs.map(movie => (
        <MovieRow key={movie?.FetchURL} Title={movie?.Title} FetchURL={movie?.FetchURL} isBanner={movie?.isBanner} />
      ))}
    </div>
  );
}

export default MainPage;
