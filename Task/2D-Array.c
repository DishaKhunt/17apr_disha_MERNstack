#include<stdio.h>
int main()
{
    int array[5][5];
    int i,j;

    for(i = 0 ; i<3; i++)
    {
        for(j = 0; j<3 ; j++)
        {  

            printf("Enter the value of array[%d][%d] : ",i,j);
            scanf("%d",&array[i][j]);
        }
    }

    for(i = 0; i<3 ; i++)
    {
        for(j = 0; j<3 ;j++)
        {
            printf("%d ",array[i][j]);
        }
        printf("\n");
    }

    return 0;
}