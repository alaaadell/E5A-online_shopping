var storedusers = JSON.parse(localStorage.getItem("users"));
localStorage.setItem("admin", 0);
if(storedusers==null){
storedusers=[];
storedusers[0]={email:"lalaamrr@gmail.com", pass:"123456Aa", username:"alaa"};
localStorage.setItem("users", JSON.stringify(storedusers));
}
function loginfun(e){
	e.preventDefault();
	//if(document.getElementById("logine-mail").value==""||document.getElementById("loginpassword").value=="")
		//return;
	if((document.getElementById("logine-mail").value=="lalaamrr@gmail.com"||
	document.getElementById("logine-mail").value=="alaa")&&
	(document.getElementById("loginpassword").value=="123456Aa")){
		//hna h7ot link page el edmin bdal el alert
		localStorage.setItem("admin",1);
		location.href="admin.html";
		return;
	}
	var found=0;
	var wrongpass=false;
	storedusers = JSON.parse(localStorage.getItem("users"));
	for(var i=0; i<storedusers.length; i++){
		if(storedusers[i].email==document.getElementById("logine-mail").value||
		storedusers[i].username==document.getElementById("logine-mail").value){
			found=1;
			if(storedusers[i].pass!=document.getElementById("loginpassword").value){
				//alert("Wrong password!");
				wrongpass=true;
				document.getElementById("wrongpass").style.display="block";
				break;
			}
		}
	}
	if(!wrongpass)
		document.getElementById("wrongpass").style.display="none";
	if(!found){
			//alert("Wrong e-mail!");
			document.getElementById("wrongemail").style.display="block";
		}
	else
		document.getElementById("wrongemail").style.display="none";
	if(found&&!wrongpass){
		//hna bdl el alert hn7ot link el home page
		//alert("successful login");
		location.href="home.html";
	}
}
function showpass(){
	if(document.getElementById("loginpassword").type==="password"){
		document.getElementById("loginpassword").type="text";
	}
	else{
		document.getElementById("loginpassword").type="password";
	}
}