import * as dTree from "d3-dtree";
import "./index.css";

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

console.log("treeData: ", treeData);

dTree.init(treeData, {
  target: "#graph",
  debug: true,
  height: 800,
  width: 1200,
  callbacks: {
    nodeClick: function (name, extra) {
      console.log(name);
    },
    textRenderer: function (name, extra, textClass) {
      // THis callback is optinal but can be used to customize
      // how the text is rendered without having to rewrite the entire node
      // from screatch.
      if (extra && extra.nickname) name = name + " (" + extra.nickname + ")";
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
