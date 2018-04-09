// var unit_01 = {
//     id_num : 1,
//     vector : {x: 0, y: 10, l: 10},
//     xy : {x:350, y:350},
//     diameter : 100
// }

// var unit_02 = {
//     id_num : 2,
//     vector : {x: 0, y: 0, l: 0},
//     xy : {x:0, y:0},
//     diameter : 100
// }


const keyset = {};
keyset.r = {x: 2, y: 0};
keyset.l = {x: -2, y: 0};
keyset.u = {x: 0, y: 2};
keyset.d = {x: 0, y: -2};


// var units = document.getElementsByClassName("unit");


//-----------------units------------------------------


const Unit = function () {};
// Unit.prototype = {id_num: 0, vector: 0, xy: 0, diameter: 0};
this.id_num = 0;
this.vector = {x: 0, y: 10, l: 10};
this.xy = {x: 300, y: 300};
this.diameter = 100;


//------------------ genarater---------------------------


const units = [];

const genarator = function (apple) {
    if (apple == 1) {
        if (units.length == 0){
            let num = units.length
            let t = new Unit;
            t.id_num = num;
            units[num] = t;
        } else { 
            let num = units.length
            let t = new Unit;
            t.id_num = num;
            t.xy.x = units[num-1].xy.x + 100;
            units[num] = t;
        }
    }
    console.log(units);
}




//---------------vector_sum-----------------------------

const head_vector = function (target, keyset_direction) {
    target.vector.x += keyset_direction.x;
    target.vector.y += keyset_direction.y;
    let radian = Math.atan2(target.vector.y, target.vector.x);
    target.vector.x = target.vector.l * Math.cos(radian);
    target.vector.y = target.vector.l * Math.sin(radian);
}



const follow_vector = function (follower) {
    let n = follower.id_num;
    follower.vector.x = units[n-1].xy.x - follower.xy.x;
    follower.vector.y = units[n-1].xy.y - follower.xy.y;
    let radian = Math.atan2(follower.vector.y, follower.vector.x);
    follower.vector.x = follower.vector.l * Math.cos(radian);
    follower.vector.y = follower.vector.l * Math.sin(radian);
}



const linking  = function (keyset_direction) {
    head_vector (units[0], keyset_direction);
    for (let i = 1; i < units.length; i ++) {
        follow_vector (units[i]);
    };
}






//------------------window_angle_key---------------------



// function key_control (event){

//     switch (event.keyCode) {
//         case 40:
//         vector_sum(defalut_vector, keyset.d);
//         walking(units[1]);
//         console.log("AD",defalut_vector);
//         break;
//         case 38:
//         vector_sum(defalut_vector, keyset.u);
//         walking(units[1]);
//         console.log("AU",defalut_vector);
//           break;
//         case 39:
//         vector_sum(defalut_vector, keyset.l);
//         walking(units[1]);
//         console.log("AL",defalut_vector);
//           break;
//         case 37:
//         vector_sum(defalut_vector, keyset.r);
//         walking(units[1]);
//         console.log("AR",defalut_vector);
//           break;
//         default:
//           return;
// }}


// window.addEventListener("keydown",key_control())




// ----------------test_button------------------------ 

// var button = document.getElementById("button");

// button.addEventListener("click", );


//----------- walking --------------------------------------

function walking (a) {
    defalut_xy.y = defalut_xy.y - defalut_vector.y;
    defalut_xy.x = defalut_xy.x - defalut_vector.x;
    a.style.top = defalut_xy.y + "px";
    a.style.left = defalut_xy.x + "px";
}


// id (number)
// count 
// if(count > id) {
//     + vector 
// }
// id object { x:, y:, vector_x: , vector_y:, id_num:, }