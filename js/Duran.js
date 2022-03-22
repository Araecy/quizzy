let score = 0;
let checkIfAnswerd = 0;
let checkIfAnswerdOpen = 0;
let openVraagTeller = 0;

function openAnswer(){
  // Open vraag 1
  if (document.getElementById("q1").value == "test"){
    document.getElementById("title1").innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
    document.getElementById("q1").style = "color: green; !important";
    if (checkIfAnswerdOpen < 1){
      if (score < 10){
        score ++;
      } checkIfAnswerd ++;
    }
    document.getElementById("Check").style = "display: none;"
  } else{
    document.getElementById("title1").innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
    document.getElementById("q1").style = "color: red; !important";
    document.getElementById("Check").style = "display: none;"
    if (checkIfAnswerd < 1){
      checkIfAnswerdOpen ++;
    }
  }
  // Open vraag 2
  if (openVraagTeller = 1){
  if (document.getElementById("q2").value == "test"){
    document.getElementById("title2").innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
    document.getElementById("q2").style = "color: green; !important";
    if (checkIfAnswerdOpen < 1){
      if (score < 10){
        score ++;
      } checkIfAnswerd ++;
    }
    document.getElementById("Check").style = "display: none;"
  } else{
    document.getElementById("title2").innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
    document.getElementById("q2").style = "color: red; !important";
    document.getElementById("Check").style = "display: none;"
    if (checkIfAnswerd < 1){
      checkIfAnswerdOpen ++;
      }
    }
  }
}

function openNext(){
if (checkIfAnswerdOpen = 1){
  document.getElementById("Check").style = "display: inline;";
  checkIfAnswerdOpen --;
  openVraagTeller ++;
  }
}

function Answer(){
  document.getElementById("Answer").style='background-color: green;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1){
    checkIfAnswerd ++;
}
  if (score < 10){
    score ++;
  }
}

function answer1(){
  document.getElementById("answer1").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1){
    checkIfAnswerd ++;
  }
}

function answer2(){
  document.getElementById("answer2").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1){
    checkIfAnswerd ++;
  }
}

function answer3(){
  document.getElementById("answer3").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1){
    checkIfAnswerd ++;
  }
}
//Score loggen
function Submit(){
  console.log(score+"/10");
}
//start quiz
function start(){
    let SwapOpen = document.getElementById("main3");
    let oldOpen = document.getElementById("main"); 
    SwapOpen.id = "main";
    oldOpen.id = "main3";
}
//start vragen
function startQuiz(){
    let SwapOpen2 = document.getElementById("mainHidden");
    let oldOpen2 = document.getElementById("main"); 
    SwapOpen2.id = "main";
    oldOpen2.id = "mainHidden";
}

// Switched naar vraag 2
function next1(){
  if (checkIfAnswerd == 1){
    document.getElementById('main').innerHTML = 
  `
  <center>
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong><</strong>2/10<strong onclick="next2()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)39 times</button> <button onclick="answer1()" id="answer1">b)5 times</button>
        <br>
        <button onclick="answer2()" id="answer2">c)53 times</button> <button onclick="answer3()" id="answer3">d)25 times</button>
      </div>
      <div id="bottom">

      <button onclick="next2()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
    </center>`
    checkIfAnswerd --;
  }
  else {
    window.alert('Vul eerst iets in voordat je verder gaat!')
  }
}
// Switched naar vraag 3
function next2(){
  if (checkIfAnswerd == 1){
  document.getElementById('main').innerHTML =
    `
    <center>
    <h2>Where is Hobbiton located in real life?</h2>
    <h4><strong><</strong>3/10<strong onclick="next3()">></strong></h4>
    
    <div id="gif">
        <div id="quiz1"></div>
        <div id="Answers">
          <button onclick="answer2()" id="answer2">a)Anaheim</button> <button onclick="answer1()" id="answer1">b)Glendale</button>
          <br>
          <button onclick="Answer()" id="Answer">c)Alexander Farm</button> <button onclick="answer3()" id="answer3">d)Hamilton</button>
        </div>
        <div id="bottom">

        <button onclick="next3()" id="next">Next Question</button>
        <br>
        <!--<button id="submit">Submit Quiz</button> -->
        </div>
        <div id="quiz2"></div>
        </div>
        <div id="results"></div>
    </center>`
    checkIfAnswerd --;
  }
  else {
    window.alert('Vul eerst iets in voordat je verder gaat!')
  }
}
// Switched naar vraag 4
function next3(){
  if (checkIfAnswerd == 1){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>idk?</h2>
  <h4><strong><</strong>4/10<strong onclick="next4()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="answer2()" id="answer2">a)Anaheim</button> <button onclick="answer1()" id="answer1">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="Answer()" id="Answer">d)Hamilton</button>
      </div>

      <div id="bottom">
      <button onclick="next4()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
  checkIfAnswerd --;
  }
  else {
    window.alert('Vul eerst iets in voordat je verder gaat!')
  }
}
// Switched naar vraag 5
function next4(){
  if (checkIfAnswerd == 1){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>idk2?</h2>
  <h4><strong><</strong>5/10<strong onclick="next5()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="answer2()" id="answer2">a)Anaheim</button> <button onclick="Answer()" id="Answer">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <button onclick="next5()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
  checkIfAnswerd --;
  }
  else {
    window.alert('Vul eerst iets in voordat je verder gaat!')
  }
}
// Switch 2 id's zodat de openvragen worden laten zien en de meerkeuze vragen worden weg gehaald
function next5(){
  if (checkIfAnswerd == 1){
  let Swap = document.getElementById("main2");
  let old = document.getElementById("main"); 
  Swap.id = "main";
  old.id = "main2";
  checkIfAnswerd --;
  }
  else {
    window.alert('Vul eerst iets in voordat je verder gaat!')
  }
}