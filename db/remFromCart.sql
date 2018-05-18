delete from cart
where user_id = $1 and product_id = $2;
SELECT cart.user_id, products.title, products.price, products.product_img, product_id, cart.qty
FROM cart
FULL OUTER JOIN products ON cart.product_id=products.id
WHERE user_id = $1;