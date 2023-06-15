/*Assume a class cricketer is declared. Declare a derived class batsman from cricketer. Data member of batsman. Total runs, 
Average runs and best performance. Member functions input data, calculate average runs, Display data. (Single Inheritance)
*/

#include<iostream>
using namespace std;


//base class
class Cricketer
{

public:
    //data member
    string name1;
    string name2;
    int playedMatch;

    //function to getdata
    int getdata()
    {
     cout<<"Enter the Cricketer name1 : ";
     cin>>name1;
     cout<<"Enter the Cricketer name2 : ";
     cin>>name2; 
     cout<<"Enter the no. of played Match : ";
     cin>>playedMatch;

     return 0;
    } 

};
//derived class
class Batsman : public Cricketer
{
public:
    //data member
    int totalRuns1;
    int totalRuns2;
    int avgRuns1;
    int avgRuns2;
    

    //function to inputdata
    int  inputdata()
    {
        getdata();
        cout<<"Enter the total runs for cricketer name1 : ";
        cin>>totalRuns1;
        cout<<"Enter the total runs for cricketer name2 : ";
        cin>>totalRuns2;
      
        return 0;
    }

    //function to avgruns
    int AvgRuns()
    {
        avgRuns1 = totalRuns1 / playedMatch;
        avgRuns2 = totalRuns2 / playedMatch;

        return 0;
    }

     //function of best performance
    int bestPeformance()
    {
        if (avgRuns1 > avgRuns2)
        {
            cout <<endl<< name1 << " is best performar. "<<endl;
        }
        else
        {
            cout <<endl<< name2 << " is best performer." <<endl;
        }
        return 0;
    }

    //function to display data
    void displaydata()
    {
        cout<<"\n-------------------Frist Batsman Information-----------------------------";
        cout<<"\nCricketer name : "<<name1<<endl;
        cout<<"Cricketer playmatch : "<<playedMatch<<endl;
        cout<<"The total Runs : "<<totalRuns1<<endl;
        cout<<"The Average Runs : "<<avgRuns1<<endl;

        cout<<"\n-------------------Second Batsman Information-----------------------------";
        cout<<"\nCricketer name : "<<name2<<endl;
        cout<<"Cricketer playmatch : "<<playedMatch<<endl;
        cout<<"The total Runs : "<<totalRuns2<<endl;
        cout<<"The Average Runs : "<<avgRuns2<<endl;    
        

    }

};

int main()
{
    //Define object
    Batsman b1;

    //input the data
    b1.inputdata();

    //call the function AvgRuns
    b1.AvgRuns();

    //Display batsman information
    cout<<"\n----------------------------------Batsman Information---------------------------------"<<endl;
    b1.displaydata();

    //best performance of batsman.
    b1.bestPeformance();


    return 0; 
}
