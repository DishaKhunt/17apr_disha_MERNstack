//WAP to print factorial of given number

#include<stdio.h>

int main()
{
    int n;
    int i;
    int a=0;
    int b=1;
    

    printf("Enter the number: ");
    scanf("%d",&n);

    for(i=1; i<=n; i++)
    {
       int sum = a+b;
       a = b;
       b = sum;

       printf("%d , ",sum);
    }
}