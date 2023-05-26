//WAP to make addition, Subtraction and multiplication of two matrix using 2-D Array

#include<stdio.h>

int addition(int array1[3][3], int array2[3][3] , int add[3][3], int n)
{
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            add[i][j] = array1[i][j] + array2[i][j] ;
        }
    }
    //print the addition of matrix
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            printf("%d ",add[i][j]) ;
        }
        printf("\n");
    }

}

int subtraction(int array1[3][3], int array2[3][3] , int sub[3][3], int n)
{
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            sub[i][j] = array1[i][j] - array2[i][j] ;
        }
    }
    //print the subtraction of matrix
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            printf("%d ",sub[i][j]) ;
        }
        printf("\n");
    }
}

int multiplication(int array1[3][3], int array2[3][3] , int mul[3][3], int n)
{
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            mul[i][j] = 0;

            for(int k = 0 ; k < 3 ; k++)
            {
              mul[i][j] += array1[i][k] * array2[k][j] ;
            }
        }
    }
    //print the multiplication of matrix
    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3; j++)
        {
            printf("%d ",mul[i][j]) ;
        }
        printf("\n");
    }
}

int main()
{
    int n;
    int array1[3][3] ;
    int array2[3][3] ;
    int array3[3][3] ;
    int add[3][3];
    int sub[3][3];
    int mul[3][3];
    

    printf("Enter the value of n : ");
    scanf("%d", &n);

    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            printf("Enter the value of array1[%d][%d] : ",i,j);
            scanf("%d",&array1[i][j]);
        }
    }

    //print array1
    for(int i = 0 ; i<3 ; i++)
    {
        for(int j = 0 ; j <3 ; j++)
        {
            printf("%d ",array1[i][j]);
        }
        printf("\n");
    }

    printf("\n");

    for(int i = 0 ; i< 3 ; i++)
    {
        for(int j = 0 ; j<3 ; j++)
        {
            printf("Enter the value of array2[%d][%d] : ",i,j);
            scanf("%d",&array2[i][j]);
        }
    }

    //print Array2
    for(int i = 0 ; i<3 ; i++)
    {
        for(int j = 0 ; j <3 ; j++)
        {
            printf("%d ",array2[i][j]);
        }
        printf("\n");
    }

    //call Addition function
    printf("\nAdditon:\n");
    addition(array1 , array2 , add , n);
    
    //call subtraction function
    printf("\nSubtraction:\n");
    subtraction(array1 , array2 , sub , n);

    //call multiplication function
    printf("\nMultiplication:\n");
    multiplication(array1 , array2 , mul , n);
    
    return 0;
}



