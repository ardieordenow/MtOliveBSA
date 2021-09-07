if(typeof roContainer === "undefined")
    roContainer = document.body;

function notifyResize(){
    var body = document.body,
    html = document.documentElement;

    var height = {
        "max": Math.max( roContainer.scrollHeight, roContainer.offsetHeight, body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ),
        "roContainer.scrollHeight": roContainer.scrollHeight, 
        "roContainer.offsetHeight": roContainer.offsetHeight, 
        "body.scrollHeight": body.scrollHeight, 
        "body.offsetHeight": body.offsetHeight, 
        "html.clientHeight": html.clientHeight, 
        "html.scrollHeight": html.scrollHeight, 
        "html.offsetHeight": html.offsetHeight
    };
debugger;    
    parent.postMessage(height, "https://www.leaguelineup.com");
    parent.postMessage(height, "https://mobasa.sportssignup.com/");
    parent.postMessage(height, "http://mobasa.sportssignup.com/");
}
// create an Observer instance
const resizeObserver = new ResizeObserver( entries => {
    setTimeout(notifyResize(), 0);
});

// start observing a DOM node
if($.inFrame()){
    resizeObserver.observe(roContainer);
    notifyResize();
}
