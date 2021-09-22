import React from "react";
import Review from "./ReviewCard";
import { Box } from "@mui/system";

const CardApp = ({ reviews }) => {
  return (
    <Box
      sx={{ backgroundColor: "#282c34", paddingX: "5%", maxWidth: "2400px" }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {reviews.map((i) => (
          <Review key={i.id} {...i} />
        ))}
      </Box>
    </Box>
  );
};

export default CardApp;
