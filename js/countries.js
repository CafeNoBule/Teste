var listImageBackground = ["https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/935474/toronto-beauty-clouds-skyline-935474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/2819082/pexels-photo-2819082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940mach",
"https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1963082/pexels-photo-1963082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",]


// Função para randomizar o url da background
function randomImage() {
    // Encontra um valor aleatorio entre 0 e tamanho da lista de imgs
    let max = listImageBackground.length
    let index = Math.floor(Math.random() * (max))

    // Usa o valor como index da lista
    var imgURL = listImageBackground[index]

    // Encontra na DOM oque deve ser modificado
    var backgroundHTML = document.getElementById("backgroundImage")
    // Modificia na DOM
    backgroundHTML.style.background = "url(" + imgURL + ") no-repeat center center fixed"
}

// Tempo em milisegundos
// setInterval(function() { randomImage() }, 10000)
