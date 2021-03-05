var id = null;
var lastKeyPressed = null;
var currentRipleyDirection = "walkingRight";
var ridley = document.getElementById("animate")

document.addEventListener("keyup", event => {
  if(event.keyCode != 32){
  	ridley.src="assets/images/ridley-not-moving.gif"
    lastKeyPressed = 0
  	stop()
  }
});

document.addEventListener("keydown", event => {
	console.log(event.keyCode)
  if(event.keyCode == 32){
    shoot()
  }else if(event.keyCode == 38){
  console.log("move up")
  	move('y',1);
  }else if(event.keyCode == 40){
  console.log("move down")
   	move('y',-1)
  }else if(event.keyCode == 37){
  console.log("move left")
  	if(lastKeyPressed != 37){
      ridley.src = "assets/images/ridley-moving.gif"
      ridley.classList.remove("walkingRight");
      ridley.classList.add("walkingLeft");
    }
    currentRipleyDirection = "walkingLeft"
    if(lastKeyPressed != 37){
      move('x', 1)
    }
  	lastKeyPressed = 37
  }else if(event.keyCode == 39){
  console.log("move right")
  	if(lastKeyPressed != 39){
      ridley.src = "assets/images/ridley-moving.gif"
      ridley.classList.remove("walkingLeft");
      ridley.classList.add("walkingRight");
    }
    currentRipleyDirection = "walkingRight"
    if(lastKeyPressed != 39){
      move('x', -1)
    }
    lastKeyPressed = 39;
  }
  // up: 38, dn: 40, l: 37, r: 39
})


function stop(){
console.log("STOP", id)
	clearInterval(id);
}

function shoot(){
  var elem = document.getElementById("animate");
  var box = document.getElementById("container");
  var posx = elem.offsetLeft
  var posy = elem.offsetTop
  var increment = currentRipleyDirection == "walkingRight" ? 5 : -5;

  var newProjectile = new Image();
  newProjectile.classList.add(currentRipleyDirection);
  newProjectile.src = "assets/images/fireball.gif"
  newProjectile.style.position = "absolute"
  newProjectile.style.width = "40px"
  newProjectile.style.height = "40px"
  newProjectile.style.left = posx + (currentRipleyDirection == "walkingRight" ? 300 : 0) + "px"
  newProjectile.style.top = posy + 100 + "px"

  box.appendChild(newProjectile)

  var id = setInterval(fire,5)
  function fire(){
    if(newProjectile.offsetLeft < 1600 && newProjectile.offsetLeft > 0){
      var newposx = newProjectile.offsetLeft + increment
      console.log("increment",increment)
      newProjectile.style.left = newposx + "px"
    }else{
      clearInterval(id)
      box.removeChild(newProjectile);
    }
  }

}

function move(direction,amount) {
  var elem = document.getElementById("city");   

  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
  	var posx = elem.offsetLeft
  	var posy = elem.offsetTop
    
    if(direction == "x"){
      if (posx == 654) {
        posx = 0
        elem.style.left = posx + "px"; 
      } else {
        posx += amount; 
        //elem.style.top = pos + "px"; 
        elem.style.left = posx + "px"; 
      }
    }else if(direction == "y"){
    	if (posy == 620) {
        posy = 0
        elem.style.top = posy + "px"; 
      } else {
        posy += amount; 
        //elem.style.top = pos + "px"; 
        elem.style.top = posy + "px"; 
      }
    }
  }
}