import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Button,
  Box,
} from "@mui/material";
const ListApp = ({ reviews }) => {
  return (
    <Box sx={{display:'flex', justifyContent: 'center'}}>
      <TableContainer component={Paper} sx={{ width: "50%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">Rating</TableCell>
              <TableCell align="left">Published</TableCell>
              <TableCell align="left">Body</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reviews.map((review) => {
              return (
                <TableRow>
                  <TableCell>{review.author}</TableCell>
                  <TableCell>{review.rating}</TableCell>
                  <TableCell>{review.publish_date}</TableCell>
                  <TableCell>
                    <Button>View Body</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListApp;
