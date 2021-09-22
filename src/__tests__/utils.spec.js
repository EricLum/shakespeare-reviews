import shapeData from "../utils";
describe("Basic utility tests", () => {
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
      author: "John Smith",
      id: "9783221620838",
      body: "Can one desire too much of a good thing?.",
    },
  ];

  it("shapes data into the right shape", () => {
    const shapedData = shapeData(sampleData);
    expect(shapedData.length).toBe(2);
  });

  it("has data in the right format", () => {
    const shapedData = shapeData(sampleData)[0];
    expect(shapedData.id).toBe("9783221620868");
    expect(shapedData.published).toBe(
      new Date("2016-09-05T23:25:47.642350Z").toDateString()
    );
  });
});
