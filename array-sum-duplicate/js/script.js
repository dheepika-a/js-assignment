
var deep=[1,2,3,3,4,5,7,8]
sum=0
for(i=0;i<deep.length;i++)
{
	sum=sum+deep[i]
}
console.log(sum);

var deep=[1,2,3,3,4,5,7,8];
console.log(deep);
let dot=[];
deep.forEach(element => {
	if(!dot.includes(element))
	{
		dot.push(element)
	}
})
console.log(dot);

function odde(x)
{
	oddnumber=[];
	evennumber=[];
for(i=0;i<x.length;i++)
{
	if(x[i]%2!=0)
	{
		oddnumber.push(x[i]);
	}
	else
	{
		evennumber.push(x[i]);
	}
}}
l=odde(deep);
console.log(oddnumber)
console.log(evennumber)

