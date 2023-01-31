var input=document.createElement("INPUT");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Enter a number:");
	input.setAttribute("id","note");
	document.body.appendChild(input);
	input.style.backgroundColor="lightgreen";
	document.write('<br/>');	
	document.write('<br/>');
	
	
	button=document.createElement("button");
	button.type="button";
	button.setAttribute("onclick","sub()")
	button.innerText="check";
   document.body.appendChild(button)

function sub()
{
val=Number(document.getElementById("note").value);
var sum = 0;
var  temp = val;

var a=val;
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
if (sum == val)
{
	document.write("it is an amstrong number" );
}
else
{
	document.write("it is not an amstrong number" );
}
}