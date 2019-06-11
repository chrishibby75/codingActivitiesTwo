DROP DATABASE IF EXISTS quotes_db;
CREATE DATABASE quotes_db;
USE quotes_db;

CREATE TABLE quotes (
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR (250) NOT NULL,
    quote TEXT NOT NULL,
    PRIMARY KEY (id)
);