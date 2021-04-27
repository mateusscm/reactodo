import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background: #16171B;
  background-repeat: round;
  color: #fff;
  /* font-family: 'Kite One', sans-serif; */
  font-family: "Quicksand", "Montserrat", "Avenir", "Helvetica", "Arial", sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

main {
  width: 1000px;
  background-color: transparent;
  height: auto;
  font-size: 1.6rem;
  transition: width 0.5s ease-in-out;
  @media screen and (max-width: 1024px) {
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    width: 600px;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
}
`;
