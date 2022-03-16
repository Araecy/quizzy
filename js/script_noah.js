let questionNumberGlobal = 1; // globally scroped quesion number. This gets updated per question. This way the program knows what question it's on.


// Phisical quesitons.
function question(questionNumber){
    if(answersGivenQuestionNumber.indexOf(questionNumber) != -1){
        //pak id van knop die aangeklikt is maar wel in dezelfde question answersGiven | question 1: button 2, question 2: button 3 ...;
        console.log("werkt");
        console.log(answersGiven[questionNumber][1]);
        currentQuestionAnswer = answersGiven[questionNumber][1];
        console.log("heehee"+document.getElementById(`question${questionNumber}Button${currentQuestionAnswer}`).dataset.isCorrect);
    }

    //als wij button aanklikken, zet de nummer van de button in de multidimensional array in de row van de current questionnumber. | DONE
    //als wij terug of next gaan, check of de questionnumber in de answersGivenQuestionNumber variable zit. | DONE
    //als dat zo is, pak de nummer van de answer van de current questionnumber van de multidimensionele array. | DONE
    //vervolgens maak die button groen/rood en dan lock alle buttons.
    //als het niet zo is, ga verder.



    if(questionNumber == 1){
        questionNumberGlobal = 1;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">What type of a game is osu?</p>
        <div id="answerButtonsDiv">
            <button id="question1Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Fist Person Shooter </button>
            <button id="question1Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Sandbox</button>
            <button id="question1Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Rhythm</button>
            <button id="question1Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Action-adventure</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="nextQuestionButtonFirstQuestion" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 2){
        questionNumberGlobal = 2;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 2</h1>
        <p class="centerText">Who created osu?</p>
        <div id="answerButtonsDiv">
            <button id="question2Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=true>Peppy</button>
            <button id="question2Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Zippy</button>
            <button id="question2Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Happy</button>
            <button id="question2Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)" data-is-correct=false>Sloppu</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 3){
        questionNumberGlobal = 3;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 3</h1>
        <p class="centerText">How does Elliot connect with people?</p>
        <div id="answerButtonsDiv">
            <button id="question3Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Social Media</button>
            <button id="question3Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Phone Calls</button>
            <button id="question3Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Hacking</button>
            <button id="question3Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Encrypted Letters</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 4){
        questionNumberGlobal = 4;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 4</h1>
        <p class="centerText">How many Emmy awards does this series have?</p>
        <div id="answerButtonsDiv">
            <button id="question4Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">3</button>
            <button id="question4Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">5</button>
            <button id="question4Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">6</button>
            <button id="question4Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">8</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 5){
        questionNumberGlobal = 5;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 5</h1>
        <p class="centerText">Who created the Mr. Robot series?</p>
        <div id="answerButtonsDiv">
            <button id="question5Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Rami Malek</button>
            <button id="question5Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Sam Esmail</button>
            <button id="question5Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Christian Slater</button>
            <button id="question5Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Steve Golin</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 6){
        questionNumberGlobal = 6;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 6</h1>
        <p class="centerText">Which of the following is Whiterose's lover?</p>
        <div id="answerButtonsDiv">
            <button id="question6Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Lone Star</button>
            <button id="question6Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Shayla Nico</button>
            <button id="question6Button3" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Grant</button>
            <button id="question6Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Ray Heyworth</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 7){
        questionNumberGlobal = 7;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 7</h1>
        <p class="centerText">The supplier of Elliot's suboxone is...</p>
        <div id="answerButtonsDiv">
            <button id="question7Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Derek</button>
            <button id="question7Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Mr Robot</button>
            <button id="question7Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Leon</button>
            <button id="question7Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Fernando Vera</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 8){
        questionNumberGlobal = 8;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 8</h1>
        <p class="centerText">On which station was the series first premiered?</p>
        <div id="answerButtonsDiv">
            <button id="question8Button1" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Usa Network</button>
            <button id="question8Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Presto</button>
            <button id="question8Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Universal Studios</button>
            <button id="question8Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Amazon Prime</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 9){
        questionNumberGlobal = 9;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 9</h1>
        <p class="centerText">Where was the series filmed?</p>
        <div id="answerButtonsDiv">
            <button id="question9Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Canada</button>
            <button id="question9Button2" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">New York</button>
            <button id="question9Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Texas</button>
            <button id="question9Button4" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">United Kingdom</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
            <button class="nextQuestionButton" onclick="question(${questionNumber + 1})">Next Question</button>
        </div>
        `;
    }
    else if(questionNumber == 10){
        questionNumberGlobal = 10;
        document.getElementById("firstDiv").innerHTML = `
        <h1>Osu quizzy</h1>
        <h1 class="centerText">Question 10</h1>
        <p class="centerText">What made Elliot live isolated from other people?</p>
        <div id="answerButtonsDiv">
            <button id="question10Button1" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Fear</button>
            <button id="question10Button2" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Debt</button>
            <button id="question10Button3" onclick="checkIfAnswerIsCorrect(false, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)vvvv">Hacktivists</button>
            <button id="question10Button4" onclick="checkIfAnswerIsCorrect(true, this.id), putAnswerButtonIntoArray(questionNumberGlobal, this.id)">Social anxiety disorder</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    }
}

let score = 0;
// This fucntion keeps the score and checks wether it's correct or not.
function checkIfAnswerIsCorrect(falseOrTrue, answerButtonId){
    const nodeList = document.querySelectorAll("#answerButtonsDiv > button");
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].style="pointer-events: none; cursor: default";
        // document.getElementById("answerButtonsDiv").button.style="pointer-events: none, cursor: default";
    }
    if(falseOrTrue == true){
        document.getElementById(answerButtonId).style="background-color: green; pointer-events: none; cursor: default";
        score++
        document.querySelector('#scoreCounter').innerHTML = `Score: ${score}`
    }
    else{
        document.getElementById(answerButtonId).style="background-color: red";
    }
    addAnswerGiven(answerButtonId, questionNumberGlobal);
}

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

function putAnswerButtonIntoArray(questionNumber, answerButtonId){
    let slicedAnswerButtonId = parseInt(answerButtonId.slice(-1));
    console.log("SlicedId: "+answerButtonId.slice(-1));
    answersGiven[questionNumber].push(slicedAnswerButtonId);
    console.log(answersGiven);
}

function addAnswerGiven(answerButtonId, questionNumberGlobal){
    answersGivenQuestionNumber.push(questionNumberGlobal);
}

//NOTES: when click button in question, add curent questionnumber to an array, then when go to previous or next question, check if the current questionnumber is en the array, if it is then somehow make clicked answer green or red based on if it's the correct answer or wrong, and then lock all buttons so that it isn't possible to change your answer