(function(projectTree,$,undefined) { 

	var projectOriginalData = {},
		mainSettings = {
			teacher: false
		};
	const ASSETS_URL = 'http://assets.breatheco.de/';
	const PROJECTS_URL = 'http://projects.breatheco.de/';

	projectTree.initialize = function(globalSettings){

		if(globalSettings)
		{
			if(globalSettings.teacher) mainSettings.teacher = true;
		}

		$.ajax({
			url: '/projects.php?2',
			cache: false,
			success: function(data){

				if(data && data.length!='')
				{
					console.log("Incoming HTTP Data", data);
					projectOriginalData = data;

					filterProjectDOM({
						category: false
					});

					$('#technology-options').change(function(){
						filterNodes();
					});
					$('#status-options').change(function(){
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

	function projectHTMLOutput(projects, previousCat='')
	{
		var htmlStr = '';

		var i = 0;
		var keys = Object.keys(projects);
		while(projects[keys[i]] && !projects[keys[i]]['title'] && i<40)
		{
			htmlStr += '<tr class="node '+keys[i]+'"><td class="category"><span class="category-name">'+keys[i]+'</span><table>';
			htmlStr += projectHTMLOutput(projects[keys[i]], keys[i]);
			htmlStr += '</table></td></tr>';
			i++;
		}
		if(Array.isArray(projects))
		{
			for(var j = 0; j<projects.length;j++)
			{
				if(!mainSettings.teacher && typeof(projects[j]['status']) != 'undefined' && projects[j]['status']=='hidden'){
					console.log("Ignoring project: ",projects[j]);
					continue;
				}
				
				let status = (typeof projects[j]['status'] !== 'undefined') ? projects[j]['status'] : '';
				
				htmlStr += '<tr class="project" data-category="'+previousCat+'">';
				htmlStr += 	'<td class="'+status+'">'+((status != '') ? '('+status+')':'')+' <a href="'+getURL('readme',projects[j])+'">'+projects[j]['title']+'</a></td>';
				
				htmlStr += '<td class="button-bar">';
				
				if(projects[j]['readme'] && projects[j]['readme']!='')
					htmlStr += 		'<a class="btn btn-light" href="'+getURL('readme',projects[j])+'">Readme</a>';
				
				if(projects[j]['video-path'] && projects[j]['video-path']!='')
					htmlStr += 		'<a class="btn btn-light" href="'+getURL('video',projects[j])+'">Video</a>';
					
				if(projects[j]['demo'] && projects[j]['demo']!='')
					htmlStr += 		'<a class="btn btn-light" href="'+getURL('demo',projects[j])+'">Demo</a>';
				
				if(mainSettings.teacher) 
					htmlStr += 		'<a class="btn btn-light" href="'+getURL('teacher',projects[j])+'">Class</a>';
				
				if(projects[j]['source-code'] && projects[j]['source-code']!='') 
					htmlStr += '<a class="btn btn-light" href="'+getURL('source',projects[j])+'">Source</a>';
				htmlStr += '</td>';
					
				htmlStr += '</tr>';
			}
		}
		
		return htmlStr;

	}

	function getURL(type,project){
		switch(type)
		{
			case "demo":
				if(project['slug']) return '/d/'+project['slug'];
				else return project['url'];
			break;
			case "video":
				if(project['slug']) return '/d/'+project['slug']+'#video';
				else return '/?vtutorial='+project['video-path'];
			break;
			case "readme":
				if(project['slug']) return '/d/'+project['slug']+'#readme';
				else{
					let skin = 'modest';
					if(project['skin'] && project['skin']!=='') skin = project['skin'];
					return ASSETS_URL+'live-demos/markdown-parser/?skin='+skin+'&path='+PROJECTS_URL+project['readme'];
				}
			break;
			case "teacher":
				return '/?classroom='+project['classroom'];
			break;
			case "source":
				return project['source-code'];
			break;
		}
	}

	function filterProjectData(data,settings){
		settings = {
			technology: 'true',
			status: null,
			difficulty: 'true',
			category: 'true'
		};
		var projects = {};
		console.log("Original Projects",data);
		for(var i =0;i<data.length;i++){
			
			//default technologies
			if(typeof(projects[data[i].technology])=='undefined') projects[data[i].technology] = {};
			
			//default difficulty
			if(typeof(projects[data[i].technology][data[i].difficulty])=='undefined' && (settings.difficulty=='true' || settings.difficulty==data[i].difficulty )) projects[data[i].technology][data[i].difficulty] = {};
			
			//default category
			if(typeof(projects[data[i].technology][data[i].difficulty][data[i].category])=='undefined' && (settings.category=='true' || settings.category==data[i].category )) projects[data[i].technology][data[i].difficulty][data[i].category] = [];

			if(
				(settings.technology=='true' || data[i].technology==settings.technology) &&
				(settings.difficulty=='true' || data[i].difficulty==settings.difficulty) &&
				(!settings.status || data[i].status==settings.status) &&//if there is not status filter or the status matches
				(settings.category=='true' || data[i].category==settings.category)
			){
				projects[data[i].technology][data[i].difficulty][data[i].category].push(data[i]);
			}
			else 
			{
				console.log("IGNORING project: ",data[i].title);
			}
		}
		
		return projects;
	}

	function filterProjectDOM(settings){
		var projects = {};
		projects = filterProjectData(projectOriginalData,settings);
		console.log('iteration beggins...');
		$('.directory-list').html(projectHTMLOutput(projects));
		
		$(".project").closest('td.category').find('.category-name').addClass('to-hide');
		
		$('.directory-list tr').filter(function(){
			if($(this).hasClass('project')) return false;

			//ignore categories without projects
			if($(this).find('.project').length > 0) return false;
			else return true;
		}).remove();
	}

})( window.projectTree = window.projectTree || {}, jQuery );