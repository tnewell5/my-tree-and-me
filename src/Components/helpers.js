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
    name: person.name,
    class: person.class,
    extra: person.extra,
    marriages: person.marriages.map(marriage => {
      return {
        spouse: marriage.spouse,
        children: marriage.childrenIds.map(childId => {
          return hashToTree(childId);
        })
      };
    })
  };

  console.log("tree: ", tree);
  return tree;
};
