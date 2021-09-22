import App from "../App";
import { render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event';

describe("Basic app navigation", () => {
  it("should be able to view both views of the app", async () => {
    render(
      <Router>
        <App />
      </Router>
    );
    
    // Viewing the Table app
    await userEvent.click(screen.getByText('Table'))
    expect(screen.getByText('Reviews Table')).toBeInTheDocument()

    // Viewing the Card App (default view)
    await userEvent.click(screen.getByText('Card'))
    expect(screen.getByText('Reviews by Card')).toBeInTheDocument()
  });
});
