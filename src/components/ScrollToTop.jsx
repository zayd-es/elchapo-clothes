import React from "react";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  // Trigger logic for showing the button
  const trigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        size="small"
        sx={{
          position: "fixed",
          bottom: "33px",
          right: "13px",
          // Boutique Styling: Black background, white icon
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#333", // Dark gray on hover
          },
          // Ensures it stays above other elements
          zIndex: 1000,
        }}
        aria-label="scroll back to top"
      >
        <MdKeyboardArrowUp size={24} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
