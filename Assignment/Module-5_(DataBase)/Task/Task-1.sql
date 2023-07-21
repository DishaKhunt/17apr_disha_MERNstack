/*Task*/
/*1. Create Table Name : Student and Exam*/

CREATE DATABASE DBMS;

/*1. table - Student*/
USE DBMS;

CREATE TABLE Student
(
	RollNo int(5) PRIMARY KEY,
    Name varchar(10) ,
    Branch varchar(40)
);

INSERT INTO Student (RollNo , Name , Branch) VALUES
('1' , 'Jay' , 'Computer Science'),
('2' , 'Suhan' , 'Electronic and Com'),
('3' , 'Kriti' , 'Electronic and Com');

SELECT *FROM Student;

/*2. table - Exam*/
CREATE TABLE Exam
(
	RollNo int(5) NOT NULL,
    S_code varchar(10) NOT NULL,
    Marks varchar(5),
    P_Code varchar(5),
    
    FOREIGN KEY(RollNo) REFERENCES Student(RollNo) 
);

INSERT INTO Exam (RollNo , S_code , Marks , P_code)VALUES 
('1', 'CS11', '50', 'CS'),
('1', 'CS12', '60', 'CS'),
('2', 'EC101', '66', 'EC'),
('2', 'EC102', '70', 'EC'),
('3', 'EC101', '45', 'EC'),
('3', 'EC102', '50', 'EC');

SELECT *FROM Exam;



