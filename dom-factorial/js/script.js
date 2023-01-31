  	var text= document.createElement("p");
	text.style.textAlign = "left";
	text.style.font="initial";
    text.style.font="italic bold 20px arial ";
    document.body.appendChild(text);
	text.innerHTML="FACTORIAL PROGRAM";
	document.write("<br/>", "<br/>");
 
 var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","dheep");
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	
	document.body.style.backgroundColor="lightpink";
	document.body.style.textAlign="left";
	document.body.style.paddingTop="290px";
	document.body.style.paddingLeft="190px";
	
	button=document.createElement("button");
	button.setAttribute("onclick","add()");
	button.innerText="run";
	button.style.backgroundColor="aqua";
	button.style.height="30px";
	button.style.width="70px";
   document.body.appendChild(button);
   

   function add()
{
var value1=document.getElementById("dheep").value;
var temp=1
for(i=1;i<=value1;i++)
{
   temp=temp*i;
   
	
}
document.write(temp);
document.body.style.backgroundColor="cornsilk";
document.body.style.textAlign="center";
document.body.style.padding="250";
}

