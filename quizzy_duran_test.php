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
             <div id="gif">
                <div id="quiz1"></div>
                <div id="Answers">
                <section>
        <form id="Begin" class="begin">
                    <div class="begin-inner">
                        <ol class="questions">
                            <li>
                                <span><label for="Naam">Wat is jouw naam?</label></span>
                                <input id="naam" name="naam" type="text" />
                            </li>
                        </ol>
                        <!-- /questions -->
                        <div class="controls">
                            <button onclick="startQuiz()" id="next" class="next">Start quiz</button>
                            <div class="Bar"></div>
                            <span class="number">
                                        <span  class="number-current"></span>
                            <span class="number-total"></span>
                            </span>
                            <span class="error-message"></span>
                        </div>
                    </div>
                </form>
                </div>
                <link rel="stylesheet" type="text/css" href="css/component.css" />
                <script src="js/Modernizer.js"></script>
                <script src="js/class.js"></script>
                <script src="js/steps.js"></script>
                <script>
                    var Begin = document.getElementById('Begin');
                    //disable form autocomplete
                    Begin.setAttribute("autocomplete", "off");

                    new stepsForm(Begin, {
                        onSubmit: function(form) {
                            // verberg form
                            classie.addClass(Begin.querySelector('.begin-inner'), 'hide');
                            var messageEl = Begin.querySelector('.final-message');
                            messageEl.innerHTML = 'Tanks for doing the quiz.';
                            classie.addClass(messageEl, 'show');
                        }
                    });
                </script>
                </div>
                <div id="bottom">
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