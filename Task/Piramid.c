/*  
             1
           1 2 1
         1 2 3 2 1
       1 2 3 4 3 2 1
     1 2 3 4 5 4 3 2 1
*/



/*   
 1
 2 1
 3 2 1
 4 3 2 1
 
*/


#include<stdio.h>

int main()
{
    int i,j,k,l;

    for(i = 1; i<=5 ; i++) // outer  loop
    {
        for(j = 5; j>= i; j--) //inner loop
        {
           
         printf("  "); // print space
            
        }
        for(k = 1; k<=i; k++) //inner loop 
        {
          printf("%d ",k);  //print the number
        }

        for(l = i-1 ; l>=1; l--)  //inner loop 
        {
          printf("%d ",l); //print the Number
        }

        printf("\n");     
        
    }

    return 0;
}