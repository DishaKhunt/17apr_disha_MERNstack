//Vowel or Consonant using switch case

#include<stdio.h>

int main()
{   
    char vowel;
    printf("------------------Vowel------------------------");
    printf("\n'a','e','i','o','u'\n");

    //take the user choice
    printf("\nEnter the choice : ");
    scanf("%c",&vowel);

    //use switch case
    switch (vowel)
    {
    case 'a':
        printf("a is vowel.");
        break;
    case 'e':
        printf("e is vowel.");
        break;
    case 'i':
        printf("i is vowel.");
        break;
    case 'o':
        printf("o is vowel.");
        break;
    case 'u':
        printf("u is vowel.");
        break;
    default:
        printf("That is Consonant.");
        break;
    }

    return 0;
}