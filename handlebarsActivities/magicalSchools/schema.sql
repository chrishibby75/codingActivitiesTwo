DROP DATABASE IF EXISTS wizard_schools_db;
CREATE DATABASE wizard_schools_db;

USE wizard_schools_db;

CREATE TABLE schools (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO schools (name)
VALUES ("Hogwarts School"), ("Castelobruxo"), ("Durmstrang Institute"), ("Beauxbatons Academy");