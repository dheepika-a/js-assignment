//n=prompt("enter the date mm-dd-yyy")
/*var dheep = new Date(n);
var d= dheep.getDay();

if(d==0)
{
	document.write("weekend");
}
else
{
	document.write("weekday");
}*/


var cdate=new Date();
yr=cdate.getFullYear();
mn=cdate.getMonth();
dt=cdate.getDate();
document.write("current date :"+mn+"-"+dt+"-"+yr+"<br>");

var dob=String(prompt("enter Date of Birth"));
var db=new Date(dob);
y=db.getFullYear();
m=db.getMonth();
d=db.getDate();
document.write("date of birth :"+m+"-"+d+"-"+y+"<br>");
var age
if((mn>m)&&(dt>d))
{
	age=yr-y
	document.write(age)
}
else if ((mn==m)&&(dt<d))
{
	age=yr-y-1
	document.write(age)
}
else
{
	age=yr-y-1
	document.write(age)
}
	