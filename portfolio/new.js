

var b = document.getElementById("picture");
var a = document.getElementById("hi");
b.addEventListener("mouseover",click);
function click(){
    a.style.display="block"
}

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    try{
        emailjs.send("service_fgrmrmn","template_uf8ep1t",parms).then(alert("email sent"))
    }
    catch{
        console.log("not sent")
    }
}