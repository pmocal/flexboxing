document.getElementById("datetime").innerHTML = (new Date()).toLocaleDateString();
document.getElementById("signup").addEventListener("click",
	function(){
		console.log(document.getElementById("dropdown"));
		if (document.getElementById("dropdown").style.display === "block"){
			document.getElementById("dropdown").style.display = "none";
		} else {
			document.getElementById("dropdown").style.display = "block";
		}
	}
);
