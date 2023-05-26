// Structure is  a user define datatype
#include<stdio.h>
// define structure
    
struct student{

    // define data member
    int id;
    char name[30];
    int sub1;
    int sub2;
    int sub3;
     int total;
    int percantage;
    
};
int main()
{
    //defining the object
    struct student st[20];
    int i;
    int sub1;
    int sub2;
    int sub3;
    int total;
    int percantage;

    for (i = 0; i < 5; i++)
    {
        printf("Enter the student's id: ");
        scanf("%d", &st[i].id);
        printf("Enter the student's name: ");
        scanf("%s", &st[i].name);
        printf("Enter the student's sub1: ");
        scanf("%d", &st[i].sub1);
        printf("Enter the student's sub2: ");
        scanf("%d", &st[i].sub2);
        printf("Enter the student's sub3: ");
        scanf("%d", &st[i].sub3);

        total = sub1 +sub2 +sub3;
        printf("\n%d",st[i].total);

        percantage = total /3;
        printf("%d",st[i].percantage);
        
    }
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------------------\n");
    printf("id\t|\tName\t|\tsub1\t|\tsub2\t|\tsub3\t|\ttotal\t|\tpercentage\t|\tresult");
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------------------");
    
    for (i = 0; i < 5; i++)
    {
        printf("\n\t|\t%d\t|\t%s\t|\t%d\t|\t%d\t|\t%d\t|\t%d\t|\t%d\t|\t",st[i].id ,st[i].name,st[i].sub1,st[i].sub2,st[i].sub3,st[i].total,st[i].percantage);
    }
    printf("\n-----------------------------------------------------------------------------------------------------------------------------------------------");
    
    return 0;
}