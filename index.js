function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(x) {
  const y = document.getElementsByTagName(x)[0];
  const z = y.children[6];
  return z;
}

function increaseRankBy(n) {
  let int=parseInt(n, 10)
  const x = document.querySelectorAll(".ranked-list");

}
