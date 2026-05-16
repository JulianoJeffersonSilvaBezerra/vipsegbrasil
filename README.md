# 🚀 VIPSEG Brasil - Treinamento de Consultores
## Guia de Instalação e Customização

---

## 📋 O que foi criado?

Um **site profissional e moderno** com:

✅ **Landing Page Atrativa**
- Vídeo reel vertical (estilo TikTok/Instagram)
- Estatísticas de ganhos (15 placas = +R$3.000/mês)
- Formulário rápido de captura (3 campos)
- Seção de benefícios e comparação CLT vs VIPSEG

✅ **10 Módulos de Microlearning**
1. Boas-vindas e Proteção Veicular
2. Tipos de Veículos e Coberturas
3. Proteção contra Roubo e Furto
4. Assistência 24h e Guincho
5. Benefícios Exclusivos VIPSEG
6. Técnicas de Abordagem e Rapport
7. Contornando Objeções
8. Fechamento de Vendas e Gatilhos
9. Pós-Venda e Indicações (MGM)
10. Resumão e Avaliação

✅ **Estilo Reel/Shorts**
- Vídeos verticais (9:16)
- Layout mobile-first
- Quizzes de fixação após cada aula
- Gamificação com barra de progresso

✅ **Sistema Completo**
- Cadastro de consultores
- Bloqueio de módulos (progressão sequencial)
- Avaliação final de 20 questões
- Certificado automático (nota ≥70%)
- Link de indicação (MGM)
- Persistência de dados (localStorage)

---

## 📁 Estrutura de Arquivos

```
projeto-vipseg/
├── index.html          (Página principal)
├── style.css           (Estilos responsivos)
├── script.js           (Lógica principal)
├── dados.js            (Conteúdo dos módulos)
└── imagens/            (Pasta para logos - CRIAR)
    ├── logo-vipseg.png
    ├── logo-white.png
    └── ... (outras imagens)
```

---

## 🎥 Como Adicionar Vídeos

### 1. **Obter Link do YouTube em Formato Embed**

Vá para qualquer vídeo YouTube e:
1. Clique em "Compartilhar" → "Incorporar"
2. Copie o link dentro de `src=""`
3. Exemplo: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### 2. **Atualizar os Links em `dados.js`**

Procure por cada módulo:

```javascript
{
  id: 1,
  titulo: "Boas-vindas: O que é Proteção Veicular?",
  icone: "🚗",
  descricao: "...",
  video: "https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI",  // ← TROCAR
  tempo: "1:45",
  testePos: [...]
}
```

**IDs de Vídeos YouTube (exemplos):**
- Rick Roll: `dQw4w9WgXcQ`
- Parcial 1: `jNQXAC9IVRw`
- Etc.

### 3. **Formato de Vídeo Recomendado**
- **Duração:** 1-2 minutos por aula
- **Resolução:** 1080p ou superior
- **Aspecto:** 9:16 (vertical, para reels)
- **Formato:** MP4 ou via YouTube

---

## 🖼️ Como Adicionar Logos

1. **Criar pasta `/imagens`** no mesmo diretório
2. **Adicionar arquivos:**
   - `logo-vipseg.png` (com fundo)
   - `logo-white.png` (branca)
   - `favicon.ico` (ícone da aba)

3. **Usar nas páginas:**

```html
<!-- No HTML -->
<img src="imagens/logo-vipseg.png" alt="VIPSEG Brasil" width="150">
```

---

## 🔧 Customizações Principais

### 1. **Cores da Marca**

Edite em `style.css`:

```css
:root {
  --cor-roxo: #6A0DAB;        /* Roxo principal */
  --cor-roxo-escuro: #4A0875; /* Roxo escuro */
  --cor-laranja: #FF6A00;     /* Laranja destaque */
  /* ... */
}
```

### 2. **Texto da Landing Page**

Edite em `index.html`:

```html
<h1>Ganhe <span class="destaque">+R$3.000</span> por mês<br>sem sair do sofá</h1>
```

### 3. **Dados de Contato e CNPJ**

Edite em `style.css` (footer landing):

```html
<p>&copy; 2024 VIPSEG Brasil. Todos os direitos reservados.</p>
<p>CNPJ 36.684.733/0001-30 • Rua da Inovação, 1000 • São Paulo, SP</p>
```

### 4. **Nota Mínima e Critérios**

Edite em `dados.js`:

```javascript
const CURSO = {
  nome: "Treinamento de Consultores VIPSEG Brasil",
  cargaHoraria: "2 horas",
  notaMinima: 70,        // ← MUDAR PARA 60, 75, etc
  acertosMinimos: 14,    // Automático (70% de 20)
  totalQuestoesFinal: 20
};
```

---

## 📊 Sistema de Ganhos (MGM)

Configurado em `dados.js`:

```javascript
const SISTEMA_INDICACAO = {
  comissaoDirecta: 0.05,      // 5% por venda direta
  comissaoRecorrente: 0.08,   // 8% mensais
  comissaoIndicado: 0.10,     // 10% de quem você indicou
  boniSemanal: {
    meta5: 50,      // R$50 por 5 vendas
    meta10: 150,    // R$150 por 10 vendas
    meta15: 500     // R$500 por 15 vendas
  }
};
```

Pode ser ajustado conforme sua política comercial.

---

## 🌐 Hospedagem e Deploy

### Opção 1: **Netlify (Recomendado - GRÁTIS)**
1. Compacte os arquivos em `.zip`
2. Vá para `netlify.com`
3. Clique em "Drop files here"
4. Seu site está ao vivo!

### Opção 2: **Vercel**
1. Crie conta em `vercel.com`
2. Conecte seu GitHub
3. Deploy automático

### Opção 3: **Seu Próprio Servidor**
1. Upload via FTP
2. Configure domínio personalizado
3. SSL/HTTPS habilitado

---

## 💾 Backup de Dados

Os dados dos consultores são salvos em **localStorage** (navegador local).

Para exportar:
```javascript
// No console do navegador (F12)
copy(localStorage.getItem('vipseg-estado'))
```

---

## 📱 Teste em Dispositivos

**Desktop:**
- Chrome, Firefox, Safari, Edge ✅

**Mobile:**
- iPhone (Safari)
- Android (Chrome)
- Responsivo até 320px de largura ✅

---

## 🚨 Troubleshooting

### "Vídeo não aparece"
→ Verificar se o link do YouTube está correto (deve ser `embed`)

### "Dados não salvam"
→ Verificar se localStorage está habilitado (não funciona em navegação privada)

### "Quiz não avança"
→ Verificar console (F12) para erros de JavaScript

### "Certificado em branco"
→ Atualizar a página (Ctrl+F5)

---

## 📞 Suporte e Contato

Para dúvidas sobre customização:
- Email: suporte@vipseg.com.br
- WhatsApp: (11) 98765-4321

---

## ✨ Recursos Futuros (Próximas Fases)

- [ ] Integração com WhatsApp Business API
- [ ] Dashboard de gestores (relatórios de vendas)
- [ ] Certificados com segurança (QR code)
- [ ] Leaderboard de top consultores
- [ ] Integrações com CRM (Pipedrive, Hubspot)
- [ ] App nativo (iOS/Android)

---

**Versão:** 1.0  
**Data:** Maio 2024  
**Status:** ✅ Pronto para Produção
