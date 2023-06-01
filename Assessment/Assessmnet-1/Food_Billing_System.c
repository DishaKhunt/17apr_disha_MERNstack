#include<stdio.h>
int amount = 0;

void displayMenu()
{
  int food,n,price;

   
  //Food items
  printf("\n--------------------------Food Menu--------------------------\n");
  printf("\n1.Pizza               price = 180rs/pcs");
  printf("\n2.Burger              price = 120rs/pcs");
  printf("\n3.Dhosa               price = 100rs/pcs");
  printf("\n4.Idali               price = 50rs/pcs");

  //please Enter your choice
  printf("\nPlease enter your choice : ");
  scanf("%d",&food);


  //use Switch Case
  switch(food)
  {
    case 1:
      printf("\nYou have selcted the Pizza.");
      
      //enter the quantity of choice
      printf("\nEnter the quantity : ");
      scanf("%d",&n);
     
      //Amount
      price= 180*n;
      printf("Amount : %d",price);
      
      break;

    case 2:
      printf("\nYou have selected the Burger.");

      //enter the quantity of choice
      printf("\nEnter the quantity : ");
      scanf("%d",&n);
       
      //Amount
      price= 120*n;
      printf("Amount : %d",price);
           
      break;

    case 3:
      printf("\nYou have selected the Dhosa.");

      //enter the quantity of choice
      printf("\nEnter the quantity : ");
      scanf("%d",&n);

      //Amount
      price= 100*n;
      printf("Amount : %d",price);
           
      break;

    case 4:
      printf("\nYou have selected the Idali.");

      //enter the quantity of choice
      printf("\nEnter the quantity : ");
      scanf("%d",&n);

      //Amount
      price= 50*n;
      printf("Amount : %d",price);
           
      break;

    default:
      printf("\nPlease enter a valid choise........");
      break;

  }
  
  //total amount of food bill
  amount+=price;
  printf("\nTotal Amount is : %d",amount);

}

int main()
{
  int food,n,price;
  char order[5];

  do
  {
    //call  displayMenu function
    displayMenu();

    //do you want to any order 
    printf("\nDo you want place more order ? y & n :  ");
    scanf("%s",&order);

    if( order[0] == 'n' || order[0] == 'N')
    {
      break;
    }
  
  }while(order[0] == 'y' || order[0] == 'Y');

  return 0;
}






