<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizzy Lord Of The Rings</title>
    <link rel="stylesheet" href="css/style_duran.css" media="all">
    <link rel="stylesheet" href="css/nav_styles.css" media="all">
    <link rel="stylesheet" type="text/css" href="css/component.css" />
    <script src="js/Modernizer.js"></script>
    <script src="js/Duran.js"></script>
</head>

<body>
    <?php include 'nav.php' ?>
    <header class="Header1 Header2">
        <img src="Images/Lord-Of-The-Rings.jpg" alt="">
        <img src="Images/branch.png" class="top h-auto">
        <div id="KopTekst">
            <h1 id="MainText">Welcome to my quiz</h1>
            <h1 id="MainText">You think you can pass?</h1>
            <H1 id="MainText">Do your best!</H1>
        </div>
    </header>
    <main id="main">
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
                <button onclick="next1()" id="next">Next Question</button>
                <br>
                </div>
                <div id="quiz2"></div>
                </div>
                <div id="results"></div>
        </center>
    </main>
    <footer>

    </footer>
</body>

</html>