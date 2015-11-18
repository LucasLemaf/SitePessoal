(function() { // função Module Pattern

	var mensagem = document.getElementById("mensagem");
	var textoMensagem = document.getElementById("mensagem_texto");

	// Valida se os campos estão preenchidos
	var validar = function() {

		// Constantes
		var regexPadraoNome = /[a-zA-Z\s]+$/; // padrão: apenas letras
		var regexPadraoEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z-A-Z]{2,4}$/;  //padrão: xxx@xxx.xxx
		var limiteMaximocampoTextoMensagem = 250;
		
		// Objetos do DOM
		var campoNome = form.nome;
		var campoEmail = form.email;
		var campoTexto = form.texto;
		
		var mensagensErro = [];
 
		exibirMensagem();

		limparCamposComErro();

		// validação do campo Nome
		if (!regexPadraoNome.test(campoNome.value)) {

			validarCampoErro(campoNome);
			mensagensErro.push("Favor preencher o campo 'Nome' corretamente");
		}

		// validação do campo Email
		if (!regexPadraoEmail.test(campoEmail.value)) {

			validarCampoErro(campoEmail);
			mensagensErro.push("Favor preencher o campo 'Email' corretamente");
		}
		
		// validação do campo Mensagem
		if (campoTexto.value.length > limiteMaximocampoTextoMensagem) {

			validarCampoErro(campoTexto);
			mensagensErro.push("O campo 'Mensagem' tem limite de 250 caracteres");
		}

		if (campoTexto.value.length == "") {

			validarCampoErro(campoTexto);
			mensagensErro.push("Favor preencher o campo 'Mensagem'");
		}

		// exibição da mensagem
		if (mensagensErro.length == 0) {

			exibirMensagemSucesso();

		} else {

			exibirMensagemErro(mensagensErro);
		}

	};

	var exibirMensagem = function() {

		mensagem.style.display = 'block';
	};

	var exibirMensagemSucesso = function() {

		mensagem.className = "mensagem_sucesso";
		textoMensagem.innerHTML = "Mensagem enviada com Sucesso";
		setTimeout(sumirMensagem, 100000);
	};

	var exibirMensagemErro = function(mensagensErro) {

		var mensagemErro = "";

		for (var i=0; i<mensagensErro.length; i++) {
			mensagemErro += "<br/>" + mensagensErro[i];
		}

		mensagem.className = "mensagem_erro";
		textoMensagem.innerHTML = mensagemErro;
		setTimeout(sumirMensagem, 100000);
	};

	var sumirMensagem = function() {
		
		if (mensagem.style.display = 'block') {
			mensagem.style.display = 'none'
	 	};
	};

	var limparCamposComErro = function() {

		var camposComErro = document.getElementsByClassName('campo_erro');
		
		for (var i=0; i < camposComErro.length; i++) {

			camposComErro[i].classList.remove('campo_erro');
		}
	};

	var validarCampoErro = function(campo) {

		campo.classList.add("campo_erro");
	};

	// métodos e atributos públicos
	window.validar = validar;
	window.sumirMensagem = sumirMensagem;

})();
