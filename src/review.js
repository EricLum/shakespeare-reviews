import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const Review = ({ author, body, id, publish_date, rating }) => {
  const formattedDate = new Date(publish_date).toDateString();
  const adjustedStars = Array.apply(null, Array(Math.ceil(rating))).map(
    function (x, i) {
      return i;
    }
  );
  return (
    <Card sx={{ maxWidth: "300px", minWidth: "150px", maxHeight: "300px",padding: "20px" }}>
      <CardHeader title={author} />
      <CardContent>
        <Typography>{body}</Typography>
        <Typography>{formattedDate}</Typography>
        {adjustedStars.map((i) => (
          <span>
            <span>
              <StarIcon />
            </span>
          </span>
        ))}
        <Typography>{rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default Review;
