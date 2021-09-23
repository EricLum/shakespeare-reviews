import React from "react";
import {
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Box,
  Typography,
  Rating,
} from "@mui/material";
const ListApp = ({ reviews }) => {
  return (
    <>
      <Box sx={{ paddingY: "20px", textAlign: "center" }}>
        <Typography variant="h4">Reviews Table</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper} sx={{ width: "80%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Author</TableCell>
                <TableCell align="left">Rating</TableCell>
                <TableCell align="left">Published</TableCell>
                <TableCell align="left">Review</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {reviews.map(({ id, author, rating, published, body }) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{author}</TableCell>
                    <TableCell>
                      <Rating value={rating} readOnly precision={0.1} />
                    </TableCell>
                    <TableCell>{published}</TableCell>
                    <TableCell>
                      <i>{body}</i>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ListApp;
