
var summa=[70,87,87,70,85];
var sumall;
var a=[71,70,68];
s=a.length;
var sum=0;
for(var i=0; i < a.length; i++) {
sum+=a[i];
}

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
              summa[0]=Math.round(k);
              sumall=0;
              for(var i=0; i < summa.length; i++) {
  						sumall+=summa[i];
  						}
              document.getElementById('res').innerHTML = sumall;
              document.getElementById('minus').innerHTML = sumall-444;
            document.getElementById('my-input2').innerHTML = Math.round(k);
						document.getElementById('my-input3').innerHTML = a[a.length-1];
            if (a.length>1) {
            document.getElementById('my-input4').innerHTML = a[a.length-2];
            }
            document.getElementById("my-input").value = "";
            
       }
    }
});
var b=[90,70,100];
s2=b.length;
var sum2=0;
for(var i=0; i < b.length; i++) {
sum2+=b[i];
}
$(document).keypress(function (e) {
    if (e.which == 13) {
    if (document.getElementById("my-input10").value != '' && !isNaN(document.getElementById("my-input10").value) && document.getElementById("my-input10").value >= 0 && document.getElementById("my-input10").value <= 100 ) {
   
    b[s2]=parseInt(document.getElementById("my-input10").value);
            s2+=1;
            sum2=0;
            for(var i=0; i < b.length; i++) {
						sum2+=b[i];
						}
							var k2= sum2 / b.length;
              summa[1]=Math.round(k2);
              sumall=0;
              for(var i=0; i < summa.length; i++) {
  						sumall+=summa[i];
  						}
              document.getElementById('res').innerHTML = sumall;
              document.getElementById('minus').innerHTML = sumall-444;
            document.getElementById('my-input5').innerHTML = Math.round(k2);
						document.getElementById('my-input6').innerHTML = b[b.length-1];
            if (b.length>1) {
            document.getElementById('my-input7').innerHTML = b[b.length-2];
            }
            document.getElementById("my-input10").value = "";
            
       }
    }
});
var c=[83,79,84,100];
s3=c.length;
var sum3=0;
for(var i=0; i < c.length; i++) {
sum3+=c[i];
}
$(document).keypress(function (e) {
    if (e.which == 13) {
    if (document.getElementById("my-input20").value != '' && !isNaN(document.getElementById("my-input20").value) && document.getElementById("my-input20").value >= 0 && document.getElementById("my-input20").value <= 100 ) {
   
    c[s3]=parseInt(document.getElementById("my-input20").value);
            s3+=1;
            sum3=0;
            for(var i=0; i < c.length; i++) {
						sum3+=c[i];
						}
							var k3= sum3 / c.length;
              summa[2]=Math.round(k3);
              sumall=0;
              for(var i=0; i < summa.length; i++) {
  						sumall+=summa[i];
  						}
              document.getElementById('res').innerHTML = sumall;
              document.getElementById('minus').innerHTML = sumall-444;
            document.getElementById('my-input8').innerHTML = Math.round(k3);
						document.getElementById('my-input9').innerHTML = c[c.length-1];
            if (c.length>1) {
            document.getElementById('my-input11').innerHTML = c[c.length-2];
            }
            document.getElementById("my-input20").value = "";
            
       }
    }
});
var d=[62,70,61,61,72,80,82];
s4=d.length;
var sum4=0;
for(var i=0; i < d.length; i++) {
sum4+=d[i];
}

$(document).keypress(function (e) {
    if (e.which == 13) {
    if (document.getElementById("my-input30").value != '' && !isNaN(document.getElementById("my-input30").value) && document.getElementById("my-input30").value >= 0 && document.getElementById("my-input30").value <= 100 ) {
   
    d[s4]=parseInt(document.getElementById("my-input30").value);
            s4+=1;
            sum4=0;
            for(var i=0; i < d.length; i++) {
						sum4+=d[i];
						}
							var k4= sum4 / d.length;
              summa[3]=Math.round(k4);
              sumall=0;
              for(var i=0; i < summa.length; i++) {
              sumall+=summa[i];
              }
              document.getElementById('res').innerHTML = sumall;
              document.getElementById('minus').innerHTML = sumall-444;
            document.getElementById('my-input12').innerHTML = Math.round(k4);
						document.getElementById('my-input13').innerHTML = d[d.length-1];
            if (d.length>1) {
            document.getElementById('my-input14').innerHTML = d[d.length-2];
            }
            
            document.getElementById("my-input30").value = "";
            
       }
    }
});






var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


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


function onPlayerReady(event) {
/* debugger */;
    num = _.random(0, 50);
  
  setTimeout(() => {
  player.playVideoAt(num);
  }, 1000);
}