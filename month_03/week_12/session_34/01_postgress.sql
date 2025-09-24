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

--ex15--
select s.store_id
from store s 
join payment p  ---Smth is wrong here-

--ex16--
SELECT f.title as movie_title,
COUNT(r.rental_id) AS rental_count
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
GROUP BY f.film_id, f.title
ORDER BY rental_count DESC
LIMIT 10;

--ex17--
SELECT s.store_id,
SUM(p.amount) AS total_revenue
from store s 
join payment p on s.store_id = p.staff_id 
GROUP BY s.store_id
ORDER BY total_revenue DESC;

--ex18--
select 
DATE(payment_date) AS payment_day,
SUM(amount) AS daily_revenue
FROM payment
GROUP BY DATE(payment_date)
ORDER BY daily_revenue DESC
LIMIT 1;      --Smth is wrong here--

--ex19--
SELECT a.first_name,a.last_name,
COUNT(DISTINCT f.film_id) AS action_movies_count
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Action'
GROUP BY  a.first_name, a.last_name
ORDER BY action_movies_count DESC
LIMIT 5;

--ex20--
SELECT 
    c.customer_id,
    AVG(f.length) AS average_movie_length
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY c.customer_id
LIMIT 5;

--ex21----ex23---Error with brain

--ex24--
SELECT c.name,
SUM(f.replacement_cost) AS total_replacement_cost
FROM category c
JOIN film_category fc ON c.category_id = fc.category_id
JOIN film f ON fc.film_id = f.film_id
GROUP BY c.category_id, c.name
ORDER BY total_replacement_cost DESC;
--ex25--
SELECT 
    s.store_id,
    AVG(p.amount) AS average_payment
FROM payment p
JOIN staff st ON p.staff_id = st.staff_id
JOIN store s ON st.store_id = s.store_id
GROUP BY s.store_id
ORDER BY s.store_id;