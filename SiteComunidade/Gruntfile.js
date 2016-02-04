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
					'<%=pasta_destino%>/carisma/index.html': 'view/carisma/index.jade',
					//Página Gerente Operacional
					'<%=pasta_destino%>/historia/index.html': 'view/historia/index.jade',
					//Página Técnico
					'<%=pasta_destino%>/membros/index.html': 'view/membros/index.jade'
					

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