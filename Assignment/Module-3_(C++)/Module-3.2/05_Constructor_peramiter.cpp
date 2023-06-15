//Write a program of Addition, Subtraction, Division, Multiplication using constructor.

#include<iostream>
using namespace std;

class Constuct
{

public:
    //peramiter consructor
    Constuct(float a, float b)
    {
      //Addition
      float add = a+b;
      cout<<"\nAddition : "<<add;
    
      //Subtraction
      float sub = a-b;
      cout<<"\nSubtraction : "<<sub;

      //Multiplication
      float mul = a*b;
      cout<<"\nMultiplication : "<<mul;

      //Division
      float div = a/b;
      cout<<"\nDivision : "<<div;
    }
};

int main()
{
  //data member
  float a; 
  float b;

  //get the value a and b
  cout<<"Enter the value of a : ";
  cin>>a;
  cout<<"Enter the value of  b : ";
  cin>>b;

  //define object
  Constuct con(a,b);

  return 0;

}
