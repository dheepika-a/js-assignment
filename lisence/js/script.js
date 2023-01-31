var age=parseInt(prompt("enter the age"));
var test=prompt("enter the result")

/*if((age>18)&&(test=="pass"))
{
	alert("person is eligible")
}
else if ((age>18)&&(test=="fail"))
{
	alert("person is not eligible go again to the 1st round")
}
else
{
	alert("person is not eligible")
}
*/

if(age>18)
{
	if(test=="pass")
	{
		alert("person is eligible")
	}
	else
	{
		alert("person is not eligible go again to the 1st round")
	}		
}
else
{
	alert("age is not elegible for lisence")
}