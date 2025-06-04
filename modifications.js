window.onload = () => {
  // Objet contenant les modifications à appliquer
  const modifications = {
    // Exemples simples
    "titre-accueil": { text: "Bienvenue sur le site de Tristan" },
    "texte-description": { text: "Voici une nouvelle description." },
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Liens + texte modifiables
    "email": { text: "tristan@email.com", href: "mailto:tristan@email.com" },
    "linkedin": { text: "Mon LinkedIn", href: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "Voir mon CV", href: "cv.pdf" },

    // Footer
    "signature": { text: "© Tristan Arbona 2025" },

    // Exemple cours
    "cours-1-title": { text: "Économie ouverte - Partie 1" },
    "cours-1-slide-1": { text: "Diapositive 1", href: "slides/eco1-slide1.pdf" },
    "cours-1-exercise-1": { text: "Exercice 1", href: "exercices/eco1-ex1.pdf" },
    "cours-1-document-1": { text: "Document 1", href: "documents/eco1-doc1.pdf" },
  };

  // Application des modifications
  for (const id in modifications) {
    const element = document.getElementById(id);
    if (element) {
      const config = modifications[id];
      if (config.text !== undefined) {
        element.innerText = config.text;
      }
      if (config.href !== undefined && element.tagName.toLowerCase() === "a") {
        element.setAttribute("href", config.href);
      }
    }
  }
};

