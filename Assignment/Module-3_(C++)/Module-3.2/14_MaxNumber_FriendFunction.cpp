//Write a program to find the max number from given two numbers using friend function

#include<iostream>
using namespace std;

class MaxNumber
{
private:
    int no;

public:

    //function to get data 
    void getdata()
    {
        cout<<"Enter the value of no : ";
        cin>>no;
    }

    //friend function to maximum
    friend int maximum(MaxNumber &num1, MaxNumber &num2);
};

//function to maximum
int maximum(MaxNumber &num1, MaxNumber &num2)
{
    //Condition
    if(num1.no<num2.no)
    {
        cout<<endl<<num2.no<<" is maximum number.";
    }
    else
    {
        cout<<endl<<num1.no<<" is maximum number.";
    }

    return 0;
};

int main()
{
    //define the object
    MaxNumber num1;
    MaxNumber num2;

    //get the data
    num1.getdata();
    num2.getdata();

    //Call the maximum function
    maximum(num1,num2);
    
    return 0;
}