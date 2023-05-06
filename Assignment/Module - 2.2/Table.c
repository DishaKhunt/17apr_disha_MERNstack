//WAP to print table up to given number

#include<stdio.h>

int main()
{
    int n;
    int i;
    int ans;

    printf("Enter the number : ");
    scanf("%d",&n);

    
    for(i=1; i<11; i++)
    {
         ans = n*i;
         printf("%d * %d = %d\n",n,i,ans);
    }

    return 0;
}
