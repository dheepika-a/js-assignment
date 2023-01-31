/*var a=parseInt(prompt("enter a number"));

if(a%2==0)
{
	alert("a is a even number");
}
else
{
	alert("a is a odd number");
}*/

//ascending order



function dheep(m)
{

for(i=0;i<m.length;i++)
{
	for(j=0;j<i;j++)
	{
		if(m[i]>j+1)
		{
			t=m[i]
			m[i]=[j+1]
			m[j+1]=t
			
		}
		
	}
}
return  m
}
a[2,5,3,7,4,8,10,33,22]
x=dheep(a)

console.log(x)