/*
   1
   1 0
   1 0 1
   1 0 1 0
   1 0 1 0 1
*/

#include<stdio.h>

int main()
{
    int i,j;

    for(i = 1 ; i <= 5 ; i++)   //Outer for loop
    {
        for(j = 1 ; j <= i ; j++)  //inner for loop
        {
          
           if(j % 2 == 0)
            {
                printf("0 ");
            } 
            else
            {
                printf("1 ");
            }
       
        }
        printf("\n");
    }

    return 0;
}