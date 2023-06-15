/*
 Define a class to represent a bank account. Include the following members:

  1. Data Member:
    -Name of the depositor
    -Account Number
    -Type of Account
    -Balance amount in the account

  2. Member Functions
    -To assign values
    -To deposited an amount
    -To withdraw an amount after checking balance
    -To display name and balance
*/

#include<iostream>
#include<string>

using namespace std;

class Bank_Account
{
    //data member
    string depositor_name; //Name of the depositor
    double account;        //Account Number
    string account_type;   //Type of Account
    double balance;        //Balance amount in the account

public :
   
    //Function to assign value
    int assignValue(string name ,double number, string type , double initialBalance)
    {
        depositor_name = name;
        account = number;
        account_type = type;
        balance = initialBalance;

        return 0;
    }

    //Function to deposit an amount
    int deposit(double amount)
    {
        balance += amount;

        cout<<"\nAmount : "<<amount <<".Deposit sucessfully!!!";
        return 0;
    }

    //Function to withdraw an amount after checking balance
    int withdraw(double amount)
    {
        if(amount <= balance)
        {
            balance -= amount;
            cout << "\nAmount withdrawn : " << amount;
        }
        else
        {
            cout << "\nInsufficient balance. ";
        }
        return 0;
    }

    //Function to display name and balance
    int display()
    {
        cout<<"\nAccounter name is : "<<depositor_name<<endl;
        cout<<"Account Number is : "<< account<<endl;
        cout<<"Account type is : "<< account_type<<endl;
        cout<<"Balance amount in the account : "<<balance<<endl;

        return 0;
    }
}account;

int main()
{

    //assign values
    account.assignValue("Disha"  , 20202024924 , "Saving" , 1000);

    //deposit amount
    account.deposit(2000);

    //withdraw amount
    account.withdraw(2300);

    //display Acount details
    account.display();

    return 0;

}