//var a=parseInt(prompt("enter a a value"));
 //b=a**2;
 //alert(b);
 
//var a=parseInt(prompt("enter a a value"));
//b=a**3;
//alert(b);

/*
for(i=0;i<=5;i++)
{
	for(j=0;j<=5;j++)
	{
		document.write()
	}
	document.write("<br>")
}*/

/*
a="@#dheepi#$"
d=[]
for(i=a.length;i>=0;i--)
{
	
	d.push(a[i])
	console.log(d)
}*/

/*
str="AenkaT"
d=[]
for(var i=0;i<str.length;i++)
	{
		
		ans=str.charCodeAt(i)
		d.push(ans)
		
	}
console.log(d)

a=[65,97]
d=[]
for(var i=0;i<a.length;i++)
{
	ans=String.fromCharCode(a[i])
	d.push(ans)
}
console.log(d)

str=prompt("enter a string")
d=""
for(var i=0;i<str.length;i++)
{
	ans=str.charCodeAt(i)+3                    5
	                                           54
											   543
											   5432
											   54321
	res=String.fromCharCode(ans)
	d+=res
}
console.log(d)
	
*/
/*
a=5
for(i=1;i<=a;i++)
{
	for(j=1;j<=i;j++)
	{
		document.write(j)
	}
	document.write("<br>")
}
*/
/*
m=5
for(i=1;i<=5;i++)
{
	for(j=1;j<=i;j++)
	{
			document.write(m)
	}
	m-=1
	document.write("<br>")
}
*/
/*
a=5
for(;i>0;i--)
{
	for(j=i;j+1>i;j--)
	{
		document.write(j)
	}
	document.write("<br>")
}
*/
/*
function sathish(a)
{
for(i=0;i<a.length;i++)
{
	for(j=0;j<a.length;j++)
	{
		if(a[j]<=a[j+1])
		{
			
		}
		
	}
}
return a


c=[2,3,5,8,9,10,4]
x=sathish(c)
console.log(x)*/
function dheep(venkat)
{
	for(i=0;i<a.length;i++)
	{
		for(j=0;j<a.length;j++)
		{
		if(a[j]>a[j+1])
		{
			t=a[j]
			a[j]=a[j+1]
			a[j+1]=t
			
			
		}
		
			
			
		}
		
	}
	
	return venkat
}




a=[2,4,3,5,9,6,86,45,19]  //2,6,86   //3,5,9,19,45
x=dheep(a)
console.log(x)

odd=[]
even=[]
result=[]
for(i=0;i<x.length;i++)
{
   if(x[i]%2!=0)
		{
			odd.push(a[i])
		}
	
	
	
	if(x[i]%2==0)
	{
		even.push(a[i])
	}

}
console.log(odd,even)
for(i=0;i<a.length;i++)
{
	if(odd[i]!= null && even[i]!=null)
	{
	result.push(even[i],odd[i])
	}
	
}
console.log(result)















/*
a=5
b=5
c=2
z=(((b*c)+(a*c))&&(b+c+a))
console.log(z)*/
	


