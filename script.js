//funcao que aplica força bruta testando todas os fatores de deslocamento
function forcaBruta(mensagem, alfabeto){

    //tratando a mensagem
    mensagem = mensagem.toLowerCase().replace(/[áàâãä]/g, "a").replace(/[éèêë]/g, "e").replace(/[íìîï]/g, "i").replace(/[óòôõö]/g, "o").replace(/[úùûü]/g, "u").replace(/[ç]/g, "c").replace(/[\.,;:!?()\[\]{}"']/g, "").replace(/\s+/g, "");
    
    //array com todos os 26 resultados possíveis
    var resultados = Array(26).fill("");

    //repetindo as 26 variantes de chave
    for(var fator = 0; fator < 26; fator++){
        //percorre cada índice da mensagem
        for(var j = 0; j < mensagem.length; j++){
            //percorre o alfabeto até o indice da mensagem ser igual ao indice do alfabeto
            for(var i = 0; i < alfabeto.length; i++){
                if(mensagem[j] == alfabeto[i]){
                    //adiciona cada letra criptografada para a string criptografado reescrevendo assim a mensagem com o deslocamento selecionado, indice por indice
                    resultados[fator] += alfabeto[(i - fator + alfabeto.length) % alfabeto.length] 
                }
            }
        }  
    }

    //printando no console todas as variações
    for(var l = 0; l < resultados.length; l++){
        console.log(l + " " +resultados[l]);
    }
}

var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var mensagem = "ahqzfanmxmzommeraxtmepmemdhadqeqfdmloazeusaabqdrgyqpmerxadqezamd";

//chamado da função
forcaBruta(mensagem, alfabeto);
