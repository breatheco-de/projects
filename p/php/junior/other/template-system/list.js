$(document).ready(function(){
    
    // FILLING THE LIST (FIRST STEP)
    $.ajax("list-backend.php").done( function(data){ 
        if (data) {//Always Validate
            
            console.log("JSON:");
            console.log(data); //Look at the JSON
            
            var parsedJson = JSON.parse(data);
            console.log("Object:"); //Array of objects
            console.log(parsedJson); //Look at the Object
            
            $.each(parsedJson,function(index,user){
                //console.log(user);
               $('tbody').append(CreateListElement(user)); 
            });
        }
    });
    
    //CAPTURE CLICK ACTION
    $(document).on("click", ".delete-action", function(event){ //SPECIAL CALL FOR AJAX-GENERATED CALL
        
        var userId = $(this).attr("id-data"); // GET USER ID FROM HTML
        console.log("Deleting user: "+userId);
        var deleteUrl = "delete.php?id="+userId;
        
        var thisParentRow = $(this).parent().parent();// QUESTION: WHY?
        
        $.ajax(deleteUrl).done(function(data){
            if(data){
                thisParentRow.hide();
            }
        });
    });
});

function CreateListElement(element){
    
    var listHTMLElement = '<tr>';
        listHTMLElement += '<th scope="row">';
            listHTMLElement +=element.id;
        listHTMLElement += '</th>';
        listHTMLElement += '<td>';
            listHTMLElement += element.full_name;
        listHTMLElement += '</td>';
    	listHTMLElement += '<td>';
    	    listHTMLElement += element.email;
    	listHTMLElement += '</td>';
    	listHTMLElement += '<td>';
    	    listHTMLElement += element.role;
    	listHTMLElement += '</td>';
        listHTMLElement += '<td>';
            listHTMLElement += '<a class="btn btn-default delete-action" href="#" id-data="'+element.id+'">';
        		listHTMLElement += 'Delete';
        	listHTMLElement += '</a>';
        listHTMLElement += '</td>';
    listHTMLElement += '</tr>';
    
    return listHTMLElement;
    
}