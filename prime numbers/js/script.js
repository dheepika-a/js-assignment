var num=parseInt(prompt("enter a number"));
sum=1;
for(i=2;i<=num-1;i++){
	if (num%i==0)
	{
		sum=0;
		break;
	}
}
if (flag==true)
{
		alert("prime number")
}		
else
	{
		alert("num is not a prime")
	}
	