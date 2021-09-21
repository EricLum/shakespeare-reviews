import './App.css'
import { useEffect, useState } from "react";
import getReviews, { getReview } from "./services";
import Review from "./review";
import { Box } from "@mui/system";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((i) => {
      setReviews(i);
    });
  });

  // // Get individual
  // useEffect(()=>{
  //   // Ids are specific
  //   getReview(9783221620868).then(i=>{
  //     console.log(i)
  //   })
  // })

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{display: 'grid', gap: 2,  gridTemplateColumns: 'repeat(5, 1fr)' , gridTemplateRows: 'auto'}}>
          {reviews.map((i) => (
            <Review key={i.id} {...i} />
          ))}
        </Box>
      </header>
    </div>
  );
}

export default App;
