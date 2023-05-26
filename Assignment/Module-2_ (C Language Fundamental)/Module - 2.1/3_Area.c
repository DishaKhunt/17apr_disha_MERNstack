// WAP to find area of circle, rectangle and triangle

#include <stdio.h>

int main()
{
    int a, b, r;

    printf("Enter the value of a:");
    scanf("%d", &a);
    printf("Enter the value of b:");
    scanf("%d", &b);
    printf("Enter the value of r:");
    scanf("%d", &r);
    
    //area of circle
    float circle = 3.14 * (float)r * (float)r;
    printf("\nArea of Circle: %f", circle);

    //area of rectangle
    int rectangle = a * b; 
    printf("\nArea of Rectangle: %d", rectangle);

    //area of tringle
    float triangle = 0.5 * (float)a *(float)b;
    printf("\nArea of triangle: %f", triangle);

    return 0;
}
