//WAP to swap two numbers without using third variable

#include<stdio.h>

int main()
{
    int a , b; // a=2 , b=3
    printf("Enter the value of a : ");
    scanf("%d", &a);
    printf("Enter the value of b: ");
    scanf("%d", &b);

    
    a = a+b; // 2+3=5
    b = a-b; // 5-3=2
    a = a-b; // 5-2=3

    //swapped value
    printf("\n\nSwapped the value of a: %d",a);
    printf("\nSwapped the value of b: %d",b);

    

    return 0;
}