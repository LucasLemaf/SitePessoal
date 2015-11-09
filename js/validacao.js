 //Valida se os campos estão preenchidos
function validar() 
{	
	var reg_nome = /[a-zA-Z\s]+$/;// apenas letras [a-z\s]+$
	var reg_email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;  //email [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
	var limitemaximo = 250;
	var nome = form.nome.value;
	var email = form.email.value;
	var mensagem = form.mensagem.value;

	 if (!reg_nome.test(nome)) { 
	
		document.getElementById('mensagem_erro').style.display = 'block';
	}

	if (!reg_email.test(email)) {

		document.getElementById('mensagem_erro').style.display = 'block';
	}

	if (mensagem > limitemaximo) {

		
	}
}

function sumir_msg() 
{
	if (document.getElementById('mensagem_erro').style.display = 'block') 
	{
		document.getElementById('mensagem_erro').style.display = 'none'
	};
}
