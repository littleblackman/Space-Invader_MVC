<?php

require_once 'Modele/Modele.php';
require_once 'Modele/Admin.php';
require_once 'Vue/Vue.php';

class ControleurAccueil {

   private  $PseudoMembre  ;
   private  $MailMembre  ;
   private  $MDPMembre  ; 
   private  $PseudoConnexionMembre ; 
   private  $MDPConnexionMembre ;
   // private $oneChapitre;

    public function __construct() {
        $this->admin = new admin();
   //    $this->chapitre = new chapitre(); // Bonne conscruct de base 
    }

    // Affiche la page d'accueil 
    public function accueil() {
      
       $vue = new Vue("Accueil");
       $vue->generer(array());

    } 

    // CONNEXION 
    public function Connexion() {
      
        $vue = new Vue("Connexion");
        $vue->generer(array());


 
    }

    public function DeconnexionAdmin()  {
        session_destroy() ;         // On détruit la session et on revien a la vue acces 
        $vue = new Vue("Connexion");   // Generation de la vue ACCES
        $vue->generer(array());
    }


    public function  TestConnexionMembre() { // Function effectuer au clic sur le bouton connexion 
     
        $PseudoConnexionMembre =  $_POST['ConnexionPseudo'] ; 
        $MDPConnexionMembre =  $_POST['ConnexionMDP'] ;

        $VerifPseudo = $this->admin->ConnexionMembreReq($PseudoConnexionMembre);  
        $VerifMDP = $this->admin->ConnexionMembreReqMDP($MDPConnexionMembre);  

        // voir pour tout mettre dans une seul requete 

        // retourne le tableau UserMembre 
        //  $InfoMembre $this->admin->requeteInfoMembre(); 



         //  $date_inscription
         //  $score  
       
            if ( $VerifPseudo == true && $VerifMDP == true )  {
           
                // ici on met dans la session 
                $_SESSION['loginMembre'] =  $VerifPseudo; 
                $_SESSION['PasswordMembre'] = $VerifMDP ; 
                
                // ici on met dans un cookie 
                 setcookie('VerifPseudoCookie', $VerifPseudo , time() + 365*24*3600);  // Nom, valeur,expiration
                 setcookie('VerifMDPCookie', $VerifMDP , time() + 365*24*3600); 

 
                // & Vous étes desormais enregistrer, votre score va pouvoir etre enregistrer .. 
                $vue = new Vue("Compte");
                $vue->generer(array());

           }
     
           else { 
        //    echo 'Veuillez recommancer' ; 
            $vue = new Vue("Connexion");
            $vue->generer(array());
            }
    }

    // INSCRIPTION 
    public function Inscription() {
      
        $vue = new Vue("Inscription");
        $vue->generer(array());
 
    }

    public function EnvoieInscriptionMembre() {
        // recuperation du formulaire mis dans les variables 
        $PseudoMembre = htmlspecialchars($_POST['InscriptionPseudo']); // avec protection 
        $MailMembre =  $_POST['InscriptionMail'];
        $MDPMembre =  $_POST['InscriptionMDP']; // mettre le mdp hash  dans la variable suivante
        $MDPMembrehash = password_hash($_POST['InscriptionMDP'], PASSWORD_BCRYPT);


        $this->admin->ajouterMembre($PseudoMembre, $MailMembre,$MDPMembre,$MDPMembrehash); 

        $_SESSION['login'] = $PseudoMembre ; 
        $_SESSION['password'] = $MDPMembre  ; 

        // rediriger vers la vue connexion 
        $vue = new Vue("Connexion");
        $vue->generer(array());
    }



    public function Scores() {
        // Requete modele pour avoir les infos 
        // Affichage de la vue Score
        $vue = new Vue("Scores");
        $vue->generer(array());
 
    }

    public function Compte() {
      
        $vue = new Vue("Compte");
        $vue->generer(array());
 
    }







}

