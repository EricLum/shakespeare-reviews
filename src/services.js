const getReviews = () => {
  return fetch("https://shakespeare.podium.com/api/reviews", {
    headers: {
      "x-api-key": "H3TM28wjL8R4#HTnqk?c",
    },
  }).then((res) => res.json());
};

export default getReviews;
