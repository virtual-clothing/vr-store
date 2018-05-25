select p.id, p.title, p.price, p.product_img, img_back, p.TYPE, p.attr_id, a.gender, a.size, a.color, a.category from products p
join attributes a
on p.attr_id = a.id;