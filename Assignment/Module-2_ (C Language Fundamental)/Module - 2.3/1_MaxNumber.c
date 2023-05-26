// Write a program to find out the max number from given array using function

#include<stdio.h>
int findmaximum(int array[] , int n)
{
    //find maximum number
    int max = 0;
    for(int i = 0; i<n ; i++)
    {
        if(array[i] > max)
        {
            max = array[i];
        }
    }
    return max;
}

int main()
{
    int n;
    int array[n];
    
    //input the value of n
    printf("Enter the value of n : ");
    scanf("%d", &n);
    
    
    for(int i = 0 ; i < n ; i++)
    {
        printf("Enter the value of array : ");
        scanf("%d", &array[i]);
    }

    //print the value of array
    for(int i = 0 ; i<n ; i++)
    {
        printf("\nvalue of array : %d",array[i]);
    }

    //maximum number
    printf("\nMaximum number : %d", findmaximum(array,n)); // call findmaximum function

    return 0;
}

