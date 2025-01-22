///Exercice 1

const boutiquedusorcier = "La Boutique du Sorcier";
let nomdusorcier = "Mr. Sorcier";
let potionsdesoin_stock = 20;
let potionsdesoin_prix = 5;
let est_boutique_du_sorcier_ouverte = true;

///Exercice 2

if (est_boutique_du_sorcier_ouverte)
  console.log("Bienvenue dans la boutique", boutiquedusorcier, "Aventurier !");
else
  console.log(
    "La boutique",
    boutiquedusorcier,
    "est fermée, revenez plus tard Aventurier !"
  );

///Exercice 3

console.log(
  "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ?"
);
const result = parseInt(prompt("Fais ton choix entre 1 et 4"));

switch (result) {
  case 1:
    console.log("Le nom de la boutique est :", boutiquedusorcier);
    break;

  case 2:
    console.log("Je m'appelle", nomdusorcier);
    break;

  case 3:
    console.log(
      "Le prix d'une potion de soin est de : ",
      potionsdesoin_prix,
      "pièces !"
    );
    break;

  case 4:
    console.log("Voilà la quantité de potions de soins :", potionsdesoin_stock);
    break;

  default:
    console.log(
      "Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !"
    );
    break;
}
