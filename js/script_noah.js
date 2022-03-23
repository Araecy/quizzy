let questionNumberGlobal = 1; // globally stored question number. This gets updated per question. This way the program knows what question it's currently on.
let score = 0;
let answersGivenQuestionNumber = [];
let answersGiven = [
    [0],
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
];

// Questions:
function question(questionNumber) {
    if (questionNumber == 1) {
        questionNumberGlobal = 1;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">What type of game is osu?</p>
        <div id="answerButtonsDiv">
            <button id="question1Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>moba</button>
            <button id="question1Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>fps</button>
            <button id="question1Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>rhythm</button>
            <button id="question1Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>rpg</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="nextQuestionButtonFirstQuestion" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    } else if (questionNumber == 2) {
        questionNumberGlobal = 2;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 2</h1>
        <p class="centerText">Who was considered the best player in osu for years?</p>
        <div id="answerButtonsDiv">
            <button id="question2Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>mrek</button>
            <button id="question2Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>cookiezi</button>
            <button id="question2Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>mathi</button>
            <button id="question2Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>vaxei</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 3) {
        questionNumberGlobal = 3;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 3</h1>
        <p class="centerText">Who created osu?</p>
        <div id="answerButtonsDiv">
            <button id="question3Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>beppy</button>
            <button id="question3Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>zappy</button>
            <button id="question3Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>peppy</button>
            <button id="question3Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>flappy</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 4) {
        questionNumberGlobal = 4;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 4</h1>
        <p class="centerText">Who is the current nr 1 as of March 21 2022</p>
        <div id="answerButtonsDiv">
            <button id="question4Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Sukimata1</button>
            <button id="question4Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>WhiteCat</button>
            <button id="question4Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>NyanPotato</button>
            <button id="question4Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>lifeline</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 5) {
        questionNumberGlobal = 5;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 5</h1>
        <p class="centerText">How many game modes does osu have?</p>
        <div id="answerButtonsDiv">
            <button id="question5Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>1</button>
            <button id="question5Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>2</button>
            <button id="question5Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>3</button>
            <button id="question5Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>4</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 6) {
        questionNumberGlobal = 6;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 6</h1>
        <p class="centerText">Which medal has not yet been recieved by any player?</p>
        <div id="answerButtonsDiv">
            <button id="question6Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Mad Scientist</button>
            <button id="question6Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Sognare</button>
            <button id="question6Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Unfathomable</button>
            <button id="question6Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Burned Out</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 7) {
        questionNumberGlobal = 7;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 7</h1>
        <p class="centerText">What is the highest score rank you can recieve?</p>
        <div id="answerButtonsDiv">
            <button id="question7Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>B</button>
            <button id="question7Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>A</button>
            <button id="question7Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Gold SS</button>
            <button id="question7Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Silver SS</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 8) {
        questionNumberGlobal = 8;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 8</h1>
        <p class="centerText">What color is the osu logo?</p>
        <div id="answerButtonsDiv">
            <button id="question8Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Pink</button>
            <button id="question8Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Gray</button>
            <button id="question8Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Red</button>
            <button id="question8Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Yellow</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 9) {
        questionNumberGlobal = 9;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 9</h1>
        <p class="centerText">What is the current hardest ranked map? (Dec 7th 2021)</p>
        <div id="answerButtonsDiv">
            <button id="question9Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Unshakable</button>
            <button id="question9Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Xeroa</button>
            <button id="question9Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>The Solace of Oblivion</button>
            <button id="question9Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Deadly force - Put an end</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
        <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    } else if (questionNumber == 10) {
        questionNumberGlobal = 10;
        document.getElementById("firstDiv").innerHTML = `
        <h1>osu quizzy</h1>
        <h1 class="centerText">Question 10</h1>
        <p class="centerText">What does 1month of osu supporter cost?</p>
        <div id="answerButtonsDiv">
            <button id="question10Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>0,0000004 bitcoins</button>
            <button id="question10Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>4 euro</button>
            <button id="question10Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>4 pounds</button>
            <button id="question10Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>4 usd</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton previousButtonLastQuestion" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        <div id="summaryButtonDiv">
            <p>Naam (optioneel): </p><input id="naamInput" type="text">
            <button onclick="summary()">Verstuur</button>
        </div>
        `;
    }

    if (answersGivenQuestionNumber.indexOf(questionNumber) != -1) {
        currentQuestionAnswer = answersGiven[questionNumber][1];
        let isItCorrect = document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).dataset.isCorrect;

        const nodeList = document.querySelectorAll("#answerButtonsDiv > button");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style = "pointer-events: none; cursor: default";
        }
        if (isItCorrect == "true") {
            document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).style = "box-shadow: inset 0px 0px 10px 0px #59ff00; pointer-events: none; cursor: default";
        }
        if (isItCorrect == "false") {
            document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).style = "box-shadow: inset 0px 0px 10px 0px red; pointer-events: none; cursor: default";
        }
    }

    document.getElementById("score").innerHTML = `Score: ${score}`;
}

// This fucntion keeps the score and checks wether it's correct or not.
function checkIfAnswerIsCorrect(falseOrTrue, answerButtonId) {
    const nodeList = document.querySelectorAll("#answerButtonsDiv > button");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style = "pointer-events: none; cursor: default";
    }
    if (falseOrTrue == true) {
        document.getElementById(answerButtonId).style = "box-shadow: inset 0px 0px 10px 0px #59ff00; pointer-events: none; cursor: default";
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    } else {
        document.getElementById(answerButtonId).style = "box-shadow: inset 0px 0px 10px 0px red; pointer-events: none; cursor: default";
    }
    addAnswerGiven(questionNumberGlobal);
}

function putAnswerButtonIntoArray(questionNumber, answerButtonId) {
    let slicedAnswerButtonId = parseInt(answerButtonId.slice(-1));
    console.log("SlicedId: " + answerButtonId.slice(-1));
    answersGiven[questionNumber].push(slicedAnswerButtonId);
    console.log(answersGiven);
}

function addAnswerGiven(questionNumberGlobal) {
    answersGivenQuestionNumber.push(questionNumberGlobal);
}

function summary() {
    let naam = document.getElementById("naamInput").value;
    if (naam != "") {
        document.getElementById("firstDiv").innerHTML = `
            <h1>osu quizzy</h1>
            <h1 class="centerText">Resultaat</h1>
            <div id="endScorePDiv">
                <p class="centerText">Naam: ${naam}</p>
                <p class="centerText" id="endScoreP">Eindscore: ${score} <br><br></p>
            </div>
            <div id="scorePointsDiv">
    
            </div>
        `;
    } else {
        document.getElementById("firstDiv").innerHTML = `
            <h1>osu quizzy</h1>
            <h1 class="centerText">Resultaat</h1>
            <div id="endScorePDiv">
                <p class="centerText" id="endScoreP">Eindscore: ${score} <br><br></p>
            </div>
            <div id="scorePointsDiv">

            </div>
        `;
    }
    for (i = 0; i < score; i++) {
        document.getElementById("scorePointsDiv").innerHTML += `
            <img class="centerText" src="Images/ranking-S-small@2x.png"></img>
        `;
    }
}