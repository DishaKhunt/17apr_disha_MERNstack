//Write a program to find the multiplication values and the cubic values using inline function

#include<iostream>
using namespace std;

class value
{
public:

    //function to multiplication
    int multiplication(int a, int b)
    {
        return a*b;
    }

    //function to cubic
    int cubic(int n)
    {
        return n*n*n;
    }
};

int main()
{
    //define Object
    value val;

    //Multiplication value
    cout<< "Multiplication : "<<val.multiplication(2,4) <<endl;
    
    //cubic value
    cout<< "Cubic value is : "<<val.cubic(3)<<endl;

    return 0;

}
 