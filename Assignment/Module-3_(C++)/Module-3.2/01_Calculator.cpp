// WAP to create simple calculator using class

#include<iostream>
using namespace std;

class Calculator{

    int a,b;
public :

    //Function to getdata
    int getdata()
    {
         cout<<"Enter the value of a : ";
         cin>>a;
         cout<<"Enter the value of b : ";
         cin>>b;

         return 0;
    }

    //Function to add
    int add(){
      
      a += b;
      cout<<"\nAddition of two number : "<<a;

      return 0;
    }

    //Function to sub
    int sub()
    {
        a -= b;
        cout<<"\nSubtraction of tow number : "<<a;

        return 0;
    } 
   
    //Function tom mul
    int mul()
    {
        a *= b;
        cout<<"\nMultiplication of two number : "<<a;

        return 0;
    } 

    //Function to div
    int div()
    {
        a /= b;
        cout<<"\nDivision of two number : "<<a;

        return 0;
    } 

    //Function to mod
    int mod()
    {
        a %= b;
        cout<<"\nModulo of two number: "<<a;

        return 0;
    }
    

}cal;

int main()
{
    //get the data
    cal.getdata();

    //Additon 
    cal.add();

    //subtarction
    cal.sub();

    //Multipication
    cal.mul();

    //Division
    cal.div();

    //Modoulo
    cal.mod();

     return 0;
}