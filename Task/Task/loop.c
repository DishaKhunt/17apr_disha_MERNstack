//WAP only positive value print
#include<stdio.h>
int main()
{
    int n;
    int i;
    printf("Enter the positive number : ");
    scanf("%d",&n);
    for(i = 0; i<n; i++)
    {
        if(i>n)
        {
            continue;
        }
        printf("%d\n",i);
    }

    return 0;
}