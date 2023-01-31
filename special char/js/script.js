    var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a email:");
	input1.setAttribute("id","sam");
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	
	
	button=document.createElement("button");
	button.setAttribute("onclick","deep()");
	button.innerText="click";
    document.body.appendChild(button)
	
	
	p=document.createElement("div");
	p.classList.add("add");
    document.body.appendChild(p) ;
	
function deep()
/*
{
var dp=String(document.getElementById('sam').value);
var special= dp.replace(/[^a-zA-Z0-9]/g,"");
p.innerHTML+=special;
}
*/

{
var dp=String(document.getElementById('sam').value);
var special= dp.match(/[a-zA-Z0-9]/g);
p.innerHTML+=special;
}

