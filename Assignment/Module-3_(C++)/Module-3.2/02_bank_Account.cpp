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
    int assignValue(string name ,double acc_number, string acc_type , double initialBalance)
    {
        depositor_name = name;
        account = acc_number;
        account_type = acc_type;
        balance = initialBalance;

        return 0;
    }

    //Function to deposit an amount
    int deposit(double amount)
    {
       
        balance += amount;

        cout<<"\nAmount : "<<amount <<".Deposit sucessfully!!!\n";
        return 0;
    }

    //Function to withdraw an amount after checking balance
    int withdraw(double amount)
    {
        if(amount <= balance)
        {
            balance -= amount;
            cout << "\nAmount withdrawn : " << amount <<"\n";
        }
        else
        {
            cout << "\nInsufficient balance. \n";
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
    // variable
    string name;
    double acc_number;
    string acc_type;
    double balance;
    double d_amount;
    double w_amount;


      //input take from the user's
    cout << "enter the depositor name :- ";
    cin >> name;

    cout << "enter the account number :- ";
    cin >> acc_number;

    cout << "enter the which type of account :- ";
    cin >> acc_type;

    cout << "enter the balance in account :- ";
    cin >> balance;

    cout << "enter the depoiste amount :- ";
    cin >> d_amount;

    cout << "enter the withdraw amount :-";
    cin >> w_amount;

    cout << "\n-----------------------------------------------------------------------------------------\n";

    //assign values
    account.assignValue(name  , acc_number , acc_type , balance);
    account.display();

    cout << "\n-----------------------------------------------------------------------------------------\n";
    


    //deposit amount
    account.deposit(d_amount);
    account.display();


    cout << "\n-----------------------------------------------------------------------------------------\n";
   

    //withdraw amount
    account.withdraw(w_amount);
    account.display();

    cout << "\n-----------------------------------------------------------------------------------------\n";
    return 0;

}