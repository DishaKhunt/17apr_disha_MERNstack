//Write a program to concatenate the two strings using Operator Overloading

#include<iostream>
using namespace std;

class Concatenate
{
public :
    //data member
    string str;

    //Function to getdata
    void getdata()
    {
        cout<<"Enter the string :";
        cin>>str;

    }

    //define operator
    Concatenate operator +(Concatenate &str2)
    {
        //deefine object
        Concatenate str3;
        str3.str = str + str2.str;
        return str3;
    }

    //function to display
    void display()
    {
        cout<<"Concatenate String is : "<<str;
    }
};

int main()
{
    //define object
    Concatenate con1, con2 , con3;

    //get the data
    con1.getdata();
    con2.getdata();

    //Addditon of two string (concatenate string)
    con3 = con1 + con2 ;
    //display data
    con3.display();
    

    return 0;
}
