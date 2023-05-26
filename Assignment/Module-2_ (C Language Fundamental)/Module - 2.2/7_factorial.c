//WAP to print factorial of given number

#include<stdio.h>

int main()
{
    int n;
    int i;
    int fact=1;

    printf("Enter the number: ");
    scanf("%d",&n);
    
    //use for loop
    for(i=1; i<=n; i++)
    {
        fact = fact*i;
    }
    printf("\nFactorialof %d is : %d",n,fact);

    return 0;
}