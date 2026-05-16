// ════════════════════════════════════════════════════════════
// script.js - Lógica Principal do Treinamento VIPSEG
// ════════════════════════════════════════════════════════════

// Estado global
let estadoGlobal = {
  usuario: {
    nome: '',
    email: '',
    telefone: ''
  },
  modulosCompletos: [],
  respostasQuiz: {},
  notaFinal: 0,
  aprovado: false,
  linkIndicacao: ''
};

// ════════════════════════════════════════════════════════════
// LANDING PAGE - Captura de Leads
// ════════════════════════════════════════════════════════════

function scrollParaCadastro() {
  const cadastroSection = document.getElementById('cadastro');
  cadastroSection.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('nome-landing').focus();
}

function iniciarTreinamento() {
  const nome = document.getElementById('nome-landing').value.trim();
  const telefone = document.getElementById('telefone-landing').value.trim();
  const email = document.getElementById('email-landing').value.trim();

  if (!nome || !telefone || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Validar e-mail básico
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('E-mail inválido. Digite um e-mail válido.');
    return;
  }

  // Salvar dados do usuário
  estadoGlobal.usuario = { nome, email, telefone };
  salvarEstado();

  // Gerar link de indicação
  gerarLinkIndicacao();

  // Mostrar avatar com primeira letra
  const primeiraLetra = nome.charAt(0).toUpperCase();
  document.getElementById('user-avatar').textContent = primeiraLetra;
  document.getElementById('user-name').textContent = nome.split(' ')[0];

  // Transição para tela de treinamento
  document.getElementById('tela-landing').classList.remove('tela-ativa');
  document.getElementById('tela-landing').classList.add('hidden');
  document.getElementById('tela-treinamento').classList.remove('hidden');
  document.getElementById('tela-treinamento').classList.add('tela-ativa');

  // Renderizar módulos
  renderizarModulos();
  atualizarProgresso();

  // Iniciar primeiro módulo
  abrirModulo(1);
}

// ════════════════════════════════════════════════════════════
// GERAÇÃO DE LINK DE INDICAÇÃO (MGM)
// ════════════════════════════════════════════════════════════

function gerarLinkIndicacao() {
  const telefone = estadoGlobal.usuario.telefone.replace(/\D/g, '');
  const timestamp = Date.now();
  const hash = btoa(`${telefone}-${timestamp}`).substring(0, 12);
  
  estadoGlobal.linkIndicacao = `https://vipseg.com.br?ref=${hash}`;
  salvarEstado();
  
  return estadoGlobal.linkIndicacao;
}

function compartilharIndicacao() {
  const link = estadoGlobal.linkIndicacao;
  const nome = estadoGlobal.usuario.nome.split(' ')[0];
  const mensagem = `Oi! Vem ganhar +R$3.000/mês comigo na VIPSEG Brasil! 💰 ${link}`;
  
  // WhatsApp
  const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
  
  // Copiar link
  navigator.clipboard.writeText(link).then(() => {
    alert('Link copiado! Compartilhe com seus amigos.');
  });
}

// ════════════════════════════════════════════════════════════
// RENDERIZAÇÃO DE MÓDULOS NA SIDEBAR
// ════════════════════════════════════════════════════════════

function renderizarModulos() {
  const sidebarNav = document.getElementById('sidebar-nav');
  sidebarNav.innerHTML = '<div class="sidebar-nav-title">Módulos</div>';

  MODULOS.forEach(modulo => {
    const concluido = estadoGlobal.modulosCompletos.includes(modulo.id);
    const bloqueado = modulo.id > 1 && !estadoGlobal.modulosCompletos.includes(modulo.id - 1);
    
    const item = document.createElement('div');
    item.className = 'modulo-item';
    if (concluido) item.classList.add('concluido');
    if (bloqueado) item.classList.add('bloqueado');
    
    item.innerHTML = `
      <div class="modulo-nav-icone">${modulo.icone}</div>
      <div class="modulo-nav-info">
        <div class="modulo-nav-titulo">Módulo ${modulo.id}</div>
        <div class="modulo-nav-status ${concluido ? 'status-concluido' : 'status-bloqueado'}">
          ${concluido ? '✅ Concluído' : bloqueado ? '🔒 Bloqueado' : '⏳ Abrir'}
        </div>
      </div>
    `;

    if (!bloqueado) {
      item.onclick = () => abrirModulo(modulo.id);
      item.style.cursor = 'pointer';
    }

    sidebarNav.appendChild(item);
  });

  // Adicionar item Avaliação Final
  const avaliacaoBloqueada = estadoGlobal.modulosCompletos.length < MODULOS.length;
  const avaliacaoItem = document.createElement('div');
  avaliacaoItem.className = 'modulo-item' + (avaliacaoBloqueada ? ' bloqueado' : '');
  avaliacaoItem.id = 'sidebar-avaliacao';

  avaliacaoItem.innerHTML = `
    <div class="modulo-nav-icone">🎓</div>
    <div class="modulo-nav-info">
      <div class="modulo-nav-titulo">Avaliação Final</div>
      <div class="modulo-nav-status ${avaliacaoItem.classList.contains('bloqueado') ? 'status-bloqueado' : ''}">
        ${avaliacaoBloqueada ? '🔒 Bloqueada' : '⏳ Disponível'}
      </div>
    </div>
  `;

  if (!avaliacaoBloqueada) {
    avaliacaoItem.style.cursor = 'pointer';
    avaliacaoItem.onclick = () => abrirAvaliacao();
  }

  sidebarNav.appendChild(avaliacaoItem);
}

// ════════════════════════════════════════════════════════════
// ABRIR MÓDULO E RENDERIZAR AULA
// ════════════════════════════════════════════════════════════

function abrirModulo(id) {
  const modulo = MODULOS.find(m => m.id === id);
  if (!modulo) return;

  const areaCentral = document.getElementById('area-aula');
  areaCentral.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'aula-container';

  // Reel de Vídeo
  const videoReel = document.createElement('div');
  videoReel.className = 'video-reel';
  videoReel.innerHTML = `
    <div class="reel-header">
      <div class="reel-numero">Módulo ${modulo.id} de ${MODULOS.length}</div>
      <div class="reel-titulo">${modulo.titulo}</div>
      <div class="reel-descricao">${modulo.descricao}</div>
      <div class="reel-icone">${modulo.icone}</div>
    </div>
    <div class="reel-player">
      <iframe src="${modulo.video}?autoplay=1&controls=1" title="Aula ${modulo.id}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>
  `;
  container.appendChild(videoReel);

  // Quiz de Fixação
  if (modulo.testePos.length > 0) {
    const quizContainer = document.createElement('div');
    quizContainer.className = 'quiz-container';
    quizContainer.innerHTML = '<div class="quiz-titulo">✅ Quiz de Fixação</div>';

    modulo.testePos.forEach((pergunta, idx) => {
      const quizItem = document.createElement('div');
      quizItem.className = 'quiz-item';
      quizItem.innerHTML = `
        <div class="quiz-pergunta">${idx + 1}. ${pergunta.pergunta}</div>
        <div class="quiz-opcoes">
          ${pergunta.alternativas.map((alt, altIdx) => `
            <label class="quiz-opcao">
              <input type="radio" name="pergunta-${id}-${idx}" value="${altIdx}" 
                     onchange="marcarResposta(${id}, ${idx}, ${altIdx})">
              ${alt}
            </label>
          `).join('')}
        </div>
      `;
      quizContainer.appendChild(quizItem);
    });

    container.appendChild(quizContainer);
  }

  // Botões de Ação
  const acoes = document.createElement('div');
  acoes.className = 'acoes-aula';
  
  const btnVoltar = document.createElement('button');
  btnVoltar.className = 'btn-aula btn-voltar';
  btnVoltar.textContent = '← Voltar';
  btnVoltar.onclick = () => voltarParaLista();

  const btnProximo = document.createElement('button');
  btnProximo.className = 'btn-aula btn-proximo';
  btnProximo.textContent = id < MODULOS.length ? 'Próximo Módulo →' : 'Ir para Avaliação →';
  btnProximo.onclick = () => {
    if (verificarQuizCompleto(id)) {
      concluirModulo(id);
    } else {
      alert('⚠️ Por favor, responda todas as perguntas do quiz para avançar.');
    }
  };

  acoes.appendChild(btnVoltar);
  acoes.appendChild(btnProximo);
  container.appendChild(acoes);

  areaCentral.appendChild(container);

  // Scrollar para o topo
  areaCentral.scrollTop = 0;

  // Marcar módulo como ativo na sidebar
  atualizarSidebarAtivo(id);
}

function marcarResposta(moduloId, perguntaIdx, respostaIdx) {
  const chave = `modulo-${moduloId}-pergunta-${perguntaIdx}`;
  estadoGlobal.respostasQuiz[chave] = respostaIdx;
  salvarEstado();
}

function verificarQuizCompleto(moduloId) {
  const modulo = MODULOS.find(m => m.id === moduloId);
  if (!modulo || modulo.testePos.length === 0) return true;

  return modulo.testePos.every((_, idx) => {
    const chave = `modulo-${moduloId}-pergunta-${idx}`;
    return estadoGlobal.respostasQuiz.hasOwnProperty(chave);
  });
}

function concluirModulo(moduloId) {
  if (!estadoGlobal.modulosCompletos.includes(moduloId)) {
    estadoGlobal.modulosCompletos.push(moduloId);
    salvarEstado();
  }

  renderizarModulos();
  atualizarProgresso();

  const proximoModulo = moduloId + 1;
  if (proximoModulo <= MODULOS.length) {
    abrirModulo(proximoModulo);
  } else {
    abrirAvaliacao();
  }
}

// ════════════════════════════════════════════════════════════
// AVALIAÇÃO FINAL
// ════════════════════════════════════════════════════════════

function abrirAvaliacao() {
  const areaCentral = document.getElementById('area-aula');
  areaCentral.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'aula-container';

  // Cabeçalho
  const header = document.createElement('div');
  header.className = 'video-reel';
  header.innerHTML = `
    <div class="reel-header">
      <div class="reel-numero">Etapa Final</div>
      <div class="reel-titulo">Avaliação Final</div>
      <div class="reel-descricao">Responda todas as 20 questões. Nota mínima: 70% (14 acertos)</div>
      <div class="reel-icone">🎓</div>
    </div>
  `;
  container.appendChild(header);

  // Questões
  const quizContainer = document.createElement('div');
  quizContainer.className = 'quiz-container';

  AVALIACAO_FINAL.forEach((questao, idx) => {
    const quizItem = document.createElement('div');
    quizItem.className = 'quiz-item';
    quizItem.innerHTML = `
      <div class="quiz-pergunta">${idx + 1}. ${questao.pergunta}</div>
      <div class="quiz-opcoes">
        ${questao.alternativas.map((alt, altIdx) => `
          <label class="quiz-opcao">
            <input type="radio" name="avaliacao-${idx}" value="${altIdx}" 
                   onchange="marcarAvaliacaoResposta(${idx}, ${altIdx})">
            ${alt}
          </label>
        `).join('')}
      </div>
    `;
    quizContainer.appendChild(quizItem);
  });

  container.appendChild(quizContainer);

  // Botões
  const acoes = document.createElement('div');
  acoes.className = 'acoes-aula';

  const btnVoltar = document.createElement('button');
  btnVoltar.className = 'btn-aula btn-voltar';
  btnVoltar.textContent = '← Voltar';
  btnVoltar.onclick = () => {
    if (estadoGlobal.modulosCompletos.length > 0) {
      abrirModulo(estadoGlobal.modulosCompletos[estadoGlobal.modulosCompletos.length - 1]);
    }
  };

  const btnEnviar = document.createElement('button');
  btnEnviar.className = 'btn-aula btn-proximo';
  btnEnviar.textContent = '✅ Enviar Respostas';
  btnEnviar.onclick = () => finalizarAvaliacao();

  acoes.appendChild(btnVoltar);
  acoes.appendChild(btnEnviar);
  container.appendChild(acoes);

  areaCentral.appendChild(container);
  areaCentral.scrollTop = 0;
}

function marcarAvaliacaoResposta(perguntaIdx, respostaIdx) {
  const chave = `avaliacao-${perguntaIdx}`;
  estadoGlobal.respostasQuiz[chave] = respostaIdx;
  salvarEstado();
}

function finalizarAvaliacao() {
  // Verificar se todas foram respondidas
  if (AVALIACAO_FINAL.length !== Object.keys(estadoGlobal.respostasQuiz).filter(k => k.startsWith('avaliacao-')).length) {
    alert('⚠️ Por favor, responda todas as 20 questões antes de enviar.');
    return;
  }

  // Calcular nota
  let acertos = 0;
  AVALIACAO_FINAL.forEach((questao, idx) => {
    const chave = `avaliacao-${idx}`;
    if (estadoGlobal.respostasQuiz[chave] === questao.correta) {
      acertos++;
    }
  });

  const percentual = Math.round((acertos / AVALIACAO_FINAL.length) * 100);
  const aprovado = percentual >= CURSO.notaMinima;

  estadoGlobal.notaFinal = percentual;
  estadoGlobal.aprovado = aprovado;
  salvarEstado();

  if (aprovado) {
    gerarCertificado();
  } else {
    mostrarResultadoReprovado(percentual, acertos);
  }
}

function mostrarResultadoReprovado(percentual, acertos) {
  const areaCentral = document.getElementById('area-aula');
  areaCentral.innerHTML = `
    <div class="aula-container">
      <div class="video-reel">
        <div class="reel-header" style="background: linear-gradient(135deg, #EF4444, #DC2626);">
          <div class="reel-numero">Resultado</div>
          <div class="reel-titulo">Infelizmente, reprovado</div>
          <div class="reel-icone">❌</div>
          <div class="reel-descricao" style="margin-top: 16px;">
            Você acertou ${acertos} de ${AVALIACAO_FINAL.length} questões (${percentual}%)<br>
            Nota mínima: ${CURSO.notaMinima}%
          </div>
        </div>
      </div>
      <div class="quiz-container">
        <p>Mas não desista! Você pode:</p>
        <ul style="margin-left: 20px; margin-top: 12px;">
          <li>Assistir novamente os vídeos dos módulos</li>
          <li>Revisar as respostas incorretas</li>
          <li>Tentar novamente a avaliação</li>
        </ul>
      </div>
      <div class="acoes-aula">
        <button class="btn-aula btn-proximo" onclick="location.reload()">🔄 Tentar Novamente</button>
      </div>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// CERTIFICADO
// ════════════════════════════════════════════════════════════

function gerarCertificado() {
  const areaCentral = document.getElementById('area-aula');
  areaCentral.innerHTML = `
    <div class="aula-container">
      <div class="video-reel">
        <div class="reel-header" style="background: linear-gradient(135deg, #10B981, #059669);">
          <div class="reel-numero">Parabéns!</div>
          <div class="reel-titulo">✅ Você Foi Aprovado!</div>
          <div class="reel-icone">🏆</div>
          <div class="reel-descricao" style="margin-top: 16px;">
            Nota Final: ${estadoGlobal.notaFinal}%
          </div>
        </div>
      </div>
      <div class="quiz-container" style="text-align: center;">
        <h3>🎉 Bem-vindo à VIPSEG Brasil!</h3>
        <p style="margin-top: 16px;">
          Você completou o treinamento e está pronto para começar a ganhar!
        </p>
        <p style="margin-top: 12px; font-weight: 600;">
          Ganhos com 15 placas/mês: +R$ 3.000
        </p>
      </div>
      <div class="acoes-aula">
        <button class="btn-aula btn-proximo" onclick="exibirCertificado()">📜 Ver Certificado</button>
        <button class="btn-aula btn-voltar" onclick="compartilharIndicacao()">🤝 Compartilhar (MGM)</button>
      </div>
    </div>
  `;

  atualizarProgresso();
}

function exibirCertificado() {
  const modal = document.getElementById('modal-certificado');
  const certDiv = document.getElementById('certificado-renderizado');

  certDiv.innerHTML = `
    <div class="certificado">
      <div class="cert-header">
        <div class="cert-titulo">🏆 Certificado de Conclusão</div>
        <div class="cert-subtitulo">Treinamento VIPSEG Brasil</div>
      </div>
      
      <div class="cert-corpo">
        <p style="text-align: center; margin-bottom: 20px; color: var(--cor-texto-claro);">
          Certificamos que
        </p>
        
        <div class="cert-nome">${estadoGlobal.usuario.nome}</div>
        
        <p style="text-align: center; margin-bottom: 30px; color: var(--cor-texto);">
          completou com <strong>aprovação</strong> o Treinamento de Consultores VIPSEG Brasil,
          composto por 10 módulos de microlearning cobrindo apresentação da empresa,
          produtos, técnicas de venda, ética e pós-venda.
        </p>

        <div class="cert-info">
          <div class="cert-info-item">
            <div class="cert-info-label">Data de Conclusão</div>
            <div class="cert-info-valor">${new Date().toLocaleDateString('pt-BR')}</div>
          </div>
          <div class="cert-info-item">
            <div class="cert-info-label">Carga Horária</div>
            <div class="cert-info-valor">${CURSO.cargaHoraria}</div>
          </div>
          <div class="cert-info-item">
            <div class="cert-info-label">Nota Final</div>
            <div class="cert-info-valor">${estadoGlobal.notaFinal}%</div>
          </div>
          <div class="cert-info-item">
            <div class="cert-info-label">Situação</div>
            <div class="cert-info-valor" style="color: var(--cor-verde);">✅ Aprovado</div>
          </div>
        </div>

        <div class="cert-assinatura">
          <div class="cert-medal">🏆</div>
          <p><strong>VIPSEG Brasil</strong></p>
          <p>Direção Geral - Departamento de Treinamento</p>
          <p style="margin-top: 16px; font-size: 0.8rem;">
            CNPJ 36.684.733/0001-30 • vipseg.org
          </p>
        </div>
      </div>
    </div>

    <div style="text-align: center; padding: 24px; gap: 12px; display: flex; justify-content: center;">
      <button class="btn-aula btn-proximo" onclick="imprimirCertificado()" style="margin: 0;">
        🖨️ Imprimir / Salvar PDF
      </button>
      <button class="btn-aula btn-voltar" onclick="fecharCertificado()" style="margin: 0;">
        ← Fechar
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function imprimirCertificado() {
  window.print();
}

function fecharCertificado() {
  document.getElementById('modal-certificado').classList.add('hidden');
}

// ════════════════════════════════════════════════════════════
// NAVEGAÇÃO E INTERFACE
// ════════════════════════════════════════════════════════════

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  sidebar.classList.toggle('aberto');
  overlay.classList.toggle('ativo');
}

function fecharSidebar() {
  document.getElementById('sidebar').classList.remove('aberto');
  document.getElementById('sidebar-overlay').classList.remove('ativo');
}

function voltarParaLista() {
  fecharSidebar();
  // Mostrar lista de módulos ou voltar para primeira aula
  if (estadoGlobal.modulosCompletos.length > 0) {
    abrirModulo(1);
  }
}

function voltarParaLanding() {
  if (confirm('Deseja voltar para o início? Seu progresso será apagado.')) {
    limparEstado();
    location.reload();
  }
}

function atualizarSidebarAtivo(moduloId) {
  const itens = document.querySelectorAll('.modulo-item');
  itens.forEach(item => item.classList.remove('ativo'));
  
  const modulos = MODULOS.filter(m => m.id === moduloId);
  if (modulos.length > 0) {
    const index = MODULOS.findIndex(m => m.id === moduloId);
    if (itens[index]) {
      itens[index].classList.add('ativo');
    }
  }
}

// ════════════════════════════════════════════════════════════
// PROGRESSO
// ════════════════════════════════════════════════════════════

function atualizarProgresso() {
  const total = MODULOS.length;
  const concluidos = estadoGlobal.modulosCompletos.length;
  const percentual = total > 0 ? Math.round((concluidos / total) * 100) : 0;

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = percentual + '%';
  }

  const progressText = document.getElementById('progress-text');
  if (progressText) {
    progressText.textContent = percentual + '%';
  }

  const badgeModulos = document.getElementById('badge-modulos');
  if (badgeModulos) {
    badgeModulos.textContent = `${concluidos}/${total} módulos`;
  }
}

// ════════════════════════════════════════════════════════════
// PERSISTÊNCIA DE DADOS (localStorage)
// ════════════════════════════════════════════════════════════

function salvarEstado() {
  try {
    localStorage.setItem('vipseg-estado', JSON.stringify(estadoGlobal));
  } catch (e) {
    console.error('Erro ao salvar estado:', e);
  }
}

function carregarEstado() {
  try {
    const salvo = localStorage.getItem('vipseg-estado');
    if (salvo) {
      estadoGlobal = JSON.parse(salvo);
      return true;
    }
  } catch (e) {
    console.error('Erro ao carregar estado:', e);
  }
  return false;
}

function limparEstado() {
  localStorage.removeItem('vipseg-estado');
  estadoGlobal = {
    usuario: { nome: '', email: '', telefone: '' },
    modulosCompletos: [],
    respostasQuiz: {},
    notaFinal: 0,
    aprovado: false,
    linkIndicacao: ''
  };
}

// ════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ════════════════════════════════════════════════════════════

window.addEventListener('load', () => {
  // Tentar carregar estado anterior
  if (carregarEstado() && estadoGlobal.usuario.nome) {
    // Usuário já iniciou, mostrar tela de treinamento
    document.getElementById('tela-landing').classList.remove('tela-ativa');
    document.getElementById('tela-landing').classList.add('hidden');
    document.getElementById('tela-treinamento').classList.remove('hidden');
    document.getElementById('tela-treinamento').classList.add('tela-ativa');

    // Atualizar interface
    const primeiraLetra = estadoGlobal.usuario.nome.charAt(0).toUpperCase();
    document.getElementById('user-avatar').textContent = primeiraLetra;
    document.getElementById('user-name').textContent = estadoGlobal.usuario.nome.split(' ')[0];

    renderizarModulos();
    atualizarProgresso();

    // Abrir primeiro módulo incompleto
    const proximoModulo = MODULOS.find(m => !estadoGlobal.modulosCompletos.includes(m.id));
    if (proximoModulo) {
      abrirModulo(proximoModulo.id);
    } else {
      abrirAvaliacao();
    }
  }

  // Adicionar listeners para responsividade
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    
    if (sidebar && sidebar.classList.contains('aberto') && 
        !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      fecharSidebar();
    }
  });
});
