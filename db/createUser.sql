insert into users (username, auth_id, profile_img)
values ($1, $2, $3)

returning *;
