//Write a program to find out the max from given number (E.g., No:- 1562 Max number is 6)

#include<stdio.h>
int main()
{
     int array[5];
    int i;
    int max=0;
   
    for(i = 0; i < 5; i++)
    {
        printf("\nEnter the value of array[%d]:",i);
        scanf("%d", &array[i]); 
    }
  
    //print the array
    for(i = 0; i < 5 ; i++)
    {
        printf("%d", array[i]);
    }
      
    for( i = 0; i<5 ; i++)
    {
        if(array[i]>max)
        {
           //find max number
           max = array[i];
        }
    }

    printf("\nMaximum number : %d",max);
  
    return 0;

   
}