<ol class="breadcrumb">
	<li><a href="../">Inicial</a></li>
	<li><a href="index.php">Técnico</a></li>
	<li class="active">Página Inicial</li>
</ol>

<div class="page-header">
  <h1>Página Inicial <small>Técnico</small></h1>
</div>

<img src="../imgs/perfil-tecnico/pagina-inicial/1-pagina-inicial.jpg" class="img-responsive">

<hr>

<h2>Funcionalidades:</h2>
<ul>
	<li><a href="#visualizar-alertas">Visualizar alertas</a></li>
	<li><a href="#visualizar-graficos">Visualizar gráficos</a></li>
</ul>

<hr>

<h3><a name="visualizar-alertas"></a>Visualizar alertas:</h3>

<ul>
  <li><strong>Novos processos vinculados:</strong> exibe os processos recém vinculados ao técnico pelo Gerente Operacional.</li>
  <li><strong>Processos desvinculados:</strong> exibe os processos recém desvinculados ao técnico pelo Gerente Operacional.</li>
  <li><strong>Processos validados:</strong> exibe os processos recém validados pelo Gerente Operacional dos quais o técnico faz parte de equipe técnica</li>
  <li><strong>Outros alertas:</strong>exibe os demais alertas referentes aos processos vinculados ao técnico.</li>
</ul>

<h3><a name="visualizar-graficos"></a>Visualizar gráficos:</h3>

<p>Os gráficos demonstram <i>(em tempo real)</i> a quantidade e o grupo dos processos em cada situação:</p>

<ul>
  <li><strong>Caixa de Entrada:</strong> processos presentes na Caixa de Entrada do técnico, aguardando o início da análise.</li>
  <li><strong>Processos em Análise:</strong> processos em análise pelo técnico.</li>
  <li><strong>Aguardando validação:</strong> processos já analisados pelo técnico, aguardando a validação (aprovação ou não aprovação da análise) pelo Gerente Operacional.</li>
  <li><strong>Validação de processos:</strong> processos já validados pelo Gerente Operacional.</li>
</ul>

<hr>
<h2>Perguntas e respostas frequentes</h2>
<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Por que meus alertas não batem com o número de processos presentes nas etapas?
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        A contabilização se refere à quantidade de alertas não visualizados e não à quantidade de processos na etapa referente. Ou seja, é possível que hajam 10 alertas de 'Novos processos vinculados' e na Caixa de Entrada não possua nenhum processo ou vice-versa, contendo 10 processos na 'Caixa de Entrada' e nenhum alerta de 'Novos processos vinculados', no caso do técnico ter limpado o mesmo.
      </div>
    </div>
  </div>
  <!-- <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Pergunta 2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        <p>Resposta 2</p>
      </div>
    </div>
  </div> -->
</div>