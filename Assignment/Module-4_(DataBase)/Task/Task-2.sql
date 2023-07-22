/*2. Create table given below*/
USE DBMS;
CREATE TABLE Info
(
	FirstName varchar(10),
    LastName varchar(10),
    Address varchar(50),
    City varchar(20),
    Age int(5)    
);

INSERT INTO Info (FirstName , LastName , Address , City , Age )VALUES
('Mickey' , 'Mouse' , '123Fantasy Way' , 'Ahaheim' , '73'),
('Bat' , 'Man' , '321Cavern Ave' , 'gotham' , '54'),
('Wonder' , 'Women' , '987Truth Way' , 'Paradise' , '39'),
('Donald' , 'Duck' , '555Quck Strat' , 'Mallard' , '65'),
('Bugs' , 'Bunny' , '567Carrot Street' , 'Rascal' , '58'),
('Wiley' , 'Coyote' ,'999Acme Way' , 'Canyon' , '61'),
('Cat' , 'Women' ,'234purrfect Street' , 'Hairball' , '32' ),
('Tweety' , 'Bird' , '543' , 'Itotltaw' , '28');

SELECT *FROM Info;


