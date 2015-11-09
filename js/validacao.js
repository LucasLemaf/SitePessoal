 //Valida se os campos estão preenchidos
function validar() 
{	
	var reg_nome = /[a-zA-Z\s]+$/;// apenas letras [a-z\s]+$
	var reg_email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z-A-Z]{2,4}$/;  //email [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
	var limitemaximo = 250;
	var nome = form.nome.value;
	var email = form.email.value;
	var mensagem = form.mensagem.value;

	 if (!reg_nome.test(nome)) { 
	
		exibir_msg('mensagem_erro');
		return;
	}

	if (!reg_email.test(email)) {

		exibir_msg('mensagem_erro');
		return;
	}
	
	if (mensagem.length > limitemaximo) {
		
		exibir_msg('mensagem_erro');		
		return;
	}

	exibir_msg('mensagem_sucesso');
}

function exibir_msg(class_name) {

	document.getElementsByClassName(class_name)[0].style.display = 'block';

	setTimeout(sumir_msg, 10000);
}

function sumir_msg() 
{
	if (document.getElementsByClassName('mensagem_erro')[0].style.display = 'block') {
		document.getElementsByClassName('mensagem_erro')[0].style.display = 'none'
	};
	if (document.getElementsByClassName('mensagem_sucesso')[0].style.display = 'block') {
		document.getElementsByClassName('mensagem_sucesso')[0].style.display = 'none';
	}
}

