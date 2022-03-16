<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Noah | Quizzy - Osu</title>
        <link rel="stylesheet" href="css/style_noah.css">
        <link rel="stylesheet" href="css/nav_styles.css">
    </head>
    <body>
        <?php include 'nav.php'?>
        <span id="scoreCounter" class="centerText">Score: 0</span>
        <div id="firstDiv">
            <h1>Osu quizzy</h1>
            <div id="buttonDiv">
                <button onclick="question(1)">Start quiz</button>
            </div>
        </div>
        <script src="js/script_noah.js"></script>
    </body>
</html>