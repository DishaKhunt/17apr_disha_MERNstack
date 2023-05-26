// WAP to find factorial using recursion

#include<stdio.h>
int fecto(int no)
{
    if(no <= 1){
        return 1;
    }
    else{
        // recursion
        return no * fecto(no -1);
    }
}
int main()
{
    int n;
    printf("Enter the value of the n: ");
    scanf("%d", &n);
    printf("Factorial of the %d is: %d", n, fecto(n));
    return 0;
}