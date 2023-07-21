/*4. Create table given below: Salesperson and Customer*/
/*TABLE-1*/
/*TABLE NAME - SALSEPERSON*/
USE DBMS;

CREATE TABLE SALSEPERSON
(
	SNo int(5) PRIMARY KEY,
    SNAME varchar(10),
    CITY varchar(20),
    COMM varchar(10)
);

INSERT INTO SALSEPERSON(SNo , SNAME , CITY , COMM ) VALUES
('1001' , 'Peel' , 'London' , '.12'),
('1002' , 'Sarres' , 'SanJose', '.13'),  
('1004', 'Motika' , 'London' , '.11'),
('1007' , 'Rafkin' , 'Barcelona' , '.15'),
('1003' , 'Axelrod' , 'New York' , '.1');

SELECT *FROM SALSEPERSON;

/*TABLE-2*/
/*TABLE NAME - CUSTOMER*/
USE DBMS;

CREATE TABLE CUSTOMER
(
	CNM int(5) PRIMARY KEY ,
    CNAME varchar(20),
    CITY varchar(20),
    RATING int(10),
    SNo int(5),
    
     FOREIGN KEY(SNo) REFERENCES SALSEPERSON(SNo) 
);

INSERT INTO CUSTOMER(CNM , CNAME , CITY , RATING , SNo) VALUES
('201' , 'Hoffman' , 'London' , '100' , '1001'),
('202' , 'Giovanne' , 'Roe', '200' , '1003'),
('203' , 'Liu' , 'San Jose' , '300' , 1002),
('204' , 'Grass' , 'Barcelona' , '100' , '1002'),
('206' , 'Clemens' , 'London' , '300' , '1007'),
('207' , 'Peraira' , 'Roe' , '100' , '1004');

SELECT *FROM CUSTOMER;

/*Retrieve the below data from above table*/
/*a) All orders for more than $1000.*/
SELECT SNo 
FROM CUSTOMER 
WHERE SNo > 1000;

/*b) Names and cities of all salespeople in London with commission above 0.12*/
SELECT SNAME, CITYNAME 
FROM SALSEPERSON 
WHERE CITY = 'London' AND COMM > 0.12;

/*c) All salespeople either in Barcelona or in London*/
SELECT CITY 
FROM SALESPERSON 
WHERE CITY = 'London , Barcelon';

/*d) All salespeople with commission between 0.10 and 0.12. (Boundary values should be excluded).*/
SELECT *FROM SALSEPERSON 
WHERE COMM > 0.10 AND COMM < 0.12;

/*e) All customers excluding those with rating <= 100 unless they are located in Rome*/
SELECT *FROM COUSTOMER 
WHERE RATING > 100 OR CITY = 'Rome';




