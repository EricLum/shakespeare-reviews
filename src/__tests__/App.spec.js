import App from "../App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.setTimeout(11000);
describe("Basic app navigation", () => {
  it("should be able to view both views of the app", async () => {
      // Mock data
    const sampleData = [
      {
        rating: 0.8,
        publish_date: "2016-09-05T23:25:47.642350Z",
        author: "John Smith",
        id: "9783221620868",
        body: "The fool doth think he is wise, but the wise man knows himself to be a fool",
      },
      {
        rating: 0.9,
        publish_date: "2013-09-05T23:25:47.642350Z",
        author: "Jane Smith",
        id: "9783221620838",
        body: "Can one desire too much of a good thing?.",
      },
    ];
    const getData = () => Promise.resolve(sampleData);

    render(
      <Router>
        <App getData={getData} />
      </Router>
    );

    // Viewing the Table app
    await userEvent.click(await screen.findByText("Table"));
    expect(await screen.findByText("Reviews Table")).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();

    // // Viewing the Card App (default view)
    userEvent.click(screen.getByText("Card"));
    await screen.findByText("Reviews by Card");
    expect(screen.getByText("Reviews by Card")).toBeInTheDocument();
  });
});
