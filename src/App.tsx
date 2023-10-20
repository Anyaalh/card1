import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {myTheme} from "./components/styles/Theme.styled";
import desert from "../../card1/src/assets/images/desert.jpg"
import {ImgStyled} from "./components/Img.styled";
import {CardStyled} from "./components/Card.styled";
import forest from "./assets/images/forest.jpg"
import flower from "./assets/images/flower.jpg"

function App() {
    return (
        <div className="App">
            <Box>
                <CardStyled>
                    <ImgStyled src={desert} alt={"desert"}/>
                    <Headline>Desert</Headline>
                    <Description>A desert is a barren area of landscape where living conditions are hostile for
                        plant and animal life.</Description>
                    <BtnContainer>
                        <StyledBtn as={Link} href={"#"}>See more</StyledBtn>
                        <StyledBtn>Save</StyledBtn>
                    </BtnContainer>
                </CardStyled>
                <CardStyled>
                    <ImgStyled src={forest} alt={"forest"}/>
                    <Headline>Forest</Headline>
                    <Description>Forests are the largest terrestrial ecosystem of Earth by area, and are found
                        around
                        the globe.</Description>
                    <BtnContainer>
                        <StyledBtn as={Link} href={"#"} bgcColor={"#62c77e"} border={"#62c77e"} color={"#62c77e"}>See
                            more</StyledBtn>
                        <StyledBtn bgcColor={"#62c77e"} border={"#62c77e"} color={"#62c77e"}>Save</StyledBtn>
                    </BtnContainer>
                </CardStyled>
                <CardStyled>
                    <ImgStyled src={flower} alt={"flower"}/>
                    <Headline> Flower</Headline>
                    <Description>A flower, sometimes known as a bloom or blossom, is the reproductive structure
                        found in
                        flowering plants (plants of the division Angiospermae).</Description>
                    <BtnContainer>
                        <StyledBtn as={Link} href={"#"} bgcColor={"#7747d0"} border={"#7747d0"} color={"#7747d0"}>See
                            more</StyledBtn>
                        <StyledBtn bgcColor={"#7747d0"} border={"#7747d0"} color={"#7747d0"}>Save
                        </StyledBtn>
                    </BtnContainer>
                </CardStyled>
            </Box>
        </div>
    )
        ;
}


export default App;


const BtnContainer = styled.div`
margin: 10px 10px 0;
`

const Headline = styled.h2`
  margin: 0 10px 10px;
  color: #000;
`

const Description = styled.p`
  margin: 0 10px;
  color: ${myTheme.colors.fond};
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;


  button {
    cursor: pointer;
  }


  @media ${myTheme.media.mobile} {
    flex-direction: column;
  }
`






