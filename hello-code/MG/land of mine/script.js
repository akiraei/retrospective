


var id_02 = document.getElementById("02");
var container = document.getElementsByClassName("container");
var lv1_1 = container.firstChild;
var lv1_1_node = lv1_1.firstChild;


id_02.addEventListener('click', function(){
  lv1_00 = "clicked";
  alert('Click');
});


// funciont (l,e,x,y) {
//   if (e != "*") { 
//     lv1_00 = l[y][x];
//       } else { 
//     alert('boom!')
//   };
// };