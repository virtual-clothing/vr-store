-- just a note, phonenumber column in users needs to be bigint not int. int will only allow 8 character input

-- Users table
create table users (    
    id SERIAL PRIMARY KEY,    
    username text,    
    auth_id text,    
    profile_img text,
    gender text,
    nickname text,
    email text,
    phone int,
    address varchar(160)
)

insert into users (username, auth_id, profile_img, gender, nickname, email, phone, address)values ('Harry Potter', 'dfsjfksdjfsdf', '@myprofileimg.com', 'man', 'Potter', 'potter@gmail.com', 4159999999, '643 8th ave, SanFrancisco CA')
insert into users (username, auth_id, profile_img, gender, nickname, email, phone, address) values ('Hermany', '34wefdsf3', '@herprofileimg.com', 'female', 'Hernickname', 'hermany@gmail.com', 4151111111, '234 10th ave, SanFrancisco CA')

-- Products table
create table products (    
    id SERIAL PRIMARY KEY,    
    title TEXT,    
    price FLOAT,    
    product_img TEXT,
    type TEXT,
    attr_id INTEGER REFERENCES attributes (id)
)

insert into products (title, price, product_img, type, attr_id)
values ('Nike runner', 180.50, 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmff2gZAQ0SRj0kp-xIChaK0fqGPYnEotPYuBu4NWW4c1LpimQBs9efvxtCQ&usqp=CAE', 'shoes', 1)

insert into products (title, price, product_img, type, attr_id)
values ('Gucci bag', 900.50, 'https://cdn.lookastic.com/hot-pink-leather-tote-bag/gg-marmont-matelasse-leather-top-handle-tote-original-968657.jpg', 'bag', 2)

insert into products (title, price, product_img, type, attr_id)
values ('Nike AeroReact Victory', 65, 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/tttuntm3tioqmalu1qby/aeroreact-victory-mens-golf-polo-4pvYL4.jpg', 'Men Golf Polo', 21)

insert into products (title, price, product_img, type, attr_id)
values ('Nike Sportswear Tech Knit', 120, 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ccu9nffguewwz1uxuppe/sportswear-tech-knit-mens-jacket-ENYrng.jpg', 'Men Jacket', 5)

-- Attributes table
create table attributes (    
    id SERIAL PRIMARY KEY,    
    gender text,    
    size text,    
    color text
)

insert into attributes(gender, size, color)
values('male', '32', 'white' )

select * from products p
join attributes a on p.attr_id = a.id

-- deprecated!----------------------------
-- create table cart (
--     id serial PRIMARY KEY,
--     title text,
--     price float(2),
--     quantity integer,
--     product_img text,
--     product_id integer,
--     attr_id integer,
--     user_id integer REFERENCES users(id)
-- )--------------------------------------

-- Cart table
create table cart (
    id serial PRIMARY KEY,
    product_id int REFERENCES products(id),
    user_id int REFERENCES users(id)
)

insert into cart (product_id, user_id) values (2, 1)
insert into cart (product_id, user_id) values (1, 5)

select u.username, c.product_id, c.user_id, 
p.title, p.price, p.product_img, 
p.type, a.gender, a.size, a.color 
from cart c
join products p
on p.id = c.product_id
join attributes a
on a.id = p.attr_id
join users u
on u.id = c.user_id

-- Favorite table
create table favorite (
    id serial PRIMARY KEY,
    product_id int REFERENCES products(id),
    user_id int REFERENCES users(id)
)

insert into favorite (product_id, user_id) values (1, 3)

select u.username, f.product_id, f.user_id, 
p.title, p.price, p.product_img, 
p.type, a.gender, a.size, a.color 
from favorite f
join products p
on p.id = f.product_id
join attributes a
on a.id = p.attr_id
join users u
on u.id = f.user_id


create table reviews (
    product_id int,
    review varchar(200),
    name varchar(80),
    rating int,
    date varchar(80)
)

insert into reviews (product_id, review, name, rating, date) values (1, 'its awesome', 'ben', 3, '01/13/2019')
insert into reviews (product_id, review, name, rating, date) values (1, 'dumb', 'Joe', 1, '04/03/2019')


