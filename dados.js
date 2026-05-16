// ════════════════════════════════════════════════════════════
// dados.js - Conteúdo do Treinamento VIPSEG Brasil
// 10 Módulos de Microlearning em Estilo Reels
// ════════════════════════════════════════════════════════════

const CURSO = {
  nome: "Treinamento de Consultores VIPSEG Brasil",
  cargaHoraria: "2 horas",
  empresa: "VIPSEG Brasil",
  notaMinima: 70,
  acertosMinimos: 14,
  totalQuestoesFinal: 20
};

// ════════════════════════════════════════════════════════════
// 10 MÓDULOS - Cada um com vídeo reel de 1-2 min
// ════════════════════════════════════════════════════════════

const MODULOS = [
  {
    id: 1,
    titulo: "Boas-vindas: O que é Proteção Veicular?",
    icone: "🚗",
    descricao: "Conheça a história da VIPSEG Brasil e entenda o conceito fundamental de proteção veicular.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tempo: "1:45",
    testePos: [
      {
        pergunta: "O que é proteção veicular?",
        alternativas: [
          "Um seguro tradicional",
          "Um sistema de proteção coletiva contra riscos veiculares",
          "Uma garantia de fábrica",
          "Um serviço de borracharia"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a vantagem da proteção veicular sobre seguros tradicionais?",
        alternativas: [
          "É mais caro",
          "Geralmente mais flexível e com menor custo inicial",
          "Não tem vantagem",
          "Só funciona em dias úteis"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 2,
    titulo: "Tipos de Veículos e Coberturas",
    icone: "🚙",
    descricao: "Diferenças entre motos, carros e pick-ups. Coberturas específicas para cada tipo.",
    video: "https://www.youtube.com/embed/jNQXAC9IVRw",
    tempo: "2:00",
    testePos: [
      {
        pergunta: "Qual veículo geralmente tem maior prêmio de proteção?",
        alternativas: [
          "Motos",
          "Carros populares",
          "Pick-ups e SUVs",
          "Todos iguais"
        ],
        correta: 2
      },
      {
        pergunta: "A cobertura pode variar conforme o tipo de veículo?",
        alternativas: [
          "Não, é sempre a mesma",
          "Sim, dependendo do valor e uso do veículo",
          "Só para motos",
          "Nunca muda"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 3,
    titulo: "Proteção contra Roubo e Furto",
    icone: "🔒",
    descricao: "Detalhamento técnico: como funciona a cobertura contra roubo, furto e danos.",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    tempo: "1:55",
    testePos: [
      {
        pergunta: "Qual a diferença entre roubo e furto?",
        alternativas: [
          "Não há diferença",
          "Roubo: com violência | Furto: sem violência",
          "Furto: crime maior",
          "Ambos são iguais legalmente"
        ],
        correta: 1
      },
      {
        pergunta: "A proteção cobre danos causados por terceiros?",
        alternativas: [
          "Nunca",
          "Somente em caso de acidente",
          "Sim, conforme a cobertura contratada",
          "Somente de noite"
        ],
        correta: 2
      }
    ]
  },
  {
    id: 4,
    titulo: "Assistência 24h e Guincho",
    icone: "🚗💨",
    descricao: "Como funciona o socorro de emergência, guinchos e assistência ao cliente.",
    video: "https://www.youtube.com/embed/OPf0YbXqDm0",
    tempo: "1:50",
    testePos: [
      {
        pergunta: "A assistência 24h da VIPSEG funciona em qual horário?",
        alternativas: [
          "Apenas de 9-17h",
          "Segunda a sexta",
          "24 horas, todos os dias",
          "Somente em São Paulo"
        ],
        correta: 2
      },
      {
        pergunta: "O guincho é coberto para qualquer distância?",
        alternativas: [
          "Nunca",
          "Conforme a cobertura contratada (geralmente até 100km)",
          "Apenas 10km",
          "Somente em rodovias"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 5,
    titulo: "Benefícios Exclusivos VIPSEG",
    icone: "🎁",
    descricao: "Carro reserva, clube de descontos, assistência jurídica e mais vantagens.",
    video: "https://www.youtube.com/embed/ZbZSe6N_BXs",
    tempo: "2:05",
    testePos: [
      {
        pergunta: "Qual é o benefício de carro reserva?",
        alternativas: [
          "Não existe",
          "Você paga extra para ter",
          "O cliente usa um carro da rede enquanto o seu é consertado",
          "Somente carros importados"
        ],
        correta: 2
      },
      {
        pergunta: "O clube de descontos VIPSEG oferece:",
        alternativas: [
          "Somente descontos em postos",
          "Descontos em combustível, oficinas, pneus, e mais",
          "Descontos que você não usa",
          "Sem valor real"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 6,
    titulo: "Técnicas de Abordagem e Rapport",
    icone: "🤝",
    descricao: "Como abordar clientes, criar conexão rápida e identificar necessidades de forma eficaz.",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    tempo: "2:10",
    testePos: [
      {
        pergunta: "O primeiro passo de uma boa abordagem é:",
        alternativas: [
          "Falar do preço",
          "Fazer perguntas e ouvir o cliente",
          "Pressionar para fechar",
          "Mandar vídeo de vendas"
        ],
        correta: 1
      },
      {
        pergunta: "O que é rapport?",
        alternativas: [
          "Um tipo de desconto",
          "Uma conexão emocional e confiança com o cliente",
          "Um horário de trabalho",
          "Um relatório de vendas"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 7,
    titulo: "Contornando Objeções e Inseguranças",
    icone: "🛡️",
    descricao: "Técnicas para responder dúvidas comuns, quebrar objeções e gerar confiança.",
    video: "https://www.youtube.com/embed/NLlGopyXT_g",
    tempo: "1:58",
    testePos: [
      {
        pergunta: "Quando o cliente diz 'é muito caro', você deve:",
        alternativas: [
          "Abaixar o preço imediatamente",
          "Explicar valor vs. preço e benefícios",
          "Sair da conversa",
          "Enviar só promoção"
        ],
        correta: 1
      },
      {
        pergunta: "A objeção é sempre um 'não' final?",
        alternativas: [
          "Sim",
          "Não, muitas vezes é uma dúvida que precisa ser esclarecida",
          "Depende do dia",
          "Nunca vale a pena tentar"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 8,
    titulo: "Fechamento de Vendas e Gatilhos",
    icone: "🎯",
    descricao: "Passos finais da negociação, gatilhos psicológicos e técnicas para fechar a adesão.",
    video: "https://www.youtube.com/embed/ZHBcE82-lGs",
    tempo: "2:00",
    testePos: [
      {
        pergunta: "Um gatilho psicológico eficaz é:",
        alternativas: [
          "Mentir sobre promoção",
          "Escassez: 'Essa promoção acaba hoje'",
          "Pressão agressiva",
          "Ignorar o cliente"
        ],
        correta: 1
      },
      {
        pergunta: "Na hora de fechar, o consultor deve:",
        alternativas: [
          "Ficar nervoso",
          "Desaparecer",
          "Estar seguro e confirmar os dados",
          "Esperar o cliente decidir sozinho"
        ],
        correta: 2
      }
    ]
  },
  {
    id: 9,
    titulo: "Pós-Venda e Indicações (MGM)",
    icone: "⭐",
    descricao: "Reter clientes, pedir indicações, sistema MGM (Member Get Member) e receita recorrente.",
    video: "https://www.youtube.com/embed/DdMFW8D8k60",
    tempo: "2:03",
    testePos: [
      {
        pergunta: "Por que o pós-venda é importante?",
        alternativas: [
          "Não é importante",
          "Para cobrar mais",
          "Fortalecer relacionamento e gerar indicações",
          "Somente para reclamações"
        ],
        correta: 2
      },
      {
        pergunta: "O que é MGM (Member Get Member)?",
        alternativas: [
          "Uma ferramenta de trabalho",
          "Sistema onde você ganha indicando novos consultores",
          "Um tipo de seguro",
          "Nada relevante"
        ],
        correta: 1
      }
    ]
  },
  {
    id: 10,
    titulo: "Resumão: Pontos-Chave do Treinamento",
    icone: "🏆",
    descricao: "Revisão completa de tudo que foi aprendido. Prepare-se para a avaliação final!",
    video: "https://www.youtube.com/embed/h6DtVHqyYts",
    tempo: "1:50",
    testePos: [
      {
        pergunta: "A proteção veicular diferencia-se por ser:",
        alternativas: [
          "Mais cara que seguros",
          "Flexível, coletiva e com bom custo-benefício",
          "Ilegal",
          "Sem benefícios"
        ],
        correta: 1
      },
      {
        pergunta: "Para ser um consultor de sucesso VIPSEG, é essencial:",
        alternativas: [
          "Enganar clientes",
          "Pressionar sem parar",
          "Conhecer produtos, fazer abordagem ética e dar bom pós-venda",
          "Trabalhar 24 horas"
        ],
        correta: 2
      }
    ]
  }
];

// ════════════════════════════════════════════════════════════
// AVALIAÇÃO FINAL — 20 questões
// ════════════════════════════════════════════════════════════

const AVALIACAO_FINAL = [
  {
    pergunta: "A VIPSEG Brasil atua no segmento de:",
    alternativas: ["Seguros de vida", "Proteção veicular coletiva", "Financiamento", "Imóveis"],
    correta: 1
  },
  {
    pergunta: "Qual é o principal diferencial da proteção veicular?",
    alternativas: ["Preço altíssimo", "Flexibilidade e menor custo", "Cobertura limitada", "Documentação complexa"],
    correta: 1
  },
  {
    pergunta: "A receita recorrente de um consultor VIPSEG é de:",
    alternativas: ["0%", "2-3%", "6-10%", "15%+"],
    correta: 2
  },
  {
    pergunta: "Para ganhar +R$3.000/mês, é necessário fechar quantas placas?",
    alternativas: ["5", "10", "15", "20"],
    correta: 2
  },
  {
    pergunta: "A assistência 24h VIPSEG funciona:",
    alternativas: ["Só de dia", "Só em SP", "24 horas todos os dias", "Apenas 2x por semana"],
    correta: 2
  },
  {
    pergunta: "O guincho é coberto para qual distância?",
    alternativas: ["Nunca", "Até 50km", "Até 100km (conforme cobertura)", "Sem limite"],
    correta: 2
  },
  {
    pergunta: "Uma boa abordagem começa com:",
    alternativas: ["Falar de preço", "Pressionar", "Escutar e entender necessidade", "Enviar contrato"],
    correta: 2
  },
  {
    pergunta: "Rapport é:",
    alternativas: ["Um tipo de produto", "Uma conexão e confiança com cliente", "Um período de chuva", "Nunca importante"],
    correta: 1
  },
  {
    pergunta: "Quando o cliente objeta, você deve:",
    alternativas: ["Desistir", "Ignorar", "Entender a dúvida e esclarecer", "Ameaçar"],
    correta: 2
  },
  {
    pergunta: "Um gatilho psicológico eficaz é:",
    alternativas: ["Mentir", "Ameaça", "Escassez de tempo", "Ignorar cliente"],
    correta: 2
  },
  {
    pergunta: "O pós-venda serve principalmente para:",
    alternativas: ["Cobrar mais", "Fortalecer relacionamento e gerar indicações", "Desaparecer", "Nada"],
    correta: 1
  },
  {
    pergunta: "MGM significa:",
    alternativas: ["Management", "Member Get Member", "Mercadoria Geral", "Movimento Geral Mensal"],
    correta: 1
  },
  {
    pergunta: "Indicações geram para você:",
    alternativas: ["Nada", "Só gratidão", "Comissão sobre vendas", "Trabalho extra"],
    correta: 2
  },
  {
    pergunta: "A ética no atendimento é:",
    alternativas: ["Opcional", "Fundamental para confiança e crescimento", "Perde venda", "Não importa"],
    correta: 1
  },
  {
    pergunta: "Um consultor VIPSEG deve ser:",
    alternativas: ["Mentiroso", "Ético, preparado e focado", "Agressivo", "Preguiçoso"],
    correta: 1
  },
  {
    pergunta: "A diferença entre roubo e furto é:",
    alternativas: ["Não há", "Roubo: com violência | Furto: sem violência", "Furto é maior", "Ambos iguais"],
    correta: 1
  },
  {
    pergunta: "O carro reserva é um benefício que:",
    alternativas: ["Não existe", "Você paga extra", "Você usa enquanto seu carro é consertado", "É fake"],
    correta: 2
  },
  {
    pergunta: "Para fechar uma venda, é importante:",
    alternativas: ["Desistir rápido", "Estar seguro e confirmar dados", "Dormir", "Ignorar cliente"],
    correta: 1
  },
  {
    pergunta: "O treinamento VIPSEG prepara você para:",
    alternativas: ["Enganar", "Vender ético e crescer ilimitado", "Ficar pobre", "Desistir"],
    correta: 1
  },
  {
    pergunta: "Seu maior ganho como consultor VIPSEG vem de:",
    alternativas: ["Comissão única", "Comissão + bônus + receita recorrente + indicações", "Nada", "Propaganda"],
    correta: 1
  }
];

// ════════════════════════════════════════════════════════════
// SISTEMA DE INDICAÇÃO (MGM)
// ════════════════════════════════════════════════════════════

const SISTEMA_INDICACAO = {
  comissaoDirecta: 0.05,  // 5% de cada venda que você faz
  comissaoRecorrente: 0.08, // 8% mensais das adesões que você fechou
  comissaoIndicado: 0.10,    // 10% das vendas do consultor que você indicou
  boniSemanal: {
    meta5: 50,      // R$50 por atingir 5 vendas
    meta10: 150,    // R$150 por atingir 10 vendas
    meta15: 500     // R$500 por atingir 15 vendas
  }
};

// ════════════════════════════════════════════════════════════
// FUNÇÕES DE CÁLCULO
// ════════════════════════════════════════════════════════════

function calcularRenda(vendas) {
  const valorMedioPlaca = 200; // Valor médio de adesão
  
  const comissaoDirecta = vendas * valorMedioPlaca * SISTEMA_INDICACAO.comissaoDirecta;
  const comissaoRecorrente = vendas * valorMedioPlaca * SISTEMA_INDICACAO.comissaoRecorrente;
  
  let boni = 0;
  if (vendas >= 15) boni = SISTEMA_INDICACAO.boniSemanal.meta15;
  else if (vendas >= 10) boni = SISTEMA_INDICACAO.boniSemanal.meta10;
  else if (vendas >= 5) boni = SISTEMA_INDICACAO.boniSemanal.meta5;
  
  return {
    directa: comissaoDirecta.toFixed(2),
    recorrente: comissaoRecorrente.toFixed(2),
    boni: boni,
    total: (comissaoDirecta + comissaoRecorrente + boni).toFixed(2)
  };
}

// Exemplo: calcularRenda(15) = R$3000+ por mês
