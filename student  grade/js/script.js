 var name=prompt("enter the name");
 var a=parseInt(prompt("enter english mark"));
 var b=parseInt(prompt("enter tamil mark"));
 var c=parseInt(prompt("enter maths mark"));
 var d=parseInt(prompt("enter science mark"));
 var e=parseInt(prompt("enter social mark"));
 x=a+b+c+d+e;
 y=x/5
 alert(y);
 if(y>=90&&y<=100)
 {
	 alert("O grade")
 }
 if(y>=75&&y<=90)
 {
	 alert("A grade")
 }
 if(y>=50&&y<=75)
	 {
	 alert("B grade")
 }
 if(y>=35&&y<=50)
	 {
	 alert("C grade")
 }
 if(y<35)
	 {
	 alert("F")
 }
 
 