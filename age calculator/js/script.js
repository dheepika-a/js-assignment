
var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter mm-dd-yyyy:");
	input1.setAttribute("id","dheep");
	input1.style.textAlign="center";
	input1.style.height="30px";
	input1.style.width="170px";
	input1.style.backgroundColor="palegreen";
	document.body.appendChild(input1);
	document.write('<br/>','<br/>');
	
	document.body.style.textAlign="center";
	document.body.style.marginTop="200px";
	document.body.style.backgroundColor="lightblue";
	document.body.style.height="400px";
	
	
	button=document.createElement("button");
	button.setAttribute("onclick","start()");
	button.style.height="30px";
	button.style.width="70px";
	button.innerText="Click";
    button.style.backgroundColor="plum";
   document.body.appendChild(button)
   
   val=document.createElement("p");
   val.setAttribute("id","nod")
   document.body.appendChild(val);



function start()
{
var dob=document.getElementById("dheep").value;
dat= new Date()
currentyear=dat.getFullYear()
console.log(currentyear)
var dat1 = new Date(dob);
const year = dat1.getFullYear(); 
age=currentyear-year;
val.innerHTML+=age;
document.body.style.textAlign="center";
}

