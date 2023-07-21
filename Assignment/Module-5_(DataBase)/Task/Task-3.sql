/*3. Create table given below: Employee and Incentive*/

/*1. table - Employee*/
USE DBMS;

CREATE TABLE Employee
(
	Employee_id int(5) NOT NULL,
    First_name varchar(10),
    Last_name varchar(10),
    Salary int(20),
    Joining_date timestamp(60),
    Department varchar(20)    
);

INSERT INTO Employee (Employee_id, First_name, Last_name, Salary , Joining_date , Department) VALUES
('1' , 'John' , 'Abraham' , '1000000', '01-JAN-13 12.00.00 AM', 'Banking'),
('2' , 'Michael' , 'Clarke' , '800000', '01-JAN-13 12.00.00 AM' , 'Insurance'),
('3' , 'Roy' , 'Thomas' , '700000' , '01-FEB-13 12.00.00 AM' , 'Banking'),
('4' , 'Tom' , 'Jose' , '600000' , '01-FEB-13 12.00.00 AM' ,'Insurance'),
('5' , 'Jerry' , 'Pinto' , '650000' , '01-FEB-13 12.00.00 AM' , 'Insurance'),
('6' , 'Philip' , 'Mathew' , '750000' , '01-JAN-13 12.00.00 AM' , 'Services'),
('7' , 'TestName1' , '123' , '650000' , '01-JAN-13 12.00.00 AM' , 'Services'),
('8' , 'TestName2' , 'Lname%' , '600000' , '01-FEB-13 12.00.00 AM' , 'Insurance');

SELECT *FROM Employee;

/*2. table - Incentive*/
USE DBMS;

CREATE TABLE Incentive
(
	Employee_ref_id int(10),
    Incentive_date datetime(10),
    Incentive_amount int(10)
);

INSERT INTO Incentive (Employee_ref_id , Incentive_date , Incentive_amount) VALUES
('1' , '01-FEB-13' , '5000'),
('2' , '01-FEB-13' , '3000'),
('3' , '01-FEB-13' , '4000'),
('1' , '01-JAN-13' , '4500'),
('2' , '01-JAN-13' , '3500');

SELECT *FROM Incentive;

/*a) Get First_Name from employee table using Tom name “Employee Name”.*/
SELECT Frist_name FROM Employee;

/*b) Get FIRST_NAME, Joining Date, and Salary from employee table.*/
SELECT First_name , Joining_date , Salary FROM Employee;

/*c) Get all employee details from the employee table order by First_Name Ascending and Salary descending?*/
SELECT *FROM Employee 
ORDER BY First_name ASC, Salary DESC;

/*d) Get employee details from employee table whose first name contains ‘J’.*/
SELECT *FROM Employee 
WHERE First_name LIKE '%j';

/*e) Get department wise maximum salary from employee table order by salary ascending? */
SELECT MAX(Salary) as MAX_Salary 
FROM Employee 
GROUP BY Department 
ORDER BY Max_Salary ASC;

/*f) Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000*/
SELECT First_name , Incentive_amount
FROM Employee 
INNER JOIN Incentive 
ON Employee.Frist_name = Incentive.Incentive_amount 
WHERE Incentive_amount > 3000;

/*g) Create After Insert trigger on Employee table which insert records in view table*/
DELIMITER $$
		CREATE TRIGGER `trig` AFTER INSERT ON `Employee` FOR EACH ROW
        
	BEGIN
    
		INSERT INTO `Employee` SET Employee_id = new.Employee_id ,  First_name = new.First_name ,
        Last_name = new.Last_name , Salary = new.Salary , Joining_date = new.Joining_date , Department = new.Department ;
        
    END$$
    





