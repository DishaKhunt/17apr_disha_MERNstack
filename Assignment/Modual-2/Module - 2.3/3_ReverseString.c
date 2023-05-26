// WAP to find reverse of string using recursion

#include<stdio.h>
#include<string.h>

int reverse(char str[], int start , int end)
{
    if(start >= end)
    {
        return 1;
    }

    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    //recursion
    reverse(str , start+1 , end-1);

}

int main()
{
    char str[100];
    
    //input the string
    printf("Enter the value of string : ");
    scanf("%s",&str);
    
    //length of string
    int len = strlen(str);
    
    //call reverse function
    reverse(str , 0 , len-1);
    
    //print reverse string
    printf("\nReverse String is : %s",str);

    return 0;
}