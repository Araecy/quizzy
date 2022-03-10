let questionNumber = 1;

let question1Button1 = false;
let question1Button2 = true;
let question1Button3 = false;
let question1Button4 = false;

let question2Button1 = true;
let question2Button2 = false;
let question2Button3 = false;
let question2Button4 = false;

let question3Button1 = false;
let question3Button2 = false;
let question3Button3 = true;
let question3Button4 = false;

let question4Button1 = false;
let question4Button2 = false;
let question4Button3 = true;
let question4Button4 = false;

let question5Button1 = false;
let question5Button2 = true;
let question5Button3 = false;
let question5Button4 = false;

let question6Button1 = false;
let question6Button2 = false;
let question6Button3 = true;
let question6Button4 = false;

let question7Button1 = false;
let question7Button2 = false;
let question7Button3 = false;
let question7Button4 = true;

let question8Button1 = true;
let question8Button2 = false;
let question8Button3 = false;
let question8Button4 = false;

let question9Button1 = false;
let question9Button2 = true;
let question9Button3 = false;
let question9Button4 = false;

let question10Button1 = false;
let question10Button2 = false;
let question10Button3 = false;
let question10Button4 = true;


function question(questionNumber){
    if(questionNumber == 1){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">Who is responsible for Elliot's safety?</p>
        <div id="answerButtonsDiv">
            <button id="question1Button1" onclick="checkIfAnswerIsCorrect(question1Button1)">Vera</button>
            <button id="question1Button2" onclick="checkIfAnswerIsCorrect(question1Button2)">Leon</button>
            <button id="question1Button3" onclick="checkIfAnswerIsCorrect(question1Button3)">Derek</button>
            <button id="question1Button4" onclick="checkIfAnswerIsCorrect(question1Button4)">Dom</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="nextQuestionButtonFirstQuestion" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 2){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 2</h1>
        <p class="centerText">Who investigated the 5/9 hack?</p>
        <div id="answerButtonsDiv">
            <button id="question2Button1" onclick="checkIfAnswerIsCorrect(question2Button1)">Dom</button>
            <button id="question2Button2" onclick="checkIfAnswerIsCorrect(question2Button2)">Terry Colby</button>
            <button id="question2Button3" onclick="checkIfAnswerIsCorrect(question2Button3)">Frank Cody</button>
            <button id="question2Button4" onclick="checkIfAnswerIsCorrect(question2Button4)">Santiago</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 3){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 3</h1>
        <p class="centerText">How does Elliot connect with people?</p>
        <div id="answerButtonsDiv">
            <button id="question3Button1" onclick="checkIfAnswerIsCorrect(question3Button1)">Social Media</button>
            <button id="question3Button2" onclick="checkIfAnswerIsCorrect(question3Button2)">Phone Calls</button>
            <button id="question3Button3" onclick="checkIfAnswerIsCorrect(question3Button3)">Hacking</button>
            <button id="question3Button4" onclick="checkIfAnswerIsCorrect(question3Button4)">Encrypted Letters</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 4){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 4</h1>
        <p class="centerText">How many Emmy awards does this series have?</p>
        <div id="answerButtonsDiv">
            <button id="question4Button1" onclick="checkIfAnswerIsCorrect(question4Button1)">3</button>
            <button id="question4Button2" onclick="checkIfAnswerIsCorrect(question4Button2)">5</button>
            <button id="question4Button3" onclick="checkIfAnswerIsCorrect(question4Button3)">6</button>
            <button id="question4Button4" onclick="checkIfAnswerIsCorrect(question4Button4)">8</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 5){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 5</h1>
        <p class="centerText">Who created the Mr. Robot series?</p>
        <div id="answerButtonsDiv">
            <button id="question5Button1" onclick="checkIfAnswerIsCorrect(question5Button1)">Rami Malek</button>
            <button id="question5Button2" onclick="checkIfAnswerIsCorrect(question5Button2)">Sam Esmail</button>
            <button id="question5Button3" onclick="checkIfAnswerIsCorrect(question5Button3)">Christian Slater</button>
            <button id="question5Button4" onclick="checkIfAnswerIsCorrect(question5Button4)">Steve Golin</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 6){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 6</h1>
        <p class="centerText">Which of the following is Whiterose's lover?</p>
        <div id="answerButtonsDiv">
            <button id="question6Button1" onclick="checkIfAnswerIsCorrect(question6Button1)">Lone Star</button>
            <button id="question6Button2" onclick="checkIfAnswerIsCorrect(question6Button2)">Shayla Nico</button>
            <button id="question6Button3" onclick="checkIfAnswerIsCorrect(question6Button3)">Grant</button>
            <button id="question6Button4" onclick="checkIfAnswerIsCorrect(question6Button4)">Ray Heyworth</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 7){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 7</h1>
        <p class="centerText">The supplier of Elliot's suboxone is...</p>
        <div id="answerButtonsDiv">
            <button id="question7Button1" onclick="checkIfAnswerIsCorrect(question7Button1)">Derek</button>
            <button id="question7Button2" onclick="checkIfAnswerIsCorrect(question7Button2)">Mr Robot</button>
            <button id="question7Button3" onclick="checkIfAnswerIsCorrect(question7Button3)">Leon</button>
            <button id="question7Button4" onclick="checkIfAnswerIsCorrect(question7Button4)">Fernando Vera</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 8){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 8</h1>
        <p class="centerText">On which station was the series first premiered?</p>
        <div id="answerButtonsDiv">
            <button id="question8Button1" onclick="checkIfAnswerIsCorrect(question8Button1)">Usa Network</button>
            <button id="question8Button2" onclick="checkIfAnswerIsCorrect(question8Button2)">Presto</button>
            <button id="question8Button3" onclick="checkIfAnswerIsCorrect(question8Button3)">Universal Studios</button>
            <button id="question8Button4" onclick="checkIfAnswerIsCorrect(question8Button4)">Amazon Prime</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 9){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 9</h1>
        <p class="centerText">Where was the series filmed?</p>
        <div id="answerButtonsDiv">
            <button id="question9Button1" onclick="checkIfAnswerIsCorrect(question9Button1)">Canada</button>
            <button id="question9Button2" onclick="checkIfAnswerIsCorrect(question9Button2)">New York</button>
            <button id="question9Button3" onclick="checkIfAnswerIsCorrect(question9Button3)">Texas</button>
            <button id="question9Button4" onclick="checkIfAnswerIsCorrect(question9Button4)">United Kingdom</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 10){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 10</h1>
        <p class="centerText">What made Elliot live isolated from other people?</p>
        <div id="answerButtonsDiv">
            <button id="question10Button1" onclick="checkIfAnswerIsCorrect(question10Button1)">Fear</button>
            <button id="question10Button2" onclick="checkIfAnswerIsCorrect(question10Button2)">Debt</button>
            <button id="question10Button3" onclick="checkIfAnswerIsCorrect(question10Button3)">Hacktivists</button>
            <button id="question10Button4" onclick="checkIfAnswerIsCorrect(question10Button4)">Social anxiety disorder</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    }
}

function checkIfAnswerIsCorrect(answerButtonId){
    if(answerButtonId == true){
        console.log("Answer is correct!");
        return;
    }
    console.log("Answer is wrong.");
}