-- JOINS

-- LEFT
-- RIGHT
-- INNER
-- OUTER
--Exercises...

CREATE TABLE departments (
department_id INT PRIMARY KEY,
department_name VARCHAR(50)
);

CREATE TABLE employees (
employee_id INT PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
department_id INT,
FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE projects (
project_id INT PRIMARY KEY,
project_name VARCHAR(100),
lead_employee_id INT,
FOREIGN KEY (lead_employee_id) REFERENCES employees(employee_id)
);

INSERT INTO employees (employee_id, first_name, last_name, department_id)
VALUES
(1, 'Alice', 'Smith', 1),
(2, 'Bob', 'Johnson', 2),
(3, 'Charlie', 'Brown', 1),
(4, 'Diana', 'Prince', 3),
(5, 'Ethan', 'Hunt', NULL),
(6, 'Fiona', 'Glenanne', 2);

INSERT INTO departments (department_id, department_name)
VALUES
(1, 'Engineering'),
(2, 'Marketing'),
(3, 'Human Resources'),
(4, 'Sales'); 

INSERT INTO projects (project_id, project_name, lead_employee_id) 
VALUES
(101, 'Website Redesign', 2),
(102, 'Mobile App Launch', 1),
(103, 'Security Audit', 6),
(104, 'New Office Setup', NULL);

--EX1
select e.first_name , e.last_name , d.department_name 
from employees e 
inner join departments d on e.department_id = d.department_id ;

--EX2
select p.project_name , e.first_name, e.last_name
from projects p 
inner join employees e  on e.employee_id  = p.lead_employee_id 

--Ex3
select e.first_name , e.last_name , d.department_name
from employees e 
left join departments d  on e.department_id  = d.department_id   
order by d.department_id  desc;
--Ex4
select p.project_name , e.first_name , e.last_name
from projects p 
left join employees e on e.employee_id  = p.lead_employee_id
order by employee_id desc;
--EX5
select d.department_name ,e.first_name ,e.last_name 
from departments d 
right join employees e on d.department_id = e.department_id ;
--EX6
select first_name ,last_name , p.project_name 
from projects p 
right join employees e on p.lead_employee_id  = e.employee_id; 

--EX7
select e.first_name , e.last_name ,d.department_name 
from employees e 
full outer join departments d 
on e.department_id = d.department_id ;

--EX8
select e.first_name ,e.last_name ,p.project_name 
from projects p 
full outer join employees e 
on e.employee_id =p.lead_employee_id