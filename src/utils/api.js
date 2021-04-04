export const getAll = () => {
  return fetch("/people", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

export const updatePerson = (id, data) => {
  console.log("here data: ", data);
  return fetch(`/people/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("Error:", error);
    });
};
