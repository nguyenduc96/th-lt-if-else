function hienthi(){
let aw = document.getElementById("input").value;
let text;
if (aw == "ECMAScript"){
    text = "Right!";
} else{
    text = "Didn’t know? ECMAScript!";
}
document.getElementById('output').innerText = text;
}