let name=sessionStorage.getItem("name");
let Points=sessionStorage.getItem("Points");
let user_time=sessionStorage.getItem("time");

document.querySelector(".name").innerHTML=name;
document.querySelector(".Points").innerHTML=Points;
document.querySelector(".time").innerHTML=user_time;
