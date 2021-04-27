import styled from "styled-components";

export const StyledPickerWrapper = styled.div``;

export const StyledPopover = styled.div`
  position: absolute;
  bottom: ${({ elemHeight }) => elemHeight && `-${elemHeight + 90}px`};
  left: 50%;
  transform: translateX(-50%);
  background-color: #424242;
  padding: 1rem;
  z-index: 100;
  width: max-content;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
`;

StyledPopover.Options = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    margin-right: 0.8rem;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

StyledPopover.ButtonConfirm = styled.button`
  background-color: transparent;
  color: #01b075;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.8rem;
  margin: 0 auto;
  margin-top: 0.8rem;
  border: none;
  cursor: pointer;
`;
