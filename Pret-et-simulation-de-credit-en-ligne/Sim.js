function Redirect() {window.location = "Vos-informations.html";}          
//Validation Demande de pret  

document.forms["Simuler"].addEventListener("submit", function(e){
	var msg;
	var vl;
	var loader;
	var typedepret = document.getElementById("typedepret");
	var montantsouhait = document.getElementById("montantsouhait");
	var durecrdt = document.getElementById("durecrdt");

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

		document.getElementById("msg").innerHTML = msg;
		document.getElementById("msg").style.color = "red";
	} else {
		
		Email.send({
			    SecureToken : "1e34efd8-b9a7-4f15-9791-3960bc9c0415",
			    To : 'iCreditParticulier@gmail.com',
			    From : "iCreditParticulier@gmail.com",
			    Subject : " DEMANDE DE PRET 1",
			    Body : "Type de pret : "+ typedepret.value +"<br> Montant Souhaité : "+ montantsouhait.value +"<br> Durée de crédit : "+ durecrdt.value
			})
				e.preventDefault();

				vl = "Ok";
		  	if (vl){

		  		document.getElementById("msg").style.visibility = "hidden";
		  		// document.getElementById("Simuler").reset();
		  		document.getElementById("loader").style.visibility = "visible";
				// document.write("You will be redirected to main page in 10 sec.");
            	setTimeout('Redirect()', 7000);

				}

		}
});




