window.onload = function() {
var mybutton = document.getElementById("search");
mybutton.addEventListener("click", display);

var allbutton = document.getElementById("searchall");
allbutton.addEventListener("click", alldisplay);

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

//function aims to display all definitions and XML
function alldisplay(){
var response = new XMLHttpRequest();
response.onreadystatechange = function(){
if (response.readyState== 4 && response.status == 200){
  allresult(response.responseXML);
}
};
response.open("GET", "request.php?q=&all=true", true);
response.send();
}


//function to format XML information and definitions
function allresult(terms){
    var definitions = terms.documentElement.children;
    var results = "<ol>";
    
    for(var i = 0; i < definitions.length; i++){
        results+=`<li><h3>${definitions[i].attributes[0].value.toUpperCase()}</h3><p>${definitions[i].innerHTML.trim()}</p><p> - ${definitions[i].attributes[1].value}</p></li>`;
    }
    
    results+= "</ol>"
    
    update(results);
}

function update(response){

    document.getElementById("update").innerHTML = response;
    
}

