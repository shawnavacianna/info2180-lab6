/*window.onload = function (){
var button = document.getElementById("search");

var key = document.getElementById("searchbar").value;

button.addEventListener("click", def(key));
}; */

window.onload = function() {
var mybutton = document.getElementById("search");
mybutton.addEventListener("click", display);
}
//function sends an alert to user that tells the definition of the word definition
function firstalert(){
var url="request.php?q=definition";
var response = new XMLHttpRequest();
    response.onreadystatechange = function (){
       if (this.readyState === 4 && this.status == 200){
    alert(this.responseText);
        };
    };
response.open("GET",url, true);
response.send();
}

//function below allows searching for a word and the definition of the word is printed rather than an alert       
function display(key){
var response = new XMLHttpRequest();
response.onreadystatechange = function(){
if (response.readyState== 4 && response.status == 200){
document.getElementById("result").innerHTML = response.responseText;
}
};
response.open("GET", "request.php?q=" + key, true);
response.send();
}