```sql
-- CREATE TABLE students(
--     id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
--     create_time DATE,
--     name VARCHAR(255)
-- );

-- CREATE TABLE students(
--     s_id SERIAL NOT NULL PRIMARY KEY,
--     username VARCHAR(20) NOT NULL UNIQUE,
--     email VARCHAR(100) UNIQUE,
--     name VARCHAR(50),
--     age SMALLINT CHECK (age >= 18),
--     isActive BOOLEAN DEFAULT true,
-- );

CREATE TABLE students (
    s_id SERIAL NOT NULL,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    name VARCHAR(50),
    age SMALLINT CHECK (age >= 18),
    isActive BOOLEAN DEFAULT true,
    PRIMARY KEY (s_id),
    UNIQUE (username, email)
);

INSERT INTO
    students (
        username,
        email,
        "name",
        "age",
        isActive
    )
VALUES (
        'abdullah_',
        'abd@gmail.com',
        'Abdullah',
        25,
        true
    );

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE,
    age INT CHECK (age >= 20),
    isActive BOOLEAN DEFAULT true
);

INSERT INTO
    person (
        username,
        email,
        age,
        isActive
    )
VALUES (
        'abdullah_a',
        'abd@mai.com',
        25,
        true
    );

INSERT INTO
    person (username, email, age)
VALUES (
        'abdullah_f',
        'abd6@mail.com',
        26
    ),
    (
        'abdullah_g',
        'abd7@mail.com',
        27
    ),
    (
        'abdullah_h',
        'abd8@mail.com',
        28
    ),
    (
        'abdullah_i',
        'abd9@mail.com',
        29
    );

-- ALTER

CREATE TABLE employe (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 20)
);

INSERT INTO
    employee (name, age, username)
VALUES ('Abdullah', 25, 'abdullah_a');

-- rename table name
ALTER TABLE employe RENAME TO employee;

-- add a column
ALTER TABLE employee ADD COLUMN email VARCHAR(50);

ALTER TABLE employee ADD COLUMN usernameee VARCHAR(50);

-- drop a column
ALTER TABLE employee DROP COLUMN email;

-- rename column
ALTER TABLE employee RENAME COLUMN usernameee TO username;

-- modifying constraint
ALTER TABLE employee ALTER COLUMN username TYPE VARCHAR(20);

ALTER TABLE employee ALTER COLUMN email SET NOT NULL;

ALTER TABLE employee ALTER COLUMN email DROP NOT NULL;
-- DROP

ALTER TABLE employee ALTER COLUMN email SET DEFAULT 'test@mail.com';

ALTER TABLE employee ALTER COLUMN email DROP DEFAULT;

-- table level constraint
ALTER TABLE employee
ADD CONSTRAINT unique_employee_email UNIQUE (email);

ALTER TABLE employee
ADD CONSTRAINT unique_employee_email UNIQUE (email);

ALTER TABLE employee DROP CONSTRAINT unique_employee_email;

ALTER TABLE employee ADD CONSTRAINT pk_employee_id PRIMARY KEY (id);

ALTER TABLE employee DROP CONSTRAINT pk_employee_id;

-- SELECT

CREATE TABLE students (
    student_id SERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
);

INSERT INTO
    students (
        first_name,
        last_name,
        age,
        grade,
        course,
        email,
        dob,
        blood_group,
        country
    )
VALUES (
        'Jamsed',
        'Khan',
        20,
        'A',
        'Computer Science',
        'abdullah.khan@example.com',
        '2005-03-12',
        'A+',
        'Bangladesh'
    ),
    (
        'Nusrat',
        'Jahan',
        22,
        'B',
        'Mathematics',
        'nusrat.jahan@example.com',
        '2003-07-25',
        'B+',
        'Bangladesh'
    ),
    (
        'Rafi',
        'Hasan',
        19,
        'A',
        'Physics',
        'rafi.hasan@example.com',
        '2006-01-18',
        'O+',
        'India'
    ),
    (
        'Sumaiya',
        'Akter',
        21,
        'C',
        'Chemistry',
        'sumaiya.akter@example.com',
        '2004-11-09',
        'AB+',
        'Nepal'
    ),
    (
        'Tariq',
        'Rahman',
        23,
        'B',
        'Biology',
        'tariq.rahman@example.com',
        '2002-09-02',
        'B-',
        'Pakistan'
    ),
    (
        'Shila',
        'Begum',
        20,
        'A',
        'English',
        'shila.begum@example.com',
        '2005-04-14',
        'O-',
        'Sri Lanka'
    ),
    (
        'Imran',
        'Ali',
        22,
        'C',
        'History',
        'imran.ali@example.com',
        '2003-08-27',
        'A-',
        'Bangladesh'
    ),
    (
        'Mitu',
        'Sultana',
        19,
        'A',
        'Economics',
        'mitu.sultana@example.com',
        '2006-02-05',
        'B+',
        'India'
    ),
    (
        'Hasan',
        'Chowdhury',
        21,
        'B',
        'Political Science',
        'hasan.chowdhury@example.com',
        '2004-06-16',
        'AB-',
        'Nepal'
    ),
    (
        'Farzana',
        'Karim',
        23,
        'C',
        'Sociology',
        'farzana.karim@example.com',
        '2002-12-22',
        'O+',
        'Bangladesh'
    ),
    (
        'Shuvo',
        'Miah',
        20,
        'A',
        'Computer Science',
        'shuvo.miah@example.com',
        '2005-05-19',
        'A+',
        'Pakistan'
    ),
    (
        'Sadia',
        'Haque',
        22,
        'B',
        'Mathematics',
        'sadia.haque@example.com',
        '2003-09-10',
        'B-',
        'Sri Lanka'
    ),
    (
        'Arif',
        'Rahman',
        19,
        'C',
        'Physics',
        'arif.rahman@example.com',
        '2006-07-08',
        'O-',
        'Bangladesh'
    ),
    (
        'Mahi',
        'Akter',
        21,
        'A',
        'Chemistry',
        'mahi.akter@example.com',
        '2004-01-29',
        'AB+',
        'India'
    ),
    (
        'Nayeem',
        'Islam',
        23,
        'B',
        'Biology',
        'nayeem.islam@example.com',
        '2002-03-04',
        'A+',
        'Nepal'
    ),
    (
        'Ruma',
        'Begum',
        20,
        'C',
        'English',
        'ruma.begum@example.com',
        '2005-06-15',
        'B+',
        'Bangladesh'
    ),
    (
        'Fahim',
        'Siddiqui',
        22,
        'A',
        'History',
        'fahim.siddiqui@example.com',
        '2003-10-11',
        'AB-',
        'Pakistan'
    ),
    (
        'Lamia',
        'Chowdhury',
        19,
        'B',
        'Economics',
        'lamia.chowdhury@example.com',
        '2006-09-03',
        'O+',
        'Sri Lanka'
    ),
    (
        'Sohel',
        'Ahmed',
        21,
        'C',
        'Political Science',
        'sohel.ahmed@example.com',
        '2004-12-28',
        'A-',
        'Bangladesh'
    ),
    (
        'Tanisha',
        'Akter',
        23,
        'A',
        'Sociology',
        'tanisha.akter@example.com',
        '2002-08-20',
        'B-',
        'India'
    ),
    (
        'Rony',
        'Khan',
        20,
        'B',
        'Computer Science',
        'rony.khan@example.com',
        '2005-07-22',
        'O+',
        'Nepal'
    ),
    (
        'Shirin',
        'Parvin',
        22,
        'C',
        'Mathematics',
        'shirin.parvin@example.com',
        '2003-04-30',
        'AB+',
        'Bangladesh'
    ),
    (
        'Jahid',
        'Hasan',
        19,
        'A',
        'Physics',
        'jahid.hasan@example.com',
        '2006-02-14',
        'A+',
        'Sri Lanka'
    ),
    (
        'Mim',
        'Haque',
        21,
        'B',
        'Chemistry',
        'mim.haque@example.com',
        '2004-05-07',
        'O-',
        'India'
    ),
    (
        'Rakib',
        'Rahman',
        23,
        'C',
        'Biology',
        'rakib.rahman@example.com',
        '2002-10-19',
        'AB-',
        'Bangladesh'
    ),
    (
        'Sanjida',
        'Akter',
        20,
        'A',
        'English',
        'sanjida.akter@example.com',
        '2005-11-11',
        'B+',
        'Pakistan'
    ),
    (
        'Nabil',
        'Chowdhury',
        22,
        'B',
        'History',
        'nabil.chowdhury@example.com',
        '2003-06-23',
        'O+',
        'Bangladesh'
    ),
    (
        'Keya',
        'Karim',
        19,
        'C',
        'Economics',
        'keya.karim@example.com',
        '2006-09-09',
        'A-',
        'Nepal'
    ),
    (
        'Asif',
        'Miah',
        21,
        'A',
        'Political Science',
        'asif.miah@example.com',
        '2004-03-01',
        'B-',
        'India'
    ),
    (
        'Ritu',
        'Sultana',
        23,
        'B',
        'Sociology',
        'ritu.sultana@example.com',
        '2002-07-27',
        'AB+',
        'Bangladesh'
    ),
    (
        'Omar',
        'Faruk',
        20,
        'C',
        'Computer Science',
        'omar.faruk@example.com',
        '2005-01-17',
        'O-',
        'Sri Lanka'
    ),
    (
        'Salma',
        'Begum',
        22,
        'A',
        'Mathematics',
        'salma.begum@example.com',
        '2003-12-13',
        'B+',
        'Bangladesh'
    ),
    (
        'Habib',
        'Rahman',
        19,
        'B',
        'Physics',
        'habib.rahman@example.com',
        '2006-08-25',
        'A+',
        'Pakistan'
    ),
    (
        'Mou',
        'Akter',
        21,
        'C',
        'Chemistry',
        'mou.akter@example.com',
        '2004-10-02',
        'AB-',
        'India'
    ),
    (
        'Sajid',
        'Hasan',
        23,
        'A',
        'Biology',
        'sajid.hasan@example.com',
        '2002-02-22',
        'O+',
        'Bangladesh'
    ),
    (
        'Puja',
        'Chakma',
        20,
        'B',
        'English',
        'puja.chakma@example.com',
        '2005-06-06',
        'A-',
        'Nepal'
    ),
    (
        'Aminul',
        'Haque',
        22,
        'C',
        'History',
        'aminul.haque@example.com',
        '2003-09-14',
        'B-',
        'Bangladesh'
    ),
    (
        'Raisa',
        'Sultana',
        19,
        'A',
        'Economics',
        'raisa.sultana@example.com',
        '2006-03-19',
        'O+',
        'India'
    ),
    (
        'Shanto',
        'Islam',
        21,
        'B',
        'Political Science',
        'shanto.islam@example.com',
        '2004-11-24',
        'AB+',
        'Bangladesh'
    ),
    (
        'Nusrat',
        'Karim',
        23,
        'C',
        'Sociology',
        'nusrat.karim@example.com',
        '2002-05-30',
        'B+',
        'Pakistan'
    );

SELECT first_name, age FROM students;

-- column alias
SELECT first_name as "FirstName" FROM students;

SELECT first_name as "FirstName", age as "UserAge" FROM students;

-- sorting
SELECT
    first_name,
    blood_group,
    country,
    age
FROM students
ORDER BY age DESC;

SELECT
    first_name,
    blood_group,
    country,
    age
FROM students
ORDER BY age ASC;

-- distinct
SELECT DISTINCT country FROM students;

SELECT first_name, age, course, country
FROM students
WHERE
    country = 'Bangladesh';

SELECT first_name, email, country
FROM students
WHERE
    country = 'Bangladesh'
    OR country = 'Nepal';

-- multi condition
SELECT first_name, course, grade
FROM students
WHERE (
        grade = 'A'
        OR grade = 'B'
    )
    AND (
        course = 'Physics'
        OR course = 'Chemistry'
    );

SELECT first_name, age, country
FROM students
WHERE
    age = 20
    AND country = 'Bangladesh'

-- comparison operators
SELECT first_name, age FROM students WHERE age >= 21;

SELECT first_name, country FROM students WHERE country != 'Nepal';

SELECT first_name, age FROM students WHERE age BETWEEN 20 and 22;

SELECT first_name, country
FROM students
WHERE
    country = 'Bangladesh'
    OR country = 'Pakistan'
    OR country = 'Nepal';

SELECT first_name, country
FROM students
WHERE
    country IN (
        'Bangladesh',
        'Pakistan',
        'Nepal'
    );

-- LIKE operator
SELECT first_name FROM students WHERE first_name LIKE 'A%';

SELECT first_name FROM students WHERE first_name LIKE '%a';

SELECT first_name FROM students WHERE first_name LIKE 'A___';
-- A with 3 another char

SELECT first_name FROM students WHERE first_name LIKE '%a_';

SELECT email FROM students WHERE email LIKE 'A%';

SELECT email FROM students WHERE email ILIKE 'A%';
-- case insensitive

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

SELECT country FROM students WHERE NOT country = 'Bangladesh';

SELECT UPPER(first_name) FROM students;

SELECT LOWER(first_name) FROM students;

SELECT CONCAT(first_name, ' ', last_name) AS "FullName"
FROM students;

SELECT LENGTH(first_name) AS "FirstNameLength" FROM students;

SELECT LENGTH(first_name) AS "FirstNameLength", first_name
FROM students
ORDER BY "FirstNameLength" DESC;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

SELECT AVG(age) FROM students;

SELECT MAX(age) FROM students;

SELECT MIN(age) FROM students;

SELECT SUM(age) FROM students;

SELECT COUNT(*) FROM students;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

SELECT 1 = 1;

SELECT 1 = 0;

SELECT true = true;

SELECT true = false;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

SELECT * FROM students WHERE email IS NULL;

SELECT * FROM students WHERE email IS NOT NULL;

SELECT COALESCE(email, 'Email not provided'), * FROM students;
-- if email null, return the alt text

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

SELECT * FROM students LIMIT 5;

SELECT * FROM students OFFSET 2 LIMIT 5;

SELECT * FROM students OFFSET 5 * 7 LIMIT 5;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

UPDATE students SET email = 'arif@example.com' WHERE student_id = 13;

UPDATE students
SET
    email = 'ariful@example.com',
    age = 18
WHERE
    student_id = 13;

UPDATE students
SET
    email = 'ariful@example.com',
    age = 18
WHERE
    student_id = 13
    OR student_id = 14;

UPDATE students
SET
    email = 'ariful@example.com',
    age = 18
WHERE
    student_id IN (13, 14);

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

DELETE FROM students WHERE grade = 'C';

DELETE FROM students WHERE grade = 'C' AND age >= 20;

SELECT first_name, age, grade from students;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--
-- GROUP BY

SELECT country, sum(1), count(*) FROM students GROUP BY country;

SELECT grade, count(grade) FROM students GROUP BY grade;

SELECT course, count(course) FROM students GROUP BY course;

SELECT grade, count(grade)
FROM students
GROUP BY
    grade
HAVING
    count(grade) > 13;

SELECT country, AVG(age)
FROM students
GROUP BY
    country
HAVING
    AVG(age) > 21;

--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--\--

-- PRIMARY KEY -- FOREIGN KEY

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
)

CREATE TABLE posts (
    id SERIAL NOT NULL PRIMARY KEY,
    title TEXT,
    user_id INTEGER NOT NULL REFERENCES users (id)
)

INSERT INTO
    users (username)
VALUES ('abdullah_a'),
    ('abdullah_b'),
    ('abdullah_c'),
    ('abdullah_d'),
    ('abdullah_e');

INSERT INTO
    posts (title, user_id)
VALUES (
        'This is the title for abdullah_b',
        2
    ),
    (
        'This is the title for abdullah_e',
        5
    ),
    (
        'This is the title for abdullah_a',
        1
    ),
    (
        'This is the title for abdullah_c',
        3
    );

SELECT posts.id, title, username
FROM posts
    JOIN users ON posts.user_id = users.id;

SELECT p.id, title, username
FROM posts as p
    JOIN users as u ON p.user_id = u.id;

SELECT * FROM users as u INNER JOIN posts as p ON p.user_id = u.id;

SELECT * FROM users as u LEFT JOIN posts as p ON p.user_id = u.id;

SELECT * FROM posts as p LEFT JOIN users as u ON p.user_id = u.id;

SELECT * FROM users as u RIGHT JOIN posts as p ON p.user_id = u.id;

SELECT * FROM posts as p RIGHT JOIN users as u ON p.user_id = u.id;

SELECT * FROM posts as p FULL JOIN users as u ON p.user_id = u.id;

--

SELECT *
FROM users as u
    RIGHT OUTER JOIN posts as p ON p.user_id = u.id;

SELECT *
FROM users as u
    LEFT OUTER JOIN posts as p ON p.user_id = u.id;

-- CROSS JOIN

CREATE TABLE departments (
    dept_id INT,
    dept_name VARCHAR(50)
);

CREATE TABLE employees (
    emp_id INT,
    emp_name VARCHAR(50),
    dept_id INT
);

INSERT INTO
    departments
VALUES (101, 'Human Resources'),
    (102, 'Marketing');

INSERT INTO
    employees
VALUES (1, 'John Doe', 101),
    (2, 'Jane Smith', 102);

SELECT * FROM employees CROSS JOIN departments;

-- NATURAL JOIN

SELECT * FROM employees NATURAL JOIN departments;
```

### Problem Solving

```sql

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT REFERENCES departments (department_id),
    salary DECIMAL(10, 2),
    hire_date DATE
);

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(50)
);

-- Departments table data
INSERT INTO
    departments (department_name)
VALUES ('Human Resources'),
    ('Finance'),
    ('Engineering'),
    ('Sales'),
    ('Marketing'),
    ('Customer Support'),
    ('IT'),
    ('Logistics'),
    ('Legal'),
    ('Research & Development');

-- Employees table data
INSERT INTO
    employees (
        employee_name,
        department_id,
        salary,
        hire_date
    )
VALUES (
        'Alice Johnson',
        1,
        45000.00,
        '2020-01-15'
    ),
    (
        'Bob Smith',
        2,
        52000.00,
        '2019-03-20'
    ),
    (
        'Charlie Davis',
        3,
        68000.00,
        '2021-06-10'
    ),
    (
        'Diana Miller',
        4,
        47000.00,
        '2022-02-01'
    ),
    (
        'Ethan Brown',
        5,
        50000.00,
        '2021-11-12'
    ),
    (
        'Fiona Wilson',
        6,
        42000.00,
        '2020-07-25'
    ),
    (
        'George Harris',
        7,
        60000.00,
        '2018-09-17'
    ),
    (
        'Hannah Clark',
        8,
        48000.00,
        '2019-05-30'
    ),
    (
        'Ian Lewis',
        9,
        70000.00,
        '2020-04-22'
    ),
    (
        'Jane Hall',
        10,
        75000.00,
        '2021-08-18'
    ),
    (
        'Kevin Young',
        3,
        69000.00,
        '2019-12-01'
    ),
    (
        'Laura King',
        2,
        53000.00,
        '2020-10-05'
    ),
    (
        'Michael Wright',
        4,
        46000.00,
        '2021-01-25'
    ),
    (
        'Nora Scott',
        1,
        44000.00,
        '2019-06-14'
    ),
    (
        'Oscar Adams',
        6,
        41000.00,
        '2022-03-11'
    ),
    (
        'Paula Turner',
        7,
        62000.00,
        '2020-09-07'
    ),
    (
        'Quentin Baker',
        8,
        49000.00,
        '2021-04-02'
    ),
    (
        'Rachel Allen',
        5,
        52000.00,
        '2018-12-19'
    ),
    (
        'Samuel Evans',
        9,
        71000.00,
        '2019-11-28'
    ),
    (
        'Tina Collins',
        10,
        76000.00,
        '2022-06-09'
    ),
    (
        'Uma Foster',
        3,
        68000.00,
        '2020-05-14'
    ),
    (
        'Victor Gray',
        2,
        54000.00,
        '2019-02-08'
    ),
    (
        'Wendy Hughes',
        4,
        47000.00,
        '2021-12-20'
    ),
    (
        'Xavier Jenkins',
        1,
        45000.00,
        '2018-07-03'
    ),
    (
        'Yvonne Kelly',
        6,
        43000.00,
        '2020-01-28'
    ),
    (
        'Zachary Lopez',
        7,
        61000.00,
        '2019-09-16'
    ),
    (
        'Adam Martinez',
        8,
        50000.00,
        '2021-03-23'
    ),
    (
        'Bella Nelson',
        5,
        54000.00,
        '2020-08-11'
    ),
    (
        'Chris Ortiz',
        9,
        72000.00,
        '2019-10-21'
    ),
    (
        'Derek Perez',
        10,
        77000.00,
        '2022-04-29'
    ),
    (
        'Emily Ramirez',
        3,
        69000.00,
        '2021-07-19'
    ),
    (
        'Frank Simmons',
        2,
        55000.00,
        '2019-01-05'
    ),
    (
        'Grace Torres',
        4,
        48000.00,
        '2020-06-30'
    ),
    (
        'Henry Ward',
        1,
        46000.00,
        '2022-05-15'
    ),
    (
        'Isabella Cox',
        6,
        44000.00,
        '2019-08-12'
    ),
    (
        'Jack Diaz',
        7,
        63000.00,
        '2020-11-27'
    ),
    (
        'Katie Edwards',
        8,
        51000.00,
        '2021-09-09'
    ),
    (
        'Liam Flores',
        5,
        55000.00,
        '2018-03-14'
    ),
    (
        'Mia Gonzalez',
        9,
        73000.00,
        '2020-02-22'
    ),
    (
        'Noah Hernandez',
        10,
        78000.00,
        '2021-10-16'
    );

SELECT * FROM employees;

SELECT * FROM departments;

SELECT
    employee_id,
    employee_name,
    department_name
FROM employees as e
    INNER JOIN departments as d ON e.department_id = d.department_id;

SELECT
    employee_id,
    employee_name,
    department_name
FROM employees
    INNER JOIN departments USING (department_id);

SELECT
    employee_id,
    employee_name,
    department_name
FROM employees
    NATURAL JOIN departments;

-- Show department name with average salary

SELECT department_name, AVG(salary)
FROM employees as e
    INNER JOIN departments as d ON e.department_id = d.department_id
GROUP BY
    department_name;

SELECT department_name, AVG(salary)
FROM employees
    INNER JOIN departments USING (department_id)
GROUP BY
    department_name;

SELECT department_name, avg(salary)
from employees
    NATURAL JOIN departments
GROUP BY
    department_name;

-- Count employees in each department
SELECT department_name, count(salary)
from employees
    NATURAL JOIN departments
GROUP BY
    department_name;

-- Find the department name with the height average salary

SELECT department_name, round(avg(salary)) as avg_salary
from employees
    NATURAL JOIN departments
GROUP BY
    department_name
ORDER BY avg_salary DESC
LIMIT 1;

-- count employee hired each year

SELECT EXTRACT( YEAR FROM '2025-12-25'::DATE );

SELECT count(*), EXTRACT(
        YEAR
        FROM hire_date
    ) as "Year"
FROM employees
GROUP BY
    "Year";

```

╔═══════════╦═╦═══════════╦═╦═══════════╦═╦═══════════╗
╚═══════════╩═╩═══════════╩═╩═══════════╩═╩═══════════╝

```sql

CREATE TABLE employees (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT
);

INSERT INTO
    employees (name, department, salary)
VALUES ('Rakib', 'IT', 50000),
    ('Akib', 'HR', 40000),
    ('Sakib', 'IT', 60000),
    ('Selim', 'Finance', 45000),
    ('Jamal', 'HR', 35000);

-- find which employee gets the highest salary
SELECT *
FROM employees
WHERE
    salary = (
        SELECT max(salary)
        FROM employees
    );

SELECT *
FROM employees
WHERE
    salary > (
        SELECT avg(salary)
        FROM employees
    );

SELECT *
FROM employees
WHERE
    salary = (
        SELECT max(salary)
        FROM employees
        WHERE
            department = 'HR'
    )

--!--\--\--\--\--\--\--\--\--|--/--/--/--/--/--/--/--/--!--

CREATE FUNCTION employee_count()
RETURNS INT
LANGUAGE SQL
AS
$$
    SELECT COUNT(*) FROM employees
$$;

SELECT employee_count ();

CREATE FUNCTION delete_emp_by_id(emp_id INT)
RETURNS void
LANGUAGE SQL
AS
$$
    DELETE FROM employees WHERE id = emp_id
$$;

SELECT delete_emp_by_id (5)

SELECT * FROM employees;

--!--\--\--\--\--\--\--\--\--|--/--/--/--/--/--/--/--/--!--

-- procedure

CREATE PROCEDURE delete_emp(emp_id INT)
LANGUAGE plpgsql
AS
$$
BEGIN
    DELETE FROM employees WHERE id = emp_id;
END
$$;

CALL delete_emp (4)

--

CREATE PROCEDURE increase_salary(dep_name VARCHAR(50))
LANGUAGE plpgsql
AS
$$
DECLARE avg_salary INT;

BEGIN

    SELECT AVG(salary) INTO avg_salary
    FROM employees
    WHERE
        department = dep_name;

    UPDATE employees
    set
        salary = salary * 1.1
    WHERE
        department = dep_name
        AND salary < avg_salary;

END
$$;

CALL increase_salary ('IT');

SELECT salary FROM employees WHERE department = 'IT'

--!--\--\--\--\--\--\--\--\--|--/--/--/--/--/--/--/--/--!--

-- Trigger

CREATE TABLE employee_logs (
    id SERIAL PRIMARY KEY,
    emp_name VARCHAR(50),
    action VARCHAR(25),
    section_time TIMESTAMP DEFAULT now()
);

CREATE TRIGGER save_employee_delete_logs
AFTER DELETE ON employees FOR EACH ROW
EXECUTE FUNCTION log_employee_deletion();

CREATE FUNCTION log_employee_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN
    INSERT INTO
        employee_logs (emp_name, "action")
    VALUES (OLD.name, 'DELETE');
    RETURN OLD;
END
$$;

SELECT * FROM employees;

SELECT * FROM employee_logs;

--!--\--\--\--\--\--\--\--\--|--/--/--/--/--/--/--/--/--!--

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    age INT
);

EXPLAIN
ANALYZE
SELECT *
FROM users
WHERE
    email = 'xwood@velasquez.com';

CREATE INDEX idx_users_email ON users (email);

DROP INDEX idx_users_email;
```

╔═══════════╦═╦═══════════╦═╦═══════════╦═╦═══════════╗
╚═══════════╩═╩═══════════╩═╩═══════════╩═╩═══════════╝
╔═══════════╦═╦═══════════╦═╦═══════════╦═╦═══════════╗
╠═══════════╣ ╠═══════════╣ ╠═══════════╣ ╠═══════════╣
╠═══════════╣ ╠═══════════╣ ╠═══════════╣ ╠═══════════╣
╠═══════════╣ ╠═══════════╣ ╠═══════════╣ ╠═══════════╣
╠═══════════╣ ╠═══════════╣ ╠═══════════╣ ╠═══════════╣
╠═══════════╣ ╠═══════════╣ ╠═══════════╣ ╠═══════════╣
╚═══════════╩═╩═══════════╩═╩═══════════╩═╩═══════════╝
╔═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╦═╗
╚═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╩═╝
╔══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╦══╗
╚══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╩══╝
╔══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦══╗
╚══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩══╝
╔════╦════╦════╦════╦════╦════╦════╦════╦════╦════╦════╗
╚════╩════╩════╩════╩════╩════╩════╩════╩════╩════╩════╝
╔═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╗
╚═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╝
╔═════════════════════════════════════════════════════╗
╚═════════════════════════════════════════════════════╝

```txt





╔══╗  ╔══════════════╦═════════════════╗  ╔══╦══════════════════════════════════╗
║  ║  ╠═══════════╗  ║  ╔══════════════╝  ╚══╝  ╔══════════════════╦═════════╗  ║
║  ║  ╚════════╗  ║  ║  ║  ╔════════════════════╬══╗  ╔═════════╗  ╚═════════╝  ║
║  ╚═════╦══╗  ║  ║  ║  ║  ║  ╔════════╦══╦══╗  ║  ║  ╚═════════╩═══════════════╣
║  ╔══╗  ║  ║  ║  ╚══╩══╝  ║  ║  ╔══╗  ║  ║  ║  ║  ╠═════════════════════════╗  ║
║  ║  ║  ║  ║  ╚═══════════╝  ║  ║  ║  ║  ║  ║  ║  ║  ╔══════════════════════╝  ║
║  ║  ╚══╝  ║  ╔══════════════╝  ║  ║  ╠══╝  ║  ║  ║  ╚══╗  ╔═══╦═══╦═══╦═══╦═══╣
║  ║  ╔══╦══╣  ║  ╔══════════════╝  ║  ╠═════╝  ║  ║  ╔══╝  ╚═══╩═══╩═══╩═══╩═══╣
║  ║  ╠══╬══╣  ║  ║  ╔══════════════╝  ║  ╔═════╝  ║  ╠═════════╦══╦═════════╗  ║
║  ║  ╚══╩══╝  ║  ║  ║  ╔══════════════╝  ║  ╔══╗  ║  ╚═════════╝  ╚═════════╝  ║
║  ╚════════╗  ╚══╩══╝  ║  ╔═══════════╗  ║  ╠══╣  ║  ╔═════════╗  ╔═════════╗  ║
║  ╔══╦══╗  ╠═══════════╩══╝  ╔════════╝  ║  ╠══╣  ╚══╩═════════╩══╩═════════╝  ║
║  ║  ║  ║  ╚═════════════════╝  ╔════════╝  ╚══╩═══════════════════════════════╣
║  ║  ╠══╣  ╔═══╗  ╔═══╦══╦═══╗  ║  ╔══════════════════════╗  ╔══╦══╦══╦══╦══╗  ║
║  ╠══╣  ║  ╠═══╩══╩═══╣  ╠═══╣  ║  ║  ╔═══════════════════╣  ╠══╬══╬══╬══╬══╣  ║
║  ║  ╠══╣  ╚══════════╩══╩═══╝  ╚══╝  ║  ╔══════════╦═════╝  ╚══╩══╩══╩══╩══╝  ║
║  ╠══╣  ╠════════════╦═══════════╦════╝  ╠══════════╣  ╔══╦══╦══╗  ╔══╦══╦══╗  ║
║  ║  ╠══╣  ╔═════════╝  ╔══╦══╗  ╠═══════╬══════════╝  ╚══╝  ╚══╩══╩══╝  ╚══╩══╣
║  ╚══╝  ╚══╝  ╔═════════╝  ║  ║  ╚═══════╩══════╦══╦════════╦═══════════════╗  ║
╠══╦══╦════════╩════════════╝  ╚══════════════╗  ║  ║  ╔══╗  ╚═══════════╦═══╝  ║
║  ║  ╚═══════════════════════════════════════╝  ║  ║  ║  ╚═══════════╗  ║  ╔═══╣
║  ║  ╔══╗  ╔══╗  ╔══════════════════════════════╝  ║  ╚═════╦════════╝  ║  ╚═══╣
║  ║  ║  ║  ╚══╝  ║  ╔══════════════════════════════╣  ╔══╗  ║  ╔════════╩═══╗  ║
║  ║  ║  ╚════════╝  ║  ╔═════╗         ╔══╦═════╗  ║  ║  ║  ║  ╚════════════╝  ║
║  ║  ╚══════════════╝  ╠═════╩══════╗  ╠══╩══╦══╣  ║  ║  ║  ╚══════════════════╣
║  ╚════════════════════╩════════════╩══╩═════╩══╝  ║  ║  ╚══════════════════╗  ║
╠════════════╗  ╔══╦════════════════════════════════╣  ╠═════════════════════╝  ║
║  ╔═════════╝  ╚══╝  ╔══════════════════════════╗  ║  ║  ╔══════════════════╗  ║
║  ╚══════════════════╩══════════════════╗  ╔════╝  ╚══╝  ╚══════════════════╝  ║
╚════════════════════════════════════════╩══╩═══════════════════════════════════╝





```
