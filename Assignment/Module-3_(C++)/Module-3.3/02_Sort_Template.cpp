//Write a program of to sort the array using templates

#include<iostream>
using namespace std;

//template
template <typename t>

//define class
class Sort
{
public:
    //data member
    t array[20];
    t i,j;
    t temp;
    //template function of getdata
    t getdata()
    {
        for(i = 0 ; i < 10 ; i++)
        {
            cout<<"Enter the value of array : ";
            cin>>array[i];
        }

        return 0;
       
    }

    //template function of sort
    t sort()
    {
        for ( i = 0; i < 10; i++)
        {
            for ( j = i+1; j < 10; j++)
            {
                if (array[i] > array[j])
                {
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        return 0;
    }

    //tempate function of showdata
    t showdata()
    {   
        cout<<"\nSort the array....."<<endl;

        for(i = 0; i< 10 ; i++)
        {
            cout<<array[i]<<", ";
        }

        cout<<endl;

        return 0;
    }

};

int main()
{
    //define object
    Sort <int> s1;

    //enter the value of array
    s1.getdata();

    //call the sort function
    s1.sort();

    //display the sorting array 
    s1.showdata();

    return 0;
}

