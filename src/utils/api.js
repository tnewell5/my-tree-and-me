// export const getAllPeople = () => {
//   fetch("/all", {
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Credentials": true
//     }
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

export const getAll = () => {
  fetch("/people", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
    .then(response => response.json())
    .then(data => console.log(data));
};
