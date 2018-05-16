insert into orders (product_id,user_id,date,order_total)
values ($1, $2, CURRENT_DATE, $4)
returning * ;