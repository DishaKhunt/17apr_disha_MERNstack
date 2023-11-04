//Write a program to find the multiplication values and the cubic values using inline function

#include<iostream>
using namespace std;

// global variable
int a;
int b;
int n;

class value
{
public:

    //function to multiplication
    inline int multiplication(int a, int b)
    {
        return a*b;
    }

    //function to cubic
    inline int cubic(int n)
    {
        return n*n*n;
    }
};

int main()
{
    //define Object
    value val;

    cout << "Enter the number of a : ";
    cin >> a;
    cout << "Enter the number of b : ";
    cin >> b;
    cout << "Enter the number of n : ";
    cin >> n;

    cout << "\n-----------------------------------------------------------------------------------------\n";

    //Multiplication value
    cout<< "Multiplication of "<< a << " and " << b << " is: " << val.multiplication(a,b) <<endl;
    
    //cubic value
    cout<< "Cubic value of "<< n << " is: "<<val.cubic(n)<<endl;

    cout << "\n-----------------------------------------------------------------------------------------\n";


    return 0;

}
 