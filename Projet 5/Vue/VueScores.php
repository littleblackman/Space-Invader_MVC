<?php $this->titre = "Scores"; ?>


<h2> Classement des Scores par ordre croissant </h2>


<!-- Liste de tout les score sur id : --> 
<!-- Moyenne des score --> 

<!-- Sur la liste des score on prend le plus haut pour le meilleurs score --> 
<h2> 
 <?php  
 // var_dump($ListeMeilleursscores ); ?>


<table>
   <tr>
       <th>Score</th>
       <th>Nom</th>
       <th>Date</th>
   </tr>

<?php foreach ($ListeMeilleursscores as $Top5meilleursscores): ?> 

   <tr>
       <td><?php  echo $Top5meilleursscores['scoremembres']; ?> </td>
       <td><?php  echo $Top5meilleursscores['pseudo']; ?> </td>
       <td><?php  echo $Top5meilleursscores['date_score']; ?></td>
   </tr>

 <?php endforeach; ?>

</table>
 

  

 
 
 

 </h2>

