const data = require("./db.json");

//REST METHODS
//Get, Post, Delete, Push

module.exports = {
  dataType: (req, res) => {
    res.status(200).send(data);
  },
};
