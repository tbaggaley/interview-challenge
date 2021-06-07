const express = require("express");
const cors = require("cors");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

// TODO: Set up CORS for only localhost:3000 origin
app.use(cors());

app.get("/api/items", (req, res) => {
  const filterString = req.query?.filter;

  res.send({
    items: filterString
      ? items.filter(({ name }) =>
          name.toLowerCase().includes(filterString.toLowerCase())
        )
      : items,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
