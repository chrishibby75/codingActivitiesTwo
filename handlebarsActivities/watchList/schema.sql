DROP DATABASE IF EXISTS movie_planner_db;
CREATE DATABASE movie_planner_db;

USE movie_planner_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    movie VARCHAR (200) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ("The Hangover"), ("Step Brothers");