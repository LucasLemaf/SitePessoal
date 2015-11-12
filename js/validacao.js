 //Valida se os campos estão preenchidos
function validar() 
{	
	var reg_nome = /[a-zA-Z\s]+$/;// apenas letras [a-z\s]+$
	var reg_email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z-A-Z]{2,4}$/;  //email [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$
	var limitemaximo = 250;
	var nome = form.nome.value;
	var email = form.email.value;
	var mensagem = form.mensagem.value;
	var msg = document.getElementById("a");
	 
	msg.style.display = 'block';

	if (!reg_nome.test(nome)) {

		
		msg.children[0].innerHTML = "Favor preencher o campo 'NOME' corretamente";
		msg.className = "mensagem_erro";
		setTimeout(sumir_msg, 10000);
		return;
	}

	if (!reg_email.test(email)) {

		
		msg.children[0].innerHTML = "Favor preencher o campo 'EMAIL' corretamente";
		msg.className = "mensagem_erro";
		setTimeout(sumir_msg, 10000);
		return;
	}
	
	if (mensagem.length > limitemaximo) {

		
		msg.children[0].innerHTML = "O campo 'Mensagem' tem limite de 250 caracteres";
		msg.className = "mensagem_erro";
		setTimeout(sumir_msg, 10000);
		return;
	}

	if (mensagem.length == "") {

		
		msg.children[0].innerHTML = "O campo Mensagem está vazio";
		msg.className = "mensagem_erro";
		setTimeout(sumir_msg, 10000);
		return;
	}
		
		msg.className = "mensagem_sucesso";
		msg.children[0].innerHTML = "Mensagem enviada com Sucesso";
		setTimeout(sumir_msg, 10000);
		return;
}

 // "Favor preencher os campos";
//	"Favor preencher os campos corretamente";
//	"Favor preencher o campo NOME";
//	"Favor preencher o campo EMAIL";
//	"Favor preencher o campo Mensagem";
//	"Favor preencher o campo NOME corretamente";
//	"Favor preencher o campo EMAIL corretamente";


function sumir_msg() 
{
	var msg = document.getElementById("a");
	
	if (msg.style.display = 'block') {
		msg.style.display = 'none'
 	};

 	if (msg.style.display = 'block') {
 		msg.style.display = 'none';
 	};
}

