/*
var dheep=prompt("enter string");
var word=prompt("enter word");
var dot=dheep.split(" ");
var temp=0;
var i=0
while(i<dot.length)
{
    if(dot[i]==word) 
    {
        temp++;
    }
	i++
}
document.write(temp);*/

/*
var str="dheepika";
var arg="afd";
var count=0;
function f_startswith(arg)
{
	for(i=0;i<arg.length;i++)
	{
		if(str[i]!=arg[i])
		{
			return false;
		}
		count++;
		if(count==arg.length)
		{
			return true;
		}
	}
}
a=f_startswith(arg);
document.write(a);*/

 var person= {
	 name:"dheep",
	 age:20,
	 course:"python"
	 
 }
 
   person.name="sam"
   
   a=JSON.stringify(person)
   c=JSON.parse(a)
    console.log(a)
    console.log(c)
 document.write(a)
 document.write(c)























