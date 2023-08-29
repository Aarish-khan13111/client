import { Box } from "@mui/material";
import { styled } from "@mui/system";

const ScrollingElement = styled(Box)(() => ({
  overflow: "auto",
  scrollbarWidth: "none", // Hide the scrollbar for firefox
  "&::-webkit-scrollbar": {
    display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
  },
  "&-ms-overflow-style:": {
    display: "none", // Hide the scrollbar for IE
  },
}));

export default ScrollingElement;
