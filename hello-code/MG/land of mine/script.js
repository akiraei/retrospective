var b_map = [["a", "b"], ["*", "c"]];

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

function get_set () {
  combination = get_number();
  cover_hidden();
  column_test();
  console.log(combination);
  return combination;
};

var set = document.getElementById("set");
set.addEventListener("click",get_set);



// --------------end of set_matrix--------------------------------------

// --------------begin of load--------------------------------------

function count_load(a) {
  var x = 0;
  for (var i = 0; i < a.length; i++) {
    console.log("i", i);
    for (var j = 0; j < a[0].length; j++) {
      console.log("j", j);
      if (a[i][j] == "*") {
        x = x + 1;
      }
    }
  }
  console.log(x);
  return x;
}

window.addEventListener("load", function() {
  count_load(b_map);
});

//---------------end of load---------------------------------

//---------------begin of input---------------------------------

function xy1(a) {
  console.log("xy");
  console.log(a.id);
  var u = Math.floor(a.id / 2 / 2);
  var d = (a.id / 2) % 2;
  console.log("u", u, "d", d);
  return [u, d];
}

function check(a, b) {
  console.log("0", a, "1", b);
  if (b_map[a][b] == "*" || b_map[a][b] == "!") {
    console.log("get_in");
    return 1;
  } else {
    return 0;
  }
}

function boom(a, b) {
  lv1[2 * a + b].textContent = "boom!";
}

function number(a, b) {
  lv1[2 * a + b].textContent = b_map[a][b];
}

function input(a) {
  var t = xy1(a);
  var x = check(t[0], t[1]);
  console.log("x", x);
  if (x == 1) {
    boom(t[0], t[1]);
  } else {
    number(t[0], t[1]);
  }
}

//---------------end of input---------------------------------

//---------------begin of flag---------------------------------

function xy2(a) {
  console.log("xy");
  console.log(a.id);
  var u = Math.floor((a.id - 1) / 2 / 2);
  var d = ((a.id - 1) / 2) % 2;
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
  a.className = "lv2 flaged"
};

function unflaged (a) {
  console.log("unflaged");
  a.className = "lv2"
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

var grid_container = document.getElementById("container").style;
var grid_container_c = grid_container.gridTemplateColumns;

function column_test() {
     grid_container_c = combination[1];
};




function change_body(a, b) {
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
      str += choice_cell;
      choice_cell += 1;
      str += "</div>";
      str += '<div class = "lv2" id="';
      str += choice_cell;
      str += '" onclick="flag(this)">';
      str += choice_cell;
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

var pseudo_button = document.getElementById("pseudo_button");
pseudo_button.addEventListener("click", function() {
  change_body(combination[0], combination[1]);
});

var lv2;
var lv1;
// var lv2;와 var lv1;을 genarate 보다 위에 있으면 undefined가 뜬다. genarate 할 때 위에서 부터... 읽으면... undefined가 아닐텐데?
// 그럼 밑에다 두면 왜 작동을 하지...? 호이스팅 문제 인거 같긴 한데 ... function에 의해서 function 앞에 있으면 var lv2;와 var lv1;도 리셋이 되는 건가?

//---------------end of generate---------------------------------
