var range = document.querySelector('input[type="range"]');
range.value = 0;

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

range.addEventListener('input', function(){
    
    window.scrollTo(0,(height/100)*range.value);
    console.log((height/100)*range.value);
})