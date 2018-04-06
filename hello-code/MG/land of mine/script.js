var t_map = [["a", "b"], ["*", "c"]];
var b_map;

// --------------begin of make_matrix--------------------------------------

function gen (a, b) {
  var list_1 = [];
  for (var i = 0; i < a; i++){
    var list_2 = []
    for (var j = 0; j < b; j++){
                if(Math.round(Math.random()) == 1) {
        list_2[j] = "*";
      } else {
        list_2[j] = ".";
      }
              };
    list_1[i] = list_2;
  }
  return list_1
};



function check_bomb (l,x,y) {
  var count = 0;
  for(var i = -1 ; i<2; i++) {
    if (x == 0 && i < 0 ) {
      i = 0;
    };
  console.log("upper",i,j,x+i,y+j);
    for (var j = -1; j<2; j++) {
      if ( y == 0 && j < 0) {
        j = 0;
      };
      console.log("down",i,j,x+i,y+j);
     if ( x+i > l.length - 1) {
       console.log("before break");
       break;
       console.log("after break");
       return count;
     } else {
        if(l[x+i][y+j] === "*" ){
          count += 1;
        console.log("count", count);
        };
    };
    
    };
  };
  return count; 
};



function trans (l) {
for (var i = 0; i < l.length; i++) {
for (var j = 0; j < l[0].length; j++) {
  if ( l[i][j] != "*" ) {
    l[i][j] = check_bomb(l,i,j);
  };
};
};
return l;
};


var unbomb_num = 0;

function unbomb_numbering (l,e,f) {
  for (var c = 0; c < e; c++) {
    for (var d = 0; d < f; d++) {
      if ( l[c][d] != "*") {
        unbomb_num += 1;
      }
    }
  }
  console.log("unbomb_num",unbomb_num);
}


function board_set (a, b) {
var t = gen (a,b);
var tt = trans(t);
unbomb_numbering (tt,a,b);
return tt;
};



// --------------end of make_matrix--------------------------------------







// --------------begin of set_matrix--------------------------------------

var combination;

function get_number () {
  var row_n = document.getElementById("row").value;
  var column_n = document.getElementById("column").value;
  return [row_n, column_n]
};

function cover_hidden () {
  var cover_hidden = document.getElementsByClassName("cover");
  console.log("get in")
  console.log("cover_hidden[0]", cover_hidden[0]);
  cover_hidden[0].style.visibility = "hidden";
};

var grid_container = document.getElementById("container").style;

function column_maker() {
     grid_container.gridTemplateColumns = "repeat(" + combination[1] + ", 1fr)" ;
};

function get_set () {
  combination = get_number();
  b_map = board_set (combination[0], combination[1]);
  cover_hidden();
  console.log("combination", combination);
  column_maker();
  console.log("column_maker");
  make_grid(combination[0], combination[1]);
  console.log("make_grid");
  return;
};

var set = document.getElementById("set");
set.addEventListener("click",get_set);



// --------------end of set_matrix--------------------------------------







// --------------begin of load--------------------------------------

// function count_load(a) {
//   var x = 0;
//   for (var i = 0; i < a.length; i++) {
//     console.log("i", i);
//     for (var j = 0; j < a[0].length; j++) {
//       console.log("j", j);
//       if (a[i][j] == "*") {
//         x = x + 1;
//       }
//     }
//   }
//   console.log(x);
//   return x;
// }

// window.addEventListener("load", function() {
//   count_load(b_map);
// });

//---------------end of load---------------------------------








//---------------begin of input---------------------------------

function xy1(a) {
  console.log("xy1");
  console.log("a.id", a.id, "a.id / 2", a.id/2);
  var u = Math.floor(( a.id / 2 ) / b_map[0].length); // right
  var d = (a.id / 2 ) % b_map[0].length ; // 
  console.log("u", u, "d", d);
  return [u, d];
}

function check(a, b) {
  console.log("row", a, "column", b);
  if (b_map[a][b] == "*" || b_map[a][b] == "!") {
    console.log("get_in");
    return 1;
  } else {
    return 0;
  }
}

function boom(a, b) {
  lv1[ b_map[0].length * a + b ].textContent = "boom!"; // 다 죽일거야 진짜 이부분```````
}

function number(a, b) {
  unbomb_num -= 1;
  lv1[ b_map[0].length * a + b ].textContent = b_map[a][b];
  if (unbomb_num == 0) {
    document.getElementsByClassName("win")[0].style.visibility = "unset";
  }
}

function input(a) {
  var t = xy1(a);
  var x = check(t[0], t[1]);
  console.log("x", x);
  if (x == 1) {
    boom(t[0], t[1]);
    console.log("boom");
    document.getElementsByClassName("fail")[0].style.visibility = "unset";
    console.log("fail");
  } else {
    number(t[0], t[1]);
  }
}

//---------------end of input---------------------------------








//---------------begin of flag---------------------------------

function xy2(a) {
  console.log("xy");
  console.log(a.id);
  var u = Math.floor((a.id - 1) /2 / b_map[0].length );
  var d = ((a.id - 1) / 2 ) % b_map[0].length ;
  console.log("u", u, "d", d);
  return [u, d];
}


function check2(a, b) {
  console.log("0", a, "1", b);
  if (b_map[a][b] == "*") {
    console.log("get_in");
    return 1;
  } else {
    return 0;
  }
}

function flagging(a, b) {
  console.log("flagging");
  b_map[a][b] = "!";
}

function unflagging(a, b) {
  console.log("unflagging");
  console.log(b_map[a][b]);
  if ( b_map[a][b] == "!") {
    b_map[a][b] = "*"
  };
}


function flaged(a) {
  console.log("flaged");
  a.className = "lv2 flaged";
  a.textContent = "flaged";
};

function unflaged (a) {
  console.log("unflaged");
  a.className = "lv2";
  a.textContent = "unflaged";
};




function flag(a) { // <-- integratrion all of flag related function
  var t = xy2(a);
  var x = check2(t[0], t[1]);
  console.log("x", x);
  console.log(b_map[t[0]][t[1]]); 

  if (x == 1) {
    flagging(t[0], t[1]);
    console.log(b_map[t[0]][t[1]]);
      if (a.className == "lv2 flaged") {
    unflaged(a)} else { flaged(a)};
  } else {
    unflagging(t[0], t[1]);
    console.log(b_map[t[0]][t[1]]);
      if (a.className == "lv2 flaged") {
    unflaged(a)} else { flaged(a)};
    
  }
}


//---------------end of flag---------------------------------








//---------------begin of generate---------------------------------

//  function changeDiv(){

//   var str= "제목 : <input type='text' id='new' /> <br />"
//   str += "2007년 현재, 가장 최근 버전은 자바스크립트 1.7이고 파이어폭스 2에서 지원된다. 표준 ECMA-262 3판에 대응하는 자바스크립트 버전은 1.5이다.";
//   str += "ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를";
//   str += "부분지원하게 되었다. 자바스크립트는 브라우저 마다 지원되는 버전이 다르며, 가장 범용적으로 지원되는 버전은 1.5이다. <br />";
//   str += "-위키피디아-";

//   document.getElementById("testArea").innerHTML=str;
//   }

// var make_n = [3, 4];


function make_grid(a, b) {
  var str = "";
  var str_buffer = "";
  var count = 0;
  var choice_cell = 0;

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      count += 1;

      str += '<div class = "lv1">';
      str += count;
      str += '<div class = "lv2" id="';
      str += choice_cell;
      str += '" onclick="input(this)">';
      str += "click"
      choice_cell += 1;
      str += "</div>";
      str += '<div class = "lv2" id="';
      str += choice_cell;
      str += '" onclick="flag(this)">';
      str += "unflaged"
      choice_cell += 1;
      str += "</div>";
      str += "</div>";

      str + count + "번째 줄입니다. <br/>";
    }
  }

  document.getElementById("container").innerHTML = str;

  lv2 = document.getElementsByClassName("lv2");
  lv1 = document.getElementsByClassName("lv1");
}

// var pseudo_button = document.getElementById("pseudo_button");
// pseudo_button.addEventListener("click", function() {
//   make_grid(combination[0], combination[1]);
// });

var lv2;
var lv1;
// var lv2;와 var lv1;을 genarate 보다 위에 있으면 undefined가 뜬다. genarate 할 때 위에서 부터... 읽으면... undefined가 아닐텐데?
// 그럼 밑에다 두면 왜 작동을 하지...? 호이스팅 문제 인거 같긴 한데 ... function에 의해서 function 앞에 있으면 var lv2;와 var lv1;도 리셋이 되는 건가?

//---------------end of generate---------------------------------
