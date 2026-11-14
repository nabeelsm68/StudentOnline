
function login(){
if(!document.getElementById("name").value||!document.getElementById("pass").value)return alert("Enter details");
document.getElementById("exam").style.display="block";
}

function result(){
let q=document.querySelector('[name=q]:checked');
if(!q)return alert("Select answer");
document.getElementById("out").innerHTML="Marks: "+q.value+"/1";
}