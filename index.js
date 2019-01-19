function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nodeChild = node.children[0];
  while (nodeChild) {
    node=nodeChild;
    nodeChild=node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  let int=parseInt(n, 10)
  let rankedLists = document.querySelectorAll(".ranked-list");
  for (let i=0; i< rankedLists.length; i++) {
    let children=rankedLists[i].children;
    for (let j=0; j< rankedLists.length; j++) {
      children[j].innerHTML=children[j].innerHTML+int;
    }
  }
}
