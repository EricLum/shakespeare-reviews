import "./App.css";
import { useEffect, useState } from "react";
import getReviews from "./services";
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import CardApp from "./CardApp";
import Button from "@mui/material/Button";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TableApp from "./TableApp";
import shapeData from './utils'

const App = ({ history }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Reviews
  useEffect(() => {
    setLoading(true);
    getReviews()
      .then((i) => {
        setReviews(shapeData(i));
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    history.push("/table");
  };

  const handleViewCardApp = () => {
    history.push("/");
  };

  return (
    <>
      {loading && (
        <Box
          sx={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress size={400} />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "50px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Typography>Select a view</Typography>
        <Button>
          <Typography onClick={handleViewCardApp}>Card</Typography>
        </Button>
        <Button>
          <Typography onClick={handleClick}>Table</Typography>
        </Button>
      </Box>

      <Switch>
        <Route exact path="/">
          <CardApp reviews={reviews} />
        </Route>
        <Route path="/table">
          <TableApp reviews={reviews} />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
