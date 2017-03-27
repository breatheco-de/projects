
function parseParms(str) {
    if(typeof(str)=='undefined' || str=='')
    {
        return {};
    }
    var pieces = str.split('&')
    var data = {};
    var parts = [];
    // process each query pair 
    for (var i = 0; i < pieces.length; i++) {
        parts = pieces[i].split('=');
        if (parts.length < 2) {
        parts.push('');
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}

$(document).ready(function(){
    
    var project = getHashObject();
    $.ajax({
        url: 'fakeproject'+project.id+'.json',
        success: function(data){
            if(data)
            {
                renderProject(data);
            }
        },
        error: function(p1,p2,p3)
        {
            alert('Error: '+p3);
        }
    })
});

function getHashObject(){
    //get the HASH from the URL
    var hashString = document.location.hash;
    //remove the #
    hashString = hashString.substr(1,hashString.length-1);
    
    return parseParms(hashString);
}

function renderProject(jsonObject)
{
    $('#thecategory').html(jsonObject.category);
    $('#thetitle').html(jsonObject.title);
    $('#theexercpt').html(jsonObject.excerpt);
    $('#theclient').html(jsonObject.description.client);
    $('#theproposal').html(jsonObject.description.proposal);
    $('#theresults').html(jsonObject.description.results);
    $('#h2').css("background",'url('+jsonObject.background+')');
}




