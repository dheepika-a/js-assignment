var age=parseInt(prompt("enter the age"));
var gender=prompt("enter the gender");
if(gender=="male")
{
	if((age>20)&&(age<40))
	{
		alert("he may work anbwhere")
	}
	else if((age>40)&&(age<60))
	{
		alert("he may work urbun areas")
	}
	else{
		alert("he may not work in any areas")
	}
}
	
else if(gender=="female")
	{
		alert("she mab work in urban areas")
	}
	
else
{
	alert("ERROR")
}