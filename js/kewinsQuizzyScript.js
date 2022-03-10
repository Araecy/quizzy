let questionNumber = 1;

function question(questionNumber){
    if(questionNumber == 1){
        document.getElementById("firstDiv").innerHTML = `
        <h1>Kewin's quizzy | MR.Robot</h1>
        <h1 class="centerText">Question 1</h1>
        <p class="centerText">Who is responsible for Elliot's safety?</p>
        <div id="answerButtonsDiv">
            <button>Vera</button>
            <button>Leon</button>
            <button>Derek</button>
            <button>Dom</button>
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
            <button>Dom</button>
            <button>Terry Colby</button>
            <button>Frank Cody</button>
            <button>Santiago</button>
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
            <button>Social Media</button>
            <button>Phone Calls</button>
            <button>Hacking</button>
            <button>Encrypted Letters</button>
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
            <button>3</button>
            <button>5</button>
            <button>6</button>
            <button>8</button>
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
            <button>Rami Malek</button>
            <button>Sam Esmail</button>
            <button>Christian Slater</button>
            <button>Steve Golin</button>
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
            <button>Lone Star</button>
            <button>Shayla Nico</button>
            <button>Grant</button>
            <button>Ray Heyworth</button>
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
            <button>Derek</button>
            <button>Mr Robot</button>
            <button>Leon</button>
            <button>Fernando Vera</button>
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
            <button>Usa Network</button>
            <button>Presto</button>
            <button>Universal Studios</button>
            <button>Amazon Prime</button>
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
            <button>Canada</button>
            <button>New York</button>
            <button>Texas</button>
            <button>United Kingdom</button>
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
            <button>Fear</button>
            <button>Debt</button>
            <button>Hacktivists</button>
            <button>Social anxiety disorder</button>
        </div>
        <div id="previousAndNextQuestionButtonsDiv">
            <button class="previousQuestionButton" onclick="question(${questionNumber - 1})">Previous Question</button>
        </div>
        `;
    }
}