import React from "react";
import { StyledCheckbox } from "./Checkbox.styles";

export default function Checkbox({ label, checked, onChange }) {
  return (
    <StyledCheckbox className="checkbox-input">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label ? label : null}
      <span className="checkmark" />
    </StyledCheckbox>
  );
}
