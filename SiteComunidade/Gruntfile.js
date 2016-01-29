module.exports = function(grunt) {

	// Configurações do projeto
	grunt.initConfig({

		// Pasta onde o site será gerado
		pasta_destino: 'dist/',

		// Validação do JS
		jshint: {
			all: ['Gruntfile.js']
		},

		// Copia arquivos para a pasta destino
		copy: {
			dist: {
				files: [
					// JS + CSS + Arquivos estáticos (imagens, fontes, ...)
					{
						src: ['js/**', 'css/**', 'fonts/**', 'imgs/**'],
						dest: '<%=pasta_destino%>/'
					}
				]
			}
		},

		// Compilação do Jade para HTML
		jade: {
			all: {
				options: {
					pretty: true,
					compileDebug: false
				},
				files: {
					//Página Inicial
					'<%=pasta_destino%>/index.html': 'view/index.jade',
					//Página Administrador
					'<%=pasta_destino%>/perfil-administrador/index.html': 'view/perfil-administrador/index.jade',
					'<%=pasta_destino%>/perfil-administrador/regioes-de-analise.html': 'view/perfil-administrador/regioes-de-analise.jade',
					'<%=pasta_destino%>/perfil-administrador/tipo-de-documento.html': 'view/perfil-administrador/tipo-de-documento.jade',
					'<%=pasta_destino%>/perfil-administrador/temas-complementares.html': 'view/perfil-administrador/temas-complementares.jade',
					'<%=pasta_destino%>/perfil-administrador/migracao-de-processos.html': 'view/perfil-administrador/migracao-de-processos.jade',
					'<%=pasta_destino%>/perfil-administrador/motivo-de-vistoria.html': 'view/perfil-administrador/motivo-de-vistoria.jade',
					//Página Gerente Operacional
					'<%=pasta_destino%>/perfil-gerente-operacional/index.html': 'view/perfil-gerente-operacional/index.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/pagina-inicial.html': 'view/perfil-gerente-operacional/pagina-inicial.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/caixa-de-entrada.html': 'view/perfil-gerente-operacional/caixa-de-entrada.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/analise.html': 'view/perfil-gerente-operacional/analise.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/validacao-das-vistorias.html': 'view/perfil-gerente-operacional/validacao-das-vistorias.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/validacao-da-analise.html': 'view/perfil-gerente-operacional/validacao-da-analise.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/comunicacao.html': 'view/perfil-gerente-operacional/comunicacao.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/processos-analisados.html': 'view/perfil-gerente-operacional/processos-analisados.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/cancelamento.html': 'view/perfil-gerente-operacional/cancelamento.jade',
					'<%=pasta_destino%>/perfil-gerente-operacional/consultar-processos.html': 'view/perfil-gerente-operacional/consultar-processos.jade',
					//Página Técnico
					'<%=pasta_destino%>/perfil-tecnico/index.html': 'view/perfil-tecnico/index.jade',
					'<%=pasta_destino%>/perfil-tecnico/pagina-inicial.html': 'view/perfil-tecnico/pagina-inicial.jade',
					'<%=pasta_destino%>/perfil-tecnico/caixa-de-entrada.html': 'view/perfil-tecnico/caixa-de-entrada.jade',
					'<%=pasta_destino%>/perfil-tecnico/analise-tecnica.html': 'view/perfil-tecnico/analise-tecnica.jade',
					'<%=pasta_destino%>/perfil-tecnico/dados-gerais.html': 'view/perfil-tecnico/dados-gerais.jade',
					'<%=pasta_destino%>/perfil-tecnico/documentos-enviados.html': 'view/perfil-tecnico/documentos-enviados.jade',
					'<%=pasta_destino%>/perfil-tecnico/analise-da-ficha-do-imovel.html': 'view/perfil-tecnico/analise-da-ficha-do-imovel.jade',
					'<%=pasta_destino%>/perfil-tecnico/analise-geo.html': 'view/perfil-tecnico/analise-geo.jade',
					'<%=pasta_destino%>/perfil-tecnico/vistoria.html': 'view/perfil-tecnico/vistoria.jade',
					'<%=pasta_destino%>/perfil-tecnico/resumo.html': 'view/perfil-tecnico/resumo.jade',
					'<%=pasta_destino%>/perfil-tecnico/conclusao.html': 'view/perfil-tecnico/conclusao.jade',
					'<%=pasta_destino%>/perfil-tecnico/consultar-processos.html': 'view/perfil-tecnico/consultar-processos.jade'

				}
			}
		}

	});

	// Carrega os módulos a serem usados
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Registra as tarefas do grunt
	grunt.registerTask('default', ['jshint', 'jade', 'copy:dist']);
};