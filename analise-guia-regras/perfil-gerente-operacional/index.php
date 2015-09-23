<?php
  $perfil = basename(dirname(__FILE__));
?>

<?php include("../header.html"); ?>

<div class="container central">
  <nav class="col-sm-3">
    <?php include("navbar.html"); ?>
  </nav>

  <article class="col-sm-9">
    <?php

    	if ($secao == "") {
    		include("inicial.html");
    	} else {
    		$pagina = $secao.".php";
    		include("$pagina");
    	};

	?>
  </article>
</div>

<?php include("../footer.html"); ?>