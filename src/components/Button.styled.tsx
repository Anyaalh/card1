import styled, {css} from "styled-components";
import {MyAnimation} from "./styles/animations/Animations";

type StyledBtnPropsType ={
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;


  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "#ff3ba8"};
    color: ${props => props.color || "#ff3ba8"}
    background-color: transparent;

    &:hover{
      border-color: #5e66a7;
      color: #5e66a7;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#ff3ba8"};
    color: snow;


    &:hover {
      background-color: #5e66a7;
    }
  `}

  
  
  
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(94, 145, 167, 0.15);
  `}
  
  
`

