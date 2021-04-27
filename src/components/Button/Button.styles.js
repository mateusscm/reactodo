import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #01b075;
  color: #fff;
  border: none;
  outline: none;
  width: max-content;
  padding: 1.1rem 1.5rem;
  position: relative;
  font-size: 1.6rem;
  line-height: 1.6rem;
  border-radius: 0.5rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  box-shadow: 0px 0 13px 2px rgba(1, 92, 61, 0.3);
  transition: all 0.2s linear;

  &:hover {
    background-color: #018055;
  }
`;
