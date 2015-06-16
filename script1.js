

/*Makes a random color*/
var colorselector = function(){
	var num = Math.floor(Math.random() * 255)
	var num2 = Math.floor(Math.random() * 255)
	var num3 = Math.floor(Math.random() * 255)
	console.log(num, num2, num3);
	clr = "rgb(" + num + "," + num2 + "," + num3 + ")"
	console.log(clr)
	};
	
	
colorselector();

idClicked = true
var bval = "dummy"

var bid = function(){
	if (idClicked == "b1"){
		bval = "attack1"
		};
	if (idClicked == "b2"){
		bval = "attack2"
		};
	if (idClicked == "b3"){
		bval = "attack3"
		};
	if (idClicked == "b4"){
		bval = "attack4"
		};	
	console.log(bval);
};
		





$(document).ready(function() {
	$(".buttons").click(function(e){
		idClicked = String(e.target.id)
		bid();
		var attlog = "User's dragonite used " + bval
		$("#ltex").html(attlog)
		
		});
});

		
		

	