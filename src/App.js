import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getReviews from "./services";
import { Switch, Route, withRouter } from "react-router-dom";
import CardApp from "./CardApp";
import Button from "@mui/material/Button";
import { CircularProgress, Typography, Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import TableApp from "./TableApp";
import shapeData from "./utils";

const App = ({ history, getData }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState("");

  // Get Reviews
  useEffect(() => {
    setLoading(true);
    getData()
      .then((data) => {
        setReviews(shapeData(data));
      })
      .catch(() => {
        setMessages("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getData]);

  const handleClick = () => {
    history.push("/table");
  };

  const handleViewCardApp = () => {
    history.push("/");
  };

  return (
    <>
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
      {messages && (
        <Alert severity="error">
          <AlertTitle>Error!</AlertTitle>
          {messages}
        </Alert>
      )}

      <Switch>
        <Route exact path="/">
          {!loading && <CardApp reviews={reviews} />}
        </Route>
        <Route path="/table">
          {!loading && <TableApp reviews={reviews} />}
        </Route>
        <Route default>{!loading && <CardApp reviews={reviews} />}</Route>
      </Switch>
    </>
  );
};

App.defaultProps = {
  getData: getReviews,
};

App.propTypes = {
  getData: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(App);
