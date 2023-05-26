#include<stdio.h>
#include<string.h>
int main()
{
    char str[10];
    int len;

    printf("Enter the name : ");
    scanf("%s",&str);
    
    len = strlen(str);
    printf("String Length is : %d\n" , len);

    for(int i=len-1 ;i>=0; i--)
    {
        printf("%c",str[i]);
    }
    return 0;
}
