$(document).ready(function(){
    
    $("#create-form").submit(function(e) {

        var url = $(this).attr('action');
        //var url = "create-backend.php"; // the script where you handle the form input.
    
        $.ajax({
               type: "POST",
               url: url,
               data: $(this).serialize()// serializes the form's elements.
            })
            .done( function(data){
                
                if( data == "true" ){
                    alert("User Created");
                }else{
                    alert("Error saving. User Not created. Error:"+data);
                }
            })
            .fail( function(){
                alert("error");
            });
    
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});