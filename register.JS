var storedusers = JSON.parse(localStorage.getItem("users"));
if(storedusers==null){
storedusers=[];
storedusers[0]={email:"lalaamrr@gmail.com", pass:"123456Aa", username:"alaa"};
localStorage.setItem("users", JSON.stringify(storedusers));
}
function validate(e){
    storedusers = JSON.parse(localStorage.getItem("users"));
	var flag=true;
	e.preventDefault();
	if(!(/^[a-z0-9_-]{3,16}$/igm.test(document.getElementById("username").value))){
		//alert("Invalid username!");
		document.getElementById("invalidusername").style.display="block";
		flag=false;
		//return false;
	}
	else
		document.getElementById("invalidusername").style.display="none";
		
	if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(document.getElementById("registratione-mail").value))){
		flag=false;
		document.getElementById("invalidemail").style.display="block";
		//alert("Invalid e-mail address!");
		//return false;
	}
	else
		document.getElementById("invalidemail").style.display="none";
	if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(document.getElementById("registrationpassword").value))){
		//alert("Invalid password!");
		flag=false;
		document.getElementById("invalidpassword").style.display="block";
		//return false;
	}
	else
	document.getElementById("invalidpassword").style.display="none";
	//if(flag)
	//adduser(event);
    var usernameexist=false;
	  for(var i=0;i<storedusers.length;i++){
		if(document.getElementById("username").value==storedusers[i].username){
			usernameexist=true;
			document.getElementById("usernameexist").style.display="block";
			//alert("This username already exists!");
			//return;
		}
	 }
	 if(!usernameexist)
		 document.getElementById("usernameexist").style.display="none";
	 var emailexist=false;
	 for(var i=0;i<storedusers.length;i++){
		if(document.getElementById("registratione-mail").value==storedusers[i].email){
			emailexist=true;
			//alert("This e-mail already exists!");
			document.getElementById("emailexist").style.display="block";
			//return;
		}
	 }
	 if(!emailexist)
		 document.getElementById("emailexist").style.display="none";
	 var nomatch=false;
	 if(document.getElementById("registrationpassword").value!=document.getElementById("passwordconfirmation").value){
		 nomatch=true;
		//alert("The password confirmation doesn't match!");
		document.getElementById("wrongconfirmation").style.display="block";
		//return;
	 }
	 if(!nomatch)
		document.getElementById("wrongconfirmation").style.display="none"; 
	 if(flag&&!nomatch&&!emailexist&&!usernameexist){
		 storedusers.push({email:document.getElementById("registratione-mail").value,pass:document.getElementById("registrationpassword").value,
		 username:document.getElementById("username").value});
		 localStorage.setItem("users", JSON.stringify(storedusers));
		 //alert("successful registration!")
		 //khalas 3amal register f hawadih 3la el home page
		 document.location="home.html";
	 }
	 
}
function showpass(ID){
	if(document.getElementById(ID).type==="password"){
		document.getElementById(ID).type="text";
	}
	else{
		document.getElementById(ID).type="password";
	}
}