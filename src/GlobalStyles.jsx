import { createGlobalStyle } from 'styled-components';
import { colors } from './utils/styles';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  transition: all 0.12s linear;
}
html {
 height : 100%;
}
body {
  font-family: 'Libre Franklin', sans-serif;
  letter-spacing: 0.04em;
  background-color: ${colors.background};
  color: ${colors.mainText};
  margin: 0;
  padding: 0;
  min-width: 320px;
  height: 100%;
  
 &.no-scroll {
  overflow: hidden;}
}
h1,
h2,
h3,
h4,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
}
a{
  text-decoration: none;
  color: inherit;
}
`;
