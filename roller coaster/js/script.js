

var age=prompt("enter the age");
var permission=prompt("enter parent permission");
if ((age>=16)&&(age<=50))
{

	alert("allowed to get ticket");

}
else if(age<16)
{	
	if(permission=="pass")
		{
	alert("parent permission allowed")
		}
	else
		{
		alert("parent permission not allowed")
		}
}		
else 
{
	alert("not allowed to get ticket");
}
