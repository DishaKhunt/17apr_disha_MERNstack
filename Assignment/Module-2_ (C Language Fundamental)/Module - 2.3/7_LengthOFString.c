//WAP Find out length of string without using inbuilt function

#include<stdio.h>

int stringLength(char str[])
{
    int len = 0;
    int i = 0;

   while(str[i] != '\0')
    {
        len++;
        i++;
    }
    return len;
}

int main()
{
    char str[100];
   
    //Input the string
    printf("Enter the value of string : ");
    scanf("%s",&str);
    
    //Length of String
    int length = stringLength(str);
    printf("\nLength of String is : %d",length);

    return 0;
}