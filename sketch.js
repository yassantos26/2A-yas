// fantasia, aventura, drama
// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
// As Aventuras de Pi, 10, drama, fantasia, aventura.
// Ladrões de bicicleta, 12, drama.

let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
}

function draw() {
    background (220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
    text(recomendacao, width/2, height/2);
}
function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(gostaDeFantasia) {
            return "guardiões da galáxia";
        } else {
          return"O menino que descobriu o vento ";
        
            if(gostaDeFantasia){
                return "As aventuras de Pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "A viagem de Chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}// fantasia, aventura, drama
// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
// As Aventuras de Pi, 10, drama, fantasia, aventura.

// Ladrões de bicicleta, 12, drama.


function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}
function draw() {
    background("PINK");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(30);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}