import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*, 
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${myTheme.colors.primary};
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
}

p{
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}

button, a {
  font-family: Inter,sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}

a{
  text-decoration: none;
}
`