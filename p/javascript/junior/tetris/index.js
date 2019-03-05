window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


let state = {
    show: true
};

let render = () => {
    if(state.show) return `<p>Hello</p>`;
    
    return '';
};



const app = document.getElementById('app');
(function animloop(){
  window.requestAnimFrame(animloop);
  app.innerHTML = render();
})();