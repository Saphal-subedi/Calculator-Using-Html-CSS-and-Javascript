
let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
let saphal=11;
let sawfall=5;
if(saphal==11)
{
	screen.value="Turn ON first";
	saphal=saphal+1;
}
for(item of buttons)
{
	item.addEventListener('click',(e)=>
	{

		buttonText=e.target.innerText;
		console.log('Button text is',buttonText);

		if(buttonText=="ON"||saphal=='99')
		{
			
			if(sawfall==99)
			{
				screen.value="";
				sawfall=sawfall+1;
			}
			if(saphal=='12')
		{
			screen.value="";
			saphal=saphal+1;
		}
		if(buttonText=='X')
		{
			buttonText='*';
		 screen.value+=buttonText;
		}
		else if(buttonText=='+')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='-')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='/')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=="AC")
		{
         screen.value="";
		}
		else if(buttonText=="DEL")
		{
			screen.value=-buttonText;
		}
		else if(buttonText=='1')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='2')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='3')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='4')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='5')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='6')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='7')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='8')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='9')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='0')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='SIN')
		{
			 screen.value+=buttonText;
		}
		else if(buttonText=='.')
		{
			screen.value+=buttonText;
		}
		else if(buttonText=='=')
		{
			let A=eval(screen.value);
			screen.value=A;
		}
		saphal=99;
		if(buttonText=="OFF")
	  {
	    screen.value=""
	  	
	  	screen.value="Turn ON first";
	  	let sawfall=99;
	  }
	  }
	  

	})
}