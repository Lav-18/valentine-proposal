const text = "From silly laughs to quiet comfort... will you be my Valentine? 💖";
let i = 0;


function type() {
if (i < text.length) {
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type, 70);
}
}
type();