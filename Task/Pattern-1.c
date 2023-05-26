/*
          1
         1 1
        1 2 1
       1 2 2 1          
      1 2 3 2 1
       2 3 3 2
        3 4 3
         4 4
          5

*/

#include<stdio.h>
int main()
{
    int i,j,k,n;
    int a = 1;

    printf("Enter the number :");
    scanf("%d", &n);

    for(i = 0 ; i <= n ; i++)
    {
        for(j = 0 ; j <n-i; j++)
        {
            printf(" ");
        } 
       
        
        for(k = 0 ; k < i ; k++)
        {
            printf("%d ",a);
        }
        printf("\n");
    }
    for(i = 1 ; i<=n ; i++)
    {
        for(j = 0 ; j< i ; j++)
        {
            printf(" ");
        }
        for(k = 4 ; k>= i; k--)
        {
            printf("* ");
        
        }

        printf("\n");

    }
}



