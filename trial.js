console.log("asdf")
var style = document.createElement("style")
style.innerHTML = style.innerHTML + "#video-button{visibility:hidden; position:fixed; bottom:0; right:0; margin-right:40px; margin-bottom:40px; background-color:#2a3eb1; border-radius:50px; height:60px; width:60px; color:#FFF; box-shadow: 2px 2px 3px #999; z-index:100; .my-float{margin-top:16px;}}"
document.head.appendChild(style)

var button = document.createElement("button");
button.id = "video-button";
button.innerHTML = '<svg version="1.1" fill="#fff" height="34" width="34" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 467.968 467.968" style="enable-background:new 0 0 467.968 467.968;" xml:space="preserve"> <g> <g> <path d="M264.704,96.512H51.2c-28.16,0-51.2,23.04-51.2,51.2v172.544c0,28.16,23.04,51.2,51.2,51.2h213.504 c28.16,0,51.2-23.04,51.2-51.2V147.712C315.904,119.04,292.864,96.512,264.704,96.512z"/> </g> </g> <g> <g> <path d="M430.08,124.672c-3.072,0.512-6.144,2.048-8.704,3.584l-79.872,46.08V293.12l80.384,46.08 c14.848,8.704,33.28,3.584,41.984-11.264c2.56-4.608,4.096-9.728,4.096-15.36V154.368 C467.968,135.424,450.048,120.064,430.08,124.672z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>'

var body = document.body || document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function() {
	var pathname = new URL(document.location).pathname;
	var productSlug = pathname.split("/")[2]
    var videoAssistancePageUrl ="https://"+ document.location.hostname + "/form/" + "form-input"
    
    var urlToRedirect =  new URL(videoAssistancePageUrl);
	urlToRedirect.searchParams.append('attachments',JSON.stringify([{
                            type: 'product',
                            display: 'Product',
                            value: productSlug,
	}]));
    
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: urlToRedirect
    }).click();
});

window.onload = function() {
 var productDetailPageRegex = new RegExp("^https?://[^/]+/product/")
 	if(productDetailPageRegex.test(window.location.href)){
    	document.getElementById('video-button').style.visibility='visible';
 	}else{
   		document.getElementById('video-button').style.visibility='hidden';
 	}
}

window.onhashchange = function() { 
    console.log('locccccc changed!');
}

window.addEventListener('popstate', function(){
    console.log('location changed!');
// 	var productDetailPageRegex = new RegExp("^https?://[^/]+/product/")
//  	if(productDetailPageRegex.test(window.location.href)){
//     	document.getElementById('video-button').style.visibility='visible';
//  	}else{
//    		document.getElementById('video-button').style.visibility='hidden';
//  	}
})
