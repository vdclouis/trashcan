# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.29)
# Database: trashcan
# Generation Time: 2013-08-25 18:02:15 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table apikeys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `apikeys`;

CREATE TABLE `apikeys` (
  `apikey` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`apikey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table trash
# ------------------------------------------------------------

DROP TABLE IF EXISTS `trash`;

CREATE TABLE `trash` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `howmuch` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(255) NOT NULL DEFAULT '',
  `lat` varchar(255) NOT NULL DEFAULT '',
  `long` varchar(255) NOT NULL DEFAULT '',
  `details` mediumtext NOT NULL,
  `picture` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `trash` WRITE;
/*!40000 ALTER TABLE `trash` DISABLE KEYS */;

INSERT INTO `trash` (`id`, `howmuch`, `type`, `lat`, `long`, `details`, `picture`)
VALUES
	(50,'Medium','PMD,GFT,KGA','51.0487938','3.717037','screencast test','https://www.filepicker.io/api/file/b2f9AnEMSQeOucSKL8QQ'),
	(51,'Big','Rest,KGA,Karton','51.0488085','3.7170664','Hello screencast!','https://www.filepicker.io/api/file/pocW5haqRxquwfjAGA0V'),
	(52,'Small','PMD','51.0487988','3.7170627','test','https://www.filepicker.io/api/file/Q4bobw8WTsKL86Bgl5mP');

/*!40000 ALTER TABLE `trash` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `registered` varchar(255) NOT NULL DEFAULT '',
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `password`, `registered`, `role`)
VALUES
	(11,'Louis','$2y$10$RCpz6DFa0cH87vmt1nOn.OBb46T9mgIUblCCzc/8C0RqbP81tRLJi','2013-08-18T18:24:09+02:00',0);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
