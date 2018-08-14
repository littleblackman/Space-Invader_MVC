-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 03 août 2018 à 00:29
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `membre`
--

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

DROP TABLE IF EXISTS `membres`;
CREATE TABLE IF NOT EXISTS `membres` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom_utilisateur` varchar(32) NOT NULL,
  `mot_de_passe` char(40) NOT NULL,
  `adresse_email` varchar(128) NOT NULL,
  `hash_validation` varchar(100) DEFAULT NULL,
  `date_inscription` date NOT NULL,
  `score` int(11) DEFAULT NULL,
  `avatar` varchar(128) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_utilisateur` (`nom_utilisateur`),
  UNIQUE KEY `adresse_email` (`adresse_email`),
  KEY `mot_de_passe` (`mot_de_passe`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`id`, `nom_utilisateur`, `mot_de_passe`, `adresse_email`, `hash_validation`, `date_inscription`, `score`, `avatar`) VALUES
(14, 'yohannn', 'durand', 'yohann@gmail.com', '$2y$10$wURW0i9HtZ.CEDGxr2zcAu9RjIrTlellKHHpwIgzjJt3G/TgmQOgi', '2018-06-15', NULL, ''),
(15, 'yohan', 'durand', 'yohanndurand76@gmail.com', '$2y$10$j.RfNulNHdiCU0mfaUj52eYn0F.ZwD5Hgqwci46IDKnuboEiiJQuK', '2018-07-30', NULL, '');

-- --------------------------------------------------------

--
-- Structure de la table `scoremembre`
--

DROP TABLE IF EXISTS `scoremembre`;
CREATE TABLE IF NOT EXISTS `scoremembre` (
  `id` int(11) NOT NULL,
  `scoremembres` int(11) DEFAULT NULL,
  `meilleursscoremembres` int(11) DEFAULT NULL,
  `pseudo` varchar(30) NOT NULL,
  `date_score` datetime DEFAULT NULL,
  KEY `contrainteid` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `scoremembre`
--

INSERT INTO `scoremembre` (`id`, `scoremembres`, `meilleursscoremembres`, `pseudo`, `date_score`) VALUES
(15, 5000, 300, 'yohan', '2018-08-02 22:57:54');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
