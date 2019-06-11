DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors(
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    coolness_points INT NOT NULL,
    attitude VARCHAR(60) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO actors(name, coolness_points, attitude)
VALUES("Jerry", 50, "Whiny"), ("George", 65, "Doofus"), ("Kramer", 90, "Oblivious"), ("Elaine", 80, "Evil"),("Newman", 75, "Shady");