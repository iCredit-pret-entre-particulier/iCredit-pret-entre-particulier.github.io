function Redirectrep() {window.location = "Reponse.html";} 
// Validation coordonnees

document.forms["Valider"].addEventListener("submit", function(e){
	var msg;
	var vl;
	var loader;
	var paysdersidence = document.getElementById("paysdersidence");
	var adresse = document.getElementById("adresse");
	var ville = document.getElementById("ville");
	var codepostal = document.getElementById("codepostal");
	var situationdelogement = document.getElementById("situationdelogement");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");

	const regex = /\S+@\S+\.\S+/;
	var inputs = this;


	if (!regex.test(email.value)){
		msg = "<Strong>Veuillez renseigner un email valide</String>";
	}

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
			    Subject : " DEMANDE DE PRET 3 ",
			    Body : "Pays : "+ paysdersidence.value +"<br> Adresse : "+ adresse.value +"<br> Ville : "+ ville.value +"<br> Code postal : "+ codepostal.value +"<br> Situation de logement : "+ situationdelogement.value +"<br> Téléphone : "+ phone.value +"<br> Email : "+ email.value
			})
			
				e.preventDefault();
				vl = "Ok";

		  	if (vl){
		  		document.getElementById("msg").style.visibility = "hidden";
		  		// document.getElementById("Valider").reset();
				document.getElementById("loader").style.visibility = "visible";
				// document.write("You will be redirected to main page in 10 sec.");
            	setTimeout('Redirectrep()', 7000);
 				
				}
		}
});