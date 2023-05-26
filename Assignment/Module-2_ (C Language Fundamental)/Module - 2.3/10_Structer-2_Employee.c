//Write a program of structure for five employee that provides the following information- print and display empno, empname, address and age

#include<stdio.h>
// define structure
struct employee{
    // define data member
    int empno;
    char empname[30];
    char address[100];
    int age;
};
int main()
{
    //defining the object
    struct employee emp[20];
    int i;
    for (i = 0; i < 5; i++)
    {
        printf("Enter the employee no. : ");
        scanf("%d", &emp[i].empno);
        printf("Enter the employee name: ");
        scanf("%s", &emp[i].empname);
        printf("Enter the employee address : ");
        scanf("%s",&emp[i].address);
        printf("Enter the employee age : ");
        scanf("%d",&emp[i].age);
    }
    printf("\n---------------------------------------------------------------------------------------\n");
    printf("\tempno\t|\tempname\t\t|\taddress\t\t|\tage");
    printf("\n---------------------------------------------------------------------------------------");
    for (i = 0; i < 5; i++)
    {
        //print employee information
        printf("\n\t%d\t|\t%s\t\t|\t%s\t\t|\t%d",emp[i].empno ,emp[i].empname ,emp[i].address ,emp[i].age );
    }
    printf("\n---------------------------------------------------------------------------------------");
    return 0;
}