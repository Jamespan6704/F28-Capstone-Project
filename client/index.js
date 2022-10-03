const baseURL = "http://localhost:5500";

const showComputers = document.querySelector("#computerDisplay");

//axios request to get data array
//Loop over the array
//Create data cards for each item in the array

const getAllComputers = () => {
  console.log("page loaded");
  axios
    .get(`${baseURL}/computer`)
    .then((res) => {
      console.log(res.data);
      displayComputers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayComputers = (arr) => {
  showComputers.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    createComputerCard(arr[i]);
  }
};

const createComputerCard = (computers) => {
  const computerCard = document.createElement("section");
  computerCard.classList.add("computer-card");

  computerCard.innerHTML = `<img src=${computers.picture} alt='Computer image'/>
 
  <p>${computers.name}</p>
  <p>${computers.specifications}</p>
  <p>${computers.price}</p>
    <button onclick="deletePart(${computers.id})">Remove Computer</button>

 `;
  showComputers.appendChild(computerCard);
};

const deletePart = (id) => {
  axios.delete(`${baseURL}/computer/${id}`).then((res) => {
    showComputers.innerHTML = "";
    displayComputers(res.data);
  });
};

const updatePart = (id) => {
  axios.put(`${baseURL}/computer/${id}`).then((res) => {
    displayComputers(res.data);
  });
};

const addComputer = (event) => {
  event.preventDefault();
  let newComputerName = document.getElementById("firstBox");
  let newComputerSpecs = document.getElementById("secondBox");
  let newComputerPrice = document.getElementById("thirdBox");

  let newPart = {
    name: newComputerName.value,
    // picture: picture,
    specifications: newComputerSpecs.value,
    price: newComputerPrice.value,
  };

  axios.post(`${baseURL}/computer`, newPart).then((res) => {
    displayComputers(res.data);
    newComputerName.value = "";
    newComputerSpecs.value = "";
    newComputerPrice.value = "";
  });
};

document.querySelector("#newCompForm").addEventListener("submit", addComputer);
getAllComputers();
