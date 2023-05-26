// WAP to demonstrate user is eligible for vote or not

#include<stdio.h>
int main()
{
    int age;
    printf("Enter the current age : ");
    scanf("%d", &age);

    (age>=18 && age<=60) ?  (printf("\nYou are eligible for vote.")) : (printf("\nyou are not eligible for vote."));

    return 0;

}