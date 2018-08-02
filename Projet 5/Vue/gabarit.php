
<!-- debut doctype html --> 
<!doctype html>
<html lang="fr">
<head>
        <META charset="utf-8" />
        <title><?= $titre ?></title>
        <link rel="icon" href="Contenu/images/favicon.ico" />  
		
        <!-- Script --> 
        <script src="Contenu/js/jquery-3.2.1.js"> </script>       <!-- Bibliotheque JavaScript Jquery   --> 
                                                                  <!-- Bibliotheque JavaScript Phaser   -->


        <!-- Cascading Style Sheets -->
        <link rel="stylesheet" href="Contenu/css/style.css" /> 
        <link rel="stylesheet" href="Contenu/css/style.min.1024.css" /> <!-- Max-Width 1024 --> 
		
        
		<META NAME="keywords" CONTENT="" />
		<META name="description" content="  " />
										
        <!-- Viewport pour enlever le dezoom sur mobile -->   
        <META name="viewport" content="width=device-width,initial-scale=1.0,shrink-to_fit=no" />          
        <!-- FONT AWESOME -->
        <link rel="stylesheet" href="Contenu/font-awesome/css/font-awesome.min.css" />
        
        <!-- POLICE --> 
        <link href='http://fonts.googleapis.com/css?family=Lobster+Two&v1' rel='stylesheet' type='text/css'> <!-- A voir Police --> 
 </head>
    
 <!-- <i class="fa fa-line-chart" aria-hidden="true"></i> -->  

<body>

    <!-- HEADER --> 
    <nav>
        <ul>
            <li><a href="index.php">Le jeux</a></li>
            <li><a href=index.php?action=Connexion>   Connexion </a></li> 
            <li><a href=index.php?action=Inscription> Inscription </a></li> 
            <li><a href=index.php?action=Scores>      Les scores </a></li> 
            <li><a href=index.php?action=Compte>     Mon compte  </a></li> 
        </ul>
    </nav> 

	<header>	
    <!--
    <img class="center" src="Contenu/images/titrespace.jpg">
    -->
    <h1> Space Invaders </h1> 
    </header>
    


	<!-- Contenu --> 
         <?= $contenu ?> <!-- #contenu -->  
      

	<!-- Fin contenu --> 
    
    
    <footer>		
        <h2> @YohannDurand OpenClassroom </h2> 

     </footer>



   


    </body>
</html>