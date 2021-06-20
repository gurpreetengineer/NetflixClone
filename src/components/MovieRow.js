import React, { useState, useEffect, Fragment } from "react";
import styled, {keyframes} from "styled-components";
import axiosRequester, { baseImageURL } from "../API/axios";

function MovieRow({ Title, FetchURL, isBanner = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const fetched = await axiosRequester.get(FetchURL);
      setMovies(fetched.data.results);
      return fetched;
    }

    fetchMovies();
  }, [FetchURL]);

  console.log(Title, " ==> ", movies);

  return (
    <Fragment>
      <MovieRowContainer>
        <MovieRowTitle>{Title}</MovieRowTitle>
        <MovieRowInfo>
          {movies.map((movie) =>
            (
              <MovieRowImages
                style={isBanner ? { maxHeight: '300px', width: '100%' } : {}}
                key={movie.id}
                src={isBanner ? `${baseImageURL}${movie.poster_path}`: `${baseImageURL}${movie.backdrop_path}`}
                alt={movie.name}
              ></MovieRowImages>
            ) 
          )}
        </MovieRowInfo>
      </MovieRowContainer>
    </Fragment>
  );
}


const MovieRowContainer = styled.div`
  margin: 10px 20px;
`;

const MovieRowTitle = styled.div`
  font-size: 22px;
  color: white;
  // padding: 0.25em 0.55em;
`;

const MovieRowInfo = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 12px 22px;


  &::-webkit-scrollbar{
    display: none;
  }

`;
  
const fadeOut = keyframes`
  from {
    opacity: 0.95;
  }

  to {
    opacity: 1;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.9;
  }
`;

const MovieRowImages = styled.img`
  max-height: 200px;
  width: 100%;
  -webkit-animation: ${fadeIn} 1s linear ease-out; // for opacity animation when not hovered
  padding: 0 6px;
  border-radius: 3px;
  object-fit: contain;
  transition: transform 450ms; // So we are using transition WITH "Transform" as animation type (Kind of)

  &:hover {
    transform: scale(1.08); // Then we set that transform to show some animation. We pass in "size" in scale. This size is then multiplied by the default settings.
    -webkit-animation: ${fadeOut} 1s ease-out; //for opacity animation when hovered upon.
    cursor: pointer;
  }
`;

export default MovieRow;
