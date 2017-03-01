var number=1;
setInterval(myDivUpdate, 1000);

function myDivUpdate(){
    document.getElementById("1").innerHTML = number%10;
    document.getElementById("10").innerHTML = Math.floor(number/10)%10;
    document.getElementById("100").innerHTML = Math.floor(number/100)%10;
    document.getElementById("1000").innerHTML = Math.floor(number/1000)%10;
    document.getElementById("10000").innerHTML = Math.floor(number/10000)%10;
    document.getElementById("100000").innerHTML = Math.floor(number/100000)%10;
    number++;
}