const express = require("express");
const cors = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const { dataType } = require("./controller");

app.get("/dataType", dataType);

app.listen(5000, () => console.log("Avengers assemble on port 5000!"));
