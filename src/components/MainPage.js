import React from 'react'
import MovieRow from './MovieRow';
import requests from '../API/requests';

function MainPage() {
  return (
    <div>
      <MovieRow Title="NETFLIX ORIGINALS" FetchURL={requests.fetchNetlflixOriginals} isBanner={true} />
      <MovieRow Title="Trending Now" FetchURL={requests.fetchTrending} />
      <MovieRow Title="Top Rated" FetchURL={requests.fetchTopRated} />
      <MovieRow Title="Action Movies" FetchURL={requests.fetchActionMovies} />
      <MovieRow Title="Comedy Movies" FetchURL={requests.fetchComedyMovies} />
      <MovieRow Title="Horror Movies" FetchURL={requests.fetchHorrorMovies} />
      <MovieRow Title="Romance Movies" FetchURL={requests.fetchRomanceMovies} />
      <MovieRow Title="Document aries" FetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default MainPage
