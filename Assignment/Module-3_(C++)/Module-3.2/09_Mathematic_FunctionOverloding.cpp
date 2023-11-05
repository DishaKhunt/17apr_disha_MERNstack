/*Write a program to Mathematic operation like Addition, Subtraction,Multiplication, Division Of two number using 
 different parameters and Function Overloading
*/

#include<iostream>
using namespace std;

class Mathematic
{
public:
    //Fujnction overloading

    //Function to mathematic in additon 
    int mathematic(int a ,int b)
    {
        return a+b;
    }

    //function to mathematic in subtraction
    double mathematic(int a, double b)
    {
        return a-b;
    }

    //function to mathematic in Multiplication
    double mathematic(double a,double b)
    {
        return a*b;
    }

    //function to mathematic in division
    float mathematic(float a , float b)
    {
        return a/b;
    }
    
};

int main()
{
    //data member
    int num1;
    int num2;
    double num3;
    double num4;
    float num5;
    float num6;

    // take the input from user
    cout << "Enter the first number :";
    cin >> num1;
    cout << "Enter the second number :";
    cin >> num2;
    cout << "Enter the third number :";
    cin >> num3;
    cout << "enter the forth number :";
    cin >> num4;
    cout << "enter the fifth number :";
    cin >> num5;
    cout << "enter the six number :";
    cin >> num6;
    
    cout << "\n-----------------------------------------------------------------------------------------\n\n";

    //define object
    Mathematic math;

    //Additon of two number
    cout<<"Addition : "<<math.mathematic(num1,num2)<<endl;
    
    cout << "\n-----------------------------------------------------------------------------------------\n\n";

    //Subtraction of two number
    cout<<"Subtraction : "<<math.mathematic(num1,num3)<<endl;

    cout << "\n-----------------------------------------------------------------------------------------\n\n";

    //Multiplication of two number
    cout<<"Multiplication : "<<math.mathematic(num3,num4)<<endl;

    cout << "\n-----------------------------------------------------------------------------------------\n\n";

    //Division of two number
    cout<<"Division : "<<math.mathematic(num5,num6)<<endl;

    cout << "\n-----------------------------------------------------------------------------------------\n\n";

    return 0;
}
