// Write a program of to swap the two values using templates

#include<iostream> 
using namespace std;

//temlate
template <class t>

//template function of swap
t swap(t a, t b)
{
    /*a = a+b;
    b = a-b;
    a = a-b;
    */
    //data member
    t temp;

    temp = a;
    a = b;
    b = temp;


    //swaped the value
    cout<< "Swaped the value of a = "<<a<<endl;
    cout<< "Swaped the value of b = "<<b<<endl;

    return 0;

}

int main()
{
    //display swaped value
    cout<<"Swapped the value....."<<endl;

    //call the template function
    swap <int> (10,4);

    return 0;
}

