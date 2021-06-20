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
            isBanner ? (
              <MovieRowBanner
                key={movie.id}
                src={`${baseImageURL}${movie.poster_path}`}
                alt={movie.name}
              ></MovieRowBanner>
            ) : (
              <MovieRowImage
                key={movie.id}
                src={`${baseImageURL}${movie.backdrop_path}`}
                alt={movie.name}
              ></MovieRowImage>
            )
          )}
        </MovieRowInfo>
      </MovieRowContainer>
    </Fragment>
  );
}


const MovieRowContainer = styled.div``;

const MovieRowTitle = styled.div`
  font-size: 22px;
  color: white;
  padding: 1% 0;
`;

const MovieRowInfo = styled.div`
  display: flex;
  // overflow: hidden;
  // padding: 0 22px;
`;
  
const fadeOut = keyframes`
  from {
    // transform: scale(1);
    opacity: 0.95;
  }

  to {
    // transform: scale(.25);
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

const MovieRowBanner = styled.img`
  max-height: 200px;
  width: 100%;
  -webkit-animation: ${fadeIn} 1s linear ease-out; // for opacity animation when not hovered
  padding: 0 6px;
  border-radius: 3px;
  object-fit: contain;
  transition: transform 450ms; // So we are using transition WITH "Transform" as animation type (Kind of)

  &:hover {
    transform: scale(1.10); // Then we set that transform to show some animation. We pass in "size" in scale. This size is then multiplied by the default settings.
    -webkit-animation: ${fadeOut} 1s ease-out; //for opacity animation when hovered upon.
    cursor: pointer;
  }
`;

const MovieRowImage = styled.img`
  max-height: 156px;
  width: 100%;
  opacity: 0.9;
  transition: tansform 450ms;
  padding: 0 6px;
  border-radius: 3px;
  object-fit: contain;
`;

export default MovieRow;
