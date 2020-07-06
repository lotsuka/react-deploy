const iptuTaxDescription = 'Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura';

export const expenses = [
    {
        name: "Fundo - Reserva",
        url: "fundoreserva",
        expenseGroup: "Fundos",
        description: "Descrição do fundo de reserva",
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
        searchable: "Despesas extras, despesas - extras, despesa extra, despesas - extras",
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
        searchable: "Fundos, estacionamento, manutenção do estacionamento",
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
        description: `Fundo - Provisões é uma cobrança destinada a cobrir despesas não previstas que venham a
  surgir no condomínio.`,
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
        searchable: "Reforma - Elevador, benfeitoria dos elevadores, reparo de elevadores, conserto do elevador, concerto",
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
    }

];
