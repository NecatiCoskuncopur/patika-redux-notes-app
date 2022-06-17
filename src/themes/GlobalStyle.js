import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";


export const GlobalStyle = createGlobalStyle`
* {
  list-style: none;
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
&:focus {
  outline: 0;
}
body {
  background-color: ${variables.color.bg_primary};

}
`;