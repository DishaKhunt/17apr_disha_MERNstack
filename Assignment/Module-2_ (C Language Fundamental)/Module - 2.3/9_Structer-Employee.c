//Write a program of structure employee that provides the following information -print and display empno, empname, address and age

#include<stdio.h>

// define structure
struct employee{
    // define data member
    int empno;
    char empname[30];
    char address[100];
    int age;
}emp; //defining the object


int main()
{
    printf("Enter the employee no. : ");
    scanf("%d", &emp.empno);
    printf("Enter the employee name: ");
    scanf("%s", &emp.empname);
    printf("Enter the employee address : ");
    scanf("%s",&emp.address);
    printf("Enter the employee age : ");
    scanf("%d",&emp.age);

    //print the employee details
    printf("\nemployee no. : %d",emp.empno);
    printf("\nemployee name. : %s",emp.empname);
    printf("\nemployee address : %s",emp.address);
    printf("\nemployee age : %d",emp.age);

    return 0;
}