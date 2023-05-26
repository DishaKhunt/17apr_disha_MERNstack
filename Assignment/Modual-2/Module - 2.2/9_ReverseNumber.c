//WAP to print number in reverse order e.g.: number = 64728 ---> reverse = 82746

#include<stdio.h>
int main()
{
    int n,a;
    int revrse=0;
    printf("Enter the Number : "); // 12345
    scanf("%d",&n);

    while( n != 0)
    {
        a = n%10;                //12345%10 = 5,    1234%10 = 4,  123%10 = 3,   12%10=2         1%10 = 1
        revrse = revrse*10 +a;   // 0*10+5=5         5*10+4 = 54   54*10+3= 543  543*10+2= 5432  5432*10+1= 54321
        n= n/10;                 //12345/10 = 1234   1234/10= 123  123/10= 12    12/10= 1        1/10=0
    }

    printf("\n Reverse NUmber : %d", revrse); // 54321

    return 0;
}