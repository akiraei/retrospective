var container = document.getElementsByClassName("container")[0];
var container_style = container.style;
var container_grid = container_style.gridTemplateColumns;
var container_bgc = container_style.backgroundColor;

// var con_grid = container_style.getAttribute("gridTemplateColumns");


var t = {a:1, b:2, c:3, d:4};
// var t_1 = t.getAttribute("a");




var button = document.getElementsByClassName("button")[0];

button.addEventListener("click", function(){
  console.log("click in");
  container_bgc = "#111111";
  console.log("click out");
  // container_style.setAttribute("gridTemplateColumns", "repeat(6, 1fr)");
});


