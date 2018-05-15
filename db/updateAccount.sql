update users
set username = ($1), address = ($2), phone = ($3), email = ($4)
where id = ($5);

select * from users
where id = ($5);