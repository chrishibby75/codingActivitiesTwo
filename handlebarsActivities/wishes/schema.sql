DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;

USE wishes_db;

CREATE TABLE wishes(
    id INT NOT NULL AUTO_INCREMENT,
    wish VARCHAR(250) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO wishes (wish)
VALUES ("Red Sox Championship repeat"), ("Full Stack Developer job");