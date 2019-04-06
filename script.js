var a=[];
s=0;
var sum=0;
$(document).keypress(function (e) {
    if (e.which == 13) {
    if (document.getElementById("my-input").value != '' && !isNaN(document.getElementById("my-input").value) && document.getElementById("my-input").value >= 0 && document.getElementById("my-input").value <= 100 ) {
   
    a[s]=parseInt(document.getElementById("my-input").value);
            s+=1;
            sum=0;
            for(var i=0; i < a.length; i++) {
						sum+=a[i];
						}
							var k= sum / a.length;
              
            document.getElementById('my-input2').innerHTML = Math.round(k);
						document.getElementById('my-input3').innerHTML = a[a.length-1];
            if (a.length>1) {
            document.getElementById('my-input4').innerHTML = a[a.length-2];
            }
            document.getElementById("my-input").value = "";
            
       }
    }
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
	autoplay: '1',
        events: {
            'onReady': onPlayerReady
        },
        playerVars: 
          {
            listType:'playlist',
            list: 'RDYFi4FTOuqKk'
          }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
/* debugger */;
    num = _.random(0, 50);
  
  setTimeout(() => {
  player.playVideoAt(num);
  }, 1000);
}