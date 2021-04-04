import * as dTree from "d3-dtree";
import "./Graph.css";
import { hashToTree } from "../utils/helpers";
import { getAll } from "../utils/api";

getAll()
  .then(data => {
    console.log("getAll data: ", data);
  })
  .catch(e => {
    console.error(e);
  });

export const renderGraph = () => {
  return dTree.init([hashToTree("Ethel R.1883-1951")], {
    target: "#graph",
    debug: true,
    height: 800,
    width: 1200,
    nodeWidth: 110,
    callbacks: {
      nodeClick: function (name, extra) {
        console.log(name);
      },
      textRenderer: function (name, extra, textClass) {
        if (extra && extra.yearString)
          name = name + " (" + extra.yearString + ")";
        return "<p align='center' class='" + textClass + "'>" + name + "</p>";
      },
      nodeRenderer: function (
        name,
        x,
        y,
        height,
        width,
        extra,
        id,
        nodeClass,
        textClass,
        textRenderer
      ) {
        // This callback is optional but can be used to customize the
        // node element using HTML.
        let node = "";
        node += "<div ";
        node += 'style="height:100%;width:100%;" ';
        node += 'class="' + nodeClass + '" ';
        node += 'id="node' + id + '">\n';
        node += textRenderer(name, extra, textClass);
        node += "</div>";
        return node;
      }
    }
  });
};
