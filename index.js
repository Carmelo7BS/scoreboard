let countHome = 0
let countGuest = 0
let disp1 = document.getElementById('display1')
let disp2 = document.getElementById('display2')


function plusone1(){
  countHome += 1;
  disp1.textContent = countHome
}

function plustwo2(){
  countHome += 2;
  disp1.textContent = countHome
}

function plusthree3(){
  countHome += 3;
  disp1.textContent = countHome
}

function plusone(){
  countGuest += 1;
  disp2.textContent = countGuest
}

function plustwo(){
  countGuest += 2;
  disp2.textContent = countGuest
}

function plusthree(){
  countGuest += 3;
  disp2.textContent = countGuest
}


function restart(){
  countHome = 0
  countGuest = 0
  disp1.textContent = countHome
  disp2.textContent = countGuest
}
