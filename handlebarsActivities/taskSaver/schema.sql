DROP DATABASE IF EXISTS task_saver_db;

CREATE DATABASE task_saver_db;
USE task_saver_db;

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT,
    task VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tasks (task)
VALUES ("Mow the lawn"), ("Pick up milk"), ("Fix the bathroom ceiling"), ("Cut down apple tree");