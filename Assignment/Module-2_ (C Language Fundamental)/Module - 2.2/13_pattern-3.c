/*
     1
     2  3
     4  5  6
     7  8  9  10
     11 12 13 14 15
*/

#include<stdio.h>

int main()
{
    int i,j;
    int n=1;
    
    for(i = 1; i<=5 ; i++)   //outer loop
    {
        for(j = 1; j<=i ; j++)  //inner loop
        {
            printf("%d ",n++); 
        }
       
        printf("\n");
    }
    return 0;
}