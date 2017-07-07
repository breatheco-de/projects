document.querySelector("#myForm").addEventListener("submit", function(event){
    event.preventDefault();//cancelling the submission
    
    document.querySelector('.state').innerHTML = 'Authenticating';
    this.classList.remove('ok','error');
    
    var result = sendForm(this);//calling the ajax function
    if(result!=true){
        document.querySelector('.state').innerHTML = result;
        document.querySelector("#myForm").classList.remove('loading','ok');
    }
    return false;
});

function sendForm(theForm){
    
    theForm.classList.add('loading');
    //store the password input into a variable
    var password = document.querySelector('#myPassword').value;
    var username = document.querySelector('#myUsername').value;
    
    //Return the validation error to promt an alert with the message
    if(password == '' || username == '') return 'Username and password cannot be empty';
    
    //reset the password with a hash of the password itself
    password = password.hashCode();

    //send the username and password to the backend using AJAX    
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "process.php");
    var data = new FormData();
    data.append("username", username);
    data.append("password", password);
    oReq.send(data);
    
    return true;//return true to avoid alerting for any validation errors.
}

function reqListener(event){
    
    //get the resulting response body string that came from the backend
    var responseBody = this.responseText;
    
    //convert into object
    repsonseObject = JSON.parse(responseBody);
    
    //the backend is going to respond code = 200 if everything was perfect.
    if(repsonseObject.code != '200'){
        document.querySelector('.state').innerHTML = repsonseObject.msg;
        document.querySelector("#myForm").classList.remove('loading','ok');
        document.querySelector("#myForm").classList.add('error');
    }
    
    //if it is 200 then redirecto to private
    else {
        document.querySelector('.state').innerHTML = 'Success! (Redirecting)';
        document.querySelector("#myForm").classList.add('ok');
        
        //wait 2 seconds and redirect (faking a loading)
        setTimeout(function(){window.location = 'index.php';}, 2000);
    }
}


/**
 * This is a hash implementation is similar to the password_hash in PHP but we 
 * made it ourselfs because Javascript does not come with any hash function by default.
 * **/
String.prototype.hashCode = function(){
	var hash = 0;
	if (this.length == 0) return hash;
	for (i = 0; i < this.length; i++) {
		char = this.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}