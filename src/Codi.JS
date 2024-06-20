//Variaveis
let nickname = "Pedrin Carpinteiro"
let XpHero = 8300
let LevelHero

//inicio base XP
if (XpHero < 1000){
  LevelHero = "ferro"
} else if (XpHero<=2000){
  LevelHero = "bronze"
} else if (XpHero<=5000){
  LevelHero = "Prata"
} else if (XpHero<=7000){
  LevelHero = "Ouro"
} else if (XpHero <=8000){
  LevelHero = "Platina"
}else if (XpHero <=9000){
  LevelHero = "Ascendente"
} else if (XpHero <=10000){
  LevelHero = "Imortal"
} else{
  LevelHero = "radiante"
}
//saída
console.log("O Herói de nome " + nickname , "está no nivel de " + LevelHero)