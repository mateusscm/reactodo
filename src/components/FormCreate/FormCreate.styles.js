import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

StyledForm.InputContainer = styled.div`
  position: relative;
  width: 100%;

  .btn-container {
    position: absolute;
    right: 4px;
    top: 4px;
  }
`;

StyledForm.CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & label {
    flex: 1;
  }
`;

export const StyledInput = styled.input`
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 1rem;
  padding-right: 4rem;
  border-radius: 0.5rem;
  border-style: none;
  flex: 1;
  width: 100%;
`;
