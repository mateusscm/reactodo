import React from "react";
import { StyledIconButton } from "./IconButton.styles";

export default function IconButton({ icon, children, ...props }) {
  return (
    <StyledIconButton {...props} type="button" icon={icon}>
      {icon}
      {children ? children : null}
    </StyledIconButton>
  );
}
