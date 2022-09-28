const computers = require("./db.json");
const computerId = 4;
//REST METHODS
//Get, Post, Delete, Push

module.exports = {
  getComputer: (req, res) => {
    res.status(200).send(computers);
  },
  // addPart: (req, res) => {
  //   const { name, picture, specifications, price } = req.body;

  //   let newPart = {
  //     id: computerId,
  //     name: name,
  //     picture: picture,
  //     specifications: specifications,
  //     price: 0,
  //   };
  //   computers.push(newPart);
  //   computerId++;
  //   res.status(200).send(computers);
  // },
  deletePart: (req, res) => {
    const index = computers.findIndex((el) => el.id === +req.params.id);

    data.splice(index, 1);

    res.status(200).send(computers);
  },
  updateData: (req, res) => {
    const index = data.findIndex((el) => el.id === +req.params.body);
    const { part } = req.body;

    if (part === String) {
      computers[index].specifications.push(part);
    } else {
      console.log("Error, this is not a part");
    }
    res.status(200).send(data);
  },
};
