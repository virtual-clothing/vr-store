delete from table cart
where user_id = $1 and name = $2;
select * from cart
where user_id = $1;