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
		return;
	}

	if (!reg_email.test(email)) {

		
		msg.children[0].innerHTML = "Favor preencher o campo 'EMAIL' corretamente";
		msg.className = "mensagem_erro";
		return;
	}
	
	if (mensagem.length > limitemaximo) {

		
		msg.children[0].innerHTML = "O campo 'Mensagem' tem limite de 250 caracteres";
		msg.className = "mensagem_erro";
		return;
	}

	if (mensagem.length == "") {

		
		msg.children[0].innerHTML = "O campo Mensagem está vazio";
		msg.className = "mensagem_erro";
		return;
	}
		
		msg.className = "mensagem_sucesso";
		msg.children[0].innerHTML = "Mensagem enviada com Sucesso";
}

//function exibir_msg(class_name) {

//	document.getElementsByClassName("").innerHTML = "Favor preencher os campos";
//	document.getElementsByClassName("").innerHTML = "Favor preencher os campos corretamente";
//	document.getElementsByClassName("").innerHTML = "Favor preencher o campo NOME";
//	document.getElementsByClassName("").innerHTML = "Favor preencher o campo EMAIL";
//	document.getElementsByClassName("").innerHTML = "Favor preencher o campo Mensagem";
//	document.getElementsByClassName("").innerHTML = "Favor preencher o campo NOME corretamente";
//	document.getElementsByClassName("").innerHTML = "Favor preencher o campo EMAIL corretamente";

//	setTimeout(sumir_msg, 100000);
//}

function sumir_msg() 
{
	
	if (document.getElementsByClassName("")[0].style.display = 'block') {
		document.getElementsByClassName("")[0].style.display = 'none'
 	};

 	if (document.getElementsByClassName("")[0].style.display = 'block') {
 		document.getElementsByClassName("")[0].style.display = 'none';
 	}
}

