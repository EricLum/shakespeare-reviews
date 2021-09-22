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
} from "@mui/material";
const ListApp = ({ reviews }) => {
  return (
    <Box sx={{display:'flex', justifyContent: 'center'}}>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
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
            {reviews.map(({id,author,rating,published,body}) => {
              return (
                <TableRow key={id}>
                  <TableCell>{author}</TableCell>
                  <TableCell>{rating}</TableCell>
                  <TableCell>{published}</TableCell>
                  <TableCell>
                    {body}
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
