/*a=parseInt(prompt("enter a number"));
sum=0
temp=a
while (a>0)
{
	var rem=a%10;       
	sum=rem+(sum*10);
	a=(a-rem)/10;
	console.log(sum)
}
    if(temp==sum)
{
		console.log("given number is palindrome");
}
	else
{
		console.log("given number is not a palindrome");
}*/

/*	
ar=prompt("enter a word")

if ((ar >= "a" && ar <= "z")||(ar >= "A" && ar <= "Z"))
{
	console.log("given character is string")
}
else if(ar>= 0 && ar<= 9)
{
	console.log("given char is number")
}
else{
	console.log("given char is special character")
}
*/
/*
var inp = document.createElement("button")
    inp.setAttribute("onclick","fun()")
    inp.innerHTML="run"
	document.body.appendChild(inp)
	
	
function fun()
{
a=Math.random()*20
x=Math.round(a)
document.write(x)
}
*/
/*
dob=prompt("enter a year")
mydate=new Date(dob)
yr=mydate.getFullYear()
dte=mydate.getDate()
mnt=mydate.getMonth()
console.log(yr)

agedate=new Date()
console.log(agedate)
x=agedate.getFullYear()
dte1=agedate.getDate()
mnt1=agedate.getMonth()
console.log(x)
age=x-yr
if(mnt>=mnt1)
{
	
	d=x-yr
	console.log(d)
}
else
{
	c=x-yr-1
	console.log(c)
}
//console.log(age)
*/

/*
a=[100,4,6,7,15,9,15,4,100]
c=[]
a.sort((a,b)=>a-b)
console.log(a)
for(i=0;i<a.length;i++)
{
if(a[i]==a[i+1])
{
	c.push(a[i])
	console.log(c)
}
}
console.log(c)
*/

/*
n=prompt("enter the date mm-dd-yyy")
var dheep = new Date(n);
var d= dheep.getDay();

if(d==0 || d==6)
{
	document.write("weekend");
}
else
{
	document.write("weekday");
}
*/

/*
a=["@","#","d","h","e","e","p","i","k","a","$","#"]
for(i=0;i<a.length;i++)
{
	if(a[i])
	
}*/

/*
let input = "@#monisha*&";
let specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\ ";
let strArr = input.split("");
let reversed = "";

for (let i = 0; i < strArr.length; i++) {
    if (specialChars.indexOf(strArr[i]) === -1) {
      reversed = strArr[i] + reversed;
    } else {
      reversed = reversed.slice(0, i) + strArr[i] + reversed.slice(i);
    }
}
console.log(reversed); // output: "@#ahsinom*&"*/

/*
a=123
sum=0
while(a>0)
{
	rem=a%10;
	sum=sum-(rem)
	a=(a-rem)/10
	console.log(sum)
}
*/

var a = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,9] 
  let count = {};

  for (let i = 0; i < a.length; i++) 
  {
    if (count[a[i]])
		{
      count[a[i]]++;
        } 
	else 
	{
      count[a[i]] = 1;
    }
  }
	console.log(count)















