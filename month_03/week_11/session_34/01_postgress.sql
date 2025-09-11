--ex01--
select count(*)
from film;

--ex2--
select sum(amount)
from payment;

--ex3--
select avg(rental_rate)
from film;

--ex4--
select
min(length) as shortest_film_duration,
max(length) as longest_film_duration
from film

--ex5--
select count(distinct customer_id) as count
from rental r 

--ex6--
select f.rating , count(*) as film_count
from film f 
group by f.rating 

--ex7--
select p.customer_id , sum(p.amount ) as total_spent
from payment p  
group by p.customer_id 
limit 5;

--ex8--
select c.name as category_name,
count(fc.film_id) as number_of_films
from film_category fc
join category c on c.category_id =fc.category_id 
group by c.name
order by number_of_films desc;

--ex9--
select p.staff_id , sum(p.staff_id) as total_transaction
from payment p 
group by p.staff_id 

--ex10--
select c.country, count(ct.city_id) as city_count
from country c 
join city ct on c.country_id = ct.country_id 
group by c.country
order by city_count desc
limit 5;

--ex11--
select p.customer_id , sum(p.amount ) as total_spent
from payment p 
group by customer_id 
having sum(p.amount ) > 100;

--ex12--
select c."name" as category_name , avg(rental_duration) as avg_rental_duration
from film f 
join film_category fc on f.film_id = fc.film_id
join category c on c.category_id  = fc.category_id
group by c."name" 
order by avg_rental_duration;

--ex13--
select a.first_name , a.last_name ,count( fa.film_id ) as film_count
from actor a 
join film_actor fa on a.actor_id = fa.actor_id 
group by a.actor_id , a.first_name , a.last_name 
having count(fa.film_id ) > 30
order by film_count;

--ex14--
select f.rating  , sum(p.amount) as total_revenue
from payment p
join  rental r on p.rental_id =r.rental_id 
join inventory i on r.inventory_id = i.inventory_id 
join film f  on i.film_id =f.film_id 
group by f.rating 
order by total_revenue desc