USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('Big Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baby Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Vegetarian Burger', false);

SELECT * FROM burgers;

-- INSERT INTO burgers (burger_name) VALUES ('Big Burger', false);
-- INSERT INTO burgers (burger_name) VALUES ('Baby Burger', false);
-- INSERT INTO burgers (burger_name) VALUES ('Vegetarian Burger', false);



-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('wolf', 'Cassie', 195, 1);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('bear', 'Rachel', 745, 1);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('hawk', 'Tobias', 850, 2);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('gorilla', 'Marco', 400, 2);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('tiger', 'Jake', 300, 2);
