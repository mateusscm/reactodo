import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 0rem;
`;

StyledCard.Type = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${({ checked }) => (checked ? "#01b075" : "#FF4E3F")};
  font-size: 0px;
  line-height: 0px;
  display: flex;
  /* border-radius: 0.5rem; */
  border-radius: 50%;
  position: relative;

  & > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .checkbox-input > .checkmark {
    position: absolute;
    right: -4px;
    top: -4px;
    left: auto;

    &::before {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      bottom: -3px;
      right: -3px;
      border: 2px #202125 solid;
      border-radius: 0.5rem;
    }
  }
`;

StyledCard.Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding-left: 1.6rem;
  flex: 1;

  .title {
    font-size: 2.2rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1.4rem;
    font-weight: 600;
    color: #4c4d51;
  }
`;
