function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild(x) {
  const x = document.getElementsByTagName(x)[0];
  const y = x.children[6]
}

function increaseRankBy(n) {
  let int=parseInt(n, 10)
  const x = document.querySelectorAll(".ranked-list");

}
