function remove1() {
    var element = document.getElementById("request1");
   
    element.remove();
    document.getElementById("circle2").innerText --;
}
function remove2() {
    var element = document.getElementById("request2");

    element.remove();document.getElementById("circle2").innerText --;

}

function addConnec() {
    document.getElementById("circle500").innerText ++;
}

function nameChange() {
    document.getElementById("name").innerText = "John Doe";
}

function change(element) {
    if(element.innerText == "Sign In"){
    element.innerText = "Sign Out";
    } else {
        element.innerText = "Sign In";
    }
}
