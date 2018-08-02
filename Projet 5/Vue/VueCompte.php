<?php $this->titre = "A Propos"; ?>

<!-- Page a propos transformer en mon profil --> 


<div id="blanc"> 
<h2>   Bonjour <?php  echo $_SESSION['loginMembre'] ;?> comment allez vous ? </h2> 
<p> Nous sommes ravis de vous revoir ! </p>  
</div> 

<hr/>


<p> Votre mail </p> 

<p> Vos derniers scores </p> 

<p> Votre moyenne de score : </p> 

<p> Vous avez jouez XX partit  </p> 


<a href="index.php?action=Deconnexion"  class="LienNav">Deconnexion</a>  
<hr/>