#include<stdio.h>
int main()
{
    char str[10];
    int len = 0;
    int i = 0;

    printf("Enter the value of string: ");
    scanf("%s",&str);

    while(str[i] != '\0')
    {
        len++;
        i++;
    }
    printf("\n length of the string is %d", len);
    return 0;

}