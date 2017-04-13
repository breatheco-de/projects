(function(projectTree,$,undefined) { 

	var projectOriginalData = {},
		mainSettings = {
			teacher: false
		};

	projectTree.initialize = function(globalSettings){

		if(globalSettings)
		{
			if(globalSettings.teacher) mainSettings.teacher = true;
		}

		$.ajax({
			url: '/projects.php',
			cache: false,
			success: function(data){

				if(data && data.length!='')
				{
					projectOriginalData = data;

					filterProjectDOM();

					$('#technology-options').change(function(){
						filterNodes();
					});
					$('#difficulty-options').change(function(){
						filterNodes();
					});
				}
				else
				{
					alert('Invalid Project Definition');
				}

			},
			error: function(p1,p2,errorThrown){
				alert(errorThrown);
			}
		});
	}


	function filterNodes()
	{
		var tech = $('#technology-options').val();
		if(tech=='true') tech = '';
		else tech = '.'+tech;

		$('.node').hide();
		$('.node'+tech).show();
		$('.node'+tech+' tr').show();
	}

	function projectHTMLOutput(projects)
	{
		var htmlStr = '';

		var i = 0;
		var keys = Object.keys(projects);
		while(projects[keys[i]] && !projects[keys[i]]['title'])
		{
			htmlStr += '<tr class="node '+keys[i]+'"><td>'+keys[i]+'<table>';
			htmlStr += projectHTMLOutput(projects[keys[i]]);
			htmlStr += '</table></td></tr>';
			i++;
		}
		if(Array.isArray(projects))
		{
			for(var j = 0; j<projects.length;j++)
			{
				var sourceCode = '#';
				if(projects[j]['source-code'] && projects[j]['source-code']!='') sourceCode = projects[j]['source-code'];
				htmlStr += '<tr class="project">';
				htmlStr += 		'<td><a href="'+projects[j]['url']+'">'+projects[j]['title']+'</a></td>';
				htmlStr += 		'<td><a href="'+projects[j]['url']+'readme.md">Readme</a></td>';
				if(mainSettings.teacher) 
					htmlStr += 		'<td><a href="/?classroom='+projects[j]['url']+'info.json">Class</a></td>';
				if(sourceCode!='#') 
					htmlStr += '<td><a href="'+sourceCode+'">Source</a></td>';
				else 
					htmlStr += '<td></td>';
				htmlStr += '</tr>';
			}
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

})( window.projectTree = window.projectTree || {}, jQuery );