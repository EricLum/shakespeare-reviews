import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { CardActions } from "@mui/material";

const Review = ({ author, body, id, published, rating }) => {
  return (
    <Card
      sx={{
        maxWidth: "300px",
        minWidth: "150px",
        padding: "20px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <CardHeader
        sx={{ textAlign: "center" }}
        title={<Typography variant="h5">{author}</Typography>}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Rating value={rating} readOnly precision={0.1} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {"(" + rating + ")"}
      </Box>

      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography paragraph>
            <i>{body}</i>
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography>{published}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Review;
