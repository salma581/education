// Horloge dynamique
function updateHorloge() {
    const now = new Date();
    const horloge = document.getElementById('horloge');
    const heures = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    horloge.textContent = `🕒 ${heures}:${minutes}`;
}

setInterval(updateHorloge, 1000);
updateHorloge(); // Appel initial

// Animation au survol des cartes (optionnel)
document.querySelectorAll('.carte').forEach(carte => {
    carte.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    carte.addEventListener('mouseout', function() {
        this.style.transform = '';
    });
});
// Surligne l'élément actif
document.querySelectorAll('.main-nav a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
    
    link.addEventListener('click', function() {
        document.querySelectorAll('.main-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
// script.js
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Active le bouton cliqué
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Change la langue
        const lang = this.dataset.lang;
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    // Texte à traduire avec des data-attributs
    document.querySelectorAll('[data-fr], [data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Optionnel : sauvegarde dans localStorage
    localStorage.setItem('preferredLang', lang);
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'fr';
    document.querySelector(`.lang-btn[data-lang="${savedLang}"]`).click();
});