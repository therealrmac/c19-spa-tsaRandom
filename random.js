console.log("hello")
var leftArrow= document.getElementById('arrow-left');
var rightArrow= document.getElementById('arrow-right');


var test= document.getElementById('clickArea');

test.addEventListener('mousedown', function(){

	var x= Math.floor(Math.random()*6 +1);
	console.log(x);
	if(x <=3){
		rightArrow.classList.toggle('hidden');
	}
	if(x >=4){
		leftArrow.classList.toggle('hidden')
	}
});
