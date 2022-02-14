<link rel="stylesheet" href="./css/nav_styles.css">
<nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
  <ul>
    <li><a href='http://'>Home</a></li>
    <li><a class='dropdown-arrow' href='http://'>Quizzy</a>
      <ul class='sub-menus'>
        <li><a href='http://'>Quizzy - Kewin</a></li>
        <li><a href='http://'>Quizzy - Duran</a></li>
        <li><a href='http://'>Quizzy - Noah</a></li>
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
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}
</script>