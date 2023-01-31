var year=parseInt(prompt("enter a number"))
if ((year%4==0) && (year%100!=0) || (year%400==0)) 
	{
        alert("Given year is leap year");
    } 
	else 
	{
        alert("Given year is not a leap year");
    }



