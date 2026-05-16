# 🎨 Customizações e Exemplos Práticos

## 1️⃣ Trocar Vídeos dos Módulos

### Passo a Passo

**Arquivo:** `dados.js`

Cada módulo tem esta estrutura:

```javascript
{
  id: 1,
  titulo: "Boas-vindas: O que é Proteção Veicular?",
  icone: "🚗",
  descricao: "Conheça a história da VIPSEG Brasil...",
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",  // ← AQUI
  tempo: "1:45",
  testePos: [...]
}
```

### Como Obter Link YouTube Embed

1. Vá para o vídeo no YouTube
2. Clique em "Compartilhar"
3. Clique em "Incorporar"
4. Copie apenas o **ID** do vídeo (parte após `/embed/`)

**Exemplo:**
- URL original: `https://youtu.be/dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`
- Link embed: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Trocar Todos os Vídeos

```javascript
// ANTES (substitua)
MODULOS = [
  { id: 1, video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
  // ...
];

// DEPOIS (com seus vídeos)
MODULOS = [
  { id: 1, video: "https://www.youtube.com/embed/SEU_ID_1" },
  { id: 2, video: "https://www.youtube.com/embed/SEU_ID_2" },
  // ...
];
```

---

## 2️⃣ Customizar Cores da Marca

### Arquivo: `style.css`

Encontre a seção de cores:

```css
:root {
  --cor-roxo: #6A0DAB;        /* Roxo principal */
  --cor-roxo-escuro: #4A0875;
  --cor-roxo-claro: #9333EA;
  --cor-laranja: #FF6A00;     /* Laranja destaque */
  --cor-fundo: #F5F3FF;
  --cor-branco: #FFFFFF;
  --cor-texto: #1F2937;
  --cor-texto-claro: #6B7280;
  --cor-borda: #E5E7EB;
  --cor-verde: #10B981;
}
```

### Exemplos de Paletas

**Versão Moderna (Azul):**
```css
--cor-roxo: #0066FF;
--cor-roxo-escuro: #0052CC;
--cor-laranja: #FF8C00;
--cor-fundo: #F0F4FF;
```

**Versão Corporativa (Verde):**
```css
--cor-roxo: #00AA44;
--cor-roxo-escuro: #008833;
--cor-laranja: #FFB800;
--cor-fundo: #F0FFF4;
```

**Versão Premium (Preto/Gold):**
```css
--cor-roxo: #1A1A1A;
--cor-roxo-escuro: #000000;
--cor-laranja: #FFD700;
--cor-fundo: #F5F5F5;
```

---

## 3️⃣ Alterar Estrutura dos Módulos

### Adicionar um 11º Módulo

Edite `dados.js`:

```javascript
// Após o módulo 10, antes do AVALIACAO_FINAL

const MODULOS = [
  // ... módulos 1-10 ...
  
  {
    id: 11,
    titulo: "Bônus: Ferramentas Digitais",
    icone: "💻",
    descricao: "Softwares e apps que aumentam suas vendas.",
    video: "https://www.youtube.com/embed/SEU_VIDEO_ID",
    tempo: "1:30",
    testePos: [
      {
        pergunta: "Qual ferramenta é mais importante?",
        alternativas: [
          "CRM",
          "WhatsApp Business",
          "Todas são importantes",
          "Nenhuma"
        ],
        correta: 2
      }
    ]
  }
];
```

**Importante:** Atualize também `CURSO.totalQuestoesFinal` se adicionou mais testes!

---

## 4️⃣ Modificar Critério de Aprovação

### Arquivo: `dados.js`

```javascript
// ATUALMENTE
const CURSO = {
  notaMinima: 70,        // 70%
  totalQuestoesFinal: 20 // 20 questões
};

// MUDAR PARA 60%
const CURSO = {
  notaMinima: 60,        // Precisa de 60% (12 acertos)
  totalQuestoesFinal: 20
};

// MUDAR PARA 80%
const CURSO = {
  notaMinima: 80,        // Precisa de 80% (16 acertos)
  totalQuestoesFinal: 20
};
```

---

## 5️⃣ Personalizar Mensagens

### Landing Page (index.html)

**Título Principal:**
```html
<!-- ANTES -->
<h1>Ganhe <span class="destaque">+R$3.000</span> por mês<br>sem sair do sofá</h1>

<!-- DEPOIS -->
<h1>Ganhe <span class="destaque">+R$5.000</span> por mês<br>Trabalhe 100% online</h1>
```

**Subtítulo:**
```html
<!-- ANTES -->
<p class="hero-subtitle">Proteção Veicular VIPSEG: Ganhos ilimitados, bônus semanais e receita recorrente de 6-10%</p>

<!-- DEPOIS -->
<p class="hero-subtitle">Comece hoje, ganhe ilimitado, crescimento exponencial com MGM</p>
```

### Mensagem de Resultado Final

Edite em `script.js`, função `gerarCertificado()`:

```javascript
// Encontre esta parte:
<p>Você completou o treinamento e está pronto para começar a ganhar!</p>

// Mude para:
<p>🎉 Parabéns! Agora você é um Consultor VIPSEG Certificado!</p>
<p>Próximos passos: Ativar WhatsApp Business e começar a vender!</p>
```

---

## 6️⃣ Alterar Sistema de Ganhos

### Arquivo: `dados.js`

**ATUALMENTE:**
```javascript
const SISTEMA_INDICACAO = {
  comissaoDirecta: 0.05,  // 5%
  comissaoRecorrente: 0.08, // 8%
  comissaoIndicado: 0.10,    // 10%
  boniSemanal: {
    meta5: 50,      // R$50
    meta10: 150,    // R$150
    meta15: 500     // R$500
  }
};
```

**EXEMPLO - Política Mais Agressiva:**
```javascript
const SISTEMA_INDICACAO = {
  comissaoDirecta: 0.08,      // 8% (aumentado)
  comissaoRecorrente: 0.12,   // 12% (aumentado)
  comissaoIndicado: 0.15,     // 15% (aumentado)
  boniSemanal: {
    meta5: 100,     // R$100 (aumentado)
    meta10: 300,    // R$300 (aumentado)
    meta15: 1000    // R$1000 (aumentado)
  }
};
```

---

## 7️⃣ Adicionar Seção de FAQ

### No index.html, após section "landing-comparacao":

```html
<section class="landing-faq" id="faq">
  <div class="container-landing">
    <h2>Perguntas Frequentes</h2>
    
    <div class="faq-item">
      <div class="faq-pergunta">Como começo?</div>
      <div class="faq-resposta">Preencha o formulário acima e comece o treinamento online. Leva 2 horas!</div>
    </div>

    <div class="faq-item">
      <div class="faq-pergunta">Quanto custa?</div>
      <div class="faq-resposta">100% grátis! Você só ganha comissões quando vender.</div>
    </div>

    <div class="faq-item">
      <div class="faq-pergunta">Quando recebo meu certificado?</div>
      <div class="faq-resposta">Imediatamente após passar na avaliação final (nota ≥ 70%).</div>
    </div>

    <div class="faq-item">
      <div class="faq-pergunta">Como ganho com MGM?</div>
      <div class="faq-resposta">Compartilhe seu link de indicação. Ganhe comissão de todo consultor que se registrar e vender!</div>
    </div>
  </div>
</section>
```

**CSS para FAQ (adicione em style.css):**
```css
.landing-faq {
  padding: 80px 20px;
  background: var(--cor-fundo);
}

.landing-faq h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
}

.faq-item {
  background: white;
  padding: 24px;
  border-radius: var(--border-radius);
  margin-bottom: 16px;
  box-shadow: var(--sombra-light);
  cursor: pointer;
}

.faq-pergunta {
  font-weight: 700;
  color: var(--cor-roxo);
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.faq-resposta {
  color: var(--cor-texto-claro);
  font-size: 0.95rem;
}
```

---

## 8️⃣ Integração com WhatsApp Business

Dentro de `script.js`, melhore a função `compartilharIndicacao()`:

```javascript
function compartilharIndicacao() {
  const link = estadoGlobal.linkIndicacao;
  const nome = estadoGlobal.usuario.nome.split(' ')[0];
  
  // Mensagem customizada
  const mensagem = `
🚀 Oi ${nome}! Descobri uma forma de ganhar +R$3.000/mês! 
💰 Sem chefe, sem horário, 100% digital!
📱 Quer conhecer? ${link}
`.trim();
  
  // Link WhatsApp
  const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsapp, '_blank');
}
```

---

## 9️⃣ Analytics e Rastreamento

### Adicionar Google Analytics

No `<head>` do index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

**Rastrear Eventos em script.js:**

```javascript
function iniciarTreinamento() {
  // ... código existente ...
  
  // Rastrear evento
  if (window.gtag) {
    gtag('event', 'consultor_cadastrado', {
      'consultor_nome': nome,
      'timestamp': new Date().toISOString()
    });
  }
}

function finalizarAvaliacao() {
  // ... código existente ...
  
  // Rastrear aprovação
  if (estadoGlobal.aprovado) {
    gtag('event', 'consultor_aprovado', {
      'nota': estadoGlobal.notaFinal,
      'tempo_conclusao': 'X minutos'
    });
  }
}
```

---

## 🔟 Adicionar Formulário de Contato

### HTML (após landing-cadastro):

```html
<section class="landing-contato">
  <div class="container-landing">
    <h2>Dúvidas? Fale Conosco!</h2>
    
    <form id="form-contato" style="max-width: 500px; margin: 0 auto;">
      <div class="form-group">
        <label>Assunto</label>
        <input type="text" placeholder="Seu assunto" required>
      </div>
      <div class="form-group">
        <label>Mensagem</label>
        <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
      </div>
      <button type="submit" class="btn-cadastrar">📨 Enviar</button>
    </form>
  </div>
</section>
```

**CSS:**
```css
.landing-contato {
  padding: 80px 20px;
  background: white;
}

.landing-contato h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid var(--cor-borda);
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  resize: vertical;
}
```

---

## 📋 Checklist de Implementação

Antes de publicar seu site:

- [ ] Vídeos dos 10 módulos configurados
- [ ] Cores da marca personalizadas
- [ ] Logos adicionadas (pasta /imagens)
- [ ] Perguntas do quiz relevantes
- [ ] Critério de aprovação definido
- [ ] Mensagens customizadas
- [ ] Sistema de ganhos configurado
- [ ] Testado em desktop e mobile
- [ ] Testado em diferentes navegadores
- [ ] Certificado renderizando corretamente
- [ ] Links de indicação funcionando
- [ ] Analytics configurado (opcional)

---

**✨ Seu site está pronto para escalar sua operação VIPSEG!**
