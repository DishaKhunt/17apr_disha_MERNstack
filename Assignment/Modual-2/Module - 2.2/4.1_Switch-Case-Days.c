//WAP to show  1. Monday to Sunday using switch case

#include<stdio.h>

int main()
{
    int day;


    printf("----------------------Menu------------------------");
    printf("\n1.Monday\n2.Tuesday\n3.Wednesday\n4.Thursday\n5.Friday\n6.Saturday\n7.Sunday\n");

    
    //take the user choice
    printf("\nEnter the choice of day: ");
    scanf("%d",&day);

    //use switch case
    switch (day)
    {
    case 1:
        printf("\nMonday");
        break;
    case 2:
        printf("\nTuesday");
        break;
    case 3:
        printf("\nWednesday");
        break;
    case 4:
        printf("\nThursday");
        break;
    case 5:
        printf("\nFriday");
        break;
    case 6:
        printf("\nSaturday");
        break;
    case 7:
        printf("\nSunday");
    
    default:
        printf("not valid choice...");
        break;
    }

    return 0;
}