const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {
  getComputer,
  addPart,
  deletePart,
  updateData,
} = require("./controller");

app.get("/computer", getComputer);
app.post("/computer", addPart);
app.delete("/computer/:id", deletePart);
app.put("/computer/:id", updateData);

app.listen(5000, () => console.log("I really hope this works on port 5000"));
