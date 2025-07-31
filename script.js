
function firstNonRepeatedChar(str) {
 // Write your code here
	arr=[];
	for(x of str)
		{
		expr=RegExp(x,'g');
			if((str.match(expr)).length==1)
			{
				arr.push(x);
			}
		}
	if(arr.length==0)
	{
		return(null);
		
	}
	else 
	{
		return(arr);
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
