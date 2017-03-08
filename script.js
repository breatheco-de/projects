$(document).ready(function(){
	$.ajax({
		url: './data.json',
		success: function(data){
			console.log(data);
		},
		error: function(p1,p2,errorThrown){
			alert(errorThrown);
		}
	})
});