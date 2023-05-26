//WAP to find simple interest

#include <stdio.h>

int main()
{
    int p, t, r;

    printf("Enter the value of p:");
    scanf("%d", &p);
    printf("Enter the value of t:");
    scanf("%d", &t);
    printf("Enter the value of r:");
    scanf("%d", &r);

    float SI = ((float)p*(float)r*(float)t)/100;
    printf("\nSimple interest: %f", SI);

    return 0;
}
