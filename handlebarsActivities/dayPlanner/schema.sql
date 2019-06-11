DROP DATABASE IF EXISTS dayplanner_db;
CREATE DATABASE dayplanner_db;
USE dayplanner_db;

CREATE TABLE plans(
    id INT NOT NULL AUTO_INCREMENT,
    plan VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO plans (plan) VALUES ("fight a ninja"), ("bathe the dog");