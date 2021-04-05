import { createPerson, updatePerson } from "./api";
import { apiData } from "./api-data";
import { data } from "./data";

/*
hashToTree builds up tree data structure for visualization:

const treeData = [
  {
    name: "Michael R.",
    class: "man",
    marriages: [
      {
        spouse: {
          name: "Nina R.",
          class: "woman"
        },
        children: [
          {
            name: "Tanya N.",
            class: "woman",
            marriages: [
              {
                spouse: {
                  name: "David N.",
                  class: "man"
                }
              }
            ]
          },
          {
            name: "Sergey R.",
            class: "man",
            marriages: [
              {
                spouse: {
                  name: "Juliya S.",
                  class: "woman"
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
*/

export const hashToTree = rootPersonId => {
  const person = data[rootPersonId];

  const tree = {
    ...person,
    marriages: person.marriages.map(marriage => {
      return {
        spouse: marriage.spouse,
        children: marriage.childrenIds.map(childId => {
          return hashToTree(childId);
        })
      };
    })
  };

  return tree;
};

const marriagesDataToJson = (marriages = []) => {
  return JSON.stringify(marriages);
};

/*
const personId = "2";

updatePerson(personId, {
  name: apiData[personId].name,
  lifespan: apiData[personId]?.extra?.lifespan,
  marriages: marriagesDataToJson(apiData[personId].marriages)
})
  .then(data => {
    console.log("updated data: ", data);
  })
  .catch(e => {
    console.error(e);
  });


const personId = 11;
const body = {
  name: apiData[personId].name,
  stylingClass: apiData[personId].class,
  lifespan: apiData[personId]?.extra?.lifespan,
  marriages: marriagesDataToJson(apiData[personId].marriages)
};

createPerson(body)
  .then(data => {
    console.log("created data: ", data);
  })
  .catch(e => {
    console.error(e);
  });
 */
