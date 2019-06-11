DROP DATABASE IF EXISTS playlist_db;
CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
id INTEGER AUTO_INCREMENT NOT NULL,
title VARCHAR(100) NOT NULL,
artist VARCHAR(50) NOT NULL,
genre VARCHAR(50) NULL,
PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ('Blood Brothers', 'Iron Maiden', 'Heavy Metal'),
	   ('War', 'Bob Marley', 'Reggae'),
       ('Whiskey River', 'Willie Nelson', 'Country'),
       ('Flashlight', 'Parliament', 'Funk'),
       ('Indians', 'Anthrax', 'Thrash Metal');
       
       SELECT * FROM songs;