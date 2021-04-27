import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

export const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  width: 50rem;
  background-color: #202125;
  padding: 2rem;
  border-radius: 0.5rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0; */

  form {
    margin: 1.6rem 0;
  }
`;

StyledWrapper.List = styled.ul`
  list-style: none;
  width: 100%;
`;

export const StyledDivider = styled.hr`
  width: 25%;
  margin: 8px auto;
  background-color: #424347;
  border: 0px;
  height: 2px;
`;
