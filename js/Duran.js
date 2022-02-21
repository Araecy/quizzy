function goed(){
  document.getElementById("goed").style='background-color: green;';
  document.getElementById("fout1").style='background-color: none;';
  document.getElementById("fout2").style='background-color: none;';
  document.getElementById("fout3").style='background-color: none;';
  document.getElementById("quiz").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
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
  <h2>Question2</h2>
  <div class="quiz-container">
      <div id="quiz"></div>


      <div id="Answers">
          <button onclick="fout1()" id="fout1">Kaas</button> <button onclick="goed()" id="goed">Kaas2</button>
          <br>
          <button onclick="fout2()" id="fout2">Kaas3</button> <button onclick="fout3()" id="fout3">Kaas4</button>
      </div>

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
  <h2>Question</h2>
  <div class="quiz-container">
      <div id="quiz"></div>


      <div id="Answers">
          <button onclick="fout1()" id="fout1">Kaas</button> <button onclick="goed()" id="goed">Kaas2</button>
          <br>
          <button onclick="fout2()" id="fout2">Kaas3</button> <button onclick="fout3()" id="fout3">Kaas4</button>
      </div>

      <!-- <button id="previous">Previous Question</button> -->
      <button onclick="next1()" id="next">Next Question</button>
      <br>
      <!--<button id="submit">Submit Quiz</button> -->
      <div id="results"></div>
</center>
</div>`
}