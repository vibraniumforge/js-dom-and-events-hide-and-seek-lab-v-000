function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  const y = document.getElementbyId('grand-node');
  const z = y.children[0];
  return z;
}

function increaseRankBy(n) {
  let int=parseInt(n, 10)
  const x = document.querySelectorAll(".ranked-list");

}
