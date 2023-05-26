// WAP to print Fibonacci series up to given numbers

#include<stdio.h>

int main()
{
    int n;
    int i;
    int a=0;
    int b=1;
    
    //input the number
    printf("Enter the number: ");
    scanf("%d",&n);

    for(i=1; i<=n; i++)
    {
       int sum = a+b;
       a = b;
       b = sum;
       
       //fibonaci series
       printf("%d , ",sum);
    }
}