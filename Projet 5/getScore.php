<?php
// page de traitement de score 

$getScore =  $_GET["score"];
echo $getScore ; 

/////////////////////////////////////////////////////////////////////////////////////////////
// gestion de score 
/////////////////////////////////////////////////////////////////////////////////////////////

	  // on se connecte a la base 
	  try
        {
		  $bdd = new PDO('mysql:host=openclasiqspace.mysql.db;dbname=openclasiqspace;charset=utf8','openclasiqspace','AlexandreXXXX');
	    }			 
	    catch (Exception $e)
		{
		  die('Erreur : ' . $e->getMessage ()) ;
		}	
		
		// on regarde le dernier utilisateur connecter 	
		$Pseudosql = $_COOKIE['VerifPseudoCookie']  ; 
		$mdpSql = $_COOKIE['VerifMDPCookie'] ; 

		$req = $bdd->query('SELECT * FROM membres WHERE nom_utilisateur =  "'.$Pseudosql.'"  ' );
		$donnees = $req->fetch() ; 

		echo $_COOKIE['VerifPseudoCookie']; // Renvoi pseudo 
		echo $_COOKIE['VerifMDPCookie']; // renvoi MDP 
		  

		echo $_COOKIE['IdMembreCo'] ; 
		
		 ?> </br></br> <?php 
		echo "var_dump de donnees" ;
		 var_dump($donnees) ; 

		 ?> </br></br> <?php 
		 echo "var_dump de donnees[id]   =    " ;
		 echo $donnees['id'] ;  // id de la derniére personne connecter 



		 $idMembreConnecter = $donnees['id'] ;

		 // on met dans le cookie le membre connecter , ensuite dans le controleur on le met en parametre 
		 setcookie('IdMembreCo',$idMembreConnecter , time() + 365*24*3600); 

		 ?> </br></br> <?php 
		 ?> </br></br> <?php 
		 echo "Donc on insere  " ;
		 echo  $getScore ;
		 echo " sur l'id : " ;
		 echo  $idMembreConnecter ; 
		 echo "  profil de " ; 
		 echo $Pseudosql ;
		 echo "   ";
		 echo $mdpSql ; 


		 $date_enregistrement = date("Y-m-d H:i:s");    // récupére la date courante 

		$result = $bdd->query('INSERT INTO scoremembre (id,meilleursscoremembres, scoremembres, pseudo , date_score)
        VALUES (  "'.$idMembreConnecter.'"  , 300  ,  "'.$getScore.'"  ,    "'.$Pseudosql.'"   ,  "'.$date_enregistrement.'"    )    '); 


 
 
		
 

 
 ?>
 
 