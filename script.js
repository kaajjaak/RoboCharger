let wordlist = ["meat", "soup", "apple", "pizza", "peperoni", "noodles", "cheese", "john", "titanic", "baloon", "cartoon", "green", "china", "milk", "banaan"]
let word;
let wordlonginp;
let testword;
var c = document.getElementById("process");
var ctx = c.getContext("2d");
let lvlamm =  [3, 5, 10, 15, 20, 30, 40];
let prr = 0;
let fillprr = 0;
let currlvl = 0;
let level = 1;
let testword2;
let testword3;
let time = [25, 20, 15, 10, 8, 6, 5]
let currtimer = 0;
let myTimer;
//let wordprr = document.getElementById('changetxt').innerHtml();

function start() {

  document.getElementById("startbtn").style.visibility = "hidden";
  newWord()
  currtimer = time[level - 1]
  timer()
}
function newWord() {
  word = wordlist[Math.floor(Math.random() * wordlist.length)];
  document.getElementById("changetxt").innerHTML = word;
}

document.addEventListener('keyup', function (event) {
  wordlonginp = document.getElementById("inp").value
  testword = word.slice(0 , wordlonginp.length)
  testword3 = wordlonginp.slice(0, wordlonginp.length)
  if(testword == testword3) {
    testword2 = word.slice(wordlonginp.length)
    document.getElementById("changetxt").style.color = "black"
     document.getElementById("changetxt").innerHTML = "<span style='color: green;'>" + testword + "</span>" + testword2 
  } else {
    document.getElementById("changetxt").innerHTML = word;
    document.getElementById("changetxt").style.color = "red"
  }
  
  
  //for(var i = 0; i<wordlong.length; i++) {}
  if(document.getElementById("inp").value == word) {
    prr++;
    //display process
    fillprr = fillprr + (325 / lvlamm[currlvl])
      ctx.clearRect(0, 0, c.width, c.height); 
      ctx.fillStyle = '#0ea113';
      ctx.fillRect(0,0, fillprr , c.height); 
      document.getElementById('inp').value = ''
      //change color letters

      
      if (prr == lvlamm[currlvl]) {
        currlvl++;
        ctx.fillStyle = 'red';
        ctx.fillRect(0,0, c.width , c.height); 
        fillprr = 0;
        prr = 0;
        level++;
        document.getElementById("lvlprg").innerHTML = "Level: " + level
        clearInterval(myTimer);
        currtimer = time[level - 1]
        timer()
      }
      newWord()

  }

 });
function timer() {
  currtime = time[level - 1]
  myTimer = setInterval(timerFn, 1000)
}
function timerFn() {

  currtimer--;
  document.getElementById("tim").innerHTML = "Time left: " + currtimer + "s";
  if (currtimer <= 0)
  {
    stopTimer();
  }

}
function stopTimer()
{
  clearInterval(myTimer);
  level = 1;
  document.getElementById("lvlprg").innerHTML = "Level: " + level
  document.getElementById("tim").innerHTML = "Time left: " + currtimer;
  document.getElementById("startbtn").style.visibility = "visible";
  document.getElementById("changetxt").innerHTML = " ";
  prr = 0;
  fillprr = 0;
  ctx.clearRect(0, 0, c.width, c.height); 
  ctx.fillStyle = '#0ea113';
  ctx.fillRect(0,0, prr, c.height); 

}