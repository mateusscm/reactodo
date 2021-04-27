import styled, { css } from "styled-components";

export const StyledIconButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #d53e6b;
  border: none;
  border-radius: 0.5rem;
  padding: 4px;
  line-height: 0px;
  cursor: pointer;

  &:hover {
    background-color: #984848;
  }

  & svg {
    pointer-events: none;
  }

  ${({ icon }) =>
    icon &&
    css`
      color: #fff;
    `}
`;
