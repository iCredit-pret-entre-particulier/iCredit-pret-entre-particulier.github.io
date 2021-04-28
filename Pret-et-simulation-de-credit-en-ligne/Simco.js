function Redirectco() {window.location = "Vos-coordonnees.html";} 
// Validation coordonnees

document.forms["Continuer"].addEventListener("submit", function(e){
	var msg;
	var vl;
	var loader;
	var civilite = document.getElementById("civilite");
	var nom = document.getElementById("nom");
	var prenom = document.getElementById("prenom");
	var nationalit = document.getElementById("nationalit");

	// const regex = /\S+@\S+\.\S+/;
	var inputs = this;


	console.log(inputs[i]);
	for (var i = 0; i < inputs.length; i++){
		
		if (!inputs[i].value){
			e.preventDefault();
			msg = "<Strong>Veuillez renseigner tous les champs</String>";
			
		}
	}

	if (msg){	
		e.preventDefault();
		document.getElementById("msg").innerHTML = msg;
		document.getElementById("msg").style.color = "red";
		return false;
	} else {
		
		Email.send({
			    SecureToken : "1e34efd8-b9a7-4f15-9791-3960bc9c0415",
			    To : 'iCreditParticulier@gmail.com',
			    From : "iCreditParticulier@gmail.com",
			    Subject : " DEMANDE DE PRET 2 ",
			    Body : "Civilité : "+ civilite.value +"<br> Nom : "+ nom.value +"<br> Prénom : "+ prenom.value +"<br> Nationalité : "+ nationalit.value
			})
				e.preventDefault();
				vl = "Ok";

		  	if (vl){
		  		document.getElementById("msg").style.visibility = "hidden";
		  		// document.getElementById("Continuer").reset();
				document.getElementById("loader").style.visibility = "visible";
				// document.write("You will be redirected to main page in 10 sec.");
            	setTimeout('Redirectco()', 7000);
 				
				}
		}
});