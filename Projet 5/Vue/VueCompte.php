<?php $this->titre = "A Propos"; ?>

<!-- Page a propos transformer en mon profil --> 






        <div id="blanc"> 
           
        <p>   Bonjour <?php  echo $_SESSION['loginMembre'] ;?> comment allez vous ? </p> 
        <p>   Votre mot de passe est :  <?php  echo $_SESSION['PasswordMembre'] ;?> </p> 

     

  

        

        </div> 

<hr/>



<p> ici donnée de l'utilisateur , voir pour changer son pseudo , son mdp ... </p> 

<p> Votre mail </p> 

<p> Vos derniers scores </p> 

<p> Votre moyenne de score : </p> 

<p> Vous avez jouez XX partit  </p> 
<hr/>