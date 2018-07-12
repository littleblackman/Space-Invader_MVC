<?php $this->titre = "Connexion"; ?>


<p> Veuillez entrez votre email et votre mdp pour vous connecter </p>


<div id="ContenerInscription">
        <form method="post" action="index.php?action=ConnexionMembre">
            <!-- Modifier le titre du chapitre -->  
            <p> Pseudo : </p> 
                <input type="text" name="ConnexionPseudo" id="inscription"    /> 
            <p> Mots de passe </p> 
                <input type="password" name="ConnexionMDP" id="inscription"    /> 
                <br/>

                <br/> 

                 <input type="submit" value="Me connecter !" class="bouton_inscription" />
    </form>

</div>

<!-- https://openclassrooms.com/courses/votre-site-php-presque-complet-architecture-mvc-et-bonnes-pratiques/la-base-l-espace-membre --> 