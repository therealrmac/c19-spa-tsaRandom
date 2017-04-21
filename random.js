console.log("hello")
var leftArrow= document.getElementById('arrow-left');
var rightArrow= document.getElementById('arrow-right');


var test= document.getElementById('testArea');

test.addEventListener('mousedown', function(){
	var x= Math.floor(Math.random()*6 +1);
	console.log(x);
	if(x ===1 || x===2 || x===3){
	if(rightArrow.style.visibility ==="hidden"){
		rightArrow.style.visibility= 'visible';
	}else{
		rightArrow.style.visibility= "hidden";
	}
}
	if(x===4 || x===5 || x===6){
	if(leftArrow.style.visibility ==="hidden"){
		leftArrow.style.visibility= 'visible';
	}else{
		leftArrow.style.visibility= "hidden";
	}
}
});
