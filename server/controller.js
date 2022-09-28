let computers = require("./db.json");
let computerId = 4;
//REST METHODS
//Get, Post, Delete, Push

module.exports = {
  getComputer: (req, res) => {
    res.status(200).send(computers);
  },
  addPart: (req, res) => {
    const { name, picture, specifications, price } = req.body;

    let newPart = {
      id: computerId,
      name: name,
      picture: picture,
      specifications: specifications,
      price: +price,
    };
    computers.push(newPart);
    computerId++;
    res.status(200).send(computers);
  },
  deletePart: (req, res) => {
    const index = computers.findIndex((el) => el.id === +req.params.id);

    computers.splice(index, 1);

    res.status(200).send(computers);
  },
  updateData: (req, res) => {
    const index = computers.findIndex((el) => el.id === +req.params.id);
    const { part } = req.body;

    if (part) {
      computers[index].specifications += `, ${part}`;
    } else {
      console.log("Error, this is not a part");
    }
    res.status(200).send(computers);
  },
};
