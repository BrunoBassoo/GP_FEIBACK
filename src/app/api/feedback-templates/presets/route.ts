import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const PRESET_TEMPLATES = [
  {
    id: "default",
    name: "Avaliação Padrão",
    description: "Template genérico para qualquer tipo de trabalho em grupo",
    categories: [
      {
        name: "Comunicação",
        description: "Clareza e efetividade na comunicação com o grupo",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Trabalho em Equipe",
        description: "Colaboração e cooperação com os membros do grupo",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Qualidade do Trabalho",
        description: "Nível de qualidade e atenção aos detalhes nas entregas",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Pontualidade",
        description: "Cumprimento de prazos e compromissos estabelecidos",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Proatividade",
        description: "Iniciativa e engajamento nas atividades do grupo",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
    ],
  },
  {
    id: "software",
    name: "Desenvolvimento de Software",
    description: "Template para projetos de programação e desenvolvimento",
    categories: [
      {
        name: "Qualidade do Código",
        description: "Código limpo, organizado e bem documentado",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Resolução de Problemas",
        description: "Capacidade de identificar e resolver problemas técnicos",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Comunicação Técnica",
        description: "Clareza ao explicar soluções e decisões técnicas",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Trabalho em Equipe",
        description: "Colaboração no desenvolvimento e revisão de código",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Gestão de Versões",
        description: "Uso adequado de Git e ferramentas de controle de versão",
        pointsPositive: 4,
        pointsImprovement: -2,
      },
    ],
  },
  {
    id: "design",
    name: "Design e Criatividade",
    description:
      "Template para projetos de design, UX/UI e trabalhos criativos",
    categories: [
      {
        name: "Criatividade",
        description: "Originalidade e inovação nas propostas apresentadas",
        pointsPositive: 6,
        pointsImprovement: -2,
      },
      {
        name: "Empatia",
        description: "Consideração das necessidades do usuário final",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Execução Visual",
        description: "Qualidade técnica e estética das entregas visuais",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Apresentação",
        description: "Clareza e persuasão ao apresentar ideias e conceitos",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Iteração",
        description: "Disposição para receber feedback e melhorar o trabalho",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
    ],
  },
  {
    id: "research",
    name: "Pesquisa Acadêmica",
    description: "Template para trabalhos de pesquisa e estudos acadêmicos",
    categories: [
      {
        name: "Rigor Metodológico",
        description: "Aplicação correta de métodos científicos e acadêmicos",
        pointsPositive: 7,
        pointsImprovement: -3,
      },
      {
        name: "Análise Crítica",
        description:
          "Profundidade e qualidade da análise dos dados e resultados",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Fundamentação Teórica",
        description: "Uso adequado de referências e embasamento teórico",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Redação Científica",
        description: "Clareza, precisão e formatação da escrita acadêmica",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Contribuição ao Grupo",
        description: "Envolvimento ativo na pesquisa e discussões do grupo",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
    ],
  },
  {
    id: "presentation",
    name: "Apresentações e Seminários",
    description: "Template para avaliação de apresentações orais e seminários",
    categories: [
      {
        name: "Clareza de Comunicação",
        description: "Facilidade de entendimento da mensagem transmitida",
        pointsPositive: 6,
        pointsImprovement: -2,
      },
      {
        name: "Domínio do Conteúdo",
        description: "Conhecimento profundo sobre o tema apresentado",
        pointsPositive: 6,
        pointsImprovement: -3,
      },
      {
        name: "Material Visual",
        description: "Qualidade e adequação dos slides e recursos visuais",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Engajamento da Audiência",
        description: "Capacidade de manter a atenção e interesse do público",
        pointsPositive: 5,
        pointsImprovement: -2,
      },
      {
        name: "Gestão do Tempo",
        description: "Respeito ao tempo estabelecido para a apresentação",
        pointsPositive: 4,
        pointsImprovement: -2,
      },
    ],
  },
];

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "PROFESSOR") {
      return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
    }

    return NextResponse.json({ presets: PRESET_TEMPLATES });
  } catch (error) {
    console.error("Error fetching preset templates:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
