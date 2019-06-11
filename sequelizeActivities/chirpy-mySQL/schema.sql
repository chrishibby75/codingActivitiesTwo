DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;

USE chirpy;

CREATE TABLE chirps(
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(100) NOT NULL,
    body VARCHAR(300) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);