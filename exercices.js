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

///Exercice 4

const potionsdesoin_prix = 5;
const quantite_potion = parseInt(
  prompt("Combien de potions de soin voulez-vous acheter ?")
);
console.log(
  "Prix de" quantite_potion "potions de soins :" quantite_potion * potionsdesoin_prix "Aventurier !"
);

///Exercice 5

let bourse_aventurier = 50, potionsdesoin_stock = 10, potionsdesoin_prix = 5;

const quantite = parseInt(prompt("Combien de potions de soin voulez-vous acheter ?"));
if (quantite * potionsdesoin_prix <= bourse_aventurier quantite <= potionsdesoin_stock) {
  bourse_aventurier -= quantite * potionsdesoin_prix;
  potionsdesoin_stock -= quantite;
  console.log('Achat réussi ! Reste :' bourse_aventurier}  'et' potionsdesoin_stock 'potions.');
} else {
  console.log("Achat impossible !");
}

///Exercice 6

const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];
console.log(potions);

///Exercice 7

const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

console.log("Première potion :", potions[0]);

console.log("Dernière potion :", potions[potions.length - 1]);

for (let i = 0; i < potions.length; i) {
  console.log('Nous avons : ' potions '!');}

///Exercice 8

const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

potions.push("Potion de vitesse");

console.log("Liste des potions mise à jour :", potions);

///Exercice 9

const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance", "Potion de vitesse"];

potions.pop();

console.log("Liste des potions mise à jour :", potions);

///Exercice 10

const potionDeSoin = {
  nom: "Potion de soin",
  prix: 5,
  stock: 20
};

console.log(potionDeSoin);

///Exercice 11

const potionDeSoin = {
  nom: "Potion de soin",
  prix: 5,
  stock: 20
};

console.log("Nom de la potion :", potionDeSoin.nom);

console.log("Prix de la potion :", potionDeSoin["prix"]);

///Exercice 12

const nomsPotions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

const inventaire = [
  { nom: "Potion de soin", prix: 5, stock: 20 },
  { nom: "Potion de mana", prix: 10, stock: 15 },
  { nom: "Potion d'endurance", prix: 7, stock: 10 }
];

console.log(inventaire);

///Exercice 13

const nomsPotions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

const inventaire = [
  { nom: "Potion de soin", prix: 5, stock: 20 },
  { nom: "Potion de mana", prix: 10, stock: 15 },
  { nom: "Potion d'endurance", prix: 7, stock: 10 }
];

console.log(inventaire);

///Exercice 14

const inventaire = [
  { nom: "Potion de soin", prix: 5, stock: 20 },
  { nom: "Potion de mana", prix: 8, stock: 15 },
  { nom: "Potion de force", prix: 12, stock: 10 }
];

inventaire.forEach(console.log);

///Exercice 15

let argent = 50;
let prixPotion = 5;
let stockPotion = 20;

if (argent >= prixPotion, stockPotion > 0) {
  argent -= prixPotion;
  stockPotion--;
  console.log("Achat réussi ! Il te reste "  argent  " pièces.");
} else {
  console.log("Achat échoué.");
}

///Exercice 16