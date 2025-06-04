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
    // Accueil / Général
    "titre-accueil": { text: "Bienvenue" },
    "texte-description": {
      text:
        "Je conçois des sites web professionnels sur mesure, pensés pour valoriser l’identité, les différents travaux et l’expertise de professionnels issus de divers secteurs.<br><br>Chaque site est développé de manière personnalisée, avec une attention portée à la lisibilité, à la simplicité d’usage et à l’autonomie du client."
    },
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Liens + texte modifiables
    "email": { text: "tristan.arbona@gmail.com", href: "mailto:tristan.arbona@gmail.com" },
    "linkedin": { text: "LinkedIn", href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "CV", href: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view" },

    // Footer
    "signature": { text: "© Corpus Digitalis" },

    // Exemple cours
    "cours-1-title": { text: "Économie ouverte - Partie 1" },
    "cours-1-slide-1": { text: "Diapositive 1", href: "slides/eco1-slide1.pdf" },
    "cours-1-exercise-1": { text: "Exercice 1", href: "exercices/eco1-ex1.pdf" },
    "cours-1-document-1": { text: "Document 1", href: "documents/eco1-doc1.pdf" },

    // Publications (nouveaux ID demandés)
    "titre-publications": { text: "Mes publications économiques" },
    "texte-intro": {
      text: "Retrouvez ci-dessous une sélection de mes contributions académiques récentes."
    },
    "publication-1": {}, // facultatif, élément conteneur
    "publication-1-texte": {
      text: "Nouvel article sur la politique monétaire européenne."
    },
    "publication-1-lien": {
      text: "Lire l'article complet",
      href: "https://nouveau-lien-article.com"
    },
    "publication-2": {},
    "publication-2-texte": {
      text: "Présentation de recherche sur les taux d'intérêt réels."
    },
    "publication-2-lien": {
      text: "Voir la communication",
      href: "https://nouveau-lien-communication.com"
    },
    "publication-3": {},
    "publication-3-texte": {
      text: "Analyse approfondie publiée dans une revue spécialisée."
    },
    "publication-3-lien": {
      text: "Accéder à l'étude",
      href: "https://nouveau-lien-etude.com"
    }
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
