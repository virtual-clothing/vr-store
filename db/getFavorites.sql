SELECT favorite.user_id, products.title, products.price, products.product_img, favorite.product_id
FROM favorite
FULL OUTER JOIN products ON favorite.product_id=products.id
WHERE user_id = $1;