let score = 0;

function goed(){
  document.getElementById("goed").style='background-color: green;';
  document.getElementById("fout1").style='background-color: none;';
  document.getElementById("fout2").style='background-color: none;';
  document.getElementById("fout3").style='background-color: none;';
  document.getElementById("quiz").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  if (score < 10){
    score ++;
    return;
  }
}
function fout1(){
  document.getElementById("fout1").style='background-color: red;';
  document.getElementById("fout2").style='background-color: none;';
  document.getElementById("fout3").style='background-color: none;';
  document.getElementById("goed").style='background-color: none;';
  document.getElementById("quiz").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
}
function fout2(){
  document.getElementById("fout2").style='background-color: red;';
  document.getElementById("fout3").style='background-color: none;';
  document.getElementById("fout1").style='background-color: none;';
  document.getElementById("goed").style='background-color: none;';
  document.getElementById("quiz").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
}
function fout3(){
  document.getElementById("fout3").style='background-color: red;';
  document.getElementById("fout2").style='background-color: none;';
  document.getElementById("fout1").style='background-color: none;';
  document.getElementById("goed").style='background-color: none;';
  document.getElementById("quiz").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
}
function next1(){
  document.getElementById('main').innerHTML = 
  `
  <center>
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong onclick="previous1()"><</strong>2/10<strong onclick="next2()">></strong></h4>
  <div class="quiz-container">

      <div id="Answers">
      <button onclick="goed()" id="goed">a)39 times</button> <button onclick="fout1()" id="fout1">b)5 times</button>
      <br>
      <button onclick="fout2()" id="fout2">c)53 times</button> <button onclick="fout3()" id="fout3">d)25 times</button>
      </div>
      <div id="quiz"></div>

      <button onclick="previous1()" id="previous">Previous Question</button>
      <button onclick="next2()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      <div id="results"></div>
</center>
</div>`
}
function previous1(){
  document.getElementById('main').innerHTML = 
  `
  <center>
  <h2>Which movie won the Academy Award for Best Picture?</h2>
  <h4>1/10<strong onclick="next1()">></strong></h4>
  <div class="quiz-container">
      

      <div id="Answers">
          <button onclick="fout1()" id="fout1">a)The Fellowship of the Ring</button> <button onclick="goed()" id="goed">b)The Return of the King</button>
          <br>
          <button onclick="fout2()" id="fout2">c)The Two Towers</button> <button onclick="fout3()" id="fout3">d)The Hobbit</button>
      </div>
      <div id="quiz"></div>

      <!-- <button id="previous">Previous Question</button> -->
      <button onclick="next1()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      <div id="results"></div>
</center>
</div>`
}
function next2(){
  document.getElementById('main').innerHTML =
  `
  <center>
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong onclick="previous2()"><</strong>3/10<strong onclick="next3()">></strong></h4>
  <div class="quiz-container">

      <div id="Answers">
      <button onclick="goed()" id="goed">a)39 times</button> <button onclick="fout1()" id="fout1">b)5 times</button>
      <br>
      <button onclick="fout2()" id="fout2">c)53 times</button> <button onclick="fout3()" id="fout3">d)25 times</button>
      </div>
      <div id="quiz"></div>

      <button onclick="previous2()" id="previous">Previous Question</button>
      <button onclick="next3()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      <div id="results"></div>
</center>
</div>`
}
function previous2(){
  document.getElementById('main').innerHTML = 
  `
  <center>
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong onclick="previous1()"><</strong>2/10<strong onclick="next2()">></strong></h4>
  <div class="quiz-container">

      <div id="Answers">
      <button onclick="goed()" id="goed">a)39 times</button> <button onclick="fout1()" id="fout1">b)5 times</button>
      <br>
      <button onclick="fout2()" id="fout2">c)53 times</button> <button onclick="fout3()" id="fout3">d)25 times</button>
      </div>
      <div id="quiz"></div>

      <button onclick="previous1()" id="previous">Previous Question</button>
      <button onclick="next2()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      <div id="results"></div>
</center>
</div>`
}