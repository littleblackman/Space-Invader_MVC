<?php

require_once 'Modele/Modele.php';

class admin extends Modele {
    // Ajoute un chapitre dans la base  
    public function ajouterMembre($PseudoMembre,$MailMembre,$MDPMembre,$MDPMembrehash) {
        $sql = 'insert into membres(date_inscription,nom_utilisateur,adresse_email,mot_de_passe,hash_validation)' 
            . ' values(?, ?, ?,?,?)';
        $date = date("Y-m-d H:i:s");    // récupére la date courante 
        $this->executerRequete($sql, array($date,$PseudoMembre,$MailMembre,$MDPMembre,$MDPMembrehash));
    }

 
    // Requette de connexion a la base 
    public function ConnexionMembreReq($PseudoConnexionMembre) {  // == a $verifpseudo 
        $sql = 'SELECT * FROM membres WHERE nom_utilisateur = :pseudo'  ; // La plus probable && :mdp 
 
        $TabPseudoMembre = $this->executerRequete($sql, array('pseudo'=>$PseudoConnexionMembre)); // tableau assiociatif
        $user = $TabPseudoMembre->fetch() ;  // transorme pdo 
        $user['nom_utilisateur'] ;   
        // 

   //     $idMembre = $user['id']  ;  
    //    var_dump($idMembre ) ; 

        return $user['nom_utilisateur'] ;
    }




    public function  ConnexionMembreReqMDP($MDPConnexionMembre) {  // == a $verifMDP
        $sql = 'SELECT * FROM membres WHERE mot_de_passe = :MDPhash'  ;

        $TabMdpMembre = $this->executerRequete($sql, array('MDPhash'=>$MDPConnexionMembre)); // tableau assiociatif
        $userMDP = $TabMdpMembre->fetch() ;  // transorme pdo 
        $userMDP['mot_de_passe'] ;  

        return $userMDP['mot_de_passe'] ; 
    }





} // Fin de class admin 
