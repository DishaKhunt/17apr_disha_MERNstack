//Write a program make a summation of given number (E.g., 1523 Ans:- 11)

#include<stdio.h>
int main()
{
    int array[5];
    int i;
    int sum =0;

    for(i = 0 ; i<5 ; i++)
    {
        printf("Enter the value of array : ");
        scanf("%d",&array[i]);
    }

    //print the array
    for(i = 0 ; i<5 ; i++)
    {
        printf("%d",array[i]);
    }

    //sumation of number
    for(i = 0 ; i<5 ; i++)
    {
        sum = sum + array[i];
    }

    printf("\nsumation of number : %d",sum);
    
    return 0;

}