const iptuTaxDescription = 'Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura';

export const expensesAll = [
    {
        name: "Fundo - Reserva",
        url: "fundoreserva",
        expenseGroup: "Fundos",
        description: "Fundo - Reserva é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.",
        searchable: "Fundo - Reserva, Fundo de Reserva, Fundo Reserva, fdo reserva"
    },
    {
        name: 'Acordo - Débito',
        description: `Acordo-Débito é um valor, negociado em assembléia, utilizado para quitar débito anterior do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos, Débito de acordo, Acordo de débito, acordos de débito, acordo débito, acordos débito",
        url: "acordodebito",
    },
    {
        name: 'Acordo - Judicial',
        description: `Acordo-Judicial é um valor, negociado em assembléia, utilizado para quitar débito judicial do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordo judicial, acordo - judicial, acordo de judicial",
        url: "acordojudicial",
    },
    {
        name: 'Acordo - Trabalhista',
        description: `Acordo - Trabalhista é um valor, negociado em assembléia, utilizado para quitar débito
        trabalhista do condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - trabalhista, acordos trabalhistas, acordo trabalhista, acordo - trabalhista",
        url: "acordotrabalhista",
    },
    {
        name: 'Despesas - Extras',
        description: `Despesas - Extras é um valor destinado ao pagamento de algum serviço ou obra necessário para
        o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Acordos",
        searchable: "Despesas extras, despesas - extras, despesa extra, despesas - extras, chamada extra, chamada - extra pcci, chamada pcci, chamada extra pcci",
        url: "despesasextras",
    },
    {
        name: 'Documentação/Laudo',
        description: `Documentação/Laudo - É um valor cobrado para o pagamento da emissão de laudos e pareceres de
        orgãos regulamentadores.`,
        expenseGroup: "Acordos",
        searchable: "documentação, laudo, documentação - laudo, documentações e laudos",
        url: "documentacaolaudo",
    },
    {
        name: 'Imposto - Energia / Água',
        description: 'Imposto - Energia / Água - Quando algum imposto ainda não foi desmembrado pela prefeitura',
        expenseGroup: "Acordos",
        searchable: "Imposto - Energia/água, Imposto energia/água, imposto energia água, Imposto Energia-água",
        url: "energiaagua"
    },
    {
        name: 'Imposto - IPTU',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "imposto iptu, imposto de iptu, imposto - iptu",
        url: "impostoiptu",
    },
    {
        name: 'Imposto - IPTU - 2016',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "imposto iptu 2016, imposto - iptu - 2016, imposto - iptu 2016, imposto iptu - 2016, imposto de iptu 2016, iptu de 2016, imposto iptu de 2016",
        url: "impostoiptu2016",
    },
    {
        name: 'Imposto - IPTU - 2017',
        description: `Imposto - IPTU - 2017 - Quando algum imposto ainda não foi desmembrado pela prefeitura, o
        condomínio paga um carnê único ao invés de cada unidade pagar um carnê individual. Desta forma, a
        cobrança do imposto é rateada entre os moradores e incluída no boleto de condomínio. Esse refere-se
        ao IPTU.`,
        expenseGroup: "Acordos",
        searchable: "imposto iptu 2017, imposto - iptu - 2017, imposto - iptu 2017, imposto iptu - 2017, imposto de iptu 2017, iptu de 2017, imposto iptu de 2017",
        url: "impostoiptu2017",

    },
    {
        name: 'Imposto - IPTU - 2018',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "imposto iptu 2018, imposto - iptu - 2018, imposto - iptu 2018, imposto iptu - 2018, imposto de iptu 2018, iptu de 2018, imposto iptu de 2018",
        url: "impostoiptu2018",
    },
    {
        name: 'Imposto - IPTU - Subsolo / Garagem',
        description: `Imposto - IPTU - Subsolo / Garagem - Quando algum imposto ainda não foi desmembrado pela
        prefeitura`,
        expenseGroup: "Acordos",
        searchable: "imposto iptu subsolo garagem, iptu garagem, imposto garagem, garagens, subsolos, iptu - garagem",
        url: "impostoiptugaragem"
    },
    {
        name: 'Imposto - IPTU - Terreno',
        description: 'Imposto - IPTU - Terreno - Quando algum imposto ainda não foi desmembrado pela prefeitura',
        expenseGroup: "Acordos",
        searchable: "terrenos, iptu terreno, iptuno do terreno",
        url: "iptuterreno"
    },
    {
        name: 'Imposto sobre serviços de condomínio (ISS)',
        description: `Imposto sobre serviços de condomínio (ISS) - É uma cobrança referente aos impostos sobre
        serviços do condomínio.`,
        expenseGroup: "Acordos",
        searchable: "serviço condominio, iss, serviços - condomínios",
        url: "iss"
    },
    {
        name: 'Multa - Infração regulamentar',
        description: `Multa - Infração regulamentar é a cobrança gerada devido à infração do regulamento do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Multa - infração, multas, infrações, regulamento",
        url: "multa"
    },
    {
        name: 'Taxa municipal - Coleta de Lixo',
        description: `Taxa municipal - Coleta de lixo é uma cobrança feita pela Prefeitura da sua cidade, cobrada
        diretamente no condomínio junto à cobrança de água e esgoto.`,
        expenseGroup: "Acordos",
        searchable: "taxa de lixo, taxa municipal de lixo",
        url: "coletalixo"
    },
    {
        name: 'Fundo - AVCB',
        description: `Fundo - AVCB é uma arrecadação destinada ao fundo utilizado para realizar o pagamento do
  laudo AVCB (Auto de Vistoria do Corpo de Bombeiros). O laudo é obrigatório para os condomínios`,
        expenseGroup: "Fundos",
        searchable: "Fundos, AVCB, bombeiros, Auto de Vistoria do Corpo de Bombeiros",
        url: "avcb"
    },
    {
        name: 'Fundo - Benfeitorias',
        description: `Fundo - Benfeitorias é um valor arrecadado ao fundo destinado a realização de obras e
  melhorias no condomínio`,
        expenseGroup: "Fundos",
        searchable: "Fundos, fundo de benfeitorias, fundo benfeitoria, bem-feitoria, bem feitoria",
        url: "benfeitorias"
    },
    {
        name: 'Fundo - Estacionamento - Manutenção',
        description: `Fundo - Estacionamento - Manutenção é um valor arrecadado para o fundo destinado à
  manutenção e conservação das instalações do estacionamento/ garagem.`,
        expenseGroup: "Fundos",
        searchable: "Fundos, estacionamento, manutenção do estacionamento, manut.",
        url: "estacionamentomanutencao"
    },
    {
        name: 'Fundo - Inadimplência',
        description: `Fundo - Inadimplência  é um valor arrecadado para o fundo destinado a cobrir eventual
  inadimplência das unidades.`,
        expenseGroup: "Fundos",
        searchable: "inadimplente, inadimplência, fundo de inadimplência",
        url: "inadimplencia"

    },
    {
        name: 'Fundo - Indenização',
        description: `Fundo - Indenização é um valor arrecadado para o fundo destinado a cobrir eventual
  indenização com a qual o condomíno precise arcar.`,
        expenseGroup: "Fundos",
        searchable: "fundo de indenização, fundo - indenização, fundo indenização, fdo indenização",
        url: "indenizacao",
    },
    {
        name: 'Fundo - Investimentos',
        description: `Fundo - Investimentos é um valor arrecadado ao fundo que se destina às enventuais obras
  e melhorias no condomínio`,
        expenseGroup: "Fundos",
        searchable: "fundo de investimentos, fundo - investimentos, fundo investimentos",
        url: "investimentos"
    },
    {
        name: 'Fundo - Melhorias',
        description: 'Fundo - Melhorias é um valor arrecadado para enventuais obras e melhorias no condomínio',
        expenseGroup: "Fundos",
        searchable: "fundo de melhorias, fundo - melhorias, fundo melhorias",
        url: "melhorias"
    },
    {
        name: 'Fundo - Obras',
        description: 'Fundo - Obras é um valor arrecadado para eventuais obras e melhorias no condomínio',
        expenseGroup: "Fundos",
        searchable: "fundo de obras, fundo - obras, fundo obras, fundo obra, fundo - obra, fundo de obra",
        url: "obras"
    },

    {
        name: 'Fundo - Provisões',
        description: `Fundo - Provisões é uma cobrança destinada a cobrir despesas não previstas que venham a surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo Obras - Complementar',
        description: 'Fundo Obras - Complementar é um valor arrecadado para eventuais obras e melhorias no condomínio.',
        searchable: "fundo de obras complementar, fundo - obras complementar, fundo obras complementar, fundo obra complementar, fundo - obra complementar, fundo de obra complementar",
        url: "obracomplementar"
    },
    {
        name: 'Fundo Reserva - Complementar',
        description: `Fundo Reserva - Complementar é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "fundo de reservas complementar, fundo - reservas complementar, fundo reservas complementar, fundo reserva complementar, fundo - reserva complementar, fundo de reserva complementar",
        url: "reservacomplementar"
    },
    {
        name: 'Fundo Reserva - Garagem',
        description: `Fundo Reserva - Garagem é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "fundo de reservas garagem, fundo - reservas garagem, fundo reservas garagem, fundo reserva garagem, fundo - reserva garagem, fundo de reserva garagem",
        url: "reservagaragem"
    },


    {
        name: 'Individualização - Água',
        description: `Individualização - Água é um valor destinado ao pagamento de serviços de individualização
  das instalações de água do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização - Água, indiv. agua, individualizações - água, individualização d'água ",
        url: "sistema-monitoramento",
    },
    {
        name: 'Individualização - Energia',
        description: `Individualização - Energia é um valor destinado ao pagamento de serviços de individualização
  dos medidores de energia do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização - Energia, indiv. energia, indiv. luz, individualizações - luz, individualização de luz",
        url: "individualizacao-energia",
    },
    {
        name: 'Individualização - Gás',
        description: `Individualização - Gás é um valor destinado ao pagamento de serviços de individualização
  das instalações de gás do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização - Gás, Indiv. Gás, Indiv. - Gás, Individualização do gás",
        url: "individualizacao-gas",
    },
    {
        name: 'Instalação - Medidores',
        description: 'Instalação - Medidores é um valor destinado à instalação do sistema de medidores do condomínio.',
        expenseGroup: "Reformas",
        searchable: "Instalação de medidores, Instalação - medidores",
        url: "instalacao-medidores",
    },
    {
        name: 'Instalação - Sistema de Segurança',
        description: `Instalação - Sistema de Segurança é um valor destinado à instalação do sistema de segurança no condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Instalação de sistemas de segurança, instalação de sistema de segurança",
        url: "instalacao-sistema-seguranca",
    },
    {
        name: 'Investimentos iniciais',
        description: `Valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Investimentos iniciais, entrada, sinal",
        url: "investimento-iniciais",
    },
    {
        name: 'Pintura',
        description: 'Pintura é um valor destinado ao pagamento de serviços de pintura no condomínio.',
        expenseGroup: "Reformas",
        searchable: "Pintura, pintores, pintura da fachada",
        url: "pintura",
    },
    {
        name: 'Rateio - Aquisição / Instalação de Equipamentos',
        description: `Rateio - Aquisição / Instalação de Equipamentos é um valor destinado ao pagamento de algum
  serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias
  para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Rateio - Aquisição / Instalação de Equipamentos, rateio para aquisição de equipamentos, rateio para instalação de equipamentos",
        url: "rateio-aquisicao-instalacao-equipamentos",
    },
    {
        name: 'Rateio - Extra - Serviço / Obra',
        description: `Rateio - Extra - Serviço/Obra é um valor destinado ao pagamento de algum serviço ou obra
  necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura
  do edifício.`,
        expenseGroup: "Reformas",
        searchable: "Rateio - Extra - Serviço / Obra, rateio extra de obras, rateio de serviços",
        url: "rateio-extra-servico-obra",
    },
    {
        name: 'Rateio - Obras',
        description: `Rateio - Obras é um valor destinado ao pagamento de algum serviço ou obra necessário para
  o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Rateio - Obras, rateio de obras",
        url: "rateio-obras",
    },
    {
        name: 'Rateio Obras - Complementar',
        description: `Rateio Obras - Complementar é um valor destinado ao pagamento de algum serviço ou obra
  necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura
  do edifício.`,
        expenseGroup: "Reformas",
        searchable: "Rateio Obras - Complementar, rateio de obras complementar, rateio complementar de obras, rateio rateio obras complementar",
        url: "rateio-obras-complementar",
    },
    {
        name: 'Reforma - Elevador',
        description: 'Reforma - Elevador é um valor destinado ao pagamento de serviços de reparo/troca do elevador',
        expenseGroup: "Reformas",
        searchable: "Reforma - Elevador, benfeitoria dos elevadores, reparo de elevadores, conserto do elevador, concerto, peças elevador",
        url: "reforma-elevador",
    },
    {
        name: 'Reforma - Fachada',
        description: 'Reforma - Fachada é um valor destinado ao pagamento da reforma da fachada do condomínio.',
        expenseGroup: "Reformas",
        searchable: "Reforma - Fachada, benfeitoria - fachada do prédio, conserto - fachada, reforma da área externa, reforma área externa, reforma da fachada",
        url: "reforma-fachada",
    },
    {
        name: 'Reforma - Impermeabilização',
        description: `Reforma - Impermeabilização é um valor destinado ao pagamento de serviços de
  impermebilização no condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Reforma - Impermeabilização, benfeitoria - impermeabilização, conserto, concerto",
        url: "reforma-impermeabilizacao",
    },
    {
        name: 'Reforma - Tubulação',
        description: 'Reforma - Tubulação é um valor destinado ao pagamento de serviços de reparo/troca de tubulações.',
        expenseGroup: "Reformas",
        searchable: "Reforma - Tubulação, reparo na tubulação, reforma de encanamentos, conserto, concerto",
        url: "reforma-tubulacao",
    },
    {
        name: 'Reparo - Elétrico',
        description: `Reparo - Elétrico é um valor destinado ao pagamento de reparos na instalação elétrica do
  condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Reparo - Elétrico, reparo do sistema elétrico, reforma elétrica, caixa de luz, conserto, concerto",
        url: "reparo-eletrico",
    },
    {
        name: 'Reparo - Hidráulico',
        description: 'Reparo - Hidráulico é um valor destinado ao pagamento de reparos hidráulicos no condomínio.',
        expenseGroup: "Reformas",
        searchable: "Reparo - Hidráulico, Reforma do sistema hidráulico, encanamento, encanador, reparos no sistema hidráulico, benfeitoria hidráulica, conserto, concerto, serv. hidraulico, serviço hidráulico",
        url: "reparo-hidraulico",
    },
    {
        name: 'Sistema Monitoramento/Segurança',
        description: `Sistema Monitoramento/Segurança é um valor destinado ao pagamento do sistema de monitoramento
  do condomínio`,
        expenseGroup: "Reformas",
        searchable: "Sistema Monitoramento/Segurança, sistema de monitoramento, sistema de segurança, conserto, concerto",
        url: "sistema-monitoramento",
    },




    {
        name: 'Bonificação natalina',
        description: `Despesa eventual normalmente acordada em assembleia e cobrada pela administradora do seu
      condomínio.`,
        expenseGroup: "Outros",
        searchable: "Bonificação natalina, bonificação de final de ano, caixinha de natal, caixinha de fim de ano",
        url: "bonificacao-natalina",
    },
    {
        name: 'Cartão - Controle de acesso',
        description: 'Cartão - Controle de acesso é a cobrança gerada pela compra de itens de acesso ao condomínio.',
        expenseGroup: "Outros",
        searchable: "Cartão - Controle de acesso, cartão de controle, chave de acesso ao condomínio, chave de acesso ao prédio, controle de entrada",
        url: "cartao-controle",
    },
    {
        name: 'Deficit Orçamentário - Resp. Proprietário',
        description: `Deficit Orçamentário é um valor cobrado do proprietário quando o condomínio está sem
      dinheiro e precisou criar uma cobrança para sanar os gastos extraordinários e equilibrar as contas.`,
        expenseGroup: "Outros",
        searchable: "Deficit Orçamentário - Resp. Proprietário, responsabilidade de proprietário, deficit no orçamento, déficit do orçamento",
        url: "deficit-orcamentario-proprietario",
    },
    {
        name: 'Uso - Churrasqueira',
        description: 'Uso - Churrasqueira é a cobrança gerada pelo uso da churrasqueira do condomínio.',
        expenseGroup: "Outros",
        searchable: "Consumo de serviço de churrasqueira do condomínio, serviço - churrasqueira, serviços churrasqueira, salão de festas, condomínio",
        url: "uso-servico-churrasqueira",
    },
    {
        name: 'Uso - Lavanderia',
        description: 'Uso - Lavanderia é a cobrança gerada pelo uso da lavanderia do condomínio.',
        expenseGroup: "Outros",
        searchable: "consumo de serviço de lavanderia do condomínio, serviço - lavanderia, serviços lavanderia",
        url: "uso-servico-lavanderia",
    },
    {
        name: 'Uso - Serviço Condomínio',
        description: `Uso - Serviço Condomínio é a cobrança gerada pelo uso individual dos serviços do
      condomínio (como salão de festas e lavanderia) e pela aquisição de itens de acesso (controle, cartão).
      Também pode ser referente à multa por infração das regras do condomínio.`,
        expenseGroup: "Outros",
        searchable: "Uso - Serviço Condomínio, serviços de condomínio",
        url: "uso-servico-condominio",
    },






    {
        name: "Consumo - Energia",
        description: "Consumo - Energia é uma despesa que refere-se ao consumo de energia nas áreas comuns do condomínio e/ou no apartamento (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Energia, consumo de energia, luz, consumo elétrico, enel",
        url: "consumo-energia",
    },
    {
        name: "Consumo - Água",
        description: "Consumo-Água é uma despesa que refere-se ao consumo de água nas áreas comuns do condomínio e/ou no apartamento (nos casos em que o consumo individual é cobrado diretamente no boleto de condomínio).",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Água, consumo água, Sabesp, Semasa, Consumo de Água",
        url: "consumo-agua",
    },
    {
        name: "Consumo - Água - Área Comum",
        description: "Consumo - Água - Área Comum é uma cobrança referente ao consumo de água nas áreas comuns do condomínio.",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Água - Área Comum, Consumo água, Sabesp, Semasa, Consumo de Água",
        url: "consumo-agua-area-comum",
    },
    {
        name: "Consumo - Gás",
        description: "Consumo - Gás é uma despesa que refere-se ao consumo de gás nas áreas comuns do condomínio e/ou no apartamento (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Gás",
        url: "consumo-gas",
    },
    {
        name: "Consumo - Gás - Área Comum",
        description: "Consumo - Gás - Área Comum é uma cobrança referente ao consumo de gás nas áreas comuns do condomínio.",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Gás - Área Comum",
        url: "consumo-gas-area-comum",
    },
    {
        name: "Consumo - Energia",
        description: "Consumo - Energia é uma despesa que refere-se ao consumo de energia nas áreas comuns do condomínio e/ou no apartamento (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Energia, consumo de energia, luz, consumo elétrico",
        url: "consumo-energia",
    },

    {
        id: 17592194523853,
        name: "Consumo - Energia - Área Comum",
        description: "Consumo - Energia - Área Comum é uma cobrança referente ao consumo de energia nas áreas comuns do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Energia - Área Comum",
        url: "consumo-energia-area-comum"
    }, {
        id: 17592194523856,
        name: "Rateio - Contas de consumo",
        description: "Rateio - Contas de consumo é uma cobrança referente ao consumo de água",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Rateio - Contas de consumo",
        url: "rateio-contas-consumo"
    }, {
        id: 17592194523855,
        name: "Taxa de leitura para contas de consumo",
        description: "Taxa de leitura para contas de consumo é um valor cobrado por empresa terceirizada para realizar a leitura dos consumos de energia",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Taxa de leitura para contas de consumo",
        url: "taxa-leitura"
    }, {
        id: 17592194523858,
        name: "Cota Condominial Complementar",
        description: "Cota Condominial Complementar é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Cota Condominial Complementar",
        url: "cota-condominial-complementar"
    }, {
        id: 17592240235307,
        name: "Proteção 5A - Reparos",
        description: "Despesas associadas a reparos pendentes no imóvel após a rescisão do contrato (ou saída do imóvel).",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Proteção 5A - Reparos",
        url: "protecao-5A-reparos"
    }, {
        id: 17592194523857,
        name: "Cota Condominial",
        description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Cota Condominial",
        url: "cota-condominial"
    }, {
        id: 17592194523860,
        name: "Cota Condominial - Subsolo",
        description: "Cota Condominial - Subsolo é uma arrecadação destinada ao pagamento das despesas básicas e fixas do subsolo do condomínio",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Cota Condominial - Subsolo",
        url: "cota-condominial-subsolo"
    }, {
        id: 17592194523859,
        name: "Cota Condominial - Garagem",
        description: "Cota Condominial - Garagem é uma arrecadação destinada ao pagamento das despesas básicas e fixas da garagem do condomínio",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Cota Condominial - Garagem",
        url: "cota-condominial-garagem"
    }, {
        id: 17592194523863,
        name: "Encargos Trabalhistas - 13º salário/Férias de funcionários",
        description: "Encargos Trabalhistas - 13º salário/Férias de funcionários é uma despesa referente ao pagamento dos 13º salários e/ou das férias dos funcionários do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Encargos Trabalhistas - 13º salário/Férias de funcionários",
        url: "encargos-trabalhistas"
    }, {
        id: 17592194523866,
        name: "Honorários - Síndico",
        description: "Honorários - Sindíco é uma despesa referente ao pagamento dos salários",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Honorários - Síndico",
        url: "honorarios-sindico"
    }, {
        id: 17592194523865,
        name: "Honorários - Advocatícios",
        description: "Honorários - Advocatícios é uma despesa referente ao pagamento de advogados para o condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Honorários - Advocatícios",
        url: "honorarios-advocaticios"
    }, {
        id: 17592194523867,
        name: "Honorários - Prestador de serviço",
        description: "Honorários - Prestador de serviço é uma despesa referente ao pagamento de prestadores de serviço para o condomínio..",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Honorários - Prestador de serviço",
        url: "honorarios-prestador"
    }, {
        id: 17592194523872,
        name: "Fundo - Manutenção",
        description: "Fundo - Manutenção é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações e equipamentos hidráulicos",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Fundo - Manutenção, Fdo. Manut., Fdo Manut, Fundos, Fundo de Manutenção",
        url: "fundo-manutencao"
    }, {
        id: 17592194523874,
        name: "Manutenção",
        description: "Manutenção - é um valor destinado à manutenção e conservação das instalações e equipamentos hidráulicos",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Manutenção",
        url: "manutenção"
    }, {
        id: 17592194523873,
        name: "Fundo - Estacionamento (Manutenção)",
        description: "Fundo - Estacionamento (Manutenção) é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações do estacionamento/ garagem.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": "2018-08-14T20:22:46+0000",
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Fundo - Estacionamento (Manutenção)",
        url: "fundo-estacionamento-manutencao"
    }, {
        id: 17592234475336,
        name: "Manutenção - Complementar",
        description: "Manutenção - Complementar é um valor destinado à manutenção e conservação das instalações e equipamentos hidráulicos.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Manutenção - Complementar",
        url: "manutencao-complementar"
    }, {
        id: 17592194523882,
        name: "Imposto - Energia / Água",
        description: "Imposto - Energia / Água - Quando algum imposto ainda não foi desmembrado pela prefeitura",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Imposto - Energia / Água",
        url: "imposto-energia-agua"
    },
    {
        id: 17592194523908,
        name: "Uso - Assistência médica",
        description: "Uso - Assistência médica é uma cobrança gerada pelo uso da assistência médica do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Assistência médica",
        url: "uso-assistencia"
    }, {
        id: 17592209028830,
        name: "Deficit Orçamentário - Resp. Inquilino",
        description: "Deficit Orçamentário é um valor cobrado do inquilino quando o condomínio está sem dinheiro e precisou criar uma cobrança para sanar os gastos ordinários e equilibrar as contas.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Deficit Orçamentário - Resp. Inquilino",
        url: "deficit-orcamentario-inquilino"
    }, {
        id: 17592194523910,
        name: "Uso - Camareira",
        description: "Uso - Camareira é a cobrança gerada pelo uso dos serviços de camareira do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Camareira",
        url: "uso-camareira"
    }, {
        id: 17592194523909,
        name: "Uso - Associação",
        description: "Uso - Associação é uma cobrança gerada pelo uso dos serviços de associação do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Associação",
        url: "uso-associacao"
    }, {
        id: 17592194523912,
        name: "Uso - Estacionamento",
        description: "Uso - Estacionamento é a cobrança gerada pelo uso do estacionamento do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Estacionamento",
        url: "uso-estacionamento"
    }, {
        id: 17592194523911,
        name: "Uso - Churrasqueira",
        description: "Uso - Churrasqueira é a cobrança gerada pelo uso da churrasqueira do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Churrasqueira",
        url: "uso-churrasqueira"
    }, {
        id: 17592194523914,
        name: "Uso - Internet",
        description: "Uso - Internet é a cobrança gerada pelo uso do plano de internet do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Internet",
        url: "uso-internet"
    }, {
        id: 17592194523913,
        name: "Uso - Garagem",
        description: "Uso - Garagem é a cobrança gerada pelo uso da garagem do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Garagem",
        url: "uso-garagem"
    }, {
        id: 17592194523916,
        name: "Uso - Manobrista",
        description: "Uso - Manobrista é a cobrança gerada pelo uso do serviço de manobrista do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Manobrista",
        url: "uso-manobrista"
    }, {
        id: 17592194523915,
        name: "Uso - Lavanderia",
        description: "Uso - Lavanderia é a cobrança gerada pelo uso da lavanderia do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Lavanderia",
        url: "uso-lavanderia"
    }, {
        id: 17592194523918,
        name: "Uso - Salão de festas",
        description: "Uso - Salão de festas é a cobrança gerada pelo uso do salão de festas do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Salão de festas",
        url: "uso-salao"
    }, {
        id: 17592194523917,
        name: "Uso - Programa Esportivo/Lazer",
        description: "Uso - Programa Esportivo/Lazer é a cobrança gerada pelo uso dos programas de personal fitness ou de atividades fisicas.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Programa Esportivo/Lazer",
        url: "uso-programa-esportivo"
    }, {
        id: 17592194523920,
        name: "Uso - Serviço Condomínio",
        description: "Uso - Serviço Condomínio é a cobrança gerada pelo uso individual dos serviços do condomínio (como salão de festas e lavanderia) e pela aquisição de itens de acesso (controle, cartão). Também pode ser referente à multa por infração das regras do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Serviço Condomínio",
        url: "uso-servico-condominio"
    }, {
        id: 17592194523919,
        name: "Proteção Residencial - Condomínio",
        description: "Uso - Seguro Condomínio é a cobrança do seguro contratado pelo condomínio",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Proteção Residencial - Condomínio, Uso - Seguro, Seguros",
        url: "protecao-residencial-condominio"
    }, {
        id: 17592194523922,
        name: "Uso - TV",
        description: "Uso - TV é a cobrança gerada pelo uso da TV por assinatura do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - TV",
        url: "uso-tv"
    }, {
        id: 17592194523921,
        name: "Uso - Telefone",
        description: "Uso - Telefone é a cobrança gerada pelo uso do plano de telefone do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Uso - Telefone",
        url: "uso-telefone"
    }, {
        id: 17592194523923,
        name: "Multa - Infração regulamentar",
        description: "Multa - Infração regulamentar é a cobrança gerada devido à infração do regulamento do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Multa - Infração regulamentar",
        url: "multa-infracao-regulamentar"
    }, {
        id: 17592194523925,
        name: "Despesas - Correio",
        description: "Despesas - Correio é um valor arrecadado para pagar as despesas de correio com envio de comunicados e atas de condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
        "disabled-at": "2018-08-14T20:12:54+0000",
        "from": "quinto-andar",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Despesas - Correio",
        url: "despesas-correio"
    }, {
        id: 17592194523929,
        name: "Tarifa - Boleto",
        description: "Tarifa - Boleto é uma tarifa cobrada pelo banco para emissão do boleto de condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Tarifa - Boleto",
        url: "tarifa-boleto"
    }, {
        id: 17592234475325,
        name: "Fundo Manutenção - Complementar",
        description: "Fundo Manutenção - Complementar é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações e equipamentos hidráulicos.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Fundo Manutenção - Complementar",
        url: "fundo-manutencao-complementar"
    }, {
        id: 17592209028971,
        name: "Fundo - Estacionamento - Manutenção",
        description: "Fundo - Estacionamento - Manutenção é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações do estacionamento/ garagem.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Fundo - Estacionamento - Manutenção",
        url: "fundo-estacionamento-manutencao"
    }, {
        id: 17592234475233,
        name: "Encargos Trabalhistas - Complementar",
        description: "Encargos Trabalhistas - Complementar é uma despesa referente ao pagamento dos salários dos funcionários do condomínio.  ",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Encargos Trabalhistas - Complementar",
        url: "encargos-trabalhistas-complementar"
    }, {
        id: 17592196659238,
        name: "Bonificação de fim de ano (Funcionários condomínio)",
        description: "Despesa eventual normalmente acordada em assembleia e cobrada pela administradora do seu condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
        "disabled-at": "2018-08-14T20:30:15+0000",
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Bonificação de fim de ano (Funcionários condomínio)",
        url: "bonificacao-fim-ano"
    }, {
        id: 17592203430354,
        name: "Transporte Coletivo",
        description: "Transporte Coletivo é destinado ao pagamento dos custos operacionais do transporte coletivo oferecido pelo condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Transporte Coletivo",
        url: "transporte-coletivo"
    }, {
        id: 17592203430356,
        name: "Consumo - Gás - Piscina",
        description: "Consumo - Gás - Piscina é uma cobrança referente ao consumo de fás nas áreas comuns do condomínio. ",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Gás - Piscina",
        url: "consumo-gas-piscina"
    }, {
        id: 17592203430355,
        name: "Consumo - Água - Quente",
        description: "Consumo - Água - Quente é uma cobrança referente ao consumo de água quente nas áreas comuns do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Água - Quente",
        url: "consumo-agua-quente"
    }, {
        id: 17592203430357,
        name: "Consumo - Gás - Fogão",
        description: "Consumo - Gás - Fogão é uma cobrança referente ao consumo de gás nas áreas comuns do condomínio.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Consumo - Gás - Fogão",
        url: "consumo-gas-fogao",
    }, {
        id: 17592203430359,
        name: "Ajuste - Condomínio",
        description: "Ajuste - Condomínio é um ajuste de valor realizado ao final da locação para zerar o balanço entre as despesas pagas e cobradas pelo QuintoAndar durante a locação. O ajuste é feito em 2 etapas: a primeira é entre o primeiro e penúltimo boletos pagos de condomínio, e a segunda é a diferença proporcional, dos dias vividos do último mês, das despesas ordinárias que cobramos e pagamos na fatura de rescisão. Por fim, as duas etapas são somadas e chega-se ao valor final de ajuste para as partes. Isto ocorre, pois utilizamos o valor referencial do último boleto na cobrança mensal de faturas.",
        "help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
        "disabled-at": null,
        "from": "tenant",
        "to": "quinto-andar",
        expenseGroup: "Ordinarias",
        searchable: "Ajuste - Condomínio",
        url: "ajuste-condominio"
    }



];
