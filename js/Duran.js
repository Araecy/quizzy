let score = 0;

function Answer(){
  document.getElementById("Answer").style='background-color: green;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
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
}

function answer2(){
  document.getElementById("answer2").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
}

function answer3(){
  document.getElementById("answer3").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("Answer").onclick = "answered()";
  document.getElementById("answer1").onclick = "answered()";
  document.getElementById("answer2").onclick = "answered()";
  document.getElementById("answer3").onclick = "answered()";
}

function Submit(){
  console.log(score+"/10");
}

function next1(){
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
}

function next2(){
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
}

function next3(){
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
}

function next4(){
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
}
function next5(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>Openvraag1?</h2>
  <h4><strong><</strong>6/10<strong onclick="next6()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)Anaheim</button> <button onclick="answer2()" id="answer2">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <button onclick="next6()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
}

function next6(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>Openvraag2?</h2>
  <h4><strong><</strong>7/10<strong onclick="next7()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)Anaheim</button> <button onclick="answer2()" id="answer2">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <button onclick="next7()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
}
function next7(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>Openvraag3?</h2>
  <h4><strong><</strong>8/10<strong onclick="next8()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)Anaheim</button> <button onclick="answer2()" id="answer2">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <button onclick="next8()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
}
function next8(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>Openvraag4?</h2>
  <h4><strong><</strong>9/10<strong onclick="next9()">></strong></h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)Anaheim</button> <button onclick="answer2()" id="answer2">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <button onclick="next9()" id="next">Next Question</button>
      <br>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
}

function next9(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>Openvraag5?</h2>
  <h4><strong><</strong>10/10</h4>
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
        <button onclick="Answer()" id="Answer">a)Anaheim</button> <button onclick="answer2()" id="answer2">b)Glendale</button>
        <br>
        <button onclick="answer3()" id="answer3">c)Alexander Farm</button> <button onclick="answer1()" id="answer1">d)Hamilton</button>
      </div>
      <div id="bottom">

      <br>
      <button onclick="Submit()" id="submit">Submit Quiz</button>
      </div>
      <div id="quiz2"></div>
      </div>
      <div id="results"></div>
  </center>`
}