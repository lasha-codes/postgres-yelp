CREATE TABLE reviews (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   review TEXT NOT NULL,
   rating INT NOT NULL check(rating >= 1 and rating <= 5) 
);

INSERT INTO reviews (name, review, rating) values('carl', 'restaurant was awesome', 5) returning *;