/*var num=parseInt(prompt("enter a number"))
var sum = 0;
var  temp = num;

var a=num;
var count=0;
while (a>0)
{
var rem=a%10;
a=(a-rem)/10;
count++;	
}	
while (temp > 0) 
{
    var rem = temp % 10;
    sum += rem ** count;
    temp = parseInt(temp / 10); 
}
if (sum == num) {
    console.log(sum+ "It is an Armstrong number");
}
else {
    console.log(sum+"It is not an Armstrong number");
}*/























function amstrong(num)
{

var sum = 0;
var  temp = num;

var a=num;
var count=0;
while (a>0)
{
var rem=a%10;
a=(a-rem)/10;
count++;	
}	
while (temp > 0) 
{
    var rem = temp % 10;
    sum += rem ** count;
    temp = parseInt(temp / 10); 
}
if (sum == num) 
{
    console.log(sum+ "It is an Armstrong number");
}
else 
{
    console.log(sum+"It is not an Armstrong number");
}
}

var x=parseInt(prompt("enter a number"))
var y=amstrong(x);

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 