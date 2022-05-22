/*function textExample(a) {
	var greeting = "Hi! My name is " + a;
	return (greeting);
}
var name = "Malik";
console.log(textExample(name));
*/

/*
var testExample = function(a) {
	var greeting = "Hi! My name is Malik " + a;
	return (greeting);
}
var a = "Barnett"
console.log(testExample(a));
*/
/*
(function(){
	var greeting = "Hi! My name is Malik ";
	console.log(greeting);
}() )
*/


function calc() {
	var a = parseInt(document.querySelector("#value1").value);
	var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
	var calculate;
	
	if (op == "add"){
	    calculate = a + b;	
    } else if (op == "min"){
	    calculate = a - b;
	} else if (op == "div"){
	    calculate = a / b;
	} else if (op == "mul"){
	    calculate = a * b;
	}
	
	document.querySelector("#result").innerHTML = calculate;
}	


/*
function calc(){
	var number = 10;
	return number;
}

console.log(calc());
*/