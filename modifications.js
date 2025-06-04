function loadHTML(id, url, callback) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Erreur de chargement');
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
}

function appliquerModifications() {
  const modifications = {
    // Exemples simples
    "titre-accueil": { text: "Bienvenue" },
    "texte-description": { text: "Je conçois des sites web professionnels sur mesure, pensés pour valoriser l’identité, les différents travaux et l’expertise de professionnels issus de divers secteurs.<br><br>Chaque site est développé de manière personnalisée, avec une attention portée à la lisibilité, à la simplicité d’usage et à l’autonomie du client." },
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Liens + texte modifiables
    "email": { text: "tristan.arbona@gmail.com", href: "tristan.arbona@gmail.com" },
    "linkedin": { text: "LinkedIn", href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "CV", href: "cv.pdf" },

    // Footer
    "signature": { text: "© Tristan Arbona 2025" },

    // Exemple cours
    "cours-1-title": { text: "Économie ouverte - Partie 1" },
    "cours-1-slide-1": { text: "Diapositive 1", href: "slides/eco1-slide1.pdf" },
    "cours-1-exercise-1": { text: "Exercice 1", href: "exercices/eco1-ex1.pdf" },
    "cours-1-document-1": { text: "Document 1", href: "documents/eco1-doc1.pdf" },
  };

  for (const id in modifications) {
    const element = document.getElementById(id);
    if (element) {
      const config = modifications[id];
      if (config.text !== undefined) element.innerHTML = config.text;
      if (config.href !== undefined && element.tagName === "A") element.href = config.href;
    }
  }
}

// Chargement header + footer avec callback
loadHTML('header-placeholder', 'header.html', appliquerModifications);
loadHTML('footer-placeholder', 'footer.html', appliquerModifications);

// Pour les éléments déjà présents dans index.html
document.addEventListener('DOMContentLoaded', appliquerModifications);
