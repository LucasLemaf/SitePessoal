// Valida se os campos estão preenchidos
function validar() 
{
	var nome = form.nome.value;
	var email = form.email.value;
	var mensagem = form.mensagem.value;

	if (isNaN(nome)== "") {
		document.getElementById('mensagem_erro').style.display = 'block';
	}
	if (isNaN(nome)== false) {
		document.getElementById('mensagem_erro').style.display = 'block';	
	};

	if (email == "") {
		document.getElementById('mensagem_erro').style.display = 'block';	
	}

	if (mensagem == "") {
		document.getElementById('mensagem_erro').style.display = 'block';	
	};
}

// Bloqueia numero no campo Nome 
function txtBoxFormat(evtKeyPress) 
{
	var nTecla;

	if(document.all) { 

	nTecla = evtKeyPress.keyCode;

	} 
		else if(document.layers) { 
		nTecla = evtKeyPress.which;

	} 
		else {
		nTecla = evtKeyPress.which;
		if (nTecla == 8) {
			return true;
		}
	}

		if (nTecla != 8)
	  		return ((nTecla <= 47) || (nTecla >= 58)); 
		else

  	return true;
}
// Valida e-mail no campo e-mail 
