/*WAP to take 10 no. Input from user and find out …
3. How many Even numbers are there
4. How many odd numbers are there
5. Sum of even numbers
6. Sum of odd numbers 
 */

#include<stdio.h>

int main()
{
    int n, i;
    int even = 0, odd = 0;
    int sume=0;
    int sumo=0;

    for(i=0; i<10; i++)
    {
       printf("Enter the no. :");
       scanf("%d",&n);

       if(n % 2 == 0)
       {
         even++;
         sume = sume+n;

       }
       else{
         odd++;
         sumo = sumo+n;
       }
    }
    //How many even odd number
    printf("\nEven number : %d",even);
    printf("\nOdd number : %d",odd);

    //sum of even odd number
    printf("\nSum of Even Number: %d",sume);
    printf("\nSum of Odd number: %d",sumo);

    return 0;

}