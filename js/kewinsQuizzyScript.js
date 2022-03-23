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
function question(questionNumber){
    if(questionNumber == 1){
        questionNumberGlobal = 1;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">Who is responsible for Elliot's safety?</p>
        <div id="answerButtonsDiv">
            <button id="question1Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Vera</button>
            <button id="question1Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Leon</button>
            <button id="question1Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Derek</button>
            <button id="question1Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Dom</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="nextQuestionButtonFirstQuestion" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 2){
        questionNumberGlobal = 2;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 2</h1>
        <p class="centerText">Who investigated the 5/9 hack?</p>
        <div id="answerButtonsDiv">
            <button id="question2Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Dom</button>
            <button id="question2Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Terry Colby</button>
            <button id="question2Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Frank Cody</button>
            <button id="question2Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Santiago</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 3){
        questionNumberGlobal = 3;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 3</h1>
        <p class="centerText">How does Elliot connect with people?</p>
        <div id="answerButtonsDiv">
            <button id="question3Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Social Media</button>
            <button id="question3Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Phone Calls</button>
            <button id="question3Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Hacking</button>
            <button id="question3Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Encrypted Letters</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 4){
        questionNumberGlobal = 4;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 4</h1>
        <p class="centerText">How many Emmy awards does this series have?</p>
        <div id="answerButtonsDiv">
            <button id="question4Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>3</button>
            <button id="question4Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>5</button>
            <button id="question4Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>6</button>
            <button id="question4Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>8</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 5){
        questionNumberGlobal = 5;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 5</h1>
        <p class="centerText">Who created the Mr. Robot series?</p>
        <div id="answerButtonsDiv">
            <button id="question5Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Rami Malek</button>
            <button id="question5Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Sam Esmail</button>
            <button id="question5Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Christian Slater</button>
            <button id="question5Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Steve Golin</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 6){
        questionNumberGlobal = 6;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 6</h1>
        <p class="centerText">Which of the following is Whiterose's lover?</p>
        <div id="answerButtonsDiv">
            <button id="question6Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Lone Star</button>
            <button id="question6Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Shayla Nico</button>
            <button id="question6Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Grant</button>
            <button id="question6Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Ray Heyworth</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 7){
        questionNumberGlobal = 7;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 7</h1>
        <p class="centerText">The supplier of Elliot's suboxone is...</p>
        <div id="answerButtonsDiv">
            <button id="question7Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Derek</button>
            <button id="question7Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Mr Robot</button>
            <button id="question7Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Leon</button>
            <button id="question7Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Fernando Vera</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 8){
        questionNumberGlobal = 8;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 8</h1>
        <p class="centerText">On which station was the series first premiered?</p>
        <div id="answerButtonsDiv">
            <button id="question8Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Usa Network</button>
            <button id="question8Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Presto</button>
            <button id="question8Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Universal Studios</button>
            <button id="question8Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Amazon Prime</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 9){
        questionNumberGlobal = 9;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 9</h1>
        <p class="centerText">Where was the series filmed?</p>
        <div id="answerButtonsDiv">
            <button id="question9Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Canada</button>
            <button id="question9Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>New York</button>
            <button id="question9Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Texas</button>
            <button id="question9Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>United Kingdom</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 10){
        questionNumberGlobal = 10;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 10</h1>
        <p class="centerText">What made Elliot live isolated from other people?</p>
        <div id="answerButtonsDiv">
            <button id="question10Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Fear</button>
            <button id="question10Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Debt</button>
            <button id="question10Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Hacktivists</button>
            <button id="question10Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Social anxiety disorder</button>
        </div>
        <p class="centerText" id="score">Score: 0</p>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        <div id="summaryButtonDiv">
            <p>Naam (optioneel): </p><input id="naamInput" type="text">
            <button onclick="summary()">Verstuur</button>
        </div>
        `;
    }

    if(answersGivenQuestionNumber.indexOf(questionNumber) != -1){
        currentQuestionAnswer = answersGiven[questionNumber][1];
        let isItCorrect = document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).dataset.isCorrect;

        const nodeList = document.querySelectorAll("#answerButtonsDiv > button");
        for(let i = 0; i < nodeList.length; i++){
            nodeList[i].style="pointer-events: none; cursor: default";
        }
        if(isItCorrect == "true"){
            document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).style="background-color: green; pointer-events: none; cursor: default";
        }
        if(isItCorrect == "false"){
            document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).style="background-color: red; pointer-events: none; cursor: default";
        }
    }

    document.getElementById("score").innerHTML = `Score: ${score}`;
}

// This fucntion keeps the score and checks wether it's correct or not.
function checkIfAnswerIsCorrect(falseOrTrue, answerButtonId){
    const nodeList = document.querySelectorAll("#answerButtonsDiv > button");
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].style="pointer-events: none; cursor: default";
    }
    if(falseOrTrue == true){
        document.getElementById(answerButtonId).style="background-color: green; pointer-events: none; cursor: default";
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    }
    else{
        document.getElementById(answerButtonId).style="background-color: red";
    }
    addAnswerGiven(questionNumberGlobal);
}

function putAnswerButtonIntoArray(questionNumber, answerButtonId){
    let slicedAnswerButtonId = parseInt(answerButtonId.slice(-1));
    console.log("SlicedId: "+answerButtonId.slice(-1));
    answersGiven[questionNumber].push(slicedAnswerButtonId);
    console.log(answersGiven);
}

function addAnswerGiven(questionNumberGlobal){
    answersGivenQuestionNumber.push(questionNumberGlobal);
}

function summary(){
    let naam = document.getElementById("naamInput").value;
    if(naam != ""){
        document.getElementById("firstDiv").innerHTML = `
            <h1>Kewin's quizzy | MR.Robot</h1>
            <h1 class="centerText">Resultaat</h1>
            <div id="endScorePDiv">
                <p>Naam: ${naam}</p>
                <p class="centerText" id="endScoreP">Eindscore: <br><br></p>
            </div>
            <div id="scorePointsDiv">
    
            </div>
        `;
    }
    else{
        document.getElementById("firstDiv").innerHTML = `
            <h1>Kewin's quizzy | MR.Robot</h1>
            <h1 class="centerText">Resultaat</h1>
            <div id="endScorePDiv">
                <p class="centerText" id="endScoreP">Eindscore: <br><br></p>
            </div>
            <div id="scorePointsDiv">

            </div>
        `;
    }
    for(i = 0; i < score; i++){
        document.getElementById("scorePointsDiv").innerHTML += `
            <img src="Images/kewinsQuizzyScorePoint.png"></img>
        `;
    }
}