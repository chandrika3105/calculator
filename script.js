function dis(arg) {
	document.getElementById("res").value+=arg;
}
function clickclr() {
	document.getElementById("res").value="";
}
function clickoperate() {
	let x = document.getElementById("res").value;
	let result = eval(x);
	document.getElementById("res").value = result;

}
function clickbackspace(){
	var z = document.getElementById("res").value;
	document.getElementById("res").value = z.substr(0,z.length-1);
}
