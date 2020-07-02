const iptuTaxDescription = 'Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura';

export const expenses = [
    {
        name: "Fundo - Reserva",
        url: "FundoReserva",
        expenseGroup: "Fundos",
        description: "Descrição do fundo de reserva",
        searchable: "Fundo - Reserva, Fundo de Reserva, Fundo Reserva"
    },
    {
        name: 'Acordo - Débito',
        description: `Acordo-Débito é um valor, negociado em assembléia, utilizado para quitar débito anterior do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos, Débito de acordo",
        url: "acordo-debito",
    },
    {
        name: 'Acordo - Judicial',
        description: `Acordo-Judicial é um valor, negociado em assembléia, utilizado para quitar débito judicial do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordo judicial, acordo - judicial"
    },
    {
        name: 'Acordo - Trabalhista',
        description: `Acordo - Trabalhista é um valor, negociado em assembléia, utilizado para quitar débito
        trabalhista do condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - trabalhista, acordos trabalhistas, acordo trabalhista, acordo - trabalhista"
    },
    {
        name: 'Despesas - Extras',
        description: `Despesas - Extras é um valor destinado ao pagamento de algum serviço ou obra necessário para
        o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Documentação/Laudo',
        description: `Documentação/Laudo - É um valor cobrado para o pagamento da emissão de laudos e pareceres de
        orgãos regulamentadores.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - Energia / Água',
        description: 'Imposto - Energia / Água - Quando algum imposto ainda não foi desmembrado pela prefeitura',
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU - 2016',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU - 2017',
        description: `Imposto - IPTU - 2017 - Quando algum imposto ainda não foi desmembrado pela prefeitura, o
        condomínio paga um carnê único ao invés de cada unidade pagar um carnê individual. Desta forma, a
        cobrança do imposto é rateada entre os moradores e incluída no boleto de condomínio. Esse refere-se
        ao IPTU.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU - 2018',
        description: iptuTaxDescription,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU - Subsolo / Garagem',
        description: `Imposto - IPTU - Subsolo / Garagem - Quando algum imposto ainda não foi desmembrado pela
        prefeitura`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto - IPTU - Terreno',
        description: 'Imposto - IPTU - Terreno - Quando algum imposto ainda não foi desmembrado pela prefeitura',
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Imposto sobre serviços de condomínio (ISS)',
        description: `Imposto sobre serviços de condomínio (ISS) - É uma cobrança referente aos impostos sobre
        serviços do condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Multa - Infração regulamentar',
        description: `Multa - Infração regulamentar é a cobrança gerada devido à infração do regulamento do
        condomínio.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Taxa municipal - Coleta de Lixo',
        description: `Taxa municipal - Coleta de lixo é uma cobrança feita pela Prefeitura da sua cidade, cobrada
        diretamente no condomínio junto à cobrança de água e esgoto.`,
        expenseGroup: "Acordos",
        searchable: "Acordos - Débitos"
    },
    {
        name: 'Fundo - AVCB',
        description: `Fundo - AVCB é uma arrecadação destinada ao fundo utilizado para realizar o pagamento do
  laudo AVCB (Auto de Vistoria do Corpo de Bombeiros). O laudo é obrigatório para os condomínios`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Benfeitorias',
        description: `Fundo - Benfeitorias é um valor arrecadado ao fundo destinado a realização de obras e
  melhorias no condomínio`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Estacionamento - Manutenção',
        description: `Fundo - Estacionamento - Manutenção é um valor arrecadado para o fundo destinado à
  manutenção e conservação das instalações do estacionamento/ garagem.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Inadimplência',
        description: `Fundo - Inadimplência  é um valor arrecadado para o fundo destinado a cobrir eventual
  inadimplência das unidades.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Indenização',
        description: `Fundo - Indenização é um valor arrecadado para o fundo destinado a cobrir eventual
  indenização com a qual o condomíno precise arcar.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Investimentos',
        description: `Fundo - Investimentos é um valor arrecadado ao fundo que se destina às enventuais obras
  e melhorias no condomínio`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Melhorias',
        description: 'Fundo - Melhorias é um valor arrecadado para enventuais obras e melhorias no condomínio',
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Obras',
        description: 'Fundo - Obras é um valor arrecadado para eventuais obras e melhorias no condomínio',
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Provisões',
        description: `Fundo - Provisões é uma cobrança destinada a cobrir despesas não previstas que venham a
  surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo - Reserva',
        description: `Fundo - Reserva é um fundo destinado a cobrir despesas não previstas que venham a surgir
  no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo Obras - Complementar',
        description: 'Fundo Obras - Complementar é um valor arrecadado para eventuais obras e melhorias no condomínio.',
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo Reserva - Complementar',
        description: `Fundo Reserva - Complementar é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },
    {
        name: 'Fundo Reserva - Garagem',
        description: `Fundo Reserva - Garagem é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.`,
        expenseGroup: "Fundos",
        searchable: "Fundos"
    },

    {
        name: 'Individualização - Água',
        description: `Individualização - Água é um valor destinado ao pagamento de serviços de individualização
  das instalações de água do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Individualização - Energia',
        description: `Individualização - Energia é um valor destinado ao pagamento de serviços de individualização
  dos medidores de energia do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Individualização - Gás',
        description: `Individualização - Gás é um valor destinado ao pagamento de serviços de individualização
  das instalações de gás do condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Instalação - Medidores',
        description: 'Instalação - Medidores é um valor destinado à instalação do sistema de medidores do condomínio.',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Instalação - Sistema de Segurança',
        description: `Instalação - Sistema de Segurança é um valor destinado à instalação do sistema de segurança
  no condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Investimentos iniciais',
        description: `Valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento
  do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Pintura',
        description: 'Pintura é um valor destinado ao pagamento de serviços de pintura  no condomínio.',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Rateio - Aquisição / Instalação de Equipamentos',
        description: `Rateio - Aquisição / Instalação de Equipamentos é um valor destinado ao pagamento de algum
  serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias
  para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Rateio - Extra - Serviço / Obra',
        description: `Rateio - Extra - Serviço/Obra é um valor destinado ao pagamento de algum serviço ou obra
  necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura
  do edifício.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Rateio - Obras',
        description: `Rateio - Obras é um valor destinado ao pagamento de algum serviço ou obra necessário para
  o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Rateio Obras - Complementar',
        description: `Rateio Obras - Complementar é um valor destinado ao pagamento de algum serviço ou obra
  necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura
  do edifício.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reforma - Elevador',
        description: 'Reforma - Elevador é um valor destinado ao pagamento de serviços de reparo/troca do elevador',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reforma - Fachada',
        description: 'Reforma - Fachada é um valor destinado ao pagamento da reforma da fachada do condomínio.',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reforma - Impermeabilização',
        description: `Reforma - Impermeabilização é um valor destinado ao pagamento de serviços de
  impermebilização no condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reforma - Tubulação',
        description: 'Reforma - Tubulação é um valor destinado ao pagamento de serviços de reparo/troca de tubulações.',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reparo - Elétrico',
        description: `Reparo - Elétrico é um valor destinado ao pagamento de reparos na instalação elétrica do
  condomínio.`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Reparo - Hidráulico',
        description: 'Reparo - Hidráulico é um valor destinado ao pagamento de reparos hidráulicos no condomínio.',
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },
    {
        name: 'Sistema Monitoramento/Segurança',
        description: `Sistema Monitoramento/Segurança é um valor destinado ao pagamento do sistema de monitoramento
  do condomínio`,
        expenseGroup: "Reformas",
        searchable: "Individualização "
    },




    {
        name: 'Bonificação natalina',
        description: `Despesa eventual normalmente acordada em assembleia e cobrada pela administradora do seu
      condomínio.`,
        expenseGroup: "Outros",
        searchable: "Bonificação "
    },
    {
        name: 'Cartão - Controle de acesso',
        description: 'Cartão - Controle de acesso é a cobrança gerada pela compra de itens de acesso ao condomínio.',
        expenseGroup: "Outros",
        searchable: "Bonificação "
    },
    {
        name: 'Deficit Orçamentário - Resp. Proprietário',
        description: `Deficit Orçamentário é um valor cobrado do proprietário quando o condomínio está sem
      dinheiro e precisou criar uma cobrança para sanar os gastos extraordinários e equilibrar as contas.`,
        expenseGroup: "Outros",
        searchable: "Bonificação "
    },
    {
        name: 'Uso - Churrasqueira',
        description: 'Uso - Churrasqueira é a cobrança gerada pelo uso da churrasqueira do condomínio.',
        expenseGroup: "Outros",
        searchable: "Bonificação "
    },
    {
        name: 'Uso - Lavanderia',
        description: 'Uso - Lavanderia é a cobrança gerada pelo uso da lavanderia do condomínio.',
        expenseGroup: "Outros",
        searchable: "Bonificação "
    },
    {
        name: 'Uso - Serviço Condomínio',
        description: `Uso - Serviço Condomínio é a cobrança gerada pelo uso individual dos serviços do
      condomínio (como salão de festas e lavanderia) e pela aquisição de itens de acesso (controle, cartão).
      Também pode ser referente à multa por infração das regras do condomínio.`,
        expenseGroup: "Outros",
        searchable: "Bonificação "
    }

];
