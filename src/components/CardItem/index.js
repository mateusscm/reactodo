import {
  AddBox,
  Delete,
  Fastfood,
  HealthAndSafety,
  Tour,
} from "@styled-icons/material";
import React from "react";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import { StyledCard } from "./CardItem.styles";

export default function CardItem({
  title,
  date,
  checked,
  type,
  toggleStatus,
  destroyTodo,
  ...props
}) {
  const iconVerify = (icon) => {
    switch (icon) {
      case "meal":
        return <Fastfood size={32} />;
      case "tour":
        return <Tour size={32} />;
      case "health":
        return <HealthAndSafety size={32} />;
      default:
        return <AddBox size={32} />;
    }
  };

  return (
    <StyledCard {...props}>
      <StyledCard.Type checked={checked}>
        {iconVerify(type)}
        <Checkbox checked={checked} onChange={toggleStatus} />
      </StyledCard.Type>
      <StyledCard.Info>
        <span className="title">{title}</span>
        <span className="subtitle">{date}</span>
      </StyledCard.Info>
      <IconButton icon={<Delete />} onClick={destroyTodo} />
    </StyledCard>
  );
}
