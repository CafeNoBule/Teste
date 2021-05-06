let Italy = {
    name: "Italy",
    image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hospedagem: {

        hospedagem1: {
            nomeHospedagem1: "5 Estrelas",
            valor: 600.00,
        },

        hospedagem2: {
            nomeHospedagem2: "4 Estrelas",
            valor: 300.00
        },

        hospedagem3: {
            nomeHospedagem3: "3 Estrelas",
            valor: 100.00
        },
        hospedagem4: {
            nomeHospedagem4: "AirBnB",
            valor: 0.00
        }

    },

    aluguelCarro: {

        nomeCategoria: "Aluguel Carro",
        carro1: {
            nomeCarro1: "Carro Comum",
            valor: 10.00
        },

        carro2: {
            nomeCarro2: "Carro 5+",
            valor: 25.00
        }

    },

    alimentacao: {
        nomeCategoria: "Alimentação",
        cafeDaManha: {
            nome: "Café da Manhã",
            valor: 90.00
        },
        almoco: {
            nome: "Almoço",
            valor: 75.50
        },
        jantar: {
            nome: "Jantar",
            valor: 44.90
        }
    },

    seguroViagem: {
        nomeCategoria: "Seguro Viagem",
        seguroBagagem: {
            nome: "Bagagem",
            valor: 480.99
        },
        seguroVida: {
            nome: "Vida",
            valor: 897.99
        },
        seguroSaude: {
            nome: "Saúde",
            valor: 987.99
        }
    },

    pontosTuristicos: {
        nomeCategoria: "Turismo",
        primeiroPontoTuristico: {
            nome: "Coliseu",
            valor: 700.00
        },
        segundoPontoTuristico: {
            nome: "Capela Sistina",
            valor: 900.00
        },
        terceiroPontoTuristico: {
            nome: "Torre de Pisa",
            valor: 700.00
        }

    },

    Extras: {
        nomeCategoria: "Extras",
        extraTour: {
            nome: "Tour com o Especialista",
            valor: 900.00
        },
        extraVIP: {
            nome: "VIP Casa Noturna",
            valor: 1999.99
        },
        extraPet: {
            nome: "Família com Pet",
            valor: 249.99
        }
    }

}

/* Função para trocar a imagem do fundo */
function mudarFundoCalculadora() {
    var imgURL = document.getElementsByClassName("header-image")
    imgURL[0].style.background = "url('" + Italy["image"] + "') no-repeat center"
    imgURL[0].style.backgroundSize = "cover"
}
mudarFundoCalculadora()

function somaHospedagem() {
    let valorSoma = 0;
    let dados = document.getElementsByName('hospedagem');

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.hospedagem.hospedagem1.nomeHospedagem1) {
                valorSoma = Italy.hospedagem.hospedagem1.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem2.nomeHospedagem2) {
                valorSoma = Italy.hospedagem.hospedagem2.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem3.nomeHospedagem3) {
                valorSoma = Italy.hospedagem.hospedagem3.valor;
            } else if (dados[i].value == Italy.hospedagem.hospedagem4.nomeHospedagem4) {
                valorSoma = Italy.hospedagem.hospedagem4.valor;
            }
        }
    }
    return valorSoma;
}

function calculaHospedagem() {
    let output = document.getElementById("output1");
    let precoHospedagem = somaHospedagem();
    output.innerHTML = `Total: R$ ${precoHospedagem.toFixed(2)}`;
}

function somaAluguelCarro() {
    let dados = document.getElementsByName('aluguelCarro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.aluguelCarro.carro1.nomeCarro1) {
                valorSoma = Italy.aluguelCarro.carro1.valor;
            } else if (dados[i].value == Italy.aluguelCarro.carro2.nomeCarro2) {
                valorSoma = Italy.aluguelCarro.carro2.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAluguelCarros() {
    let precoAluguel = somaAluguelCarro();
    let output = document.getElementById("output2");
    output.innerHTML = `Total: R$ ${precoAluguel.toFixed(2)}`;
}

function somaTurismo() {
    let dados = document.getElementsByName('turismo');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.pontosTuristicos.primeiroPontoTuristico.nome) {
                valorSoma = Italy.pontosTuristicos.primeiroPontoTuristico.valor;
            } else if (dados[i].value == Italy.pontosTuristicos.segundoPontoTuristico.nome) {
                valorSoma = valorSoma + Italy.pontosTuristicos.segundoPontoTuristico.valor;
            } else if (dados[i].value == Italy.pontosTuristicos.terceiroPontoTuristico.nome) {
                valorSoma = valorSoma + Italy.pontosTuristicos.terceiroPontoTuristico.valor;
            }
        }
    }
    return valorSoma;
}

function calculaTurismo() {
    let precoTurismo = somaTurismo();
    let output = document.getElementById("output3");
    output.innerHTML = `Total: R$ ${precoTurismo.toFixed(2)}`;
}

function somaAlimentacao() {
    let dados = document.getElementsByName('alimentacao');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.alimentacao.cafeDaManha.nome) {
                valorSoma = Italy.alimentacao.cafeDaManha.valor;
            } else if (dados[i].value == Italy.alimentacao.almoco.nome) {
                valorSoma = valorSoma + Italy.alimentacao.almoco.valor;
            } else if (dados[i].value == Italy.alimentacao.jantar.nome) {
                valorSoma = valorSoma + Italy.alimentacao.jantar.valor;
            }
        }
    }
    return valorSoma;
}

function calculaAlimentacao() {
    let precoAlimentacao = somaAlimentacao();
    let output = document.getElementById("output4");
    output.innerHTML = `Total: R$ ${precoAlimentacao.toFixed(2)}`;
}

function somaSeguro() {
    let dados = document.getElementsByName('seguro');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.seguroViagem.seguroBagagem.nome) {
                valorSoma = Italy.seguroViagem.seguroBagagem.valor;
            } else if (dados[i].value == Italy.seguroViagem.seguroSaude.nome) {
                valorSoma = valorSoma + Italy.seguroViagem.seguroSaude.valor;
            } else if (dados[i].value == Italy.seguroViagem.seguroVida.nome) {
                valorSoma = valorSoma + Italy.seguroViagem.seguroVida.valor;
            }
        }
    }
    return valorSoma;
}

function calculaSeguroVida() {
    let precoSeguro = somaSeguro();
    let output = document.getElementById("output5");
    output.innerHTML = `Total: R$ ${precoSeguro.toFixed(2)}`;
}

function somaExtra() {
    let dados = document.getElementsByName('extra');
    let valorSoma = 0;
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].checked) {
            if (dados[i].value == Italy.Extras.extraTour.nome) {
                valorSoma = Italy.Extras.extraTour.valor;
            } else if (dados[i].value == Italy.Extras.extraVIP.nome) {
                valorSoma = valorSoma + Italy.Extras.extraVIP.valor;
            } else if (dados[i].value == Italy.Extras.extraPet.nome) {
                valorSoma = valorSoma + Italy.Extras.extraPet.valor;
            }
        }
    }
    return valorSoma;
}

function calculaExtra() {
    let precoExtra = somaExtra();
    let output = document.getElementById("output6");
    output.innerHTML = `Total: R$ ${precoExtra.toFixed(2)}`;
}

function getNumeroViajantes() {
    let dados = document.getElementById("numberOfTravelers");
    return dados.value;
}

function getNumeroDias() {
    let dados = document.getElementById('numberOfDays');
    return dados.value;
}

function verificaDias(dias) {
    if (dias <= 90 && dias >= 50) {
        return 1.5;
    } else if (dias < 50 && dias >= 1) {
        return 1.2;
    } else {
        return 0;
    }
}

function taxa() {
    let output = document.getElementById('outputTaxa');
    let valorTaxa = verificaDias(getNumeroDias());

    if (valorTaxa == 1.2) {
        output.innerHTML = `Acrésicmo de 20% no valor total`
    } else if (valorTaxa == 1.5) {
        output.innerHTML = `Acrésicmo de 50% no valor total`
    } else {
        output.innerHTML = `A quantidade de dias deve estar entre 1 e 90`
    }
}

function validaViajantes() {
    let viajantes = getNumeroViajantes();
    let output = document.getElementById('outputViajantes');
    if (viajantes >= 1 && viajantes <= 100) {
        output.innerHTML.display = 'none';
        return true;
    } else {
        output.innerHTML = `A quantidade de pessoas deve estar entre 1 e 100`
        return false;
    }
}

function somaTotal() {
    return getNumeroViajantes() * (somaHospedagem() + somaTurismo()
        + somaAlimentacao() + somaSeguro() + somaExtra()) + somaAluguelCarro();
}

function valorT() {
    let taxaDias = verificaDias(getNumeroDias());
    let output = document.getElementById('resultado');

    if (validaViajantes()) {
        taxa();
        valorTotal = somaTotal() * taxaDias;
        let valorConvertido = valorTotal / 5.3;
        output.innerHTML = `Valor total a ser investido: R$ ${valorTotal.toFixed(2)} | US$ ${valorConvertido.toFixed(2)}`;
    }
}

