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
    int num1 = 2;
    int num2 = 3;
    double num3 = 5;
    double num4 = 8;
    float num5 = 67;
    float num6 = 5;
    
    //define object
    Mathematic math;

    //Additon of two number
    cout<<"Addition : "<<math.mathematic(num1,num2)<<endl;

    //Subtraction of two number
    cout<<"Subtraction : "<<math.mathematic(num2,num4)<<endl;

    //Multiplication of two number
    cout<<"Multiplication : "<<math.mathematic(num3,num4)<<endl;

    //Division of two number
    cout<<"Division : "<<math.mathematic(num5,num6)<<endl;

    return 0;
}
