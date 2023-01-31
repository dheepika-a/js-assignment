/*var ch = prompt("Enter the character");


if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
	console.log ("The Given Character is a Letter"); 
 
else if (ch >= "0" && ch <= "9")
	console.log  ("The Given Character is a Number");


else
	console.log("The Given Character is a Special Character");*/

//a=[[1,2,3,4,5],3]  // get first element
//console.log(a[0])


/*a=[[3,4,5],[2,3,4] ] 
len=a.length               // get last element
console.log(a[len-1])*/

//a=["red","green","yellow","blue"]
//c=a.join("+")
//console.log(c)
/*
a=[0,2,5,4,6,8]
c=[]
for(i=0;i<=a.length;i++)
{
	    if(a[i]%2!=0)
		{
		c.push(a[i])
		}
		if(a[i]%2==0)
		{
		c.push(-a[i])
		x=c.join("")
		}
		
		
		
}

console.log(x)*/
/*
a=[3,"a",2,5,"a","a","a","a"]
count=0
for(i=0;i<a.length;i++)
{
	if(a[i]>="a" && a[i]<="z")
	{
		count++
	}
	
	
	
}
console.log("a"+count+"times")*/

/*
a="The Quick Brown Fox"
c=""
for(i=0;i<a.length;i++)
{
	if(a[i]>="a" && a[i]<="z")
	{
		d=a[i].toUpperCase()
		c+=d
		
	}
	if (a[i]>="A" && a[i]<="Z")
	{
		d=a[i].toLowerCase()
		c+=d
	
	}
}
console.log(c)	*/

/*a=30
//c=a**0.5
d=a**1/3
c=Math.sqrt(a)
console.log(c)
console.log(d)*/



/*a=[1,2,3,4]
sum=0
sum1=1
for(i=0;i<a.length;i++)
{
	sum=sum+a[i]
	sum1=sum*a[i]
	
}
console.log(sum,sum1)*/

/*a=[]
a.push(20,21,22)
for(i=0;i<a.length;i++)
{
	console.log("elements"+i,a[i])
}*/

/*a=[1,2,3,4,5,5,6,6]
a.sort((a,b)=>(a-b))
c=[]
for(i=0;i<a.length;i++)
{
	if(a[i]!=a[i+1])
		c.push(a[i])
		
	
}
console.log(c)*/
/*a=["blue","Green","red"]
o=["th","st","nd","rd"]

for (i=0;i<=a.length;i++)
{
	for(j=0;j<o.length;j++)
	{
		
		console.log(o[j+1],a[i])
		
		
	}


}*/
/*
year=2005
if((year%4==0 && year%100!=0)||(year%400==0))
{
	console.log("this is leap year")
}
else
{
	console.log("this is not a leap year")

}*/
/*
a=[5,6,7,4,21]
f=[]
for(i=0;i<=a.length;i++)
{

	c=Math.random(5)*10
	kk=Math.trunc(c)
	console.log(kk)
	f.push(a[kk])
	
}
console.log(f)*/
/*
a=[1,2,3,4,5]
b=[1,2,3,4,5]
c=[]
for(i=0;i<a.length;i++)
{
	for(j=i;i<b.length;i++)
	{
		c.push(a[i]+b[i])
	}
	
}
console.log(c)*/

/*a=[1,2,8,8,9,9]   
a.sort((a,b)=>(a-b))
c=[]
for(i=0;i<a.length;i++)
{
	if(a[i]==a[i+1])
		c.push(a[i])
		
	
}
console.log(c)*/
/*
a=[1, 2, 3]
b=[100, 2, 1, 10]
c=a.concat(b)
c.sort((a,b)=>(a-b))
d=[]
for(i=0;i<c.length;i++)
{
	if(c[i]==c[i+1])
		d.push(c[i])
		
	
}
console.log(d)*/

//return values
/*
a=[NaN, 0, 15, false, -22, '',undefined, 47, null]
c=[]
for(i=0;i<a.length;i++)
{
	if((a[i]<0)||(a[i]>0))
	{
		c.push(a[i])
	}
}
console.log(c)

var a= [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
 c=""
 for(i=a.length-1;i>=0;i--)
 {
	d={"author":a[i]["author"],"title":a[i]["title"],"libraryID":a[i]["libraryID"]}
	 console.log(d)
}*/
/*
a=[1,2,2,3,3,4,5,5,5,7,4,4,4,4,4,]
c=[]
for(i=0;i<a.length;i++)
{
	count=1
	
	for(j=0;j<a.lenght;j++)
	{
		if(a[i]==a[j])
		{
		count=count+1
		}
		
	}
	console.log(count)
}
*/
/*
var table=parseInt(prompt("enter the number"));
var upto=16;
var count=1;


while(count<=upto){
	c=table * count;
    count=count+1;
	console.log(c)
}*/
/*
a=[[2,5,9,6],[5,2]]
c=[]
for(i=0;i<a.length;i++)
{
	str=a[i]
	for(j=0;j<str.length;j++)
	{
	if(str[j]!=5)
	{
		
		c.push(str[j])
	
		
	}
	
}


}
console.log(c)
*/
/*
a=[1,2,3,4,5,6,7,5,6,7]
x=a.splice(1,4,"dheep")
y=a.unshift(5)
//z=a.shift()
console.log(x)
console.log(y)
//console.log(z)
console.log(a)*/
/*
a=[[2,5,9,2],[5,2],[3,8]]
c=[]
d=[]
for(i=0;i<a.length;i++)
{
	str=a[i]
	str.sort()
	for(j=0;j<str.length;j++)
	{
	if(str[j]!=str[j+1])
	{
		
		c.push(str[j])	
	}
	
}
}
console.log(c)
c.sort()
for(i=0;i<c.length;i++)
{
	if(c[i]!=c[i+1])
	{
		d.push(c[i])
	}
}
console.log(d)*/

a=[1,2,35,6,7,9,7]






	