/*Create a class person having members name and age. Derive a class student having member percentage. Derive another class teacher
having member salary. Write necessary member function to initialize, read and write data.Write also Main function (Multiple Inheritance)
*/

#include<iostream>
using namespace std;

//base class
class Person
{
    //data member
    string name;
    int age;

public:
    //function to initialize Data
    void initializeData()
    {
        cout<<"\nEnter the Person name : ";
        cin>>name;
        cout<<"Enter the person age : ";
        cin>>age;
    }
    
    //Function to Display data
    void display()
    {
        cout<<"\nName : "<<name<<endl;
        cout<<"Age : "<<age<<endl;
    }
};

//derived class
class Student : public Person
{
    //data member
    float percentage;

public:

    //Function to write data
    int writeData()
    {
        initializeData();
        cout<<"Enter the Percentage : ";
        cin>>percentage;

        return 0;
    }

    //function to Read data
    void readData()
    {
        cout<<"\n-----Student Information-----\n";
        display();
        cout<<"Percentage : "<<percentage<<"%"<<endl;
    }
};

//derived class
class Teacher :public Person
{
    //data member
    int salary;

public:
    //Function to write data
    int writeData()
    {
        initializeData();
        cout<<"Enter the salay : ";
        cin>>salary;

        return 0;
    }

    //Function to read data
    void readData()
    {
        cout<<"\n-----Teacher Information-----\n";
        display();
        cout<<"Salary : "<<salary<<endl;
    }
};

int main()
{
    //define object
    Student s;
    Teacher t;

    //Student Information
    //Write the student data
    s.writeData();
    //read the student data
    s.readData();

    cout<<"------------------------------------------------------------------------------------------------------------------";
   
    //Teacher Information
    //write the student data
    t.writeData();
    //read the student data
    t.readData();

    return 0;
}