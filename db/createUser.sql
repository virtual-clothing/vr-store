insert into users (username, auth_id, profile_img, gender, nickname, email)
values ($1, $2, $3, $4, $5, $6)

returning *;
