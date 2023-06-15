/*Write a program to calculate the area of circle, rectangle and triangle using
Function Overloading
 Rectangle: Area * breadth
 Triangle: ½ *Area* breadth
 Circle: Pi * Area *Area
*/

#include<iostream>
using namespace std;

class Area 
{
public:

    //function overloding
    //function to area in return the area of rectangle
    int area(int area , int breadth)
    {
        return area * breadth;
    }

    //function to area in return the area of triangle
    float area(int area , float breadth)
    {
        return 0.5 * area * breadth;
    }

    //function to area in return the area of circle
    double area(int area)
    {
        return 3.14 * area * area;
    }
};

int main()
{
    //data member
    int area = 12;
    int breadth1 = 5;
    float breadth2 = 6;

    //define the object
    Area a;

    //Area of rectangle
    cout<<"Area of Rectangle : "<<a.area(area,breadth1)<<endl;

    //Area of triangle
    cout<<"Area of Triangle : "<<a.area(area,breadth2)<<endl;
 
    //Area of Circle
    cout<<"Area of circle : "<<a.area(area)<<endl;

    return 0;
}

