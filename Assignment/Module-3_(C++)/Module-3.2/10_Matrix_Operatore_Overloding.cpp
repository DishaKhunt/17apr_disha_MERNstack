//Write a Program of Two 1D Matrix Addition using Operator Overloading

#include<iostream>
using namespace std;

class Matrix
{
public :
    //data member
    int array[20];
    int i;

    //function to getdata
    int getdata()
    {
        for(i = 0 ; i<10 ; i++)
        {
            cout<<"ENter the value of array : ";
            cin>>array[i];
        }
        return 0;
    }

    //define oprator
    Matrix operator +(Matrix &op2)
    {
        //define object
        Matrix op3;

        for(i=0 ; i<10 ; i++)
        {
            op3.array[i] = array[i] + op2.array[i];
        }
        return op3;
    }

    //function to display
    int display()
    {
        for(i=0 ; i<10 ; i++)
        {
            //print the addition of 1D Matrix
            cout<<"Addition is matrix : "<<array[i]<<endl;
        }
        return 0;
    }

};

int main()
{
    //define object
    Matrix obj1, obj2;

    //get the data
    cout<<"-------------------------------------Array1----------------------------------------------"<<endl;
    obj1.getdata();
    cout<<"-------------------------------------Array2----------------------------------------------"<<endl;
    obj2.getdata();

    //Addition of array
    Matrix obj3;
    obj3 = obj1 + obj2;

    //Display data
    obj3.display();
    

    return 0;


}

