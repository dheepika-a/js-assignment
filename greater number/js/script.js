var a=parseInt(prompt("enter a a value"));
var b=parseInt(prompt("enter a b value"));
var c=parseInt(prompt("enter a c value"));

if((a>=b)||(a>=c))
{
	alert("a is greater")
}

else if((b>=a)&&(b>=c))
{
	alert("b is greater")
}
else
{
	alert("c is greater");
}