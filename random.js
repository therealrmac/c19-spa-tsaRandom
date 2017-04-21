console.log("hello")
var leftArrow= document.getElementById('arrow-left');
var rightArrow= document.getElementById('arrow-right');


var test= document.getElementById('testArea');

test.addEventListener('mousedown', function(){
	if(rightArrow.style.display ==="none"){
		rightArrow.style.display= 'block';
	}else{
		rightArrow.style.display= "none";
	}
	if(leftArrow.style.display ==="none"){
	leftArrow.style.display= 'block';
	}else{
		leftArrow.style.display= "none";
	}
});
test.addEventListener('mouseup', function(){
	if(rightArrow.style.display ==="block"){
	rightArrow.style.display= 'none';
	}else{
		rightArrow.style.display= "block";
	}
	if(leftArrow.style.display ==="block"){
	leftArrow.style.display= 'none';
	}else{
		leftArrow.style.display= "block";
	}
})