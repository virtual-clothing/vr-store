insert into reviews (product_id, review, name, rating, date) values (($1), ($2), ($3), ($4), ($5));

select * from reviews
where product_id = ($1);