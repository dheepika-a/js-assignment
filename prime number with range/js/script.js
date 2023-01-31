number=parseInt(prompt("enter a range"));
for(i=2;i<=number;i++)
	{
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			{
				break;
			}
		}
		if(i==j)
	{
		console.log(i+ "is a prime number<br>");
	}
	}
	
