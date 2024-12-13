-- Esse script vale para o MySQL 8.x. Se seu MySQL for 5.x, precisa executar essa linha comentada:
-- CREATE DATABASE IF NOT EXISTS pracegoler;
CREATE DATABASE IF NOT EXISTS pracegoler DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

USE pracegoler;

CREATE TABLE obra (
  id int NOT NULL AUTO_INCREMENT,
  titulo varchar(100) NOT NULL,
  prefacio varchar(500) NOT NULL,
  editora varchar(100) NOT NULL,
  autor varchar(100) NOT NULL,
  ano int NOT NULL,
  conteudo mediumtext NOT NULL,
  exclusao datetime NULL,
  PRIMARY KEY (id),
  KEY exclusao_IX (exclusao)
);