import styled from "styled-components";
import {myTheme} from "./styles/Theme.styled";


type StyledBtnPropsType ={
    bgcColor?: string
    border?: string
    color?: string
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background-color: ${ props => props.bgcColor || "#4E71FE"};
  color:  ${myTheme.colors.primary};
  margin: 10px 20px;
  padding: 5px 20px;
  
  
  &:last-child{
    margin-left: -10px;
  }
  
  &:hover{
    background-color: ${myTheme.colors.primary};
    border: 2px solid ${props => props.border || "#4E71FE"};
    color: ${props => props.color || "#4E71FE"};
    padding: 3px 18px;
  }
  
 &:active{
   transform: scale(1.2);
 }
`

