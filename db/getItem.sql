select p.id, p.title, p.price, p.product_img, p.img_back, p.img_view_2, p.img_view_3, p.img_view_4, p.TYPE, p.attr_id, a.gender, a.size, a.color, a.category from products p
join attributes a
on p.attr_id = a.id
where p.id = ($1);