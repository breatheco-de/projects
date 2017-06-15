var FacebookApp = function()
{
    var theModule = {};
    var accessToken = '';
    
    theModule.connect = function(){
        
        FB.init({
            appId      : '1353791838043132',// App ID from the app dashboard
            cookie     : true,
            xfbml      : true, // Look for social plugins on the page
            version    : 'v2.8'//Request a specific version of the facebook SDK (for better compatibility)
        });
        
        checkLogin();
    }
      
    function checkLogin(){
        FB.getLoginStatus(function(response) {
            if(response)
            {
                switch(response.status)
                {
                    case "not_authorized": //the person is logged into Facebook, but has not logged into your app.
                        FB.login(function(loginResponse) {//this will promt a login window popup (check that your browser allows it)
                          //console.log(loginResponse);
                          alert('s');
                        }, {scope: 'public_profile,email'});
                    break;
                    case "connected": //the person is logged into Facebook, and has logged into your app.
                        theModule.loggedIn(response);
                    break;
                    default:
                        alert('Unexpected reponse status: '+response.status);
                    break;
                }
              
            }
            else
            {
              alert('Invalid reponse from facebook');
            }
            //statusChangeCallback(response);
        }); 
    }
    
    theModule.loggedIn = function(response)
    {
        document.querySelector('#theloginBtn').style.display = "none";
        document.querySelector('.card').style.display = "block";
        
        var logoutBtn = document.querySelector('#theLogoutBtn');
        logoutBtn.style.display = "block";
        logoutBtn.addEventListener("click",function logout(){
            FB.logout(function(response) {
                window.location.reload();
            }); 
        });
        console.log(response);
        accessToken = response.authResponse.accessToken;
        getUserInformation();
    }
    
    function getUserInformation()
    {
        FB.api('/me', 'get', null, getProfileNameCallback); //Request the name
        FB.api('/me/picture', 'get', null, getProfileImageCallback); //Request the profile picture
    }
    
    function getProfileNameCallback(response){
        
        if(process(response))
        {
            var anchor = document.querySelector('.title a');
            anchor.innerHTML = response.name;
        }
    }
    
    function getProfileImageCallback(response){
        
        if(process(response))
        {
            var img = document.querySelector('.avatar img');
            img.src = response.data.url;
        }
    }
    
    function getProfileMusicCallback(response){
        
        if(process(response))
        {
            var img = document.querySelector('.avatar img');
            img.src = response.data.url;
        }
    }
    
    function process(response)
    {
        if (response && !response.error) {
            return response;
        }
        else 
        {
            console.log(response);
            alert('There as an error: '+response.error);
            return null;
        }
    }
    
    return theModule;
}