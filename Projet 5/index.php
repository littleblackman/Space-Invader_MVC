<?php
require 'Controleur/Routeur.php';
session_start(); // Start session 

$routeur = new Routeur();
$routeur->routerRequete();