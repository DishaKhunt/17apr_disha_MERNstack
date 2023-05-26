/*
             *         
           * * * 
         * * * * *
       * * * * * * *
     * * * * * * * * * 
*/

#include<stdio.h>
int main()
{
     int i,j,k,l;

    for(i = 1; i<=5 ; i++)   //outer loop
    {
        for(j = 5; j>= i; j--) //inner loop
        {
           
                printf("  "); //print space
            
        }
        for(k = 1; k<=i; k++)  //inner loop
        {
            printf("* ");   //print *
        }

        for(l = 1 ; l<=i-1; l++)  //inner loop
        {
            printf("* ");  //print *
        }

        printf("\n");     
        
    }

    return 0;
}