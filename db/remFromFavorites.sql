delete from favorite
where user_id = $1 and product_id = $2;
SELECT favorite.user_id, products.title, products.price, products.product_img, product_id
FROM favorite
FULL OUTER JOIN products ON favorite.product_id=products.id
WHERE user_id = $1;