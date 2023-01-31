

/*flag=true;
for(i=2;i<a;i++)
{
	if(a%i==0)
	{
		flag=false;
	}
	
}
if(flag==true)
{
	alert(i+ "It is an prime number")
}
else
{
	alert(i+ "It is not an prime number")
}
*/
/*
number=parseInt(prompt("enter a range"));
for(i=2;i<=number;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
	{
		console.log(i+ "is a prime number<br>");
	}
	}
	*/
/*
function name(parameter)
{
	statement;
	return expressrion;
}
console.log(name)*/

/*
function addition(c,d)
{
	return(c+d);
}
function subtraction(c,d)
{
	return(c-d);
}
function multiplication(c,d)
{
	return(c*d);
}
function division(c,d)
{
	return(c/d);
}

var a=parseInt(prompt("enter the a value"));
var b=parseInt(prompt("enter the b value")); 
var operation=prompt("enter the process"); 

if(operation=="addition")
{
	var x=addition(a,b);
	console.log(x);

}

else if(operation=="subtraction")
{
	var x=subtraction(a,b);
	console.log(x);

}
else if(operation=="multiplication")
{
	var x=multiplication(a,b);
	console.log(x);

}
else
{
	var x=division(a,b);
	console.log(x);

}*/
a="dheepika"
count=0;
debugger
for(i=0;i<a.length;i++)
 {
   if(a[i]!="a"|| a[i]!="e" || a[i]!="i" || a[i]!="o" || a[i]!="u") 
   {
     count++;
	 
   }
   console.log(count)
 }



