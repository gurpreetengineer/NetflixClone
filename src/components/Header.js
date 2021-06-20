import React, {useState, useEffect} from "react";
import styled from "styled-components";

function Header() {
  const [HeaderContainerStyle, setHeaderContainerStyle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 150) {
        setHeaderContainerStyle(true);
      } else setHeaderContainerStyle(false)
    })
    return () => {
      window.removeEventListener("scroll", setHeaderContainerStyle);
    }
  }, [])

  return (
    <HeaderContainer style={HeaderContainerStyle ? {backgroundColor: "black"} : {}}>
      <HeaderNetflixImage src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      <HeaderSmilyImage src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
      
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent; 
  width: 100%;
  height: 65px;

  // Animations 
  transition-timing-functions: ease-in;
  transition: all 0.5s;
`;
const HeaderNetflixImage = styled.img`
  position: fixed;
  width: 9rem;
  height: 30px;
  left: 20px;
  object-fit: contain;
`;
const HeaderSmilyImage = styled.img`
  position: fixed;
  width: 2.5rem;
  right: 20px;
  object-fit: contain;
`;

export default Header;
