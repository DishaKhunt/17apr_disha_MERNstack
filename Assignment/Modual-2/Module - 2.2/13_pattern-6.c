/*
     *
     * *
     * * *
     * * * *
     * * * * *
     * * * * * *
     * * * * *
     * * * *
     * * *
     * *
     * 
*/

#include<stdio.h>
int main()
{
    int i,j;

    for(i = 1; i<=6 ; i++) //outer loop
    {
        for(j = 1 ; j<=i; j++) //inner loop
        {
            printf("* "); //print *
          
        } 
        printf("\n");
        
    }
    for(i = 1; i<=5 ; i++) //outer loop
    {
        for(j = 5 ; j>=i; j--) //inner loop
        {
            printf("* "); //print *
          
        } 
        printf("\n");
        
    }
    
    return 0;
}