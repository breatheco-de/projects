function readyFunction(){
	var checkInt = setInterval(function() {
		var perc = parseFloat(document.getElementById('myProgressBar').getAttribute('aria-valuenow'));
		perc += (100-perc)/2;
		if (perc > 99.99) {
			clearInterval(checkInt);
			document.getElementById('theAlert').style.display = "";
			return;
		}
		document.getElementById('myProgressBar').style.width = perc+'%';
	}, 750);
}