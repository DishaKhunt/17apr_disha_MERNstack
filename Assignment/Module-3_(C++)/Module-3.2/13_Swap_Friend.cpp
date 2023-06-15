//Write a program to swap the two numbers using friend function without using third variable

#include<iostream>
using namespace std;

class Swap
{
private:
    //data member
    int no;
public:

    //function to getdata
    void getdata()
    {
        cout<<"Enter the value of no : ";
        cin>>no;
    }

    //friend function to swap
    friend int swap(Swap &n1, Swap &n2);

    //function to display
    void display()
    {
        cout<<"value is : "<<no<<endl;
    }
};

//function to swap
int swap(Swap &n1, Swap &n2)
{
    n1.no = n1.no + n2.no;
    n2.no = n1.no - n2.no;
    n1.no = n1.no - n2.no;

    return 0;
};

int main()
{
    //define object
    Swap n1;
    Swap n2;

    //get the data
    n1.getdata();
    n2.getdata();

    //display the swaped before value
    cout<<"\n------Swaped befor value-------"<<endl;
    n1.display();
    n2.display();

    //call the swap funtion
    swap(n1,n2);

    //display the swaped after value
    cout<<"\n------Swaped after value-------"<<endl;
    n1.display();
    n2.display();

    return 0;
}



