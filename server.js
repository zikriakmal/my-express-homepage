const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/home", (req, res) => {
  res.json({
    introduction_text:
      "A Software Developer, Been passionate in programming since 2015, playing music for fun, writing programming article, make coding video content, specialized in node.js ,react.js, react native, golang.",
    image: "-",
  });
});

app.get("/works", (req, res) => {
  res.json({
    status: "success",
    data: [
      {
        project_id: 1,
        project_name: "Laragons",
        project_description: "Laragons is laron n gons",
        project_image: "-",
      },
      {
        project_id: 2,
        project_name: "Laragons",
        project_description: "Laragons is laron n gons",
        project_image: "-",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
