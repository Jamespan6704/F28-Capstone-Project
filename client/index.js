const baseURL = "http://localhost:5000";

const showData = document.querySelector("#datatype");

//axios request to get data array
//Loop over the array
//Create data cards for each item in the array

const dataType = () => {
  axios
    .get(`${baseURL}/dataType`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
