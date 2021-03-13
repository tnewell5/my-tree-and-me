import React from "react";
import { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import "./Graph.css";
import DagreGraph from "dagre-d3-react";

const styleConfig = {
  style: "fill: none; stroke: pink;",
  arrowheadStyle: "display: none"
};

const createNodes = (person, relations) => {
  const nodes = [
    {
      id: person.id,
      label: `<h3>${person.name}</h3><h4>${person.birthYear} - ${
        person.deathYear ?? ""
      }</h4>`,
      labelType: "html"
    }
  ];

  relations.forEach(relation => {
    nodes.push({
      id: relation["relation-id"],
      label: `<h3>${relation.name}</h3><h4>${relation.birthYear} - ${
        relation.deathYear ?? ""
      }</h4>`,
      labelType: "html"
    });
  });

  return nodes;
};

const createLinks = (person, relations) => {
  const links = [];

  relations.forEach(relative => {
    if (relative.relation === "parent") {
      links.push({
        source: relative["relation-id"],
        target: person.id,
        config: styleConfig
      });
    }

    if (relative.relation === "child") {
      links.push({
        source: person.id,
        target: relative["relation-id"],
        config: styleConfig
      });
    }
  });

  return links;
};

const Graph = props => {
  const { Query } = useEasybase();
  const [person, setPerson] = useState({
    id: "1",
    name: "Michael R.",
    birthYear: "1955",
    deathYear: null
  });
  const [graphInput, setGraphInput] = useState({});

  useEffect(() => {
    async function fetchRelations() {
      const relations = await Query({
        queryName: "first-degree-relations",
        tableName: "RELATIONSHIP",
        customQuery: { id: person.id }
      });

      const promises = relations.map(async relation => {
        const relationDetails = await Query({
          queryName: "get-person-by-id",
          tableName: "PERSON",
          customQuery: { id: relation["relation-id"] }
        });

        relation.name = relationDetails[0].name;
        relation.birthYear = relationDetails[0]["birth-year"];
        relation.deathYear = relationDetails[0]["death-year"];
      });

      Promise.all(promises).then(() => {
        const nodes = createNodes(person, relations);
        const links = createLinks(person, relations);

        setGraphInput({ nodes, links });
      });
    }

    fetchRelations();
  }, [Query, person]);

  const handleOnClick = async e => {
    const selectedPersonId = e?.original?.id;
    if (selectedPersonId) {
      const person = await Query({
        queryName: "get-person-by-id",
        tableName: "PERSON",
        customQuery: { id: selectedPersonId }
      });

      setPerson({
        id: person[0].id,
        name: person[0].name,
        birthYear: person[0]["birth-year"],
        deathYear: person[0]["death-year"]
      });
    }
  };

  if (!graphInput.nodes) {
    return null;
  }

  return (
    <div>
      <DagreGraph
        nodes={graphInput.nodes}
        links={graphInput.links}
        options={{
          rankdir: "TB",
          align: "UL",
          ranker: "tight-tree"
        }}
        width="500"
        height="500"
        shape="circle"
        fitBoundaries
        zoomable
        onNodeClick={handleOnClick}
        onRelationshipClick={e => console.log(e)}
      />
    </div>
  );
};

export default Graph;
