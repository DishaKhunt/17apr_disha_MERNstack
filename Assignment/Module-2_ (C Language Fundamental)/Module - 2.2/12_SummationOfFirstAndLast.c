//Write a program you have to make a summation of first and last Digit. (E.g.1234 Ans:-5)

#include<stdio.h>
int main()
{
    int n;
    int firstNumber ,lastNumber;
    int sum = 0;

    printf("Enter the Number : ");
    scanf("%d",&n);
   
    //find the lastdigit
    lastNumber = n%10;
    
    //find the firstdigit
    while( n > 9)
    
    {
       n = n/10;
    }
    firstNumber = n;
    
    //sumation of last and first digit
    sum = firstNumber +lastNumber;

    printf("\nSumation of First and Last Digit : %d", sum);

    return 0;
   
}