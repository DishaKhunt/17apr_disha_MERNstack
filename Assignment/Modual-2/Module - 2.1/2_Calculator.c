//Write a program to make Simple calculator (to make addition, subtraction,multiplication, division and modulo)

#include<stdio.h>

int main()
{
    int a, b;
    int add;
    int sub;
    int mul;
    float div;
    int mod;
    

    printf("Enter the value of a : ");
    scanf("%d", &a);

    printf("Enter the value of b : ");
    scanf("%d", &b);

    //Addition
    add = a+b;
    printf("\nAddition of value a and b: %d", add);

    //Subtraction
    sub = a-b;
    printf("\nSubtarctin of value a and b: %d", sub);

    //Multiplication 
    mul = a*b;
    printf("\nMultiplication of value a and b: %d", mul);

    //Division
    div = (float)a/(float)b;
    printf("\nDivision of value a and b: %f", div);

    //Modualo
    mod = a%b;
    printf("\nModulo of value a and b: %d", mod);

    return 0;
}
    

