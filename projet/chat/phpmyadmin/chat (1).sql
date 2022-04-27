-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 15 avr. 2022 à 11:10
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `chat`
--

-- --------------------------------------------------------

--
-- Structure de la table `adopter`
--

CREATE TABLE `adopter` (
  `Num_chat` int(11) NOT NULL,
  `Num_client` int(11) NOT NULL,
  `Num_refuge` int(11) DEFAULT NULL,
  `Date_adopter` date DEFAULT NULL,
  `pourquoi` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `adopter`
--

INSERT INTO `adopter` (`Num_chat`, `Num_client`, `Num_refuge`, `Date_adopter`, `pourquoi`) VALUES
(1, 2, 1, '2022-12-12', 'car cest ma femme'),
(3, 1, 2, '2021-03-11', 'car il était trop choupi');

-- --------------------------------------------------------

--
-- Structure de la table `chat`
--

CREATE TABLE `chat` (
  `Num_chat` int(11) NOT NULL,
  `Nom_chat` varchar(30) DEFAULT NULL,
  `prenom_chat` varchar(30) DEFAULT NULL,
  `Datenaissance_chat` date DEFAULT NULL,
  `race` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chat`
--

INSERT INTO `chat` (`Num_chat`, `Nom_chat`, `prenom_chat`, `Datenaissance_chat`, `race`) VALUES
(1, 'pol', 'jack', '2022-03-09', 'Balinais'),
(3, 'pal', 'olp', '2022-03-19', 'Bengal'),
(4, 'azert', 'wes', '2014-06-17', 'Bleu Russe'),
(5, 'aze', 'pol', '2022-07-08', 'Exotic Shorthair'),
(6, 'parl', 'jack', '2013-10-16', 'Bleu Russe'),
(7, 'tutu', 'lulu', '2022-03-16', 'goutière'),
(8, 'deluc', 'axel', '2022-03-03', 'persan'),
(11, 'brim', 'britania', '2014-04-15', 'Balinais'),
(12, 'jacki', 'tuning', '2022-03-16', 'man coune'),
(13, 'palo', 'jaime', '2022-03-26', 'man coune'),
(15, 'sex', 'guimov', '2022-02-20', 'chat roux batard'),
(16, 'delaroche', 'jean', '0000-00-00', 'bluesky'),
(17, 'delaroche', 'jean', '2022-03-01', 'blue sky'),
(18, 'marche', 'pied', '2022-04-01', 'tablebasse');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `Num_client` int(11) NOT NULL,
  `pseudo_client` varchar(30) DEFAULT NULL,
  `mdp_client` varchar(30) DEFAULT NULL,
  `Nom_client` varchar(30) DEFAULT NULL,
  `prenom_client` varchar(30) DEFAULT NULL,
  `email_client` varchar(50) DEFAULT NULL,
  `tel_client` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`Num_client`, `pseudo_client`, `mdp_client`, `Nom_client`, `prenom_client`, `email_client`, `tel_client`) VALUES
(1, 'dack', '12345678', 'polo', 'dochez', 'dack@gmail.com', '0781094110'),
(2, 'dark', 'mdr12345', 'jojol', 'bochez', 'dark@gmail.com', '0781094111'),
(3, 'dackin', 'mdp12345', 'parl', 'douchez', 'dackin@gmail.com', '0781094112'),
(5, 'plop', 'jaimelesah', 'sah', 'polalo', 'plop@gmail.com', '0781904110');

-- --------------------------------------------------------

--
-- Structure de la table `refuge`
--

CREATE TABLE `refuge` (
  `Num_refuge` int(11) NOT NULL,
  `Nom_refuge` varchar(30) DEFAULT NULL,
  `adress_refuge` varchar(30) DEFAULT NULL,
  `cp_refuge` varchar(5) DEFAULT NULL,
  `tel_refuge` varchar(15) DEFAULT NULL,
  `email_refuge` varchar(50) DEFAULT NULL,
  `mdp_refuge` decimal(6,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `refuge`
--

INSERT INTO `refuge` (`Num_refuge`, `Nom_refuge`, `adress_refuge`, `cp_refuge`, `tel_refuge`, `email_refuge`, `mdp_refuge`) VALUES
(1, 'lovestorie', '22 rue de mon coeur', '69000', '0696969696', 'love@gmail.com', NULL),
(2, 'delapasse', '23 rue chateau guaillard', '38130', '0425152662', 'delapasse@gmail.com', NULL),
(5, 'Jean-Francais Dochez', '22 rue ch?teau gaillard', '38130', '0781904110', 'jeanfrancois.dochez@gmail.com', NULL),
(6, 'axeland', '42 rue ch?teau gaillard', '38130', '0781904110', 'axel.dochezmz5@gmail.com', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adopter`
--
ALTER TABLE `adopter`
  ADD PRIMARY KEY (`Num_chat`,`Num_client`),
  ADD KEY `Num_client` (`Num_client`),
  ADD KEY `Num_refuge` (`Num_refuge`);

--
-- Index pour la table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`Num_chat`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`Num_client`);

--
-- Index pour la table `refuge`
--
ALTER TABLE `refuge`
  ADD PRIMARY KEY (`Num_refuge`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chat`
--
ALTER TABLE `chat`
  MODIFY `Num_chat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `Num_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `refuge`
--
ALTER TABLE `refuge`
  MODIFY `Num_refuge` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adopter`
--
ALTER TABLE `adopter`
  ADD CONSTRAINT `adopter_ibfk_1` FOREIGN KEY (`Num_chat`) REFERENCES `chat` (`Num_chat`),
  ADD CONSTRAINT `adopter_ibfk_2` FOREIGN KEY (`Num_client`) REFERENCES `client` (`Num_client`),
  ADD CONSTRAINT `adopter_ibfk_3` FOREIGN KEY (`Num_refuge`) REFERENCES `refuge` (`Num_refuge`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
