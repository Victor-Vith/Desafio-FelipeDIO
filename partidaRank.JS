
    function calcularRank(vitorias, derrotas) {
    
//calculos
    let saldoVitorias = vitorias - derrotas;
    let nivel;

//determinando niveis com base nas vitorias
    if (vitorias < 10) {
        nivel = "ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
//msg
    return `O Heroi tem o saldo de ${saldoVitorias} e está no rank ${nivel}`;

}

//ex
    let vitorias = 87;
    let derrotas = 18;
    console.log(calcularRank(vitorias, derrotas));