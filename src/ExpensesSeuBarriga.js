
const iptuTaxDescription = 'Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura';

export const expenses = [{
	"id": 17592200407729,
	name: "Taxa municipal - Coleta de Lixo",
	description: "Taxa municipal - Coleta de lixo é uma cobrança feita pela Prefeitura da sua cidade, cobrada diretamente no condomínio junto à cobrança de água e esgoto.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592209027880,
	name: "Fundo - AVCB",
	description: "Fundo - AVCB é uma arrecadação destinada ao fundo utilizado para realizar o pagamento do laudo AVCB (Auto de Vistoria do Corpo de Bombeiros). O laudo é obrigatório para os condomínios",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629112-Documenta%C3%A7%C3%B5es-e-laudos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592260270889,
	name: "Reembolso - Aluguel",
	description: "Reembolso - Aluguel é uma correção do valor cobrado de aluguel",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000507811-Quando-come%C3%A7a-a-contar-o-aluguel-",
	"disabled-at": null,
	"from": "adm-partner",
	"to": "quinto-andar"
}, {
	"id": 17592243803447,
	name: "Alugou, Poupou - QuintoAndar",
	description: "Alugou, Poupou - QuintoAndar é o desconto referente a um aluguel da promoção",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360027288152-Alugou-Poupou-QuintoAndar",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592209027920,
	name: "Imposto - IPTU - 2018",
	description: "Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592283338864,
	name: "Reembolso do condomínio ao proprietário que vence em Julho - O condomínio que vence em Agosto é de responsabilidade do inquilino",
	description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360004194791-Quem-paga-o-boleto-do-condom%C3%ADnio-",
	"disabled-at": "2019-07-18T18:29:46+0000",
	"from": "landlord",
	"to": "tenant"
}, {
	"id": 17592209027827,
	name: "Reembolso - Cobrança a maior",
	description: "Reembolso - Cobrança a maior é a correção de uma despesa cobrada a mais nos meses anteriores",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592234475406,
	name: "Cobrança - Pagamento a menor",
	description: "Cobrança - Pagamento a menor é a correção de uma despesa cobrada a menos nos meses anteriores.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592209027816,
	name: "Reparo - Hidráulico",
	description: "Reparo - Hidráulico é um valor destinado ao pagamento de reparos hidráulicos no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592209027813,
	name: "Fundo Reserva - Garagem",
	description: "Fundo Reserva - Garagem é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620031-Fundos-para-reservas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592209029345,
	name: "Bonificação Natalina ",
	description: "Despesa eventual normalmente acordada em assembleia e cobrada pela administradora do seu condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523846,
	name: "Acordo - Débito",
	description: "Acordo-Débito é um valor, negociado em assembléia, utilizado para quitar débito anterior do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628972-Acordos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592283340169,
	name: "Reembolso ao proprietário do condomínio que vence em Julho - O condomínio que vence em Agosto é de responsabilidade do inquilino",
	description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360004194791-Quem-paga-o-boleto-do-condom%C3%ADnio-",
	"disabled-at": null,
	"from": "tenant",
	"to": "landlord"
}, {
	"id": 17592194523848,
	name: "Acordo - Trabalhista",
	description: "Acordo - Trabalhista é um valor, negociado em assembléia, utilizado para quitar débito trabalhista do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628972-Acordos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523847,
	name: "Acordo - Judicial",
	description: "Acordo-Judicial é um valor, negociado em assembléia, utilizado para quitar débito judicial do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628972-Acordos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523850,
	name: "Consumo - Energia",
	description: "Consumo - Energia é uma despesa que refere-se ao consumo de energia nas áreas comuns do condomínio e/ou no apartamento (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523849,
	name: "Consumo - Água",
	description: "Consumo-Água é uma despesa que refere-se ao consumo de água nas áreas comuns do condomínio e/ou no apartamento (nos casos em que o consumo individual é cobrado diretamente no boleto de condomínio).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523852,
	name: "Consumo - Água - Área Comum",
	description: "Consumo - Água - Área Comum é uma cobrança referente ao consumo de água nas áreas comuns do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523851,
	name: "Consumo - Gás",
	description: "Consumo - Gás é uma despesa que refere-se ao consumo de gás nas áreas comuns do condomínio e/ou no apartamento (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523854,
	name: "Consumo - Gás - Área Comum",
	description: "Consumo - Gás - Área Comum é uma cobrança referente ao consumo de gás nas áreas comuns do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523853,
	name: "Consumo - Energia - Área Comum",
	description: "Consumo - Energia - Área Comum é uma cobrança referente ao consumo de energia nas áreas comuns do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523856,
	name: "Rateio - Contas de consumo",
	description: "Rateio - Contas de consumo é uma cobrança referente ao consumo de água",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523855,
	name: "Taxa de leitura para contas de consumo",
	description: "Taxa de leitura para contas de consumo é um valor cobrado por empresa terceirizada para realizar a leitura dos consumos de energia",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523858,
	name: "Cota Condominial Complementar",
	description: "Cota Condominial Complementar é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592240235307,
	name: "Proteção 5A - Reparos",
	description: "Despesas associadas a reparos pendentes no imóvel após a rescisão do contrato (ou saída do imóvel).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523857,
	name: "Cota Condominial",
	description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592240235308,
	name: "Proteção 5A - Reparos - Parceiros",
	description: "Despesas associadas a reparos pendentes no imóvel após a rescisão do contrato (ou saída do imóvel).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "landlord"
}, {
	"id": 17592194523860,
	name: "Cota Condominial - Subsolo",
	description: "Cota Condominial - Subsolo é uma arrecadação destinada ao pagamento das despesas básicas e fixas do subsolo do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523859,
	name: "Cota Condominial - Garagem",
	description: "Cota Condominial - Garagem é uma arrecadação destinada ao pagamento das despesas básicas e fixas da garagem do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523862,
	name: "Encargos Trabalhistas",
	description: "Encargos Trabalhistas é uma despesa referente ao pagamento dos salários dos funcionários do condomínio.  ",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523861,
	name: "Encargos Trabalhistas - 13º salário de funcionários",
	description: "Encargos Trabalhistas - 13º salário de funcionários é uma cobrança referente ao pagamento dos 13º salários dos funcionários do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523864,
	name: "Encargos Trabalhistas - Férias de funcionários",
	description: "Encargos Trabalhistas - Férias de funcionários é uma despesa referente ao pagamento das férias dos funcionários do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592240235309,
	name: "Proteção 5A - Multa",
	description: "Despesa relacionada à multa pela não execução dos reparos dentro do prazo contratual.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523863,
	name: "Encargos Trabalhistas - 13º salário/Férias de funcionários",
	description: "Encargos Trabalhistas - 13º salário/Férias de funcionários é uma despesa referente ao pagamento dos 13º salários e/ou das férias dos funcionários do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523866,
	name: "Honorários - Síndico",
	description: "Honorários - Sindíco é uma despesa referente ao pagamento dos salários",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523865,
	name: "Honorários - Advocatícios",
	description: "Honorários - Advocatícios é uma despesa referente ao pagamento de advogados para o condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523868,
	name: "Fundo - laudo para Vistoria de Corpo de Bombeiros (AVCB)",
	description: "Fundo - laudo para Vistoria de Corpo de Bombeiros (AVCB) é uma arrecadação destinada ao fundo utilizado para o pagamento de laudo/parecer AVCB (Auto de Vistoria do Corpo de Bombeiros). Esse laudo é obrigatório para os condomínios",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629112-Documenta%C3%A7%C3%B5es-e-laudos",
	"disabled-at": "2020-02-13T13:57:00+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523867,
	name: "Honorários - Prestador de serviço",
	description: "Honorários - Prestador de serviço é uma despesa referente ao pagamento de prestadores de serviço para o condomínio..",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523870,
	name: "Fundo - Inadimplência",
	description: "Fundo - Inadimplência  é um valor arrecadado para o fundo destinado a cobrir eventual inadimplência das unidades.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619891-Fundos-para-inadimpl%C3%AAncia-e-indeniza%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523869,
	name: "Documentação/Laudo",
	description: "Documentação/Laudo - É um valor cobrado para o pagamento da emissão de laudos e pareceres de orgãos regulamentadores.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629112-Documenta%C3%A7%C3%B5es-e-laudos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523872,
	name: "Fundo - Manutenção",
	description: "Fundo - Manutenção é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações e equipamentos hidráulicos",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523871,
	name: "Fundo - Indenização",
	description: "Fundo - Indenização é um valor arrecadado para o fundo destinado a cobrir eventual indenização com a qual o condomíno precise arcar.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619891-Fundos-para-inadimpl%C3%AAncia-e-indeniza%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523874,
	name: "Manutenção",
	description: "Manutenção - é um valor destinado à manutenção e conservação das instalações e equipamentos hidráulicos",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523873,
	name: "Fundo - Estacionamento (Manutenção)",
	description: "Fundo - Estacionamento (Manutenção) é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações do estacionamento/ garagem.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": "2018-08-14T20:22:46+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592195424239,
	name: "Multa Atraso",
	description: "",
	"help-link": "",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "quinto-andar"
}, {
	"id": 17592194523876,
	name: "Fundo - Investimentos",
	description: "Fundo - Investimentos é um valor arrecadado ao fundo que se destina às enventuais obras e melhorias no condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619951-Fundos-para-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523875,
	name: "Fundo - Benfeitorias",
	description: "Fundo - Benfeitorias é um valor arrecadado ao fundo destinado a realização de obras e melhorias no condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619951-Fundos-para-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523878,
	name: "Fundo - Obras",
	description: "Fundo - Obras é um valor arrecadado para eventuais obras e melhorias no condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619951-Fundos-para-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523877,
	name: "Fundo - Melhorias",
	description: "Fundo - Melhorias é um valor arrecadado para enventuais obras e melhorias no condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619951-Fundos-para-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592234475336,
	name: "Manutenção - Complementar",
	description: "Manutenção - Complementar é um valor destinado à manutenção e conservação das instalações e equipamentos hidráulicos.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523880,
	name: "Fundo - Reserva",
	description: "Fundo - Reserva é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620031-Fundos-para-reservas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523879,
	name: "Fundo - Provisões",
	description: "Fundo - Provisões é uma cobrança destinada a cobrir despesas não previstas que venham a surgir no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620031-Fundos-para-reservas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592235433815,
	name: "Correção - Taxa de administração",
	description: "Correção - Taxa de administração é a correção do valor cobrado da a taxa de administração sobre o aluguel. ",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "landlord"
}, {
	"id": 17592243803095,
	name: "Alugou, Poupou - QuintoAndar - Parcela 1 de 2",
	description: "lugou, Poupou - QuintoAndar - Parcela 1 de 2  é a primeira parte do desconto promocional, referente ao proporcional do primeiro aluguel que seria cobrado. O valor total do desconto será no valor de um aluguel.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360027288152-Alugou-Poupou-QuintoAndar",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592194523882,
	name: "Imposto - Energia / Água",
	description: "Imposto - Energia / Água - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523881,
	name: "Fundo Reserva - garagem",
	description: "Fundo Reserva - garagem é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620031-Fundos-para-reservas",
	"disabled-at": "2020-02-11T14:38:42+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592243803097,
	name: "Alugou, Poupou - QuintoAndar - Parcela 2 de 2",
	description: "Alugou, Poupou - QuintoAndar - Parcela 2 de 2 é última parte do desconto promocional, referente ao valor residual a ser descontado para atingir o valor de um aluguel.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360027288152-Alugou-Poupou-QuintoAndar",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592194523884,
	name: "Imposto - IPTU - 2016",
	description: "Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523883,
	name: "Imposto - IPTU",
	description: "Imposto - IPTU  - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592283338792,
	name: "Reembolso do condomínio ao proprietário - O condomínio que vence em Agosto é de responsabilidade do inquilino - Peça à sua administradora",
	description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360004194791-Quem-paga-o-boleto-do-condom%C3%ADnio-",
	"disabled-at": "2019-07-18T18:29:49+0000",
	"from": "tenant",
	"to": "landlord"
}, {
	"id": 17592194523886,
	name: "Imposto - IPTU - Terreno",
	description: "Imposto - IPTU - Terreno - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523885,
	name: "Imposto - IPTU - Subsolo / Garagem",
	description: "Imposto - IPTU - Subsolo / Garagem - Quando algum imposto ainda não foi desmembrado pela prefeitura",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523888,
	name: "Rateio - Extra (serviço ou obra)",
	description: "Rateio - Extra (serviço ou obra) é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": "2018-08-14T20:15:39+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523887,
	name: "Rateio - Aquisição / Instalação de Equipamentos",
	description: "Rateio - Aquisição / Instalação de Equipamentos é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523890,
	name: "Rateio - Obras",
	description: "Rateio - Obras é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523889,
	name: "Despesas - Extras",
	description: "Despesas - Extras é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523892,
	name: "Pintura",
	description: "Pintura é um valor destinado ao pagamento de serviços de pintura  no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523891,
	name: "Pintura - Fachada",
	description: "Pintura - Fachada  é um valor destinado ao pagamento de serviços de pintura da fachada do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523894,
	name: "Reforma - Impermeabilização",
	description: "Reforma - Impermeabilização é um valor destinado ao pagamento de serviços de impermebilização no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523893,
	name: "Reforma - Fachada",
	description: "Reforma - Fachada é um valor destinado ao pagamento da reforma da fachada do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523896,
	name: "Reforma - Tubulação",
	description: "Reforma - Tubulação é um valor destinado ao pagamento de serviços de reparo/troca de tubulações.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592222840968,
	name: "Reembolso - Reserva de Locação",
	description: "Reembolso - Reserva de Locação é o reembolso do valor pago pelo inquilino para ter exclusividade durante a negociação da locação",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-reembolsos-e-acordos-na-sua-fatura",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592194523895,
	name: "Reforma - Elevador",
	description: "Reforma - Elevador é um valor destinado ao pagamento de serviços de reparo/troca do elevador",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523898,
	name: "Instalação - Sistema de Segurança",
	description: "Instalação - Sistema de Segurança é um valor destinado à instalação do sistema de segurança no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523897,
	name: "Reparo - Hidraulico",
	description: "Reparo - Hidraulico é um valor destinado ao pagamento de reparos hidráulicos no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": "2018-08-14T20:04:11+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523900,
	name: "Individualização - Água",
	description: "Individualização - Água é um valor destinado ao pagamento de serviços de individualização das instalações de água do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523899,
	name: "Instalação - Medidores",
	description: "Instalação - Medidores é um valor destinado à instalação do sistema de medidores do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592209028006,
	name: "Despesa - Correios",
	description: "Despesa - Correios é um valor arrecadado para pagar as despesas de correio com envio de comunicados e atas de condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "quinto-andar"
}, {
	"id": 17592194523902,
	name: "Individualização - Energia",
	description: "Individualização - Energia é um valor destinado ao pagamento de serviços de individualização dos medidores de energia do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523901,
	name: "Individualização - Gás",
	description: "Individualização - Gás é um valor destinado ao pagamento de serviços de individualização das instalações de gás do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523904,
	name: "Imposto sobre serviços de condomínio (ISS)",
	description: "Imposto sobre serviços de condomínio (ISS) - É uma cobrança referente aos impostos sobre serviços do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": "2018-08-14T20:16:50+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523903,
	name: "Investimentos iniciais",
	description: "Valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523906,
	name: "Reembolso - Correção de cobrança",
	description: "Reembolso - Correção de cobrança é a correção de uma despesa cobrada a mais ou a menos nos meses anteriores",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": "2018-08-14T20:05:53+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523905,
	name: "Reembolso",
	description: "Reembolso - é a correção de uma despesa cobrada a mais ou a menos nos meses anteriores",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": "2018-08-14T20:06:06+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592234475300,
	name: "Fundo Obras - Complementar ",
	description: "Fundo Obras - Complementar é um valor arrecadado para eventuais obras e melhorias no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619951-Fundos-para-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523908,
	name: "Uso - Assistência médica",
	description: "Uso - Assistência médica é uma cobrança gerada pelo uso da assistência médica do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523907,
	name: "Reembolso - Correção de cobrança",
	description: "Reembolso - Correção de cobrança é a correção de uma despesa cobrada a mais ou a menos nos meses anteriores",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura",
	"disabled-at": "2018-08-14T20:05:56+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592209028830,
	name: "Deficit Orçamentário - Resp. Inquilino",
	description: "Deficit Orçamentário é um valor cobrado do inquilino quando o condomínio está sem dinheiro e precisou criar uma cobrança para sanar os gastos ordinários e equilibrar as contas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523910,
	name: "Uso - Camareira",
	description: "Uso - Camareira é a cobrança gerada pelo uso dos serviços de camareira do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523909,
	name: "Uso - Associação",
	description: "Uso - Associação é uma cobrança gerada pelo uso dos serviços de associação do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523912,
	name: "Uso - Estacionamento",
	description: "Uso - Estacionamento é a cobrança gerada pelo uso do estacionamento do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523911,
	name: "Uso - Churrasqueira",
	description: "Uso - Churrasqueira é a cobrança gerada pelo uso da churrasqueira do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523914,
	name: "Uso - Internet",
	description: "Uso - Internet é a cobrança gerada pelo uso do plano de internet do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523913,
	name: "Uso - Garagem",
	description: "Uso - Garagem é a cobrança gerada pelo uso da garagem do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523916,
	name: "Uso - Manobrista",
	description: "Uso - Manobrista é a cobrança gerada pelo uso do serviço de manobrista do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523915,
	name: "Uso - Lavanderia",
	description: "Uso - Lavanderia é a cobrança gerada pelo uso da lavanderia do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523918,
	name: "Uso - Salão de festas",
	description: "Uso - Salão de festas é a cobrança gerada pelo uso do salão de festas do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592258895580,
	name: "Reembolso - IPTU",
	description: "Reembolso - IPTU é um ajuste no valor cobrado de IPTU no mês vigente.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-IPTU",
	"disabled-at": null,
	"from": "landlord",
	"to": "tenant"
}, {
	"id": 17592194523917,
	name: "Uso - Programa Esportivo/Lazer",
	description: "Uso - Programa Esportivo/Lazer é a cobrança gerada pelo uso dos programas de personal fitness ou de atividades fisicas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523920,
	name: "Uso - Serviço Condomínio",
	description: "Uso - Serviço Condomínio é a cobrança gerada pelo uso individual dos serviços do condomínio (como salão de festas e lavanderia) e pela aquisição de itens de acesso (controle, cartão). Também pode ser referente à multa por infração das regras do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523919,
	name: "Proteção Residencial - Condomínio",
	description: "Uso - Seguro Condomínio é a cobrança do seguro contratado pelo condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523922,
	name: "Uso - TV",
	description: "Uso - TV é a cobrança gerada pelo uso da TV por assinatura do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523921,
	name: "Uso - Telefone",
	description: "Uso - Telefone é a cobrança gerada pelo uso do plano de telefone do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592283340126,
	name: "Reembolso ao proprietário do condomínio - O condomínio que vence em Agosto é de responsabilidade do inquilino - Peça à sua administradora",
	description: "Cota Condominial é uma arrecadação destinada ao pagamento das despesas básicas e fixas do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360004194791-Quem-paga-o-boleto-do-condom%C3%ADnio-",
	"disabled-at": null,
	"from": "tenant",
	"to": "landlord"
}, {
	"id": 17592194523924,
	name: "Cartão - Controle de acesso",
	description: "Cartão - Controle de acesso é a cobrança gerada pela compra de itens de acesso ao condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523923,
	name: "Multa - Infração regulamentar",
	description: "Multa - Infração regulamentar é a cobrança gerada devido à infração do regulamento do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523926,
	name: "Receitas",
	description: "Receita é um valor creditado quando o condomínio possui algum rendimento. Exemplo: aluguel de espaço na cobertura para implantação de torre de comunicação geram receitas ao condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "landlord"
}, {
	"id": 17592194523925,
	name: "Despesas - Correio",
	description: "Despesas - Correio é um valor arrecadado para pagar as despesas de correio com envio de comunicados e atas de condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": "2018-08-14T20:12:54+0000",
	"from": "quinto-andar",
	"to": "quinto-andar"
}, {
	"id": 17592194523928,
	name: "Sistema Monitoramento/Segurança",
	description: "Sistema Monitoramento/Segurança é um valor destinado ao pagamento do sistema de monitoramento do condomínio",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523927,
	name: "Deficit Orçamentário (Resp. Proprietário)",
	description: "Deficit Orçamentário é um valor cobrado do proprietário quando o condomínio está sem dinheiro e precisou criar uma cobrança para sanar os gastos extraordinários e equilibrar as contas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": "2018-08-14T20:19:36+0000",
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592194523930,
	name: "Deficit Orçamentário (Resp. Inquilino)",
	description: "Deficit Orçamentário é um valor cobrado do inquilino quando o condomínio está sem dinheiro e precisou criar uma cobrança para sanar os gastos ordinários e equilibrar as contas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": "2018-08-14T20:21:24+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194523929,
	name: "Tarifa - Boleto",
	description: "Tarifa - Boleto é uma tarifa cobrada pelo banco para emissão do boleto de condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592234475325,
	name: "Fundo Manutenção - Complementar",
	description: "Fundo Manutenção - Complementar é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações e equipamentos hidráulicos.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592194629406,
	name: "Descontos - Pagamento Antecipado",
	description: "Valor descontado pelo pagamento antecipado do boleto do condomínio (condição específica de alguns condomínios).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115001880392-Descontos",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592488917936,
	name: "Preço da antecipação",
	description: "Preço cobrado para realizar a antecipação do aluguel.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360039241232-O-que-%C3%A9-antecipa%C3%A7%C3%A3o-de-recebimento-de-repasse-",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592209028971,
	name: "Fundo - Estacionamento - Manutenção",
	description: "Fundo - Estacionamento - Manutenção é um valor arrecadado para o fundo destinado à manutenção e conservação das instalações do estacionamento/ garagem.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592301221093,
	name: "Taxa diferencial",
	description: "Esse é o valor referente ao modelo de locação que nós cuidamos de tudo para você ter a tranquilidade de receber os valores a partir do seu primeiro mês.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/sections/115000129851-Pagamentos",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592234475289,
	name: "Rateio Obras - Complementar ",
	description: "Rateio Obras - Complementar é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592301221090,
	name: "Desconto",
	description: "É quando você recebeu um desconto referente ao valor de aluguel, taxa de corretagem ou outro. Um desconto geralmente acontece em promoções ou em negociações.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592301221092,
	name: "Promoção",
	description: "É um desconto que você recebeu por meio de uma promoção do QuintoAndar.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592301221091,
	name: "Adiantamento QuintoAndar",
	description: "Esse é o valor do repasse que você recebeu adiantado.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/360039241232-O-que-%C3%A9-antecipa%C3%A7%C3%A3o-de-recebimento-de-repasse-",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592206385592,
	name: "Reparo - Elétrico",
	description: "Reparo - Elétrico é um valor destinado ao pagamento de reparos na instalação elétrica do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592234475233,
	name: "Encargos Trabalhistas - Complementar",
	description: "Encargos Trabalhistas - Complementar é uma despesa referente ao pagamento dos salários dos funcionários do condomínio.  ",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592196659238,
	name: "Bonificação de fim de ano (Funcionários condomínio)",
	description: "Despesa eventual normalmente acordada em assembleia e cobrada pela administradora do seu condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": "2018-08-14T20:30:15+0000",
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592196659237,
	name: "Ajuste IPTU",
	description: "Ajuste IPTU é um ajuste realizado ao final da locação para corrigir os valores das parcelas cobradas durante a locação. O valor total anual de IPTU não é dividido em 12 parcelas na maioria dos casos. Então, como o QuintoAndar quem paga as parcelas de IPTU, e cobra do inquilino da mesma maneira, faz-se necessário a correção desses valores. Ela é feita da seguinte maneira: calcula-se o valor total anual do IPTU dividido por 12 meses e baseado nisso, os valores devidos até o dia vivido no imóvel. Por fim, a diferença entre o que já foi pago e devido é o Ajuste IPTU.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592209028508,
	name: "Deficit Orçamentário - Resp. Proprietário",
	description: "Deficit Orçamentário é um valor cobrado do proprietário quando o condomínio está sem dinheiro e precisou criar uma cobrança para sanar os gastos extraordinários e equilibrar as contas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000628451-Outras-despesas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592245062724,
	name: "Taxa de corretagem - Parceiro",
	description: "Parte da corretagem que será enviada ao parceiro",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000643292-O-que-%C3%A9-a-taxa-de-corretagem-E-a-taxa-de-administra%C3%A7%C3%A3o-",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "adm-partner"
}, {
	"id": 17592209028244,
	name: "ISS - Imposto sobre serviços de condomínio",
	description: "ISS - Imposto sobre serviços de condomínio é uma cobrança referente aos impostos sobre serviços prestados pelo condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592206385593,
	name: "Reembolso - Contas de Consumo",
	description: "Reembolso - Contas de Consumo é o reembolso das despesas referentes ao consumo de energia, gás e água nas áreas comuns do condomínio e/ou nos apartamentos (quando o consumo individual é cobrado diretamente no boleto de condomínio).",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-reembolsos-e-acordos-na-sua-fatura",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "tenant"
}, {
	"id": 17592206385594,
	name: "Imposto - IPTU - 2017",
	description: "Imposto - IPTU - 2017 - Quando algum imposto ainda não foi desmembrado pela prefeitura, o condomínio paga um carnê único ao invés de cada unidade pagar um carnê individual. Desta forma, a cobrança do imposto é rateada entre os moradores e incluída no boleto de condomínio. Esse refere-se ao IPTU.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620051-Impostos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592209028237,
	name: "Rateio - Extra - Serviço / Obra",
	description: "Rateio - Extra - Serviço/Obra é um valor destinado ao pagamento de algum serviço ou obra necessário para o bom funcionamento do condomínio. Também pode se referir a melhorias para a estrutura do edifício.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000629292-Rateios-para-reparos-e-melhorias",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592302610407,
	name: "Compensação de Corretagem",
	description: "Esse é o valor da promoção que você participou que compensa o serviço de corretagem do(a) corretor(a) prestado",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br",
	"disabled-at": null,
	"from": "quinto-andar",
	"to": "landlord"
}, {
	"id": 17592203430354,
	name: "Transporte Coletivo",
	description: "Transporte Coletivo é destinado ao pagamento dos custos operacionais do transporte coletivo oferecido pelo condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592203430356,
	name: "Consumo - Gás - Piscina",
	description: "Consumo - Gás - Piscina é uma cobrança referente ao consumo de fás nas áreas comuns do condomínio. ",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592203430355,
	name: "Consumo - Água - Quente",
	description: "Consumo - Água - Quente é uma cobrança referente ao consumo de água quente nas áreas comuns do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592203430358,
	name: "Fundo Reserva - Complementar",
	description: "Fundo Reserva - Complementar é um fundo destinado a cobrir despesas não previstas que venham a surgir no condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620031-Fundos-para-reservas",
	"disabled-at": null,
	"from": "landlord",
	"to": "quinto-andar"
}, {
	"id": 17592203430357,
	name: "Consumo - Gás - Fogão",
	description: "Consumo - Gás - Fogão é uma cobrança referente ao consumo de gás nas áreas comuns do condomínio.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}, {
	"id": 17592203430359,
	name: "Ajuste - Condomínio",
	description: "Ajuste - Condomínio é um ajuste de valor realizado ao final da locação para zerar o balanço entre as despesas pagas e cobradas pelo QuintoAndar durante a locação. O ajuste é feito em 2 etapas: a primeira é entre o primeiro e penúltimo boletos pagos de condomínio, e a segunda é a diferença proporcional, dos dias vividos do último mês, das despesas ordinárias que cobramos e pagamos na fatura de rescisão. Por fim, as duas etapas são somadas e chega-se ao valor final de ajuste para as partes. Isto ocorre, pois utilizamos o valor referencial do último boleto na cobrança mensal de faturas.",
	"help-link": "https://help.quintoandar.com.br/hc/pt-br/articles/115000620251-Outras-despesas",
	"disabled-at": null,
	"from": "tenant",
	"to": "quinto-andar"
}]
