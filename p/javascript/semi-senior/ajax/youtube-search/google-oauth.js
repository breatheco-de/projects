
var GoogleOAuth = function(settings, callback){
  
  var inside = {};
  
  // Upon loading, the Google APIs JS client automatically invokes this callback.
  window.addEventListener('load',function(){
    gapi.auth.init(function() {
      window.setTimeout(checkAuth, 1);
    });    
  });
  
  // Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
  // If the currently logged-in Google Account has previously authorized
  // the client specified as the OAUTH2_CLIENT_ID, then the authorization
  // succeeds with no user intervention. Otherwise, it fails and the
  // user interface that prompts for authorization needs to display.
  function checkAuth() {
    gapi.auth.authorize({
      client_id: settings['client-id'],
      scope: settings['scopes'],
      immediate: true
    }, handleAuthResult);
  }
  
  // Handle the result of a gapi.auth.authorize() call.
  function handleAuthResult(authResult) {
    document.querySelector('.loading').style.display = "none";
    if (authResult && !authResult.error) {
      // Authorization was successful. Hide authorization prompts and show
      // content that should be visible after authorization succeeds.
      //$('.pre-auth').hide();
      document.querySelector('.inside').style.display = "block";
      document.querySelector('.outside').style.display = "none";
      document.querySelector('#logout-link').addEventListener('click',logout);
      loadAPIClientInterfaces();
    } else {
      // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
      // client flow. The current function is called when that flow completes.
      document.querySelector('.inside').style.display = "none";
      document.querySelector('.outside').style.display = "block";
      document.querySelector('#login-link').addEventListener('click',function(){
        gapi.auth.authorize({
          client_id: settings['client-id'],
          scope: settings['scopes'],
          immediate: false
          }, handleAuthResult);
      });
    }
  }
  
  function logout(){
    //gapi.auth.getAuthInstance().signOut();
  }
  
  // Load the client interfaces for the YouTube Analytics and Data APIs, which
  // are required to use the Google APIs JS client. More info is available at
  // https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
  function loadAPIClientInterfaces() {
    gapi.client.load('youtube', 'v3', function() {
      callback();
    });
  }
  
}