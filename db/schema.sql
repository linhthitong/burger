### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	animal_breed varchar(255) NOT NULL,
-- 	animal_name varchar(255) NOT NULL,
-- 	price int NOT NULL,
-- 	buyer_id int NOT NULL,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (buyer_id) REFERENCES buyers(id)
-- );
