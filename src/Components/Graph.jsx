import React from "react";
import "./Graph.css";
import DagreGraph from "dagre-d3-react";
import Person from "./Person";

const styleConfig = {
  style: "fill: none; stroke: pink;",
  arrowheadStyle: "display: none"
};

const nodes = [
  { id: "1", label: "Person" },
  { id: "2", label: "Parent 1" },
  { id: "3", label: "Parent 2" },
  { id: "4", label: "Child 1" },
  { id: "5", label: "Child 2" }
];
const links = [
  { source: "2", target: "1", config: styleConfig },
  { source: "3", target: "1", config: styleConfig },
  { source: "1", target: "4", config: styleConfig },
  { source: "1", target: "5", config: styleConfig }
];

const Graph = props => {
  return (
    <div>
      <DagreGraph
        nodes={nodes}
        links={links}
        options={{
          rankdir: "TB",
          align: "UL",
          ranker: "tight-tree"
        }}
        width="500"
        height="500"
        animate={1000}
        shape="circle"
        fitBoundaries
        zoomable
        onNodeClick={e => console.log(e)}
        onRelationshipClick={e => console.log(e)}
      />
    </div>
  );
};

export default Graph;
