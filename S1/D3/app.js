//Challenge 1

// let contacts = [
//     {
//         "nom": "Dupont Jean",
//         "entreprise": "TechSolutions SARL",
//         "email": "jean.dupont@techsolutions.fr",
//         "telephone": "01 23 45 67 89",
//         "ville": "Paris",
//         "adresse": {
//             "rue": "12 Rue de Rivoli",
//             "code_postal": "75001",
//             "ville": "Paris",
//             "pays": "France"
//         }
//     },
//     {
//         "nom": "Martin Sophie",
//         "entreprise": "Creative Agency",
//         "email": "sophie.martin@creative.fr",
//         "telephone": "04 56 78 90 12",
//         "ville": "Lyon",
//         "adresse": {
//             "rue": "45 Boulevard des Belges",
//             "code_postal": "69006",
//             "ville": "Lyon",
//             "pays": "France"
//         }
//     },
//     {
//         "nom": "Leroy Pierre",
//         "entreprise": "Logistics Pro",
//         "email": "pierre.leroy@logisticspro.com",
//         "telephone": "02 98 76 54 32",
//         "ville": "Marseille",
//         "adresse": {
//             "rue": "78 Avenue du Prado",
//             "code_postal": "13008",
//             "ville": "Marseille",
//             "pays": "France"
//         }
//     },
//     {
//         "nom": "Moreau Claire",
//         "entreprise": "HealthCare Clinic",
//         "email": "claire.moreau@healthcare.fr",
//         "telephone": "03 45 67 89 01",
//         "ville": "Lille",
//         "adresse": {
//             "rue": "23 Rue de Béthune",
//             "code_postal": "59000",
//             "ville": "Lille",
//             "pays": "France"
//         }
//     },
//     {
//         "nom": "Bernard Luc",
//         "entreprise": "Finance Experts",
//         "email": "luc.bernard@financex.fr",
//         "telephone": "01 87 65 43 21",
//         "ville": "Paris",
//         "adresse": {
//             "rue": "56 Rue Saint-Honoré",
//             "code_postal": "75001",
//             "ville": "Paris",
//             "pays": "France"
//         }
//     },
//     {
//         "nom": "Roux Marie",
//         "entreprise": "Green Energy",
//         "email": "marie.roux@greenenergy.eu",
//         "telephone": "05 12 34 56 78",
//         "ville": "Toulouse",
//         "adresse": {
//             "rue": "89 Allée de Brienne",
//             "code_postal": "31000",
//             "ville": "Toulouse",
//             "pays": "France"
//         }
//     },
// ];

// contacts.forEach(contact => {
//     console.log(contact.nom);
//     console.log(contact.ville);
// });

// console.log(Object.groupBy(contacts, ({ville}) => ville))

// function LookForContact(entreprise){
//     console.log(contacts.find((element) => element.entreprise = entreprise))
// }

// contacts.forEach(contact => {
//     contact.dernierContact = "2020"
// });

// console.log(contacts);

// Challenge 2

let stockIngredients = [
  {
    "nom": "Pommes de terre",
    "quantite": 8.2,
    "unite": "kg",
    "prix_unitaire": 1.2,
    "seuil_alerte": 10,
    "categorie": "légume",
  },
  {
    "nom": "Carottes",
    "quantite": 4.5,
    "unite": "kg",
    "prix_unitaire": 1.5,
    "seuil_alerte": 5,
    "categorie": "légume",
  },
  {
    "nom": "Tomates",
    "quantite": 12.0,
    "unite": "kg",
    "prix_unitaire": 3.8,
    "seuil_alerte": 8,
    "categorie": "légume",
  },
  {
    "nom": "Boeuf haché",
    "quantite": 3.8,
    "unite": "kg",
    "prix_unitaire": 12.5,
    "seuil_alerte": 5,
    "categorie": "viande",
  },
  {
    "nom": "Poulet",
    "quantite": 15.0,
    "unite": "kg",
    "prix_unitaire": 8.9,
    "seuil_alerte": 10,
    "categorie": "viande",
  },
  {
    "nom": "Saumon",
    "quantite": 2.1,
    "unite": "kg",
    "prix_unitaire": 22.0,
    "seuil_alerte": 4,
    "categorie": "viande",
  },
  {
    "nom": "Sel",
    "quantite": 1.2,
    "unite": "kg",
    "prix_unitaire": 0.8,
    "seuil_alerte": 2,
    "categorie": "épice",
  },
  {
    "nom": "Poivre",
    "quantite": 0.8,
    "unite": "kg",
    "prix_unitaire": 15.0,
    "seuil_alerte": 1,
    "categorie": "épice",
  },
  {
    "nom": "Curcuma",
    "quantite": 2.5,
    "unite": "kg",
    "prix_unitaire": 18.5,
    "seuil_alerte": 0.5,
    "categorie": "épice",
  },
  {
    "nom": "Huile olive",
    "quantite": 18.0,
    "unite": "litres",
    "prix_unitaire": 6.5,
    "seuil_alerte": 20,
    "categorie": "boisson",
  },
  {
    "nom": "Eau",
    "quantite": 35.0,
    "unite": "litres",
    "prix_unitaire": 0.4,
    "seuil_alerte": 50,
    "categorie": "boisson",
  },
  {
    "nom": "Vin rouge",
    "quantite": 12.5,
    "unite": "litres",
    "prix_unitaire": 9.2,
    "seuil_alerte": 15,
    "categorie": "boisson",
  },
];

let total = 0
let totalQuantityByCategory = 0

stockIngredients.forEach(ingredient => {
    total = ingredient.prix_unitaire * ingredient.quantite
    console.log(total);    
});
let grouped = Object.groupBy(stockIngredients, ({categorie}) => categorie)

let stockByCategory = Object.entries(grouped).map(([categorie, items]) =>({
    categorie,
    stock: items.reduce((sum, items) => sum + items.quantite, 0) 
}))
console.log(stockByCategory);

//Challenge 3

// let equipes = [
//     { 
//         "nom": "PSG", 
//         "points": 75, 
//         "buts_pour": 85, 
//         "buts_contre": 25, 
//         "matchs_joues": 30 
//     },
//     {
//         "nom": "Real Madrid",
//         "points": 80,
//         "buts_pour": 78,
//         "buts_contre": 20,
//         "matchs_joues": 30,
//     },
//     {
//         "nom": "Bayern Munich",
//         "points": 65,
//         "buts_pour": 72,
//         "buts_contre": 35,
//         "matchs_joues": 30,
//     },
//     {
//         "nom": "Man City",
//         "points": 60,
//         "buts_pour": 68,
//         "buts_contre": 28,
//         "matchs_joues": 30,
//     },
//     {
//         "nom": "Liverpool",
//         "points": 55,
//         "buts_pour": 62,
//         "buts_contre": 40,
//         "matchs_joues": 30,
//     },
//     {
//         "nom": "Juventus",
//         "points": 45,
//         "buts_pour": 50,
//         "buts_contre": 45,
//         "matchs_joues": 30,
//     },
//     {
//         "nom": "Barcelona",
//         "points": 40,
//         "buts_pour": 55,
//         "buts_contre": 55,
//         "matchs_joues": 30,
//     },
//     { 
//         "nom": "Ajax", 
//         "points": 35, 
//         "buts_pour": 48, 
//         "buts_contre": 50, 
//         "matchs_joues": 30 
//     },
// ];
// let goalDifference = 0
// equipes.forEach(equipe => {
//     goalDifference = Number(equipe["buts_pour"]) - Number(equipe["buts_contre"])
//     equipe["goalDifference"] = goalDifference
//     console.log("the goal differnce for " + equipe.nom + " is : " + goalDifference);
    
//     // console.log("the goal differnce is : " + Number(equipe["buts_pour"]) - Number(equipe["buts_contre"]));
// });

// let classementByPoints = equipes.sort((a,b) => { return a.points - b.points || a.goalDifference - b.goalDifference})

// console.log(classementByPoints.reverse());

// console.log(classementByPoints);
// classementByPoints.forEach(element => {
//     console.log(element.nom + " — " + element.points + "pts" + " (diff:" + element.goalDifference + ")  ");
// });