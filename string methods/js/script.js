var firstName="dheepika is good"; 
 var middleName="sumai";
 var lastName="moni";
 

a=firstName.charcAt(2);
document.write(a);
document.write("<br>");
 
b=firstName.length;  //shows the length //space too
document.write(b);
document.write("<br>");

c=firstName.concat(" ",lastName);
document.write(c);
document.write("<br>");

d=firstName.includes("d");  //true
document.write(d);
document.write("<br>");

e=firstName.startsWith("f"); 
document.write(e);
document.write("<br>");

f=firstName.endsWith("e"); 
document.write(f);
document.write("<br>");


h=firstName.repeat(5);  //repeat 5 times
document.write(h);
document.write("<br>");

i=firstName.replace(firstName,"dhee");  //repace with var 
document.write(i);
document.write("<br>");

q=firstName.padStart(25,"abc");
document.write(q);
document.write("<br>")


k=firstName.split(" ",3); 
document.write(k);
document.write("<br>")

m=firstName.toUpperCase(); 
document.write(m);
document.write("<br>")

n=firstName.trim(); //trimStart  //trimEnd
document.write(n);
document.write("<br>")


var firstName="dheepika"; 

//dheepi is my name
j=firstName.slice(-1); //sub
document.write(j);
document.write("<br>");

l=firstName.substr(2,6); // (0-8)0-7 //ln
document.write(l);
document.write("<br>")

o=firstName.substring(2,6); //between 1-5(1-4)
document.write(o);
document.write("<br>")

p=firstName.search("d");
document.write(p);
document.write("<br>")

g=firstName.indexOf("e",3);  //2
document.write(g);
document.write("<br>");

h=firstName.repeat(5);  //repeat 5 times
document.write(h);
document.write("<br>");

i=h.replaceAll("dheepi","moni");  //repace with var 
document.write(i);
document.write("<br>");


//regular expression

var l1="i Am am am dheepika";
var l2=/a/g;
document.write(l1.match(l2));
document.write("<br>");


var l3="is Am dheepika";
var l4=/IS/i;
document.write(l3.match(l4));
document.write("<br>");

var l3="is Am dheepika";
var l4=/IS/i;
document.write(l3.search(l4));
document.write("<br>");

var l5="i Am dheepika";
var l6=/A/i;
document.write(l5.match(l6));
document.write("<br>");

/*
c=0
dheep=prompt("enter the text")
var s="i will study and i will get good marks"
var  sp=s.split("")

for(i=0;i<s.length;i++)
{
	if(dheep===sp[s])
	{
	c+=1
}
}	
console.log(dheep,c)
*/


