#include<stdio.h>
int table()
{
   
}
int main()
{
    FILE *fptr ;
    fptr = fopen("table.text","w");
    int n;
    int ans;

    printf("Enter the number : ");
    scanf("%d",&n);

    
    for(int i=1; i<11; i++)
    {
        ans = n*i;
        fprintf(fptr,"%d * %d = %d\n",n,i,ans);
    }

    fptr = fopen("table.text","r");
   
}