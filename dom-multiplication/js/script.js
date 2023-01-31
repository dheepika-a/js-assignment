var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","dheep");,
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	
	
var input2=document.createElement("INPUT");
	input2.setAttribute("type","text");
	input2.setAttribute("placeholder","Enter a range:")
	input2.setAttribute("id","sam");
    document.body.appendChild(input2);
	document.write('<br/>');
	document.write('<br/>');


	button=document.createElement("button");
	button.setAttribute("onclick","add()");
	button.innerText="run";
   document.body.appendChild(button)


function add()
{
	var value1=document.getElementById("dheep").value;
	var value2=document.getElementById("sam").value;
	var  i=1;
while(i<=value2)
{
 document.write(i+" * "+value1+" = " +i*value1+ "<br>");
i++;
}
}