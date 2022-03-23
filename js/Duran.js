let score = 0;
//dit checkt elke open vraag of die goed of fout is
let scoreOpen1 = 0;
let scoreOpen2 = 0;
let scoreOpen3 = 0;
let scoreOpen4 = 0;
let scoreOpen5 = 0;
let scoreOpen = 0;

let totalScore = 0;
let checkIfAnswerd = 0;
let checkIfAnswerdOpen = 0;
let openVraagTeller = 0;

function openAnswer() {
  // Open vraag 1
  if (document.getElementById("q1").value == "Gandalf") {
    document.getElementById(
      "title1"
    ).innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
    document.getElementById("q1").style = "color: green; !important";
    if (checkIfAnswerdOpen < 1) {
      checkIfAnswerdOpen++;
    }

    document.getElementById("Check").style = "display: none;";
  } else {
    document.getElementById(
      "title1"
    ).innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
    document.getElementById("q1").style = "color: red; !important";
    document.getElementById("Check").style = "display: none;";
    if (checkIfAnswerdOpen < 1) {
      checkIfAnswerdOpen++;
    }
  }
  // Open vraag 2
  if (openVraagTeller == 1) {
    if (document.getElementById("q2").value == "Frodo") {
      document.getElementById(
        "title2"
      ).innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
      document.getElementById("q2").style = "color: green; !important";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
      document.getElementById("Check").style = "display: none;";
    } else {
      document.getElementById(
        "title2"
      ).innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
      document.getElementById("q2").style = "color: red; !important";
      document.getElementById("Check").style = "display: none;";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
    }
  }
  // Open vraag 3
  if (openVraagTeller == 2) {
    if (document.getElementById("q3").value == "Durins Folk") {
      document.getElementById(
        "title3"
      ).innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
      document.getElementById("q3").style = "color: green; !important";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
      document.getElementById("Check").style = "display: none;";
    } else {
      document.getElementById(
        "title3"
      ).innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
      document.getElementById("q3").style = "color: red; !important";
      document.getElementById("Check").style = "display: none;";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
    }
  }
  // Open vraag 4
  if (openVraagTeller == 3) {
    if (document.getElementById("q4").value == "Elrond") {
      document.getElementById(
        "title4"
      ).innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
      document.getElementById("q4").style = "color: green; !important";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
      document.getElementById("Check").style = "display: none;";
    } else {
      document.getElementById(
        "title4"
      ).innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
      document.getElementById("q4").style = "color: red; !important";
      document.getElementById("Check").style = "display: none;";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
    }
  }
  // Open vraag 5
  if (openVraagTeller == 4) {
    if (document.getElementById("q5").value == "The Prancing Pony") {
      document.getElementById(
        "title5"
      ).innerHTML = `<img id="foutGoed" src="Images/correct_Duran.gif" alt="">`;
      document.getElementById("q5").style = "color: green; !important";
      if (checkIfAnswerdOpen < 1) {
      }
      checkIfAnswerdOpen++;

      document.getElementById("Check").style = "display: none;";
    } else {
      document.getElementById(
        "title5"
      ).innerHTML = `<img id="foutGoed" src="Images/wrong_Duran.gif" alt="">`;
      document.getElementById("q5").style = "color: red; !important";
      document.getElementById("Check").style = "display: none;";
      if (checkIfAnswerdOpen < 1) {
        checkIfAnswerdOpen++;
      }
    }
  }
}

function openNext() {
  // punten teller
  if (document.getElementById("q1").value == "Gandalf") {
    scoreOpen1 = 1;

  }
  if (document.getElementById("q2").value == "Frodo") {
    scoreOpen2 = 1;

  }
  if (document.getElementById("q3").value == "Durins Folk") {
    scoreOpen3 = 1;

  }
  if (document.getElementById("q4").value == "Elrond") {
    scoreOpen4 = 1;

  }
  if (document.getElementById("q5").value == "The Prancing Pony") {
    scoreOpen5 = 1;

  }

  scoreOpen = scoreOpen1 + scoreOpen2 + scoreOpen3 + scoreOpen4 + scoreOpen5;

  if ((checkIfAnswerdOpen = 1)) {
    document.getElementById("Check").style = "display: inline;";
    checkIfAnswerdOpen--;
    openVraagTeller++;
    if (openVraagTeller >= 5) {
      document.getElementById("next").innerHTML = "Sumbit quiz";
      document.getElementById("Check").style = "display: none;";
    }
  }
}

function submitQuiz() {
  totalScore = score += scoreOpen;
  let SwapOpen3 = document.getElementById("bottomMain");
  let oldOpen3 = document.getElementById("main");
  SwapOpen3.id = "main";
  oldOpen3.id = "bottomMain";
  let naam = document.getElementById("naam").value;
  let goedFout;
  let goedFoutGedaan;
  let opacity1 = "0.3";
  let opacity2 = "0.3";
  let opacity3 = "0.3";
  let opacity4 = "0.3";
  let opacity5 = "0.3";
  let opacity6 = "0.3";
  let opacity7 = "0.3";
  let opacity8 = "0.3";
  let opacity9 = "0.3";
  let opacity10 = "0.3";

//Opacity
  if (totalScore == 1){
    opacity1 = "1";
  }
  if (totalScore == 2){
    opacity1 = "1";
    opacity2 = "1";
  }
  if (totalScore == 3){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
  }
  if (totalScore == 4){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
  }
  if (totalScore == 5){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
  }
  if (totalScore == 6){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
    opacity6 = "1";
  }
  if (totalScore == 7){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
    opacity6 = "1";
    opacity7 = "1";
  }
  if (totalScore == 8){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
    opacity6 = "1";
    opacity7 = "1";
    opacity8 = "1";
  }
  if (totalScore == 9){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
    opacity6 = "1";
    opacity7 = "1";
    opacity8 = "1";
    opacity9 = "1";
  }
  if (totalScore == 10){
    opacity1 = "1";
    opacity2 = "1";
    opacity3 = "1";
    opacity4 = "1";
    opacity5 = "1";
    opacity6 = "1";
    opacity7 = "1";
    opacity8 = "1";
    opacity9 = "1";
    opacity10 = "1";
  }

//Tekst voor de uitslag
  if (totalScore >= 5){
    goedFout = "correct";
    goedFoutGedaan = "Goed gedaan"
  }
  else{
    goedFout = "wrong";
    goedFoutGedaan = "Helaas volgende keer beter"
  }
  document.getElementById(
    "main"
  ).innerHTML = `<center><h1 id='Eindresultaat';><p>Gefeliciteerd ${naam} je hebt de quiz afgerond!</p>
  <img src="Images/${goedFout}_Duran.gif" width="10%" alt="">
  <br>
  <img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity1};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity2};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity3};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity4};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity5};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity6};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity7};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity8};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity9};" width="2%" alt=""><img src="Images/Duran_Punten_logo.png" style="opacity: ${opacity10};" width="2%" alt="">
  <br>
  ${goedFoutGedaan} ${naam}! Je hebt ${totalScore} van de 10 punten behaald.</center></h1>
  <center>
  <a href='./index.php'><button>Terug Home</button></a>
</center>
  `;
}
//meerkeuze vragen
function Answer() {
  document.getElementById("Answer").style = "background-color: green;";
  document.getElementById(
    "quiz1"
  ).innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById(
    "quiz2"
  ).innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1) {
    checkIfAnswerd++;
  }
  if (score < 10) {
    score++;
  }
}

function answer1() {
  document.getElementById("answer1").style = "background-color: red;";
  document.getElementById(
    "quiz1"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById(
    "quiz2"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1) {
    checkIfAnswerd++;
  }
}

function answer2() {
  document.getElementById("answer2").style = "background-color: red;";
  document.getElementById(
    "quiz1"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById(
    "quiz2"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1) {
    checkIfAnswerd++;
  }
}

function answer3() {
  document.getElementById("answer3").style = "background-color: red;";
  document.getElementById(
    "quiz1"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById(
    "quiz2"
  ).innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
  if (checkIfAnswerd < 1) {
    checkIfAnswerd++;
  }
}

//start quiz vragen
function start() {
  let SwapOpen2 = document.getElementById("mainHidden");
  let oldOpen2 = document.getElementById("main");
  SwapOpen2.id = "main";
  oldOpen2.id = "mainHidden";
}

// Switched naar vraag 2
function next1() {
  if (checkIfAnswerd == 1) {
    document.getElementById("main").innerHTML = `
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
    </center>`;
    checkIfAnswerd--;
  } else {
    window.alert("Vul eerst iets in voordat je verder gaat!");
  }
}
// Switched naar vraag 3
function next2() {
  if (checkIfAnswerd == 1) {
    document.getElementById("main").innerHTML = `
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
    </center>`;
    checkIfAnswerd--;
  } else {
    window.alert("Vul eerst iets in voordat je verder gaat!");
  }
}
// Switched naar vraag 4
function next3() {
  if (checkIfAnswerd == 1) {
    document.getElementById("main").innerHTML = `
  <center>
  <h2>Wie had de Ring na Sauron?</h2>
  <h4><strong><</strong>4/10<strong onclick="next4()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="answer2()" id="answer2">a)Elrond</button> <button onclick="answer1()" id="answer1">b)Gollum</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Morgul</button> <button onclick="Answer()" id="Answer">d)Isildur</button>
      </div>

      <div id="bottom">
      <button onclick="next4()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`;
    checkIfAnswerd--;
  } else {
    window.alert("Vul eerst iets in voordat je verder gaat!");
  }
}
// Switched naar vraag 5
function next4() {
  if (checkIfAnswerd == 1) {
    document.getElementById("main").innerHTML = `
  <center>
  <h2>Hoe heet het paard van Gandalf?</h2>
  <h4><strong><</strong>5/10<strong onclick="next5()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="answer2()" id="answer2">a)Shadowmane</button> <button onclick="Answer()" id="Answer">b)Shadowfax</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Hasufel</button> <button onclick="answer1()" id="answer1">d)Celeborn</button>
      </div>
      <div id="bottom">

      <button onclick="next5()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`;
    checkIfAnswerd--;
  } else {
    window.alert("Vul eerst iets in voordat je verder gaat!");
  }
}
// Switch 2 id's zodat de openvragen worden laten zien en de meerkeuze vragen worden weg gehaald
function next5() {
  if (checkIfAnswerd == 1) {
    let Swap = document.getElementById("main2");
    let old = document.getElementById("main");
    Swap.id = "main";
    old.id = "main2";
    window.alert(
      "Let aub op de spelleng en vergeet niet je antwoord te checken!"
    );
    checkIfAnswerd--;
  } else {
    window.alert("Vul eerst iets in voordat je verder gaat!");
  }
}
