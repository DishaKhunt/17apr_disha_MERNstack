/*
    A
    B C
    D E F
    G H I J
    K L M N O
*/

#include<stdio.h>

int main()
{
    int i, j;
    char c ='A';

    for(i = 1; i<=5; i++)  //outer loop
    {
        for(j =1; j<=i; j++) //inner loop
        {
            printf("%c ",c++);
        }
        printf("\n");
    }

    return 0;                                                                                   
}