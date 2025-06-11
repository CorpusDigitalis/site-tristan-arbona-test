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
    
    // Accueil
    "titre-accueil": { text: "Bienvenue" },
    "texte-description": {
      text:
        "Je conçois des sites web professionnels sur mesure, pensés pour valoriser l’identité, les différents travaux et l’expertise de professionnels issus de divers secteurs.<br><br>Chaque site est développé de manière personnalisée, avec une attention portée à la lisibilité, à la simplicité d’usage et à l’autonomie du client."
    },

    // Header
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Footer
    "email": { text: "tristan.arbona@gmail.com", href: "mailto:tristan.arbona@gmail.com" },
    "linkedin": { text: "LinkedIn", href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "CV", href: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view" },

    // Footer
    "signature": { text: "© Corpus Digitalis" },

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
    },

    // Cours
    // Cours 1
"cours-1": {},

"cours-1-title": { text: "Économie ouverte - Partie 1" },

"cours-1-slides": {},

"cours-1-slides-title": { text: "Diapositives" },

"cours-1-slides-list": {},

// Slides 1 à 20 avec texte et lien modifiables
"cours-1-slide-1": { text: "slides1", href: "slides/eco1-slide1.pdf" },
"cours-1-slide-2": { text: "slides2", href: "slides/eco1-slide2.pdf" },
"cours-1-slide-3": { text: "slides3", href: "slides/eco1-slide3.pdf" },
"cours-1-slide-4": { text: "slides4", href: "slides/eco1-slide4.pdf" },
"cours-1-slide-5": { text: "slides5", href: "slides/eco1-slide5.pdf" },
"cours-1-slide-6": { text: "slides6", href: "slides/eco1-slide6.pdf" },
"cours-1-slide-7": { text: "slides7", href: "slides/eco1-slide7.pdf" },
"cours-1-slide-8": { text: "slides8", href: "slides/eco1-slide8.pdf" },
"cours-1-slide-9": { text: "slides9", href: "slides/eco1-slide9.pdf" },
"cours-1-slide-10": { text: "slides10", href: "slides/eco1-slide10.pdf" },
"cours-1-slide-11": { text: "slides11", href: "slides/eco1-slide11.pdf" },
"cours-1-slide-12": { text: "slides12", href: "slides/eco1-slide12.pdf" },
"cours-1-slide-13": { text: "slides13", href: "slides/eco1-slide13.pdf" },
"cours-1-slide-14": { text: "slides14", href: "slides/eco1-slide14.pdf" },
"cours-1-slide-15": { text: "slides15", href: "slides/eco1-slide15.pdf" },
"cours-1-slide-16": { text: "slides16", href: "slides/eco1-slide16.pdf" },
"cours-1-slide-17": { text: "slides17", href: "slides/eco1-slide17.pdf" },
"cours-1-slide-18": { text: "slides18", href: "slides/eco1-slide18.pdf" },
"cours-1-slide-19": { text: "slides19", href: "slides/eco1-slide19.pdf" },
"cours-1-slide-20": { text: "slides20", href: "slides/eco1-slide20.pdf" },
    
// Exercises (conteneurs et titres)
"cours-1-exercises": {},
"cours-1-exercises-title": { text: "Exercices" },
"cours-1-exercises-list": {},

// 20 exercices avec texte et lien
"cours-1-exercise-1": { text: "Exercice 1", href: "exercices/eco1-ex1.pdf" },
"cours-1-exercise-2": { text: "Exercice 2", href: "exercices/eco1-ex2.pdf" },
"cours-1-exercise-3": { text: "Exercice 3", href: "exercices/eco1-ex3.pdf" },
"cours-1-exercise-4": { text: "Exercice 4", href: "exercices/eco1-ex4.pdf" },
"cours-1-exercise-5": { text: "Exercice 5", href: "exercices/eco1-ex5.pdf" },
"cours-1-exercise-6": { text: "Exercice 6", href: "exercices/eco1-ex6.pdf" },
"cours-1-exercise-7": { text: "Exercice 7", href: "exercices/eco1-ex7.pdf" },
"cours-1-exercise-8": { text: "Exercice 8", href: "exercices/eco1-ex8.pdf" },
"cours-1-exercise-9": { text: "Exercice 9", href: "exercices/eco1-ex9.pdf" },
"cours-1-exercise-10": { text: "Exercice 10", href: "exercices/eco1-ex10.pdf" },
"cours-1-exercise-11": { text: "Exercice 11", href: "exercices/eco1-ex11.pdf" },
"cours-1-exercise-12": { text: "Exercice 12", href: "exercices/eco1-ex12.pdf" },
"cours-1-exercise-13": { text: "Exercice 13", href: "exercices/eco1-ex13.pdf" },
"cours-1-exercise-14": { text: "Exercice 14", href: "exercices/eco1-ex14.pdf" },
"cours-1-exercise-15": { text: "Exercice 15", href: "exercices/eco1-ex15.pdf" },
"cours-1-exercise-16": { text: "Exercice 16", href: "exercices/eco1-ex16.pdf" },
"cours-1-exercise-17": { text: "Exercice 17", href: "exercices/eco1-ex17.pdf" },
"cours-1-exercise-18": { text: "Exercice 18", href: "exercices/eco1-ex18.pdf" },
"cours-1-exercise-19": { text: "Exercice 19", href: "exercices/eco1-ex19.pdf" },
"cours-1-exercise-20": { text: "Exercice 20", href: "exercices/eco1-ex20.pdf" },

// Documents (conteneurs et titres)
"cours-1-documents": {},
"cours-1-documents-title": { text: "Documents" },
"cours-1-documents-list": {},

// 20 documents avec texte et lien
"cours-1-document-1": { text: "Document 1", href: "documents/eco1-doc1.pdf" },
"cours-1-document-2": { text: "Document 2", href: "documents/eco1-doc2.pdf" },
"cours-1-document-3": { text: "Document 3", href: "documents/eco1-doc3.pdf" },
"cours-1-document-4": { text: "Document 4", href: "documents/eco1-doc4.pdf" },
"cours-1-document-5": { text: "Document 5", href: "documents/eco1-doc5.pdf" },
"cours-1-document-6": { text: "Document 6", href: "documents/eco1-doc6.pdf" },
"cours-1-document-7": { text: "Document 7", href: "documents/eco1-doc7.pdf" },
"cours-1-document-8": { text: "Document 8", href: "documents/eco1-doc8.pdf" },
"cours-1-document-9": { text: "Document 9", href: "documents/eco1-doc9.pdf" },
"cours-1-document-10": { text: "Document 10", href: "documents/eco1-doc10.pdf" },
"cours-1-document-11": { text: "Document 11", href: "documents/eco1-doc11.pdf" },
"cours-1-document-12": { text: "Document 12", href: "documents/eco1-doc12.pdf" },
"cours-1-document-13": { text: "Document 13", href: "documents/eco1-doc13.pdf" },
"cours-1-document-14": { text: "Document 14", href: "documents/eco1-doc14.pdf" },
"cours-1-document-15": { text: "Document 15", href: "documents/eco1-doc15.pdf" },
"cours-1-document-16": { text: "Document 16", href: "documents/eco1-doc16.pdf" },
"cours-1-document-17": { text: "Document 17", href: "documents/eco1-doc17.pdf" },
"cours-1-document-18": { text: "Document 18", href: "documents/eco1-doc18.pdf" },
"cours-1-document-19": { text: "Document 19", href: "documents/eco1-doc19.pdf" },
"cours-1-document-20": { text: "Document 20", href: "documents/eco1-doc20.pdf" },


    
    
// Cours 2
"cours-2": {},

"cours-2-title": { text: "Économie ouverte - Partie 2" },

"cours-2-slides": {},

"cours-2-slides-title": { text: "Diapositives" },

"cours-2-slides-list": {},

// Slides 1 à 20 avec texte et lien modifiables
"cours-2-slide-1": { text: "slides1", href: "slides/eco2-slide1.pdf" },
"cours-2-slide-2": { text: "slides2", href: "slides/eco2-slide2.pdf" },
"cours-2-slide-3": { text: "slides3", href: "slides/eco2-slide3.pdf" },
"cours-2-slide-4": { text: "slides4", href: "slides/eco2-slide4.pdf" },
"cours-2-slide-5": { text: "slides5", href: "slides/eco2-slide5.pdf" },
"cours-2-slide-6": { text: "slides6", href: "slides/eco2-slide6.pdf" },
"cours-2-slide-7": { text: "slides7", href: "slides/eco2-slide7.pdf" },
"cours-2-slide-8": { text: "slides8", href: "slides/eco2-slide8.pdf" },
"cours-2-slide-9": { text: "slides9", href: "slides/eco2-slide9.pdf" },
"cours-2-slide-10": { text: "slides10", href: "slides/eco2-slide10.pdf" },
"cours-2-slide-11": { text: "slides11", href: "slides/eco2-slide11.pdf" },
"cours-2-slide-12": { text: "slides12", href: "slides/eco2-slide12.pdf" },
"cours-2-slide-13": { text: "slides13", href: "slides/eco2-slide13.pdf" },
"cours-2-slide-14": { text: "slides14", href: "slides/eco2-slide14.pdf" },
"cours-2-slide-15": { text: "slides15", href: "slides/eco2-slide15.pdf" },
"cours-2-slide-16": { text: "slides16", href: "slides/eco2-slide16.pdf" },
"cours-2-slide-17": { text: "slides17", href: "slides/eco2-slide17.pdf" },
"cours-2-slide-18": { text: "slides18", href: "slides/eco2-slide18.pdf" },
"cours-2-slide-19": { text: "slides19", href: "slides/eco2-slide19.pdf" },
"cours-2-slide-20": { text: "slides20", href: "slides/eco2-slide20.pdf" },

// Exercises (conteneurs et titres)
"cours-2-exercises": {},
    
"cours-2-exercises-title": { text: "Exercices" },
    
"cours-2-exercises-list": {},

// 20 exercices avec texte et lien
"cours-2-exercise-1": { text: "Exercice 1", href: "exercices/eco2-ex1.pdf" },
"cours-2-exercise-2": { text: "Exercice 2", href: "exercices/eco2-ex2.pdf" },
"cours-2-exercise-3": { text: "Exercice 3", href: "exercices/eco2-ex3.pdf" },
"cours-2-exercise-4": { text: "Exercice 4", href: "exercices/eco2-ex4.pdf" },
"cours-2-exercise-5": { text: "Exercice 5", href: "exercices/eco2-ex5.pdf" },
"cours-2-exercise-6": { text: "Exercice 6", href: "exercices/eco2-ex6.pdf" },
"cours-2-exercise-7": { text: "Exercice 7", href: "exercices/eco2-ex7.pdf" },
"cours-2-exercise-8": { text: "Exercice 8", href: "exercices/eco2-ex8.pdf" },
"cours-2-exercise-9": { text: "Exercice 9", href: "exercices/eco2-ex9.pdf" },
"cours-2-exercise-10": { text: "Exercice 10", href: "exercices/eco2-ex10.pdf" },
"cours-2-exercise-11": { text: "Exercice 11", href: "exercices/eco2-ex11.pdf" },
"cours-2-exercise-12": { text: "Exercice 12", href: "exercices/eco2-ex12.pdf" },
"cours-2-exercise-13": { text: "Exercice 13", href: "exercices/eco2-ex13.pdf" },
"cours-2-exercise-14": { text: "Exercice 14", href: "exercices/eco2-ex14.pdf" },
"cours-2-exercise-15": { text: "Exercice 15", href: "exercices/eco2-ex15.pdf" },
"cours-2-exercise-16": { text: "Exercice 16", href: "exercices/eco2-ex16.pdf" },
"cours-2-exercise-17": { text: "Exercice 17", href: "exercices/eco2-ex17.pdf" },
"cours-2-exercise-18": { text: "Exercice 18", href: "exercices/eco2-ex18.pdf" },
"cours-2-exercise-19": { text: "Exercice 19", href: "exercices/eco2-ex19.pdf" },
"cours-2-exercise-20": { text: "Exercice 20", href: "exercices/eco2-ex20.pdf" },

// Documents (conteneurs et titres)
"cours-2-documents": {},
    
"cours-2-documents-title": { text: "Documents" },
    
"cours-2-documents-list": {},
    
// 20 documents avec texte et lien
"cours-2-document-1": { text: "Document 1", href: "documents/eco2-doc1.pdf" },
"cours-2-document-2": { text: "Document 2", href: "documents/eco2-doc2.pdf" },
"cours-2-document-3": { text: "Document 3", href: "documents/eco2-doc3.pdf" },
"cours-2-document-4": { text: "Document 4", href: "documents/eco2-doc4.pdf" },
"cours-2-document-5": { text: "Document 5", href: "documents/eco2-doc5.pdf" },
"cours-2-document-6": { text: "Document 6", href: "documents/eco2-doc6.pdf" },
"cours-2-document-7": { text: "Document 7", href: "documents/eco2-doc7.pdf" },
"cours-2-document-8": { text: "Document 8", href: "documents/eco2-doc8.pdf" },
"cours-2-document-9": { text: "Document 9", href: "documents/eco2-doc9.pdf" },
"cours-2-document-10": { text: "Document 10", href: "documents/eco2-doc10.pdf" },
"cours-2-document-11": { text: "Document 11", href: "documents/eco2-doc11.pdf" },
"cours-2-document-12": { text: "Document 12", href: "documents/eco2-doc12.pdf" },
"cours-2-document-13": { text: "Document 13", href: "documents/eco2-doc13.pdf" },
"cours-2-document-14": { text: "Document 14", href: "documents/eco2-doc14.pdf" },
"cours-2-document-15": { text: "Document 15", href: "documents/eco2-doc15.pdf" },
"cours-2-document-16": { text: "Document 16", href: "documents/eco2-doc16.pdf" },
"cours-2-document-17": { text: "Document 17", href: "documents/eco2-doc17.pdf" },
"cours-2-document-18": { text: "Document 18", href: "documents/eco2-doc18.pdf" },
"cours-2-document-19": { text: "Document 19", href: "documents/eco2-doc19.pdf" },
"cours-2-document-20": { text: "Document 20", href: "documents/eco2-doc20.pdf" },


 
// Cours 3
"cours-3": {},

"cours-3-title": { text: "Économie ouverte - Partie 3" },

"cours-3-slides": {},

"cours-3-slides-title": { text: "Diapositives" },

"cours-3-slides-list": {},

// Slides 1 à 20
"cours-3-slide-1": { text: "slides1", href: "slides/eco3-slide1.pdf" },
"cours-3-slide-2": { text: "slides2", href: "slides/eco3-slide2.pdf" },
"cours-3-slide-3": { text: "slides3", href: "slides/eco3-slide3.pdf" },
"cours-3-slide-4": { text: "slides4", href: "slides/eco3-slide4.pdf" },
"cours-3-slide-5": { text: "slides5", href: "slides/eco3-slide5.pdf" },
"cours-3-slide-6": { text: "slides6", href: "slides/eco3-slide6.pdf" },
"cours-3-slide-7": { text: "slides7", href: "slides/eco3-slide7.pdf" },
"cours-3-slide-8": { text: "slides8", href: "slides/eco3-slide8.pdf" },
"cours-3-slide-9": { text: "slides9", href: "slides/eco3-slide9.pdf" },
"cours-3-slide-10": { text: "slides10", href: "slides/eco3-slide10.pdf" },
"cours-3-slide-11": { text: "slides11", href: "slides/eco3-slide11.pdf" },
"cours-3-slide-12": { text: "slides12", href: "slides/eco3-slide12.pdf" },
"cours-3-slide-13": { text: "slides13", href: "slides/eco3-slide13.pdf" },
"cours-3-slide-14": { text: "slides14", href: "slides/eco3-slide14.pdf" },
"cours-3-slide-15": { text: "slides15", href: "slides/eco3-slide15.pdf" },
"cours-3-slide-16": { text: "slides16", href: "slides/eco3-slide16.pdf" },
"cours-3-slide-17": { text: "slides17", href: "slides/eco3-slide17.pdf" },
"cours-3-slide-18": { text: "slides18", href: "slides/eco3-slide18.pdf" },
"cours-3-slide-19": { text: "slides19", href: "slides/eco3-slide19.pdf" },
"cours-3-slide-20": { text: "slides20", href: "slides/eco3-slide20.pdf" },

// Exercices
"cours-3-exercises": {},
"cours-3-exercises-title": { text: "Exercices" },
"cours-3-exercises-list": {},

"cours-3-exercise-1": { text: "Exercice 1", href: "exercices/eco3-ex1.pdf" },
"cours-3-exercise-2": { text: "Exercice 2", href: "exercices/eco3-ex2.pdf" },
"cours-3-exercise-3": { text: "Exercice 3", href: "exercices/eco3-ex3.pdf" },
"cours-3-exercise-4": { text: "Exercice 4", href: "exercices/eco3-ex4.pdf" },
"cours-3-exercise-5": { text: "Exercice 5", href: "exercices/eco3-ex5.pdf" },
"cours-3-exercise-6": { text: "Exercice 6", href: "exercices/eco3-ex6.pdf" },
"cours-3-exercise-7": { text: "Exercice 7", href: "exercices/eco3-ex7.pdf" },
"cours-3-exercise-8": { text: "Exercice 8", href: "exercices/eco3-ex8.pdf" },
"cours-3-exercise-9": { text: "Exercice 9", href: "exercices/eco3-ex9.pdf" },
"cours-3-exercise-10": { text: "Exercice 10", href: "exercices/eco3-ex10.pdf" },
"cours-3-exercise-11": { text: "Exercice 11", href: "exercices/eco3-ex11.pdf" },
"cours-3-exercise-12": { text: "Exercice 12", href: "exercices/eco3-ex12.pdf" },
"cours-3-exercise-13": { text: "Exercice 13", href: "exercices/eco3-ex13.pdf" },
"cours-3-exercise-14": { text: "Exercice 14", href: "exercices/eco3-ex14.pdf" },
"cours-3-exercise-15": { text: "Exercice 15", href: "exercices/eco3-ex15.pdf" },
"cours-3-exercise-16": { text: "Exercice 16", href: "exercices/eco3-ex16.pdf" },
"cours-3-exercise-17": { text: "Exercice 17", href: "exercices/eco3-ex17.pdf" },
"cours-3-exercise-18": { text: "Exercice 18", href: "exercices/eco3-ex18.pdf" },
"cours-3-exercise-19": { text: "Exercice 19", href: "exercices/eco3-ex19.pdf" },
"cours-3-exercise-20": { text: "Exercice 20", href: "exercices/eco3-ex20.pdf" },

// Documents
"cours-3-documents": {},
"cours-3-documents-title": { text: "Documents" },
"cours-3-documents-list": {},

"cours-3-document-1": { text: "Document 1", href: "documents/eco3-doc1.pdf" },
"cours-3-document-2": { text: "Document 2", href: "documents/eco3-doc2.pdf" },
"cours-3-document-3": { text: "Document 3", href: "documents/eco3-doc3.pdf" },
"cours-3-document-4": { text: "Document 4", href: "documents/eco3-doc4.pdf" },
"cours-3-document-5": { text: "Document 5", href: "documents/eco3-doc5.pdf" },
"cours-3-document-6": { text: "Document 6", href: "documents/eco3-doc6.pdf" },
"cours-3-document-7": { text: "Document 7", href: "documents/eco3-doc7.pdf" },
"cours-3-document-8": { text: "Document 8", href: "documents/eco3-doc8.pdf" },
"cours-3-document-9": { text: "Document 9", href: "documents/eco3-doc9.pdf" },
"cours-3-document-10": { text: "Document 10", href: "documents/eco3-doc10.pdf" },
"cours-3-document-11": { text: "Document 11", href: "documents/eco3-doc11.pdf" },
"cours-3-document-12": { text: "Document 12", href: "documents/eco3-doc12.pdf" },
"cours-3-document-13": { text: "Document 13", href: "documents/eco3-doc13.pdf" },
"cours-3-document-14": { text: "Document 14", href: "documents/eco3-doc14.pdf" },
"cours-3-document-15": { text: "Document 15", href: "documents/eco3-doc15.pdf" },
"cours-3-document-16": { text: "Document 16", href: "documents/eco3-doc16.pdf" },
"cours-3-document-17": { text: "Document 17", href: "documents/eco3-doc17.pdf" },
"cours-3-document-18": { text: "Document 18", href: "documents/eco3-doc18.pdf" },
"cours-3-document-19": { text: "Document 19", href: "documents/eco3-doc19.pdf" },
"cours-3-document-20": { text: "Document 20", href: "documents/eco3-doc20.pdf" },

  };

 function supprimerConteneursVides(element, racineId) {
    let parent = element.parentElement;
    while (parent && parent.id !== racineId) {
      if (parent.children.length === 0 && parent.textContent.trim() === "") {
        const supprimable = parent;
        parent = parent.parentElement;
        supprimable.remove();
      } else {
        break;
      }
    }
  }

  for (const id in modifications) {
    const element = document.getElementById(id);
    const config  = modifications[id];

    if (!element) continue;

    // Cas suppression : uniquement pour les IDs "cours-..." et text vide
    if (id.startsWith("cours-") &&
        config.text !== undefined &&
        config.text.trim() === "") {
      element.remove();
      supprimerConteneursVides(element, "cours-1");
      continue;
    }

    // Sinon, on met à jour texte et href sans jamais supprimer header/footer
    if (config.text !== undefined) {
      element.innerHTML = config.text;
    }
    if (config.href !== undefined && element.tagName === "A") {
      element.href = config.href;
    }
  }
}

// Chargement header + footer avec callback
loadHTML('header-placeholder', 'header.html', appliquerModifications);
loadHTML('footer-placeholder', 'footer.html', appliquerModifications);

// Pour les éléments déjà présents dans index.html
document.addEventListener('DOMContentLoaded', appliquerModifications);
