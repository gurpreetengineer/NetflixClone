import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosRequester, { baseImageURL } from "../API/axios";
import requests from "../API/requests";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    async function fetchBannerMovie() {
      const fetched = await axiosRequester.get(requests.fetchNetlflixOriginals);
      setBannerMovie(
        fetched.data.results[
          Math.floor(Math.random() * fetched.data.results.length - 1)
        ]
      );
      return fetched;
    }
    fetchBannerMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  };

  const BannerInfoContainer = styled.div`
    // width: 100%;
    height: 700px;
    color: white;
    object-fit: contain;
    background-size: cover;
    background-image: url(${baseImageURL}${bannerMovie?.backdrop_path});
    background-position: center center;
    margin-bottom: 2rem;
  `;

  return (
    <BannerInfoContainer>
      <BannerInfo>
        <BannerTitle>
          {" "}
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}{" "}
        </BannerTitle>
        <BannerButtonContainer>
          <BannerButton> Play </BannerButton>
          <BannerButton> My List</BannerButton>
        </BannerButtonContainer>
        <BannerOverview>
          {" "}
          {truncate(bannerMovie?.overview, 150)}{" "}
        </BannerOverview>
        {/* <img src={`${baseImageURL}${bannerMovie.backdrop_path}`} alt={bannerMovie.name} /> */}
      </BannerInfo>
      <BannerImageFadeBottom />
    </BannerInfoContainer>
  );
}

const BannerInfo = styled.div`
  padding-top: 350px;
  margin-left: 50px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
const BannerButtonContainer = styled.div``;
const BannerButton = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem 0.5rem 2rem;
  margin-right: 1rem;
  &:hover {
    color: black;
    background-color: #e6e6e6;
    transition: all 0.3s;
  }
`;
const BannerOverview = styled.h1`
  width: 45rem;
  line-height: 1.4;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 392px;
  height: 80px;
`;

const BannerImageFadeBottom = styled.div`
  height: 10.2rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(14, 14, 14, 0.4),
    black
  );
`;
export default Banner;
