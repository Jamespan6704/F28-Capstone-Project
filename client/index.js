const baseURL = "http://localhost:5000";

const showComputers = document.querySelector("#computerDisplay");

//axios request to get data array
//Loop over the array
//Create data cards for each item in the array

const getAllComputers = () => {
  axios
    .get(`${baseURL}/getComputer`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayComputers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    createComputerCard(arr[i]);
  }
};

const createComputerCar = (computers) => {
  const computerCard = document.createElement("section");
  computerCard.classList.add("computer-card");

  computerCard.innerHTML = `<img src=${computers.picture} alt='Computer image'/>
  <p>${computers.name}</p>
  <section>
    `;
};

getAllComputers();
