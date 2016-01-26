module.exports = function(grunt) {

	// Configurações do projeto
	grunt.initConfig({

		// Pasta onde o site será gerado
		pasta_destino: 'html/',

		// Validação do JS
		jshint: {
			all: ['Gruntfile.js']
		},

		// Copia arquivos para a pasta destino
		copy: {
			html: {
				files: [
					// JS + CSS + Arquivos estáticos (imagens, fontes, ...)
					{
						src: [],
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
					'<%=pasta_destino%>/inicio.html': 'jade/inicio.jade',
					'<%=pasta_destino%>/curriculo.html': 'jade/curriculo.jade'

				}
			}
		}

	});

	// Carrega os módulos a serem usados
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Registra as tarefas do grunt
	grunt.registerTask('default', ['jshint', 'jade', 'copy:html']);
};