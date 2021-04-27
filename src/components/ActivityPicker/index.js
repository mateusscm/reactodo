import {
  Fastfood,
  Tour,
  HealthAndSafety,
  AddBox,
} from "@styled-icons/material";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "../IconButton";
import { StyledPickerWrapper, StyledPopover } from "./ActivityPicker.styles";

export default function ActivityPicker({ setActivity, activity }) {
  const [defaultActivities] = useState(["meal", "tour", "health", "other"]);
  const [selectedActivity, setSelectedActivity] = useState("other");
  const [btnHeight, setBtnHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) {
      setBtnHeight(btnRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (activity) {
      setSelectedActivity(activity);
    }
  }, [activity]);

  function colorHandlerSquare(e) {
    setSelectedActivity(e.target.dataset.activity);
  }

  const iconVerify = (icon) => {
    switch (icon) {
      case "meal":
        return <Fastfood />;
      case "tour":
        return <Tour />;
      case "health":
        return <HealthAndSafety />;
      default:
        return <AddBox />;
    }
  };

  const handleConfirm = () => {
    setActivity(selectedActivity);
    setOpen(false);
  };

  return (
    <StyledPickerWrapper className="btn-container">
      <div ref={btnRef}>
        <IconButton
          icon={iconVerify(selectedActivity)}
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <StyledPopover elemHeight={btnHeight}>
          <StyledPopover.Options>
            {defaultActivities.map((act) => (
              <IconButton
                key={act}
                data-activity={act}
                icon={iconVerify(act)}
                aria-label="Selected activity"
                role="button"
                tabIndex="0"
                onClick={colorHandlerSquare}
                onKeyPress={colorHandlerSquare}
                style={
                  selectedActivity === act || act === "#FFFFFF"
                    ? {
                        border: "2px solid #fff",
                        transform: "scale(1.25)",
                      }
                    : {
                        border: "none",
                      }
                }
              />
            ))}
          </StyledPopover.Options>
          <span
            style={{ textAlign: "center", marginTop: 8, fontSize: "1.4rem" }}
          >
            - {selectedActivity} -
          </span>
          <StyledPopover.ButtonConfirm type="button" onClick={handleConfirm}>
            Confirm
          </StyledPopover.ButtonConfirm>
        </StyledPopover>
      )}
    </StyledPickerWrapper>
  );
}
