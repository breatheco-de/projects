
$(document).ready(function(){
	$.ajax({
		url: 'https://4geeksacademy.github.io/code-projects/data.json',
		cache: false,
		success: function(data){
			var projects = {};
			for(var i =0;i<data.length;i++){
				if(typeof(projects[data[i].technology])=='undefined') projects[data[i].technology] = {};
				if(typeof(projects[data[i].technology][data[i].difficulty])=='undefined') projects[data[i].technology][data[i].difficulty] = {};
				
				if(typeof(projects[data[i].technology][data[i].difficulty][data[i].category])=='undefined') projects[data[i].technology][data[i].difficulty][data[i].category] = [];
				projects[data[i].technology][data[i].difficulty][data[i].category].push(data[i]);
			}
			console.log(projects);
			console.log('iteration beggins...');
			$('.directory-list').html(renderProjectGroup(projects));
		},
		error: function(p1,p2,errorThrown){
			alert(errorThrown);
		}
	})
});

function renderProjectGroup(projects)
{
	var htmlStr = '';

	var i = 0;
	var keys = Object.keys(projects);
	while(projects[keys[i]] && !projects[keys[i]]['title'])
	{
		htmlStr += '<li>'+keys[i]+'<ul>';
		htmlStr += renderProjectGroup(projects[keys[i]]);
		htmlStr += '</ul></li>';
		i++;
	}
	if(Array.isArray(projects))
	{
		for(var j = 0; j<projects.length;j++) htmlStr += '<li><a href="'+projects[j]['url']+'">'+projects[j]['title']+'</a></li>';
	}
	return htmlStr;

}