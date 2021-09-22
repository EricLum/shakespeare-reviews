import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from "uuid";

const Review = ({ author, body, id, publish_date, rating }) => {
  const formattedDate = new Date(publish_date).toDateString();
  // Create array to map over how many stars there are
  const adjustedStars = Array.apply(null, Array(Math.ceil(rating))).map(
    function (_, i) {
      return i;
    }
  );
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "150px",
        padding: "20px",
        backgroundColor: '#3f51b5',
        color: 'white'
      }}
    >
      <CardHeader
        sx={{ textAlign: "center" }}
        title={<Typography variant="h5">{author}</Typography>}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography paragraph>{body}</Typography>
        </Box>
      </CardContent>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {adjustedStars.map(() => (
            <StarIcon key={uuidv4()} />
          ))}
          <Typography>{rating}</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>{formattedDate}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Review;
