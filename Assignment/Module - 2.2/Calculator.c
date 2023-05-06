//WAP to make Simple calculator (to make addition, subtraction,multiplication, division and modulo)


#include<stdio.h>

int main()
{
    char expression;
    int a, b;

    // Give the user choice
    printf("------------------------Menu--------------------------");
    printf("\n1.Addition(+)\n2.Subtraction(-)\n3.Division(/)\n4.Multiplication(*)\n");

    // Take the user choice
    printf("\nEnter the value of a,b and Expression : " );  
    scanf("%d%c%d", &a ,&expression, &b);

    switch (expression)
    {
    case '+' :
        a+=b;
        printf("\nAddition of the value a and b : %d",a);
        break;
    case '-' :
        a-=b;
        printf("\nSubtraction of the value a and b : %d",a);
        break;    
    case '*' :
        a*=b;
        printf("\nMultiplication of the value a and b : %d",a);
        break;
    case '/' :
        a/=b;
        printf("\nDivision of the value a and b : %d",a);
        break;
    default:
        printf("\nEnter valid choice...........");
        break;
    }

    return 0;


}