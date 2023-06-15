//Write a program of Addition, Subtraction, Division, Multiplication using constructor.

#include<iostream>
using namespace std;

class Construct
{

public:

    //data member
    int a, b;
    
    //Constructor
    Construct()
    {
        cout<<"Enter the value of a : ";
        cin>>a;
        cout<<"Enter the value of b : ";
        cin>>b;
    }
    
    //Function to Addition
    int Addition()
    {
        a+=b;
        cout<<"\nAddition of value "<<a<<" and"<<b<<" is : "<<a;
        return 0;
    }

    //Function to subtraction
    int Subtraction()
    {
        a-=b;
        cout<<"\nSubtraction of value "<<a<<" and"<<b<<" is : "<<a;
        return 0;
    }

    //Function to Multiplication
    int Multiplication()
    {
        a*=b;
        cout<<"\nMultiplication of value "<<a<<" and"<<b<<" is : "<<a;
        return 0;
    }

    //Function to Divison
    int Division()
    {
        a/=b;
        cout<<"\nDivision of value "<<a<<" and"<<b<<" is : "<<a;
        return 0;
    }
};

int main()
{
    //define object
    Construct con;
    
    //Addtion
    con.Addition();

    //Subtraction
    con.Subtraction();

    //Multiplication
    con.Multiplication();

    //Division
    con.Division();

    return 0;
}