//WAP to convert years into days and days into years

#include<stdio.h>

int main()
    {
        int year, day;

        printf("Enter the year: ");
        scanf("%d", &year);

        printf("Enter the day : ");
        scanf("%d", &day);

        // convert year into day
        int  Day= year * 365; 
        printf("\n Number of Days : %d",Day);

        // convert days into years
        int Year = day / 365;
        printf("\n Number of Year : %d" ,Year);

       
        return 0;

    }
