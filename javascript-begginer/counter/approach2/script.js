var number=1;
setInterval(myDivUpdate, 1000);

function myDivUpdate(){

	var arrayOfDigits = number.toString().split("");
	var totalDigits = arrayOfDigits.length;
    
    //I commented this because is better to do a loop
    //setDigitToScreen(0,arrayOfDigits[totalDigits-1]);
    //setDigitToScreen(1,arrayOfDigits[totalDigits-2]);
    //setDigitToScreen(2,arrayOfDigits[totalDigits-3]);
    //setDigitToScreen(3,arrayOfDigits[totalDigits-4]);
    //setDigitToScreen(4,arrayOfDigits[totalDigits-5]);
    //setDigitToScreen(5,arrayOfDigits[totalDigits-6]);
    for(var i = totalDigits-1;i>=0;i--)
    {
    	setDigitToScreen(i,arrayOfDigits[totalDigits-(1+i)]);
    }
    
    console.log(arrayOfDigits);
    number++;
}

function setDigitToScreen(position, value)
{
	if(value) document.getElementById("dg"+position).innerHTML = value;
	else document.getElementById("dg"+position).innerHTML = 0;
}