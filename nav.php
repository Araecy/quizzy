<div id="menuParent">
    <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
        <ul>
            <li><p>Quizzy</p></li>
            <li><a href='./index.php'>Home</a></li>
            <li><a class='dropdown-arrow'>Quizzy</a>
                <ul class='sub-menus'>
                    <li><a href='./kewinsQuizzy.php'>Kewin's quizzy</a></li>
                    <li><a href='./quizzy_duran.php'>Duran's quizzy</a></li>
                    <li><a href='./quizzy_noah.php'>Noah's quizzy</a></li>
                </ul>
            </li>
            <li><a href='./aboutUs.php'><li>About us</li></a></li>
            <li><a href='./contactUs.php'>Contact us</a></li>
        </ul>
    </nav>
</div>

<script>
    function updatemenu() {
        if (document.getElementById('responsive-menu').checked == true) {
            document.getElementById('menu').style.borderBottomRightRadius = '0';
            document.getElementById('menu').style.borderBottomLeftRadius = '0';
        } else {
            document.getElementById('menu').style.borderRadius = '10px';
        }
    }
</script>