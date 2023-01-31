/*button=document.createElement("button");
button.setAttribute("onclick","random()");
button.innerText="run";
document.body.appendChild(button);

function random() 
{
	var number = Math.ceil(Math.random()*10);
	document.write(number);
}

//x = Math.sqrt(676);
//x = Math.cbrt(125); 
//x = Math.abs(-90.79);
//x = Math.random();

//x = Math.floor(50.2);
//x = Math.random()*20;
//x = Math.pow(2,4); //(m,n)
//x = Math.floor(5.9); //returns the lowest integer
//x = Math.ceil(9.9); //returns the highest integer
//x = Math.round(8.2); 
//x = Math.acos(1); --
//x = Math.acos(0); --
//x = Math.acos(-1); --
//x = Math.trunc(89.12);
//x = Math.sign(-6); //positive 1, negative -1, zero 0
//x = Math.PI;
//x = Math.max(76,78,98);
//x = Math.min(76,78);
//x = Math.log(7);
x = Math.fround(7.3);
document.write(x)*/
 
 a=[1,5,5,6,8,2]    //sum
sum=0
for(i=0;i<a.length;i++)
{
	sum=sum+a[i];
}
document.write("sum=" +sum)

document.write("<br>")


a=[1,5,5,6,8,2]   //average
sum=0
for(i=0;i<a.length;i++)
{
	sum=sum+a[i];
	avg=(sum/a.length)
}
document.write("Average=" +avg)
document.write("<br>")

a=[1,5,5,6,8,2]    //even number
count=0

for(i=0;i<a.length;i++)
{
	if (a[i]%2==0)
		count++
}
document.write("even count=" +count)
document.write("<br>")


b=[1,5,5,6,8,2,5,7,7]     //oddnumber
count=0

for(i=0;i<b.length;i++)
{
	if (b[i]%2!=0)
		count++
}
document.write("odd count=" +count)
document.write("<br>")

                              
a=[1,2,4,3,7,-1,-3,-4,-5]     //positive negative
c=[]
t=[]
count=0
temp=0
for(i=0;i<a.length;i++)
{
	if (a[i]>0)
	{
		
		c.push(a[i])
		count++

	}
	else
	{
		t.push(a[i])
		temp++
	}
}
document.write(" positive="+c,"count="+count)
document.write("<br>")
document.write("negative="+t,"count="+temp)
document.write("<br>")

b=[1,5,5,6,8,2,5,7,7]   //duplicate
b.sort()
c=[]
document.write(b)
for (i=0;i<b.length-1;i++)
	{
	  if(b[i]!=b[i+1])
	  {
	  c.push(b[i])
	  }
	  
}
document.write("<br>")
document.write(c)
document.write("<br>")

a=[1,2,3,4,5,6]   //combine
b=[7,8,9,10]
c=(a+ "," +b)
document.write("Combine=" +c)
document.write("<br>")

/*n=parseInt(prompt("Enter a index"))   //delete index
b=[1,2,3,4,5,6,7,8]
c=[]
	delete b[n];
	c.push(b)
document.write(c) */

a=[600,650,1200,239]   //div by 4,5,3
c=[]
count=0
for(i=0;i<a.length;i++)
{
	if((a[i]%4==0) && (a[i]%5==0) && (a[i]%3==0))
		
	{
		c.push(a[i])
		count++
		
	}
	
}

	
document.write("div count=" +count)
document.write("<br>")


a=[121,234,131]  //not com
temp=[]
temp.push(a)
document.write(temp)
sum=0
count=0
for(i=0;i<a.length;i++)
{
	
	var rem=a[i]%10;       
	sum=rem+(sum*10);
	a=(a[i])/10;
	
}
    if(temp[i]==sum)
{
	count++
}
document.write("<br>")
document.write(count)
document.write("<br>")


let s = [2,12,22,16,4,8]
s.sort((a,b)=>a-b);
document.write("ascending="+s);
document.write("<br>")

let z = [2,12,22,16,4,8]
z.sort((a,b)=>b-a);
document.write("descending="+z);
document.write("<br>")


function sorting(q){
	for(i=0;i<q.length;i++)
	{
		
	for(j=0;j<q.length;j++)
	{
		if(q[j]>q[j+1])
	{
		t=q[j]
		q[j]=q[j+1]
		q[j+1]=t
			
	}	                 //third largest number
}
}
return q
	}
	
	
a=[1,2,3]
con=sorting(a)
//document.write(con)
len=con.length
document.write(a[len-])
document.write("<br>")




function sorting(q)
{
	for(i=0;i<q.length;i++)
	{
	for(j=0;j<q.length;j++){
		if(q[j]>q[j+1])
		{
			t=q[j]
		q[j]=q[j+1]
		q[j+1]=t
		console.log(t)
		}	                 //first and second smallest number
		}
}
return q
	}



a=[3,1,68,8,88,99]
x=sorting(a)
console.log(a)
document.write(a[0],a[1])
document.write(<br>)


a=[2,4,5,20,15,19]    //how many digits
c=0
for(i=0;i<a.length;i++)
{
	count++
}
document.write("Element count="+count)
document.write("<br>")

a=[600,650,1200,239]   //div by 4,5,3
c=[]
count=0
for(i=0;i<a.length;i++)
{
	if((a[i]%4==0) && (a[i]%5==0) && (a[i]%3==0))
		
	{
		c.push(a[i])
		count++
		
	}
	
}

	
document.write("div count=" +count)
document.write("<br>")


 
let ad = [2,12,22,16,4,8]   //merged sort array
ad.sort((a,b)=>a-b);
let bd=[1,3,7,23,40]
bd.sort((a,b)=>a-b);
for(i=0;i<bd.length;i++)
{
	ad.push(bd[i])
}
document.write(ad)
document.write("<br>")
ad.sort((a,b)=>a-b);
document.write(ad)
document.write("<br>")

a=[1,2,5,2,8,2,4,2] 
em=[]
sum=0                   //sum and average of even element
for(i=0;i<a.length;i++)
{
	if(a[i]%2==0)
	{
		sum=sum+a[i]
		em.push(a[i])
	}


	
}
avg = sum/em.length
document.write("avg=" +avg,"sum="+sum)
document.write("<br>")

a=[1,2,3,4,5]   //zigzag
b=[6,7,8,9,10]
dot=[]
for(i=0;i<a.length;i++)
{
	dot.push(a[i],b[i])
}
document.write("zigzag="+dot)
document.write("<br>")


a=[50,4,5,20,15,39]    //larg
let rese=a[0]
for(i=0;i<a.length;i++)
{
	if(a[i]>rese)
	{
		rese=a[i]
	}
}
document.write("largest="+rese)
document.write("<br>")

a=[2,4,5,20,1,19]   
let res=a[0]
for(i=0;i<a.length;i++)
{
	if(a[i]<res)
	{
		res=a[i]
	}
}

document.write("smallest="+res)
document.write("<br>")

var a=[2,30,345,2945,67437,123456,7890654];
var str="";
sum=0
for (i=0;i<a.length;i++)
 {
	 str+=a[i];
	 v=str.length;
	 console.log(a[i]+" " +"is:"+v+""+"digit number");
	 str="";
 }

const num = 28;
const checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};
console.log(checkPerfectNumber(num));