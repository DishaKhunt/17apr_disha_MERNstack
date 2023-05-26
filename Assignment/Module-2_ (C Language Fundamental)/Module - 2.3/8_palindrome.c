// WAP to reverse a string and check that the string is palindrome or not

#include<stdio.h>
#include<string.h>

void reverse(char str[] , int n)
{
    for(int i=n ; i>=0 ; i--)
    {
        printf("%c",str[i]);
    }
}

void palindrom(char str[] , int n)
{
    int i = 0;
    while(i < n)
    {
        if(str[i] != str[n]) 
        {
           printf("\nString is not palindrom."); 
           return;
        }
           i++;
           n--;
    }
     printf("\nString is  palindrom.");  
}


int main()
{
    int n;
    char str[100];
    
    //input string
    printf("Enter the string is : ");
    scanf("%s", &str);

    //length of string
    int len = strlen(str);
    printf("String Length is : %d\n" , len);
   
    //call reverese function
    reverse(str, len-1);

    //call palindrom function
    palindrom(str, len-1);

    return 0;
}



