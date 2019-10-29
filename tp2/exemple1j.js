 



 const elmt = document.querySelector(".normal");
 function eventclick(e)
 {
 	console.log("cliked");
 	elmt.classList.toggle("normal");
 }
 elmt.onclick=eventclick;