
function init(){
  
  var subButton = document.querySelector('#subButton');
  subButton.addEventListener('click', getUrl, false);
  
}

function getUrl(event) {
  var submittedUrl = document.querySelector("#website-url").value;
  url = 'https://graph.facebook.com/?id=' + submittedUrl + '';

  var xhr = new XMLHttpRequest()
  // browser gets ready
  xhr.open('GET', url)
  // browser sends the request
  xhr.addEventListener('load', render);
  xhr.send()
  
}

function render(event) {
  var ui = {
    shareInfo: document.querySelector('#share-information')
  }
  var result = this.response;
  console.log(result);
  var data = JSON.parse(result);
  
  if (data.share && data.share.share_count) 
  {
    var successContent = '<h2><img src="https://i.imgsafe.org/2db215b.png"><a href="'
    + data.id + '" target="_blank">' + data.id + '</a></h2>' + '<p>Total Shares<i class="fa fa-angle-double-right" aria-hidden="true"></i> ' + data.share.share_count + '</p>' + '<p>Total Comments<i class="fa fa-angle-double-right" aria-hidden="true"></i> ' + data.share.comment_count + '</p>';
    ui.shareInfo.innerHTML = successContent;
  } 
  else 
  {
    ui.shareInfo.innerHTML = '<p>Sorry! Either ' + data.id +  ' has not been shared or there is an invalid URL!</p>';
  };
  
}
  
