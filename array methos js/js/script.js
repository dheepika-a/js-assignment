/* //at return a specified index value 

a = [3,5,9,3,8,2]
b = 1
document.write(a.at(b))
document.write("<br>"); 
 
// concat merge two array

a = [3,5,9,3,8,2]
b = [76,23,67,43,66]
c = a.concat(b)
document.write(c)
document.write("<br>");


// fill (val,strt,end)

a = [3,5,9,3,8,2]
b = [3,5,9,3,8,2]
document.write(a.fill(0,4)) 
document.write("<br>");
document.write(b.fill(0,1,5))
document.write("<br>");

//copyWithin(tar,start,end)

a = [3,5,9,3,8,2,7,1]
document.write(a.copyWithin(0,1,6))
document.write("<br>");


//includes

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.includes("Orange"));
document.write("<br>");


//join return array as a string

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.join('-'));
document.write("<br>");


// lastindexof return spcfd value's index

fruits = ["Banana", "Orange", "Apple", "Mango","Banana"];
document.write(fruits.lastIndexOf("Banana"));
document.write("<br>");

//length

fruits = ["Banana", "Orange", "Apple", "Mango"];
l= fruits.length
document.write(l);
document.write("<br>");


//pop #removeslastelement

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.pop());
document.write("<br>");
document.write(fruits);
document.write("<br>");

//push #adds element in end

fruits = ["Banana", "Orange", "Apple", "Mango"];
z = fruits.push("papaya","pine")
document.write(z);
document.write("<br>");
document.write(fruits);
document.write("<br>");

//reverse

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.reverse());
document.write("<br>");


//shift #removes first element

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.shift());
document.write("<br>");
document.write(fruits);
document.write("<br>");

//unshift #length #addelements front

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.unshift("papaya","kiwi"));
document.write("<br>");
document.write(fruits);
document.write("<br>");

//slice

fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.slice(1,3));
document.write("<br>");
document.write(fruits.slice(-4,-2)); //start omittd
document.write("<br>");


//splice start,del coun,item

fruits = ["Banana", "Orange", "Apple", "Mango"];
z = fruits.splice(0,3,"papaya","kiwi")
document.write(fruits);
document.write("<br>");
document.write(z);
document.write("<br>");

//sort

months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
document.write(months);
document.write("<br>");


l= [1, 30, 4, 21, 10];
l.sort();
document.write(l);
document.write("<br>");

m= [1, 30, 4, 21, 10];
var res=m.map(function(value)
{
	return value*5;;
});
document.write(res);
document.write("<br>");

n= [1, 30, 12, 21, 10];
var res=n.find(function(value)  //return value
{
	return value%2==0;
});
document.write(res);
document.write("<br>");*/



words= ['spray', 'limit', 'elite', 'exuberant',];
var res= words.filter(word => word.length > 6);
document.write(res);
document.write("<br>")

const words1= ['spray', 'limit', 'elite', 'exuberant',]
words1.forEach(element => document.write(element," "));
document.write("<br>");

var num = [11,17,12,3,4,5,6,7,8,9];
let ee = num.find(function(value)
{
	return value >5
});
document.write(ee);
document.write("<br>");



//findIndex - return the index value of first element that passes the test
var num = [11,17,12,3,4,5,6,7,8,9];
let e = num.findIndex(function(value)
{
	return value %2==0
});
document.write(e);
document.write("<br>");

//findLast - return the value of last element that passes the test
var num = [11,17,22,13,54,15,66,24,20,9];
let no = num.findLast(function(value)
{
	return value%2==0
});
document.write(no);
document.write("<br>");

//indexOf - returns the position of a specified value in an array.
var o = ['cat','dog','goat','lion','tiger','dog']; //item,start
var p = o.indexOf("dog");
var j = o.indexOf("dog",2);
document.write("indexOf : "+p);
document.write("<br>");
document.write("indexOf : "+j);
document.write("<br>");

//some - atleast one element satisfy the condition it will return true
let ax = [23,45,78,13,29];
var xa = ax.some(function(value)
{
	return value>=25
});
document.write("some : "+xa);
document.write("<br>");

let dp = [23,45,78,13,29];
var pph = dp.every(function(value)
{
	return value>=25
});
document.write("every : "+pph);
document.write("<br>");

//reduce  
var salary = [1,2,3,4,5];
var total = salary.reduce(function(previousVal,currentVal)
{
	return previousVal+currentVal;
	
})
document.write("reduce : "+total)
document.write("<br>");

//reduceRight
var salaryy = [1,2,3,4,5];
var totall = salaryy.reduceRight(function(previousVal,currentVal)
{
	return previousVal+currentVal;
})
document.write("reduceRight : "+totall)