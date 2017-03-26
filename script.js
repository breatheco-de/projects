var projectOriginalData = {};
$(document).ready(function(){
	$.ajax({
		url: './data.json',
		cache: false,
		success: function(data){
			projectOriginalData = data;

			filterProjectDOM();

			$('#technology-options').change(function(){
				filterProjectDOM({
					technology: $(this).val(),
					difficulty: 'true',
					category: 'true'
				});
			});
		},
		error: function(p1,p2,errorThrown){
			alert(errorThrown);
		}
	})
});

function projectHTMLOutput(projects)
{
	var htmlStr = '';

	var i = 0;
	var keys = Object.keys(projects);
	while(projects[keys[i]] && !projects[keys[i]]['title'])
	{
		htmlStr += '<li class="node '+keys[i]+'">'+keys[i]+'<ul>';
		htmlStr += projectHTMLOutput(projects[keys[i]]);
		htmlStr += '</ul></li>';
		i++;
	}
	if(Array.isArray(projects))
	{
		for(var j = 0; j<projects.length;j++) htmlStr += '<li class="project"><a href="'+projects[j]['url']+'">'+projects[j]['title']+'</a></li>';
	}
	return htmlStr;

}

function filterProjectData(data,settings){
	if(!settings) settings = {
		technology: 'true',
		difficulty: 'true',
		category: 'true'
	}
	var projects = {};
	for(var i =0;i<data.length;i++){
		if(typeof(projects[data[i].technology])=='undefined') projects[data[i].technology] = {};
		if(typeof(projects[data[i].technology][data[i].difficulty])=='undefined' && (settings.difficulty=='true' || settings.difficulty==data[i].difficulty )) projects[data[i].technology][data[i].difficulty] = {};
		
		if(typeof(projects[data[i].technology][data[i].difficulty][data[i].category])=='undefined' && (settings.category=='true' || settings.category==data[i].category )) projects[data[i].technology][data[i].difficulty][data[i].category] = [];
		
		if(
			(settings.technology=='true' || data[i].technology==settings.technology) &&
			(settings.difficulty=='true' || data[i].difficulty==settings.difficulty) &&
			(settings.category=='true' || data[i].category==settings.category)
		)
			projects[data[i].technology][data[i].difficulty][data[i].category].push(data[i]);
	}
	return projects;
}

function filterProjectDOM(settings){
	var projects = {};
	projects = filterProjectData(projectOriginalData,settings);
	console.log(projects);
	console.log('iteration beggins...');
	$('.directory-list').html(projectHTMLOutput(projects));
	$('.directory-list li').filter(function(){
		if($(this).hasClass('project')) return false;

		if($(this).find('.project').length != 0) return false;
		else return true;
	}).remove();
}