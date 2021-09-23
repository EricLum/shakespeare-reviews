import React from "react";
import PropTypes from "prop-types";
import Review from "./ReviewCard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CardApp = ({ reviews }) => {
  return (
    <Box
      sx={{ backgroundColor: "#282c34", paddingX: "5%", maxWidth: "2400px" }}
    >
      <Box sx={{ paddingY: "20px" }}>
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
          alignItems: "center",
        }}
      >
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </Box>
    </Box>
  );
};

CardApp.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      rating: PropTypes.number,
      published: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

export default CardApp;
