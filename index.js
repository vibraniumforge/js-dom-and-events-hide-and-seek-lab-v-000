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
  const x = document.querySelectorAll(".ranked-list");

}
