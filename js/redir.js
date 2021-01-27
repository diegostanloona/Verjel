/*var linkk;
function redireccion(link){

	linkk = link;

	setTimeout(function(){
		document.getElementById("pp_full_res").onclick = function(){
		window.open(linkk, '_blank');
	}
	}, 800);
	
}
*/
var menu = document.getElementById("telefono-menu");
var boton = document.getElementById("telefono-boton");
var visible = true;

function showMenu(){

if(visible){
	menu.style.display = "none";
	boton.style.display = "block";
	//console.log("visible");
	visible = false;
}else{
	menu.style.display = "block";
	boton.style.display = "none";
	//console.log("no visible");
	visible = true;
}
			
}