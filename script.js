var a=[];
s=0;
var sum=0;
if (isNaN(document.getElementById("my-input").value)) {
   document.getElementById("my-input").value = "";
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
              
            document.getElementById('my-input2').innerHTML = Math.round(k);
						document.getElementById('my-input3').innerHTML = a[a.length-1];
            if (a.length>1) {
            document.getElementById('my-input4').innerHTML = a[a.length-2];
            }
            document.getElementById("my-input").value = "";
            
       }
    }
});
