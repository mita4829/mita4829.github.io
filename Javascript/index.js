function parallaxHandler(event){
    var x = Math.round(event.gamma);
    var y = Math.round(event.beta);
    //var z = Math.round(event.alpha);
    // document.getElementById('x').innerHTML = x;
    // document.getElementById('y').innerHTML = y;
    // document.getElementById('z').innerHTML = z;
    document.getElementById('icons').style.left = x/3+"px";
    document.getElementById('icons').style.top = -10+y/3.5+"px";
    document.getElementById('parallax').style.left = -(x/3)+"px";
}

function parallax(){
    window.addEventListener("deviceorientation", parallaxHandler, false);
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

function hideNavBar(){
  document.getElementById("navBar").style.display = "none";
  document.getElementById("switch").style.display = "none";
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

function parallaxHeader(){
    var y = window.pageYOffset;
    document.getElementById("flower").style.width = 100+y/40+"%";
    document.getElementById("flower").style.left = -y/8;
}

function scrollToProject(){
  location.href = "#";
  location.href = "#projects";
}

function scrollToAbout(){
  location.href = "#";
  location.href = "#about";
}

function scrollToProfession(){
  location.href = "#";
  location.href = "#profession";
}

function scrollToContact(){
  location.href = "#";
  location.href = "#contact";
}

function noParallax(){
  window.removeEventListener("deviceorientation", parallaxHandler, false);
  //document.getElementById("parallax").removeEventListener("deviceorientation", parallaxHandler);
}
function main(){
  var mobile = checkIfMobile();
  if(mobile){
    navBarDrag();
    parallax();
  }else{
    hideNavBar();
  }
}
