🧪 GUIA DE TESTES - PLATAFORMA VIPSEG
═══════════════════════════════════════════════════════

## 🎯 Objetivo

Validar que todas as funcionalidades estão operacionais antes do deploy em produção.

---

## ✅ TESTES PRÉ-DEPLOY

### 1️⃣ TESTES DE NAVEGAÇÃO

#### Landing Page
```
[ ] Header com logo aparece
[ ] Menu navegação visível (desktop)
[ ] Hero section com vídeo reel
[ ] CTA "Quero Ganhar Também" funciona (scroll)
[ ] Estatísticas (4 cards) aparecem
[ ] Benefícios grid (6 cards) responsivo
[ ] Comparação CLT vs VIPSEG legível
[ ] Formulário de cadastro visível
[ ] Footer com CNPJ e contato
```

#### Mobile (Testar em iPhone 12 e Samsung Galaxy S21)
```
[ ] Header responsivo
[ ] Menu colapsado em mobile
[ ] Vídeo reel em 9:16 (vertical)
[ ] Formulário ocupando 100% (sem scroll horizontal)
[ ] Botões grandes o suficiente (>48px)
[ ] Texto legível (fonte ≥16px)
```

#### Formulário de Cadastro
```
[ ] Campo nome aceita letras
[ ] Campo telefone aceita números e símbolos
[ ] Campo e-mail valida formato
[ ] Checkbox consentimento funcionando
[ ] Botão "Entrar no Treinamento" ativo
```

---

### 2️⃣ TESTES DE FLUXO DE TREINAMENTO

#### Cadastro → Primeira Aula
```
[ ] Preencher nome: "João Silva"
[ ] Preencher telefone: "(11) 98765-4321"
[ ] Preencher e-mail: "joao@email.com"
[ ] Clicar "Entrar no Treinamento"
```

**Resultado esperado:**
- ✅ Landing desaparece
- ✅ Tela de treinamento aparece
- ✅ Avatar com "J" (primeira letra)
- ✅ Nome "João" aparece na sidebar
- ✅ Módulo 1 abre automaticamente
- ✅ Progresso mostra "0%" (nenhum concluído ainda)

#### Módulo 1: Boas-vindas
```
[ ] Vídeo player carrega
[ ] Título "Boas-vindas: O que é Proteção Veicular?" aparece
[ ] Ícone 🚗 visível
[ ] 2 perguntas de quiz aparecem
[ ] Pode selecionar respostas
[ ] Botões "Voltar" e "Próximo Módulo →" presentes
```

**Teste de Quiz:**
1. Responder pergunta 1
2. Responder pergunta 2
3. Clicar "Próximo Módulo →"

**Resultado esperado:**
- ✅ Progresso atualiza para 10% (1/10)
- ✅ Módulo 1 marca ✅ Concluído na sidebar
- ✅ Módulo 2 ativa (remove 🔒)
- ✅ Aula 2 abre automaticamente

---

### 3️⃣ TESTES DE BLOQUEIO DE MÓDULOS

```
[ ] Módulo 1 está aberto (sem bloqueio)
[ ] Módulo 2 está 🔒 Bloqueado (antes de completar 1)
[ ] Após completar 1, Módulo 2 ativa
[ ] Após completar 9, Avaliação Final ativa
[ ] Antes de completar 9, Avaliação Final está 🔒
```

**Teste de Tentativa:**
1. Voltar para sidebar
2. Tentar clicar em Módulo 5 (ainda bloqueado)

**Resultado esperado:**
- ❌ Nada acontece (módulo não abre)
- ✅ Módulo continua com ícone 🔒

---

### 4️⃣ TESTES DE PROGRESSO

#### Barra de Progresso
```
[ ] Inicialmente mostra "1/10 módulos" ou "10%"
[ ] Após módulo 2: "2/10" ou "20%"
[ ] Após módulo 5: "5/10" ou "50%"
[ ] Após todos: "10/10" ou "100%"
[ ] Barra visual preenchida proporcional ao %
```

#### Recuperação de Progresso
1. Completar módulos 1 e 2
2. **Fechar a aba** (ou atualizar a página F5)
3. Voltar no navegador

**Resultado esperado:**
- ✅ Tela de treinamento abre (não volta para landing)
- ✅ Avatar e nome do usuário ainda presentes
- ✅ Progresso mostra "2/10"
- ✅ Módulo 3 está disponível (é o próximo)

---

### 5️⃣ TESTES DE AVALIAÇÃO FINAL

#### Acesso à Avaliação
1. Completar todos os 10 módulos (ou pular com F12)
2. Sidebar deve mostrar "Avaliação Final" ⏳ Disponível
3. Clicar nela

**Resultado esperado:**
- ✅ 20 questões aparecem
- ✅ Todas as alternativas visíveis
- ✅ Radio buttons funcionando

#### Respondendo Avaliação
1. Responder apenas 15 questões
2. Clicar "✅ Enviar Respostas"

**Resultado esperado:**
- ❌ Alerta: "Por favor, responda todas as 20 questões"

3. Responder as 5 restantes
4. Clicar "✅ Enviar Respostas"

**Resultado esperado:**
- ✅ Cálculo de nota
- Se ≥70%: Tela de sucesso (certificado)
- Se <70%: Tela de reprovado (tentar novamente)

---

### 6️⃣ TESTES DE CERTIFICADO

#### Aprovado (≥70%)

Responder corretamente pelo menos 14 das 20 questões.

**Resultado esperado:**
- ✅ Tela verde com "✅ Você Foi Aprovado!"
- ✅ Mostra "Nota Final: 75%" (exemplo)
- ✅ Mensagem "Bem-vindo à VIPSEG Brasil!"
- ✅ 2 botões: "📜 Ver Certificado" + "🤝 Compartilhar (MGM)"

#### Clicar "Ver Certificado"

**Resultado esperado:**
- ✅ Modal abre com certificado
- ✅ Mostra nome "João Silva"
- ✅ Data de conclusão (hoje)
- ✅ Nota Final "75%"
- ✅ Status "✅ Aprovado"
- ✅ Logo VIPSEG visível
- ✅ Botão "🖨️ Imprimir / Salvar PDF"

#### Imprimir Certificado
1. Clicar "🖨️ Imprimir / Salvar PDF"
2. Janela de impressão abre
3. Selecionar "Salvar como PDF"
4. Nomear: "Certificado_JoaoSilva.pdf"
5. Clicar "Salvar"

**Resultado esperado:**
- ✅ PDF baixado com certificado
- ✅ Todas as informações legíveis
- ✅ Cores e layout preservados

#### Reprovado (<70%)

Responder corretamente apenas 10 das 20 questões (50%).

**Resultado esperado:**
- ❌ Tela vermelha
- ✅ Mostra "Infelizmente, reprovado"
- ✅ "Você acertou 10 de 20 questões (50%)"
- ✅ "Nota mínima: 70%"
- ✅ Botão "🔄 Tentar Novamente"

---

### 7️⃣ TESTES DE LINK DE INDICAÇÃO (MGM)

#### Geração de Link
1. Após aprovação, clicar "🤝 Compartilhar (MGM)"

**Resultado esperado:**
- ✅ Link copiado (alerta: "Link copiado!")
- ✅ Link tem formato: `https://vipseg.com.br?ref=ABC123`
- ✅ Link é único por usuário

#### Compartilhamento via WhatsApp
1. Link deve abrir WhatsApp Web
2. Deve ter mensagem pré-preenchida
3. Mensagem deve incluir o link

---

### 8️⃣ TESTES DE RESPONSIVIDADE

#### Desktop (1920x1080)
```
[ ] Sidebar sempre visível
[ ] Conteúdo centralizado (max-width: 600px)
[ ] Todos os elementos legíveis
[ ] Sem scroll horizontal
```

#### Tablet (768x1024 - iPad)
```
[ ] Sidebar ainda visível ou hamburger
[ ] Vídeo ocupa 100% da largura
[ ] Botões grandes (≥48px)
[ ] Topbar com hamburger
```

#### Mobile (375x667 - iPhone SE)
```
[ ] Hamburger menu funciona
[ ] Sidebar aparece ao lado (z-index correto)
[ ] Overlay escurece background
[ ] Vídeo em 9:16
[ ] Formulário preenche 100%
[ ] Sem scroll horizontal
```

#### Muito Pequeno (320x568 - iPhone 5)
```
[ ] Todos os elementos visíveis
[ ] Texto não corta
[ ] Botões ainda clicáveis
[ ] Sem erros de layout
```

---

### 9️⃣ TESTES DE NAVEGADOR

#### Chrome (Última versão)
```
[ ] Landing carrega
[ ] Vídeo reel funciona
[ ] Formulário funciona
[ ] Treinamento opera
[ ] Certificado renderiza
```

#### Firefox (Última versão)
```
[ ] Todos os itens acima
[ ] Fontes renderizam corretamente
[ ] Animações suaves
```

#### Safari (iPhone + Mac)
```
[ ] Tudo funciona
[ ] localStorage persistente
[ ] Botões responsivos ao toque
[ ] Vídeo toca sem problemas
```

#### Edge (Última versão)
```
[ ] Compatibilidade total
[ ] Sem erros de console
```

---

### 🔟 TESTES DE FUNCIONALIDADES ESPECIAIS

#### localStorage
1. Completar módulo 1
2. Abrir console (F12)
3. Rodar: `console.log(localStorage.getItem('vipseg-estado'))`

**Resultado esperado:**
- ✅ JSON com dados do usuário
- ✅ `modulosCompletos: [1]`
- ✅ Respostas do quiz armazenadas

#### Limpar Dados
1. No final, clicar "🚪 Sair"
2. Confirmar "Deseja sair?"

**Resultado esperado:**
- ✅ Volta para landing
- ✅ localStorage limpo
- ✅ Progresso resetado

#### Teste de E-mail Inválido
1. Preencher nome: "João"
2. Preencher telefone: "(11) 98765-4321"
3. Preencher e-mail: "joao" (SEM @)
4. Clicar "Entrar no Treinamento"

**Resultado esperado:**
- ❌ Alerta: "E-mail inválido. Digite um e-mail válido."

---

## 📋 CHECKLIST FINAL

### Antes de Publicar

#### Funcionalidade
- [ ] Landing page completa
- [ ] 10 módulos com quiz
- [ ] Avaliação final de 20Q
- [ ] Certificado gerado
- [ ] Link MGM funcionando
- [ ] Dados persistem (localStorage)

#### Design
- [ ] Cores corretas (roxo, laranja, branco)
- [ ] Fonts carregadas (Inter, Poppins)
- [ ] Logos adicionadas
- [ ] Responsivo em todos os tamanhos

#### Vídeos
- [ ] 10 links YouTube válidos
- [ ] Vídeos carregam sem erro
- [ ] Autoplay funciona
- [ ] 9:16 aspect ratio confirmado

#### Performance
- [ ] Carrega em <3s
- [ ] Sem erros de console (F12)
- [ ] Sem warnings críticos
- [ ] Lighthouse ≥95 performance

#### Compatibilidade
- [ ] Chrome ✅
- [ ] Firefox ✅
- [ ] Safari ✅
- [ ] Edge ✅
- [ ] Mobile browsers ✅

---

## 🐛 Troubleshooting Comum

### "Vídeo não carrega"
**Solução:**
- Verificar se URL YouTube é válida
- Deve ser `youtube.com/embed/ID_AQUI`
- Não deve ser URL do vídeo normal

### "Módulos não desbloqueiam"
**Solução:**
- Verificar se quiz foi respondido completamente
- Abrir F12 → console → verificar erros
- Limpar localStorage e tentar novamente

### "Certificado em branco"
**Solução:**
- Atualizar página (Ctrl+F5)
- Verificar se nota ≥70%
- Abrir em aba incógnita (testar cache)

### "Dados não salvam"
**Solução:**
- localStorage pode estar desabilitado
- Testar em aba normal (não privada)
- Verificar quota de armazenamento

### "Mobile com scroll horizontal"
**Solução:**
- Revisar CSS media queries
- Remover largura fixa em elementos
- Usar max-width: 100%

---

## ✨ Testes Avançados

### Performance
```bash
# Abrir DevTools (F12)
# Aba "Lighthouse"
# Clicar "Analyze page load"
# Verificar: Performance ≥95, SEO ≥95
```

### Acessibilidade
```bash
# Tab para navegar
# Enter/Space para ativar botões
# Verificar contraste (WCAG AA)
# Nenhuma cor como único indicador
```

### SEO
```bash
# Verificar title (index.html <title>)
# Meta description presente
# Heading hierarchy (H1 → H2 → H3)
# alt text em imagens
```

---

## 📊 Matriz de Testes

| Funcionalidade | Desktop | Tablet | Mobile | Status |
|---|---|---|---|---|
| Landing | ✅ | ✅ | ✅ | ✓ |
| Cadastro | ✅ | ✅ | ✅ | ✓ |
| Módulos | ✅ | ✅ | ✅ | ✓ |
| Quiz | ✅ | ✅ | ✅ | ✓ |
| Avaliação | ✅ | ✅ | ✅ | ✓ |
| Certificado | ✅ | ✅ | ✅ | ✓ |
| MGM Link | ✅ | ✅ | ✅ | ✓ |
| localStorage | ✅ | ✅ | ✅ | ✓ |

---

## 🎬 Teste Completo End-to-End

**Tempo estimado:** 15-20 minutos

1. Abrir site (Ctrl+Shift+Delete para limpar cache)
2. Preencher formulário (nome, tel, email)
3. Completar 10 módulos (rápido)
4. Passar na avaliação (responder corretamente)
5. Visualizar certificado
6. Imprimir/salvar PDF
7. Testar link de compartilhamento
8. Fechar navegador
9. Voltar ao site
10. Verificar se dados foram recuperados

**Resultado esperado:** ✅ TODOS OS PASSOS FUNCIONAM

---

**📝 Nota:** Documentar qualquer bug encontrado com:
- Data/hora
- Navegador + versão
- Dispositivo (desktop/mobile)
- Passos para reproduzir
- Screenshot/vídeo (se possível)

---

**✅ Testes completos = Deploy seguro!**
