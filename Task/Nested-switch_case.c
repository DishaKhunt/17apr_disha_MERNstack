//Nested switch case

#include<stdio.h>
int main()
{
    int food, burger,Pizza,Maggi,ColdDrink;
    
    printf("\n-----------------------Food Menu-----------------------------\n");
    printf("\n1.Burger\n2.Pizza\n3.Maggi\n4.Cold Drink");

    //take the user choice
    printf("\nEnter the choice : ");
    scanf("%d",&food);

    switch(food)
    {
        case 1:
           
           printf("\nBurger");
           printf("\n  1`.Classic aloo tikki\n  2.Punjabi Gabaru\n  3.Hot Chilli Lava\n  4.Chese Veg Crunch\n");

           //take the user choice
           printf("\nChoice the Burger : ");
           scanf("%d",&burger);

           switch(burger)
           {
                case 1:
                   printf("\nClassic aloo tikki\n");
                   break;
                case 2:
                   printf("\nPunjabi Gabaru\n");
                   break;
                case 3:
                   printf("\nHot Chilli Lava\n");
                   break;
                case 4:
                   printf("\nChese Veg Crunch\n");
                   break;
                default:
                   printf("\nNot available........");
                   break;
           }
           break;
        case 2:
            
            printf("\nPizza");
            printf("\n  1.Margherita Pizza\n  2.Double Cheese Margherita\n  3.Italian Pizza\n  4.Paneer Tikka Pizza\n");

            //take the user choice
            printf("\nChoice the Pizza : ");
            scanf("%d",&Pizza);

            switch(Pizza)
            {
                case 1:
                   printf("\nMargherita Pizza\n");
                   break;
                case 2:
                   printf("\nDouble Cheese Margherita\n");
                   break;
                case 3:
                   printf("\nItalian Pizza\n");
                   break;
                case 4:
                   printf("\nPaneer Tikka Pizza\n");    
                   break;
                default:
                   printf("\nNot available........");
                   break;
            }
            break;
        case 3:
            
            printf("\nMaggi");
            printf("\n  1.Plain Maggi\n  2.Vegetable Maggi\n  3.Cheese Maggi\n  ");

            //take the user choice
            printf("\nChoice the Maggi : ");
            scanf("%d",&Maggi);

            switch(Maggi)
            {
                case 1:
                   printf("\nPlain Maggi\n");
                   break;
                case 2:
                   printf("\nVegetable Maggi\n");
                   break;
                case 3:
                   printf("\nCheese Maggi\n");
                   break;
                default:
                   printf("\nNot available........");
                   break;
            }
            break;
        case 4:
           
            printf("\nCold Drink");
            printf("\n  1.Thums up\n  2.Coca Cola\n  3.Fanta\n  4.Sprite\n  ");

            //take the user choice
            printf("\nChoice the Cold Drink : ");
            scanf("%d",&ColdDrink);

            switch(ColdDrink)
            {
                case 1:
                   printf("\nThums Up\n");
                   break;
                case 2:
                   printf("\nCoca cola\n");
                   break;
                case 3:
                   printf("\nFanta\n");
                   break;
                case 4:
                   printf("\nSprite\n");
                default:
                   printf("\nNot available........");
                   break;
            }
            break;
        default:
            printf("\n Not available..............");  
            break;          
    } 
    return 0;


}