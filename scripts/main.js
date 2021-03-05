var id = null;
var lastKeyPressed = null;
var ridley = document.getElementById("animate")

document.addEventListener("keyup", event => {
	ridley.src="assets/images/ridley-not-moving.gif"
  lastKeyPressed = 0
	stop()
});

document.addEventListener("keydown", event => {
	console.log(event.keyCode)
  if(event.keyCode == 32){
    shoot()
  }
  if(event.keyCode == 38){
  console.log("move up")
  	move('y',1);
  }else if(event.keyCode == 40){
  console.log("move down")
   	move('y',-1);
  }else if(event.keyCode == 37){
  console.log("move left")
  	if(lastKeyPressed != 37){
      ridley.src = "assets/images/ridley-moving.gif"
      ridley.classList.remove("walkingRight");
      ridley.classList.add("walkingLeft");
    }
  	lastKeyPressed = 37
   	move('x', 1)
  }else if(event.keyCode == 39){
  console.log("move right")
  	if(lastKeyPressed != 39){
      ridley.src = "assets/images/ridley-moving.gif"
      ridley.classList.remove("walkingLeft");
      ridley.classList.add("walkingRight");
    }
    lastKeyPressed = 39;
     move('x', -1)
  }
  // up: 38, dn: 40, l: 37, r: 39
})

function shoot(){
  var holdingcellthing = document.getElementById("container")
  var bam = new Image()

  holdingcellthing.appendChild(bam)
}


function stop(){
console.log("STOP", id)
	clearInterval(id);
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