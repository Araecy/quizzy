<nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
  <ul>
    <li><a href='./index.php'>Home</a></li>
    <li><a class='dropdown-arrow'>Quizzy</a>
      <ul class='sub-menus'>
        <li><a href='./kewinsQuizzy.php'>Kewin's quizzy</a></li>
        <li><a href='./quizzy_duran.php'>Quizzy - Duran</a></li>
        <li><a href='./quizzy_noah.php'>Quizzy - Noah</a></li>
      </ul>
    </li>
    <li><a href='http://'>About</a></li>
    <li><a href='http://'>Contact Us</a></li>
  </ul>
</nav>

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