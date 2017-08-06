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

            document.getElementById('icons2').style.left = x/5+"px";
            document.getElementById('icons2').style.top = -10+y/5+"px";

        }, true);
    }
}

function checkIfMobile(){
    var mobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) && true; //return boolean: Check to see if it's a mobile device, if false, disable site.
    return mobile;
}

function navigationBarView(mobile){
  if(mobile){
    document.getElementById("navBar").style.height = "90px";
    document.getElementById("navBar").style.minHeight = "90px";

    //document.getElementById("sideButton").style.height = "80%";

  }else{
    document.getElementById("navBar").style.height = "12%";
    document.getElementById("navBar").style.minHeight = "70px";

    //document.getElementById("sideButton").style.height = "75%";
  }
}

function main(){
  var mobile = checkIfMobile();
  if(mobile){
    parallax();
  }
}
