const data = require("./db.json");
const idNum = 2;
//REST METHODS
//Get, Post, Delete, Push

module.exports = {
  dataType: (req, res) => {
    res.status(200).send(data);
  },

  addData: (req, res) => {
    const { Input, Data } = req.body;

    let newArray = {
      id: idNum,
      name: "string",
    };
    idNum++;
    data.push(newArray);
    res.status(200).send(data);
  },
  deleteData: (req, res) => {
    const index = data.findIndex((el) => el.id === +req.params.id);

    data.splice(index, 1);

    res.status(200).send(data);
  },
  updateData: (req, res) => {
    const index = data.findIndex(el => el.id === +req.params.body)
    const {data} req.body

    if(data === 'like'){
        data[index].likes++
    }else if(data === 'dislike'){
        data[index].likes--
    }

    res.status(200).send(data)
  }
};
