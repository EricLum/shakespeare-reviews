import React from "react";
import Review from "./ReviewCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CardApp = ({ reviews }) => {
  return (
    <Box
      sx={{ backgroundColor: "#282c34", paddingX: "5%", maxWidth: "2400px" }}
    >
      <Box sx={{paddingY: "20px"}}>
        <Typography sx={{ color: "white" }} variant="h4">
          Reviews by Card
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </Box>
    </Box>
  );
};

export default CardApp;
