window.onload = function() {
var button = document.getElementById("search");

button.addEventListener("click", def);
}

function def(){
	var key="definition";
	var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
       if (xhttp.readyState === 4 && this.status == 200){
    		alert(xhttp.responseText);
        }
    };

	xhttp.open("GET","request.php?q=" + key ,true);
	xhttp.send();
}
