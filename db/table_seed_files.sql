create table users (    
    id SERIAL PRIMARY KEY,    
    username text,    
    auth_id text,    
    profile_img text
)

insert into users (username, auth_id, profile_img)values ('Harry Potter', 'dfsjfksdjfsdf', '@myprofileimg.com')
insert into users (username, auth_id, profile_img) values ('Hermany', '34wefdsf3', '@herprofileimg.com')

create table products (    
    id SERIAL PRIMARY KEY,    
    title TEXT,    
    price FLOAT,    
    product_img TEXT,
    type TEXT,
    attr_id INTEGER REFERENCES products (id)
)

insert into products (title, price, product_img, type, attr_id)
values ('Nike runner', 180.50, '@pimage.com', 'shoes', 1)

insert into products (title, price, product_img, type, attr_id)
values ('Gucci bag', 900.50, '@bimage.com', 'bag', 2)




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


create table cart (
    id serial PRIMARY KEY,
    title text,
    price float(2),
    quantity integer,
    product_img text,
    product_id integer,
    attr_id integer,
    user_id integer REFERENCES users(id)
)