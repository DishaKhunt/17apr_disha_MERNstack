//WAP to find number is even or odd using ternary operator

#include<stdio.h>

int main()
{
    int a;
    printf("Enter the value of a : " );
    scanf("%d", &a);

    //ternary operatorS
    (a%2 == 0) ?  (printf("%d is a Even number.",a)) : (printf("%d is a Odd number.",a));

    return 0;
}