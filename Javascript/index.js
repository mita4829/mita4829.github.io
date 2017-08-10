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

function navBarDrag(){
    var bar = document.getElementById("navBar");
    var barHeight = 600; //Change this if nav window needs to be resized
    bar.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        var touchY = touch.pageY;

        bar.style.top = (touchY-barHeight)+ 'px';
        //document.getElementById('x').innerHTML = bar.style.top;
        if(touchY >= barHeight){
          bar.style.top = "0px";
        }else if(touchY <= 100){
          bar.style.top = "-500px";
        }
        event.preventDefault();
    }, false);
}

var direction = false;
function invertToolBar() {
    var bar = document.getElementById("navBar");
    if(!direction){
        direction = true;
        bar.style.top = "0px";
    }else{
        direction = false;
        bar.style.top = "-500px";
    }
}
function main(){
  var mobile = checkIfMobile();
  navBarDrag();
  if(mobile){
    parallax();
  }
}
