function parallax(){
  if(true){
        window.addEventListener("deviceorientation", function(event)
            {
            var x = Math.round(event.gamma);
            var y = Math.round(event.beta);
            //var z = Math.round(event.alpha);
            //document.getElementById('x').innerHTML = x;
            //document.getElementById('y').innerHTML = y;
            //document.getElementById('z').innerHTML = z;
            document.getElementById('icons').style.left = x/2.5+"px";
            document.getElementById('icons').style.top = -10+y/2.5+"px";
            //document.getElementById('parallax').style.left = -(x/3)+"px";

        }, true);
    }
}

function checkIfMobile(){
    var mobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) && true; //return boolean: Check to see if it's a mobile device, if false, disable site.
    return mobile;
}

var direction = false;
function invertToolBar(){
  if(!direction){
    document.getElementById("navBar").style.height = "500px";
    direction = true;
  }else{
    document.getElementById("navBar").style.height = "100px";
    direction = false;
  }
}

function main(){
  var mobile = checkIfMobile();
  if(mobile){
    parallax();
  }
}
