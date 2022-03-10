<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizzy Lord Of The Rings</title>
    <link rel="stylesheet" href="css/style_duran.css" media="all">
    <link rel="stylesheet" href="css/nav_styles.css" media="all">
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
        </div>
    </main>
    <footer>

    </footer>
</body>

</html>