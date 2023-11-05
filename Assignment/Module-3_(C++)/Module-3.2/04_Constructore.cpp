//Write a program of Addition, Subtraction, Division, Multiplication using constructor.

#include<iostream>
using namespace std;

 //data member
    int num1, num2;

class Construct
{

public:

    
    //Constructor
    Construct() 
    {
        // addition
        int add = num1 + num2; 
        cout << "\n Addition of "<< num1 << " and " << num2 << " is : " << add;

        // substraction
        int sub = num1 - num2; 
        cout << "\n  Substraction of "<< num1 << " and " << num2 << " is : " << sub;

        // multiplication
        int mul = num1 * num2; 
        cout << "\n  Multiplication of "<< num1 << " and " << num2 << " is : " << mul;

        // divison
        int div = num1 / num2; 
        cout << "\n Division of "<< num1 << " and " << num2 << "  is : " << div;

    }
    
};

int main()
{
    //input take from the user's
    cout<<"enter the firsr number : ";
    cin>>num1;
    cout<<"enter the second number : ";
    cin>>num2;

    //define object
    Construct con;
    
    
    return 0;
}