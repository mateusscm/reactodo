import styled from "styled-components";

export const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
  width: inherit;
  color: #ececf6;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 1px solid #ececf6;
    border-radius: 0.4rem;

    &::after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  & input:checked ~ .checkmark {
    background-color: #2d6cea;
    border: 1px solid #2d6cea;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 6px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid #ececf6;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
