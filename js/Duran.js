let score = 0;

function Answer(){
  document.getElementById("Answer").style='background-color: green;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/correct_Duran.gif" alt="">`;
  if (score < 10){
    score ++;
    return;
  }
}
function answer1(){
  document.getElementById("answer1").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  if (score > 1){
    score --;
    return;
  }
}
function answer2(){
  document.getElementById("answer2").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  if (score > 1){
    score --;
    return;
  }
}
function answer3(){
  document.getElementById("answer3").style='background-color: red;';
  document.getElementById("quiz1").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  document.getElementById("quiz2").innerHTML = `<img id="fout" src="Images/wrong_Duran.gif" alt="">`;
  if (score > 1){
    score --;
    return;
  }
}
function next1(){
  document.getElementById('main').innerHTML = 
  `
  <center>
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong onclick="previous1()"><</strong>2/10<strong onclick="next2()">></strong></h4>
  <div class="quiz-container">

      <div id="Answers">
      <button onclick="Answer()" id="Answer">a)39 times</button> <button onclick="answer1()" id="answer1">b)5 times</button>
      <br>
      <button onclick="answer2()" id="answer2">c)53 times</button> <button onclick="answer3()" id="answer3">d)25 times</button>
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
  
   <div id="gif">
      <div id="quiz1"></div>
      <div id="Answers">
          <button onclick="answer1()" id="answer1">a)The Fellowship of the Ring</button> <button onclick="Answer()" id="Answer">b)The Return of the King</button>
          <br>
          <button onclick="answer2()" id="answer2">c)The Two Towers</button> <button onclick="answer3()" id="answer3">d)The Hobbit</button>
      </div>
      <div id="bottom">
      <!-- <button id="previous">Previous Question</button> -->
      <button onclick="next1()" id="next">Next Question</button>
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
  <h2>How manny times does Frodo fall down in The Lord of the Rings trilogy?</h2>
  <h4><strong onclick="previous2()"><</strong>3/10<strong onclick="next3()">></strong></h4>
  <div class="quiz-container">

      <div id="Answers">
      <button onclick="Answer()" id="Answer">a)39 times</button> <button onclick="answer1()" id="answer1">b)5 times</button>
      <br>
      <button onclick="answer2()" id="answer2">c)53 times</button> <button onclick="answer3()" id="answer3">d)25 times</button>
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
      <button onclick="Answer()" id="Answer">a)39 times</button> <button onclick="answer1()" id="answer1">b)5 times</button>
      <br>
      <button onclick="answer2()" id="answer2">c)53 times</button> <button onclick="answer3()" id="answer3">d)25 times</button>
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