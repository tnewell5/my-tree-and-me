(this["webpackJsonpmy-tree-and-me"]=this["webpackJsonpmy-tree-and-me"]||[]).push([[0],[function(e,t,a){var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();e.exports=function(){"use strict";var e=function(){function e(t,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.DEBUG_LEVEL=r.debug?1:0,this.root=t,this.siblings=a,this.opts=r,this.allNodes=this._flatten(this.root),this.nodeSize=r.callbacks.nodeSize.call(this,_.filter(this.allNodes,(function(e){return!(e.hidden||_.get(e,"data.isMarriage"))})),r.nodeWidth,r.callbacks.textRenderer),this.marriageSize=r.callbacks.marriageSize.call(this,_.filter(this.allNodes,(function(e){return!e.hidden&&_.get(e,"data.isMarriage")})),this.opts.marriageNodeSize)}return r(e,[{key:"create",value:function(){var e=this.opts,t=(this.allNodes,this.nodeSize),a=e.width+e.margin.left+e.margin.right,r=e.height+e.margin.top+e.margin.bottom,n=this.zoom=d3.zoom().scaleExtent([.1,10]).on("zoom",(function(){o.attr("transform",d3.event.transform)})),i=this.svg=d3.select(e.target).append("svg").attr("viewBox",[0,0,a,r]).call(n),o=this.g=i.append("g");i.call(n.transform,d3.zoomIdentity.translate(a/2,e.margin.top).scale(1)),this.tree=d3.tree().nodeSize([2*t[0],e.callbacks.nodeHeightSeperation.call(this,t[0],t[1])]),this.tree.separation((function(e,t){return e.data.hidden||t.data.hidden?.3:.6})),this._update(this.root)}},{key:"_update",value:function(e){var t=this.opts,a=(this.allNodes,this.nodeSize),r=this.marriageSize,n=this.tree(e),i=n.links();this.g.selectAll(".link").data(i).enter().filter((function(e){return!e.target.data.noParent})).append("path").attr("class",t.styles.linage).attr("d",this._elbow);var o=this.g.selectAll(".node").data(n.descendants()).enter();this._linkSiblings(),this.g.selectAll(".sibling").data(this.siblings).enter().append("path").attr("class",t.styles.marriage).attr("d",_.bind(this._siblingLine,this)),o.append("foreignObject").filter((function(e){return!e.data.hidden})).attr("x",(function(e){return Math.round(e.x-e.cWidth/2)+"px"})).attr("y",(function(e){return Math.round(e.y-e.cHeight/2)+"px"})).attr("width",(function(e){return e.cWidth+"px"})).attr("height",(function(e){return e.cHeight+"px"})).attr("id",(function(e){return e.id})).html((function(e){return e.data.isMarriage?t.callbacks.marriageRenderer.call(this,e.x,e.y,r[0],r[1],e.data.extra,e.data.id,e.data.class):t.callbacks.nodeRenderer.call(this,e.data.name,e.x,e.y,a[0],a[1],e.data.extra,e.data.id,e.data.class,e.data.textClass,t.callbacks.textRenderer)})).on("dblclick",(function(){d3.event.stopPropagation()})).on("click",(function(e){2===d3.event.detail||e.data.hidden||(e.data.isMarriage?t.callbacks.marriageClick.call(this,e.data.extra,e.data.id):t.callbacks.nodeClick.call(this,e.data.name,e.data.extra,e.data.id))})).on("contextmenu",(function(e){e.data.hidden||(d3.event.preventDefault(),e.data.isMarriage?t.callbacks.marriageRightClick.call(this,e.data.extra,e.data.id):t.callbacks.nodeRightClick.call(this,e.data.name,e.data.extra,e.data.id))}))}},{key:"_flatten",value:function(e){var t=[],a=0;function r(e){e.children&&e.children.forEach(r),e.id||(e.id=++a),t.push(e)}return r(e),t}},{key:"_elbow",value:function(e,t){if(e.target.data.noParent)return"M0,0L0,0";var a=Math.round(e.target.y+.5*(e.source.y-e.target.y)),r=[{x:e.target.x,y:e.target.y},{x:e.target.x,y:a},{x:e.source.x,y:e.source.y}];return d3.line().curve(d3.curveStepAfter).x((function(e){return e.x})).y((function(e){return e.y}))(r)}},{key:"_linkSiblings",value:function(){var e=this.allNodes;_.forEach(this.siblings,(function(t){var a=e.filter((function(e){return t.source.id==e.data.id})),r=e.filter((function(e){return t.target.id==e.data.id}));t.source.x=a[0].x,t.source.y=a[0].y,t.target.x=r[0].x,t.target.y=r[0].y;var n=null!=a[0].data.marriageNode?a[0].data.marriageNode.id:r[0].data.marriageNode.id,i=e.find((function(e){return e.data.id==n}));t.source.marriageNode=i,t.target.marriageNode=i}))}},{key:"_siblingLine",value:function(e,t){var a=Math.round(e.target.y+.5*(e.source.y-e.target.y)),r=this.nodeSize[0],n=this.nodeSize[1];e.number>0&&(a-=Math.round(8*n/10));var i=[{x:e.source.x,y:e.source.y},{x:Math.round(e.source.x+6*r/10),y:e.source.y},{x:Math.round(e.source.x+6*r/10),y:a},{x:e.target.marriageNode.x,y:a},{x:e.target.marriageNode.x,y:e.target.y},{x:e.target.x,y:e.target.y}];return d3.line().curve(d3.curveStepAfter).x((function(e){return e.x})).y((function(e){return e.y}))(i)}}],[{key:"_nodeHeightSeperation",value:function(e,t){return t+25}},{key:"_nodeSize",value:function(e,t,a){var r=0,n=document.createElement("svg");return document.body.appendChild(n),_.map(e,(function(e){var i=document.createElement("div");i.setAttribute("class",e.data.class),i.style.visibility="hidden",i.style.maxWidth=t+"px";var o=a(e.data.name,e.data.extra,e.data.textClass);i.innerHTML=o,n.appendChild(i);var s=i.offsetHeight;n.removeChild(i),r=Math.max(r,s),e.cHeight=s,e.data.hidden?e.cWidth=0:e.cWidth=t})),document.body.removeChild(n),[t,r]}},{key:"_marriageSize",value:function(e,t){return _.map(e,(function(e){e.data.hidden||(e.cHeight=t,e.cWidth=t)})),[t,t]}},{key:"_nodeRenderer",value:function(e,t,a,r,n,i,o,s,d,c){var l="";return l+="<div ",l+='style="height:100%;width:100%;" ',l+='class="'+s+'" ',l+='id="node'+o+'">\n',l+=c(e,i,d),l+="</div>"}},{key:"_textRenderer",value:function(e,t,a){var r="";return r+="<p ",r+='align="center" ',r+='class="'+a+'">\n',r+=e,r+="</p>\n"}},{key:"_marriageRenderer",value:function(e,t,a,r,n,i,o){return'<div style="height:100%" class="'+o+'" id="node'+i+'"></div>'}},{key:"_debug",value:function(t){e.DEBUG_LEVEL>0&&console.log(t)}}]),e}(),t={VERSION:"2.4.1",init:function(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=_.defaultsDeep(a||{},{target:"#graph",debug:!1,width:600,height:600,hideMarriageNodes:!0,callbacks:{nodeClick:function(e,t,a){},nodeRightClick:function(e,t,a){},marriageClick:function(e,t){},marriageRightClick:function(e,t){},nodeHeightSeperation:function(t,a){return e._nodeHeightSeperation(t,a)},nodeRenderer:function(t,a,r,n,i,o,s,d,c,l){return e._nodeRenderer(t,a,r,n,i,o,s,d,c,l)},nodeSize:function(t,a,r){return e._nodeSize(t,a,r)},nodeSorter:function(e,t,a,r){return 0},textRenderer:function(t,a,r){return e._textRenderer(t,a,r)},marriageRenderer:function(t,a,r,n,i,o,s){return e._marriageRenderer(t,a,r,n,i,o,s)},marriageSize:function(t,a){return e._marriageSize(t,a)}},margin:{top:0,right:0,bottom:0,left:0},nodeWidth:100,marriageNodeSize:10,styles:{node:"node",marriageNode:"marriageNode",linage:"linage",marriage:"marriage",text:"nodeText"}}),n=(t=this._preprocess(t,r),new e(t.root,t.siblings,r));function i(e,t){var a=arguments.length<=2||void 0===arguments[2]?1:arguments[2],i=arguments.length<=3||void 0===arguments[3]?500:arguments[3];n.svg.transition().duration(i).call(n.zoom.transform,d3.zoomIdentity.translate(r.width/2,r.height/2).scale(a).translate(-e,-t))}return n.create(),{resetZoom:function(){var e=arguments.length<=0||void 0===arguments[0]?500:arguments[0];n.svg.transition().duration(e).call(n.zoom.transform,d3.zoomIdentity.translate(r.width/2,r.margin.top).scale(1))},zoomTo:i,zoomToNode:function(e){var t=arguments.length<=1||void 0===arguments[1]?2:arguments[1],a=arguments.length<=2||void 0===arguments[2]?500:arguments[2],r=_.find(n.allNodes,{data:{id:e}});r&&i(r.x,r.y,t,a)},zoomToFit:function(){var e=arguments.length<=0||void 0===arguments[0]?500:arguments[0],t=n.g.node().getBBox(),a=t.width,r=t.height,i=n.svg.node().clientWidth,o=n.svg.node().clientHeight,s=.95/Math.max(a/i,r/o);n.svg.transition().duration(e).call(n.zoom.transform,d3.zoomIdentity.translate(i/2-s*(t.x+a/2),o/2-s*(t.y+r/2)).scale(s))}}},_preprocess:function(e,a){var r=[],n=0,i={name:"",id:n++,hidden:!0,children:[]},o=function e(o,s){var d={name:o.name,id:n++,hidden:!1,children:[],extra:o.extra,textClass:o.textClass?o.textClass:a.styles.text,class:o.class?o.class:a.styles.node};s==i&&(d.noParent=!0);for(var c=0;c<o.depthOffset;c++){var l={name:"",id:n++,hidden:!0,children:[],noParent:d.noParent};s.children.push(l),s=l}t._sortPersons(o.children,a),_.forEach(o.children,(function(t){e(t,d)})),s.children.push(d),t._sortMarriages(o.marriages,a),_.forEach(o.marriages,(function(i,o){var c={name:"",id:n++,hidden:a.hideMarriageNodes,noParent:!0,children:[],isMarriage:!0,extra:i.extra,class:i.class?i.class:a.styles.marriageNode},l=i.spouse,u={name:l.name,id:n++,hidden:!1,noParent:!0,children:[],textClass:l.textClass?l.textClass:a.styles.text,class:l.class?l.class:a.styles.node,extra:l.extra,marriageNode:c};s.children.push(c,u),t._sortPersons(i.children,a),_.forEach(i.children,(function(t){e(t,c)})),r.push({source:{id:d.id},target:{id:u.id},number:o})}))};return _.forEach(e,(function(e){o(e,i)})),{root:d3.hierarchy(i),siblings:r}},_sortPersons:function(e,t){return void 0!=e&&e.sort((function(e,a){return t.callbacks.nodeSorter.call(this,e.name,e.extra,a.name,a.extra)})),e},_sortMarriages:function(e,t){return void 0!=e&&Array.isArray(e)&&e.sort((function(e,a){var r=e.spouse,n=a.spouse;return t.callbacks.nodeSorter.call(this,r.name,r.extra,n.name,n.extra)})),e}};return t}()},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0);a(1);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s={1:{name:"Michael R.",class:"man",extra:{yearString:"1955"},marriages:[{spouse:{name:"Nina R.",class:"woman",extra:{yearString:"1955"}},childrenIds:["2","3"]}]},2:{name:"Tanya N.",class:"woman",extra:{yearString:"1981"},marriages:[{spouse:{name:"David N.",class:"man",extra:{yearString:"1984"}},childrenIds:[]}]},3:{name:"Sergey R.",class:"man",extra:{yearString:"1985"},marriages:[{spouse:{name:"Juliya S.",class:"woman"},childrenIds:[]}]},4:{name:"Yekaterina (Kreina) R.",class:"woman",extra:{yearString:"1922-1996"},marriages:[{spouse:{name:"n/a",class:"unknown"},childrenIds:["1"]}]},5:{name:"Ethel R.",class:"woman",extra:{yearString:"1883-1951"},marriages:[{spouse:{name:"Morduh R.",class:"man",extra:{yearString:"1880-1946"}},childrenIds:["6","11","4","7"]}]},6:{name:"Deborah R.",class:"woman",extra:{yearString:"1912-2005"},marriages:[]},7:{name:"Mira R.",class:"woman",extra:{yearString:"1924-2008"},marriages:[{spouse:{name:"Vladimir M.",class:"man",extra:{yearString:"1924-1981"}},childrenIds:["8","9","10"]}]},8:{name:"Michael M.",class:"man",extra:{yearString:"1946-1997"},marriages:[]},9:{name:"Valentine M.",class:"man",extra:{yearString:"1948-1998"},marriages:[]},10:{name:"Eduard M.",class:"man",extra:{yearString:"1951"},marriages:[]},11:{name:"Michael R.",class:"man",extra:{yearString:"1916-1941"},marriages:[]}},d=function e(t){var a=s[t];return o(o({},a),{},{marriages:a.marriages.map((function(t){return{spouse:t.spouse,children:t.childrenIds.map((function(t){return e(t)}))}}))})};a(2);r.init([d(5)],{target:"#graph",debug:!0,height:800,width:1200,nodeWidth:110,callbacks:{nodeClick:function(e,t){console.log(e)},textRenderer:function(e,t,a){return t&&t.yearString&&(e=e+" ("+t.yearString+")"),"<p align='center' class='"+a+"'>"+e+"</p>"},nodeRenderer:function(e,t,a,r,n,i,o,s,d,c){var l="";return l+="<div ",l+='style="height:100%;width:100%;" ',l+='class="'+s+'" ',l+='id="node'+o+'">\n',l+=c(e,i,d),l+="</div>"}}})}],[[3,1]]]);
//# sourceMappingURL=main.225d7f9a.chunk.js.map