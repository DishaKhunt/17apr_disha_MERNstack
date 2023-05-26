// WAP to take two Array input from user and sort them in ascending or descending order as per user’s choice

#include <stdio.h>

int ascending(int n, int array1[], int array2[])
{
    int temp;
    for (int i = 0; i < n; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if (array1[i] > array1[j])
            {
                temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if (array2[i] > array2[j])
            {
                temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
            }
        }
    }
    return 0;
}

int descending(int n, int array1[], int array2[])
{
    int temp;
    for (int i = 0; i < n; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if (array1[i] < array1[j])
            {
                temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp;
            }
        }
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = i+1; j < n; j++)
        {
            if (array2[i] < array2[j])
            {
                temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
            }
        }
    }
    return 0;
}

int main()
{
    int n;
    printf("Enter the number of n : ");
    scanf("%d", &n);

    int choice;
    int array1[n];

    for (int i = 0; i < n; i++)
    {
        printf("Enter the value of array1[%d] : ", i);
        scanf("%d", &array1[i]);
    }
    
    for (int i = 0; i < n; i++)
    {
        printf("\nvalue of array1 : %d", array1[i]);
    }
    printf("\n");
    int array2[n];

    for (int i = 0; i < n; i++)
    {
        printf("Enter the value of array2[%d] : ", i);
        scanf("%d", &array2[i]);
    }

    for (int i = 0; i < n; i++)
    {
        printf("\nvalue of array1 : %d", array2[i]);
    }

    printf("\n-----------------------------------------------------------------------------------------------------------\n");
    printf("\n1.Ascending\n2.Descending");

    printf("\nEnter the choice : ");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
        ascending(n, array1, array2);
        for (int i = 0; i < n; i++)
        {
            printf("%d  ", array1[i]);
        }
        printf("\n");
        for (int i = 0; i < n; i++)
        {
            printf("%d  ", array2[i]);
        }
        break;
    case 2:
        descending(n, array1, array2);
        for (int i = 0; i < n; i++)
        {
            printf("%d  ", array1[i]);
        }
        printf("\n");
        for (int i = 0; i < n; i++)
        {
            printf("%d  ", array2[i]);
        }
        break;

    default:
        printf("\nnot other choice.................");
    }
    return 0;
}
