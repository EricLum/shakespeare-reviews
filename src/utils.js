const shapeData = (data) => {
  return data.map((datum) => ({
    author: datum.author,
    id: datum.id,
    published: new Date(datum.publish_date).toDateString(),
    body: datum.body,
    rating: datum.rating,
  }));
};

export default shapeData;
