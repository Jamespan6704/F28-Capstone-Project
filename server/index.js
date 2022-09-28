const express = require("express");
const cors = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const { getComputer, deletePart, updateData } = require("./controller");

app.get("/getComputer", getComputer);
// app.post("/addPart", addPart);
app.delete("/deletePart/:id", deletePart);
app.put("/updateData/:id", updateData);

app.listen(5000, () => console.log("I really hope this works on port 5000"));
