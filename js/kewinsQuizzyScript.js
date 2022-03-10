let questionNumber = 1;

function question(questionNumber){
    if(questionNumber == 1){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">Who is responsible for Elliot's safety?</p>
        <div id="answerButtonsDiv">
            <button id="question1Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Vera</button>
            <button id="question1Button2" onclick="checkIfAnswerIsCorrect(true, this.id)">Leon</button>
            <button id="question1Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Derek</button>
            <button id="question1Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Dom</button>
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
            <button id="question2Button1" onclick="checkIfAnswerIsCorrect(true, this.id)">Dom</button>
            <button id="question2Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Terry Colby</button>
            <button id="question2Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Frank Cody</button>
            <button id="question2Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Santiago</button>
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
            <button id="question3Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Social Media</button>
            <button id="question3Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Phone Calls</button>
            <button id="question3Button3" onclick="checkIfAnswerIsCorrect(true, this.id)">Hacking</button>
            <button id="question3Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Encrypted Letters</button>
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
            <button id="question4Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">3</button>
            <button id="question4Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">5</button>
            <button id="question4Button3" onclick="checkIfAnswerIsCorrect(true, this.id)">6</button>
            <button id="question4Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">8</button>
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
            <button id="question5Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Rami Malek</button>
            <button id="question5Button2" onclick="checkIfAnswerIsCorrect(true, this.id)">Sam Esmail</button>
            <button id="question5Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Christian Slater</button>
            <button id="question5Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Steve Golin</button>
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
            <button id="question6Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Lone Star</button>
            <button id="question6Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Shayla Nico</button>
            <button id="question6Button3" onclick="checkIfAnswerIsCorrect(true, this.id)">Grant</button>
            <button id="question6Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Ray Heyworth</button>
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
            <button id="question7Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Derek</button>
            <button id="question7Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Mr Robot</button>
            <button id="question7Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Leon</button>
            <button id="question7Button4" onclick="checkIfAnswerIsCorrect(true, this.id)">Fernando Vera</button>
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
            <button id="question8Button1" onclick="checkIfAnswerIsCorrect(true, this.id)">Usa Network</button>
            <button id="question8Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Presto</button>
            <button id="question8Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Universal Studios</button>
            <button id="question8Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">Amazon Prime</button>
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
            <button id="question9Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Canada</button>
            <button id="question9Button2" onclick="checkIfAnswerIsCorrect(true, this.id)">New York</button>
            <button id="question9Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Texas</button>
            <button id="question9Button4" onclick="checkIfAnswerIsCorrect(false, this.id)">United Kingdom</button>
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
            <button id="question10Button1" onclick="checkIfAnswerIsCorrect(false, this.id)">Fear</button>
            <button id="question10Button2" onclick="checkIfAnswerIsCorrect(false, this.id)">Debt</button>
            <button id="question10Button3" onclick="checkIfAnswerIsCorrect(false, this.id)">Hacktivists</button>
            <button id="question10Button4" onclick="checkIfAnswerIsCorrect(true, this.id)">Social anxiety disorder</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    }
}

function checkIfAnswerIsCorrect(falseOrTrue, answerButtonId){
    if(falseOrTrue == true){
        console.log(answerButtonId);
        console.log("Answer is correct!");
        return;
    }
    console.log(answerButtonId);
    console.log("Answer is wrong.");
}