// Tableau contenant tous les animaux avec leurs données
const animauxFerme = [
    {
        nomFr: "Vache",
        nomEn: "Cow",
        image: "../assets/images/ferme/vache.png",
        son: "../assets/sons/vache.mp3"
    },
    {
        nomFr: "Cochon",
        nomEn: "Pig",
        image: "../assets/images/ferme/cochon.png",
        son: "../assets/sons/cochon.mp3"
    },
    {
        nomFr: "Poule",
        nomEn: "Chicken",
        image: "../assets/images/ferme/poule.png",
        son: "../assets/sons/poule.mp3"
    },
    {
        nomFr: "Mouton",
        nomEn: "Sheep",
        image: "../assets/images/ferme/mouton.png",
        son: "../assets/sons/mouton.mp3"
    },
    {
        nomFr: "Cheval",
        nomEn: "Horse",
        image: "../assets/images/ferme/cheval.png",
        son: "../assets/sons/cheval.mp3"
    },
  
    {
        nomFr: "Lapin",
        nomEn: "Rabbit",
        image: "../assets/images/ferme/lapin.png",
        son: "../assets/sons/lapin.mp3"
    },
    {
        nomFr: "Tortue",
        nomEn: "Turtle",
        image: "../assets/images/ferme/tortue.png",
        son: "../assets/sons/tortue.mp3"
    },
    {
        nomFr: "Fourmi",
        nomEn: "Ant",
        image: "../assets/images/ferme/fourmi.png",
        son: "../assets/sons/fourmi.mp3"
    },
    {
        nomFr: "Souris",
        nomEn: "Mouse",
        image: "../assets/images/ferme/souris.png",
        son: "../assets/sons/souris.mp3"
    },
    {
        nomFr: "Papillon",
        nomEn: "Butterfly",
        image: "../assets/images/ferme/papillon.png",
        son: "../assets/sons/papillon.mp3"
    },
    {
        nomFr: "Chat",
        nomEn: "Cat",
        image: "../assets/images/ferme/chat.png",
        son: "../assets/sons/chat.mp3"
    },
    {
        nomFr: "Pigeon",
        nomEn: "Pigeon",
        image: "../assets/images/ferme/pigeon.png",
        son: "../assets/sons/pigeon.mp3"
    },
    {
        nomFr: "Âne",
        nomEn: "Donkey",
        image: "../assets/images/ferme/ane.png",
        son: "../assets/sons/ane.mp3"
    }
];
    // Ajoutez autant d'animaux que nécessaire


// Fonction pour créer une carte animal
function creerCarteAnimal(animal) {
    const carte = document.createElement('div');
    carte.className = 'animal-card';
    carte.innerHTML = `
        <img src="${animal.image}" alt="${animal.nomFr}/${animal.nomEn}">
        <div class="animal-info">
            <h3 data-fr="${animal.nomFr}" data-en="${animal.nomEn}">${animal.nomFr}</h3>
            <button class="sound-btn" data-sound="${animal.son}">🔊</button>
        </div>
    `;
    return carte;
}

// Afficher tous les animaux
function afficherAnimaux() {
    const container = document.getElementById('animalContainer');
    animauxFerme.forEach(animal => {
        container.appendChild(creerCarteAnimal(animal));
    });
    
    // Gestion des boutons son
    document.querySelectorAll('.sound-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const son = new Audio(this.dataset.sound);
            son.play();
        });
    });
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    afficherAnimaux();
    
    // Appliquer la langue sauvegardée
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    changeLanguage(savedLang);
});