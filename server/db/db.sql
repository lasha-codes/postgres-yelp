CREATE TABLE reviews (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
   name VARCHAR(50) NOT NULL,
   review TEXT NOT NULL,
   rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values(11, 'carl', 'restaurant was awesome', 5) returning *;

SELECT count(*) FROM reviews;
SELECT count(rating) FROM reviews;
SELECT MIN(rating) FROM reviews;
SELECT MAX(rating) FROM reviews;
SELECT trunc(AVG(rating), 2) FROM reviews;
SELECT trunc(AVG(rating), 3) AS average_rating FROM reviews;
SELECT trunc(AVG(rating), 2) AS average_rating FROM reviews WHERE restaurant_id = 14;
SELECT location, count(location) FROM restaurants group by location;
SELECT name AS username, rating AS restaurant_rating FROM reviews;
SELECT restaurant_id, count(restaurant_id) FROM reviews group by restaurant_id;

-- sql joins
SELECT * FROM restaurants inner join reviews on restaurants.id = reviews.restaurant_id;

SELECT * FROM restaurants left join reviews on restaurants.id = reviews.restaurant_id;

SELECT * FROM restaurants right join reviews on restaurants.id = reviews.restaurant_id;