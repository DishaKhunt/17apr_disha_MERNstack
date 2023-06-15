/*Assume that the test results of a batch of students are stored in three different classes. 
Class Students are storing the roll number. Class Test stores the marks obtained in two subjects and 
class result contains the total marks obtained in the test. 
The class result can inherit the details of the marks obtained in thetest and roll number of students. (Multilevel Inheritance)
*/

#include<iostream>
using namespace std;

//base class
class Student 
{
    //data member
    int rollNo;

public:
    //Function to student roll no
    void studentRollNo()
    {
        cout<<"Enter the Student Roll Number : ";
        cin>>rollNo;
    }

    //function to display roll no
    void displayRollNo()
    {
        cout<<"Student Roll No. : "<<rollNo<<endl;
    }
    
     
};

//derived class
class Test : public Student
{
public:
    //data member
    int sub1;
    int sub2;

public:
    //function to subject marks
    void subjectMarks()
    {
        cout<<"Enter the 1st Subject Marks : ";
        cin>>sub1;

        cout<<"Enter the 2nd Subject Marks : ";
        cin>>sub2;
    }

    //funnction to display marks
    void displayMarks()
    {
        cout<<"1st Subject Marks : "<<sub1<<endl;
        cout<<"2nd Subject Marks : "<<sub2<<endl;
    }
     
};

//derived class
class Result : public Test
{
public:
    //data member
    int totalMarks;

public:
    //function to total marks 
    void TotalMarks()
    {
        totalMarks = sub1 + sub2;
    }

    //function to display result
    void displayResult()
    {
        displayRollNo();
        displayMarks();
        cout<<"Total Marks : "<<totalMarks<<endl;
    }
};

int main()
{
    //derived object
    Result r1;

    //input the student information
    r1.studentRollNo();
    r1.subjectMarks();
    r1.TotalMarks();

    //display student result
    cout<<"\n---------------------------Result--------------------------"<<endl;
    r1.displayResult();

    return 0;
    
}

