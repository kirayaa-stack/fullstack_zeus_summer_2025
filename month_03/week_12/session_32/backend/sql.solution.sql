--ex1--
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
select rating,
count(*) as number_of_films
from film
group by rating;

--ex6--
select customer_id,
sum(amount) as total_spent
from payment
group by customer_id 
having sum(amount) > 150
order by total_spent desc;

--ex7--

select  count(*)
from actor;

--ex8--
select sum(replacement_cost)
from film

--ex9--
select 
max(amount) as max_date
from payment;

--ex10--
select c.name as category_name,
count(fc.film_id) as number_of_films
from film_category fc
join category c on c.category_id =fc.category_id 
group by c.name
order by number_of_films desc;

--ex11--
select f.rating ,avg(length) as average_length
from film f
group by rating;

--ex12--
select p.staff_id , sum(amount) as total_handled
from payment p 
group by staff_id;

--ex13--
select staff_id ,
sum(amount) as number_of_transactions
from payment p 
group by staff_id
having sum(amount) <8000
order by number_of_transactions;

--ex14--
select c."name" as category_name , avg(rental_duration) as avg_rental_duration
from film f 
join film_category fc on f.film_id = fc.film_id
join category c on c.category_id  = fc.category_id
group by c."name" 
having avg(rental_duration) > 5
order by avg_rental_duration limit 3;

--ex15--
SELECT
a.first_name,
a.last_name,
COUNT(fa.film_id) AS film_count
FROM
actor a
JOIN
film_actor fa ON a.actor_id = fa.actor_id
GROUP BY
a.actor_id
ORDER BY
film_count DESC
LIMIT 10;

--ex16--
select f.title , sum(p.amount) as total_revenue
from payment p
join  rental r on p.rental_id =r.rental_id 
join inventory i on r.inventory_id = i.inventory_id 
join film f  on i.film_id =f.film_id 
group by f.title 
order by total_revenue desc
limit 5;