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
        "Je crée des sites web professionnels sur mesure, conçus pour mettre en valeur l’identité, les réalisations et l’expertise de professionnels issus de divers secteurs. Une attention particulière est portée à la clarté, la simplicité d’utilisation et à l’autonomie dans la gestion du site.<br><br>Au-delà de la technique, un suivi personnalisé est offert tout au long du processus de création et après la mise en ligne. Ce partenariat permet d’adapter précisément le site aux besoins évolutifs, assurant ainsi une présence digitale cohérente et efficace.<br><br>Un site web personnel bien conçu est un atout majeur pour renforcer l’image professionnelle, crédibiliser les compétences et ouvrir de nouvelles opportunités. Il sert d’espace d’expression privilégié pour valoriser le travail et les projets."
    },

    // Header
    "titre-header": { text: "Tristan Arbona" },
    "texte-accueil": { text: "Accueil" },
    "texte-cours": { text: "Cours" },
    "texte-publications": { text: "Publications" },

    // Footer
    "email": { text: "Email", href: "mailto:tristan.arbona@gmail.com" },
    "linkedin": { text: "LinkedIn", href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    "scholar": { text: "Google Scholar", href: "https://scholar.google.com/citations?user=XXXX" },
    "cv": { text: "CV", href: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view" },

    // Footer
    "signature": { text: "© Corpus Digitalis" },

    // Publications (nouveaux ID demandés)
    "titre-publications": { text: "Mes publications économiques" },
    "texte-intro": {
      text: "Retrouvez ci-dessous une liste d'exemples de contributions académiques."
    },
   
  "publication-1": {},
  "publication-1-texte": {
    "text": "Nouvel article sur la politique monétaire européenne."
  },
  "publication-1-lien": {
    "text": "Lire l'article complet",
    "href": "https://drive.google.com/file/d/1j4QVEJZNCRVy__QGUi23w4SOMC-8CHBq/view?usp=drive_link"
  },

  "publication-2": {},
  "publication-2-texte": {
    "text": "Présentation de recherche sur les taux d'intérêt réels."
  },
  "publication-2-lien": {
    "text": "Voir la communication",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-3": {},
  "publication-3-texte": {
    "text": ""
  },
  "publication-3-lien": {
    "text": "",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-4": {},
  "publication-4-texte": {
    "text": "Synthèse d’un séminaire sur les déséquilibres macroéconomiques."
  },
  "publication-4-lien": {
    "text": "Télécharger le document",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-5": {},
  "publication-5-texte": {
    "text": "Étude empirique sur les marchés du travail en Europe."
  },
  "publication-5-lien": {
    "text": "Accéder à l’étude",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-6": {},
  "publication-6-texte": {
    "text": "Note de recherche sur l’évolution des taux directeurs."
  },
  "publication-6-lien": {
    "text": "Lire la note",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-7": {},
  "publication-7-texte": {
    "text": "Mémoire de licence en économie publique."
  },
  "publication-7-lien": {
    "text": "Voir le mémoire",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-8": {},
  "publication-8-texte": {
    "text": "Article de revue étudiante sur la crise énergétique."
  },
  "publication-8-lien": {
    "text": "Consulter l'article",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-9": {},
  "publication-9-texte": {
    "text": "Communication lors du colloque sur les inégalités."
  },
  "publication-9-lien": {
    "text": "Voir la communication",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

  "publication-10": {},
  "publication-10-texte": {
    "text": "Rapport de recherche sur la croissance inclusive."
  },
  "publication-10-lien": {
    "text": "Télécharger le rapport",
    "href": "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link"
  },

"publication-11": {},
"publication-11-texte": {
  text: ""
},
"publication-11-lien": {
  text: "",
  href: ""
},

"publication-12": {},
"publication-12-texte": {
  text: ""
},
"publication-12-lien": {
  text: "",
  href: ""
},

"publication-13": {},
"publication-13-texte": {
  text: ""
},
"publication-13-lien": {
  text: "",
  href: ""
},

"publication-14": {},
"publication-14-texte": {
  text: ""
},
"publication-14-lien": {
  text: "",
  href: ""
},

"publication-15": {},
"publication-15-texte": {
  text: ""
},
"publication-15-lien": {
  text: "",
  href: ""
},

"publication-16": {},
"publication-16-texte": {
  text: ""
},
"publication-16-lien": {
  text: "",
  href: ""
},

"publication-17": {},
"publication-17-texte": {
  text: ""
},
"publication-17-lien": {
  text: "",
  href: ""
},

"publication-18": {},
"publication-18-texte": {
  text: ""
},
"publication-18-lien": {
  text: "",
  href: ""
},

"publication-19": {},
"publication-19-texte": {
  text: ""
},
"publication-19-lien": {
  text: "",
  href: ""
},

"publication-20": {},
"publication-20-texte": {
  text: ""
},
"publication-20-lien": {
  text: "",
  href: ""
},

"publication-21": {},
"publication-21-texte": {
  text: ""
},
"publication-21-lien": {
  text: "",
  href: ""
},

"publication-22": {},
"publication-22-texte": {
  text: ""
},
"publication-22-lien": {
  text: "",
  href: ""
},

"publication-23": {},
"publication-23-texte": {
  text: ""
},
"publication-23-lien": {
  text: "",
  href: ""
},

"publication-24": {},
"publication-24-texte": {
  text: ""
},
"publication-24-lien": {
  text: "",
  href: ""
},

"publication-25": {},
"publication-25-texte": {
  text: ""
},
"publication-25-lien": {
  text: "",
  href: ""
},

"publication-26": {},
"publication-26-texte": {
  text: ""
},
"publication-26-lien": {
  text: "",
  href: ""
},

"publication-27": {},
"publication-27-texte": {
  text: ""
},
"publication-27-lien": {
  text: "",
  href: ""
},

"publication-28": {},
"publication-28-texte": {
  text: ""
},
"publication-28-lien": {
  text: "",
  href: ""
},

"publication-29": {},
"publication-29-texte": {
  text: ""
},
"publication-29-lien": {
  text: "",
  href: ""
},

"publication-30": {},
"publication-30-texte": {
  text: ""
},
"publication-30-lien": {
  text: "",
  href: ""
},

"publication-31": {},
"publication-31-texte": {
  text: ""
},
"publication-31-lien": {
  text: "",
  href: ""
},

"publication-32": {},
"publication-32-texte": {
  text: ""
},
"publication-32-lien": {
  text: "",
  href: ""
},

"publication-33": {},
"publication-33-texte": {
  text: ""
},
"publication-33-lien": {
  text: "",
  href: ""
},

"publication-34": {},
"publication-34-texte": {
  text: ""
},
"publication-34-lien": {
  text: "",
  href: ""
},

"publication-35": {},
"publication-35-texte": {
  text: ""
},
"publication-35-lien": {
  text: "",
  href: ""
},

"publication-36": {},
"publication-36-texte": {
  text: ""
},
"publication-36-lien": {
  text: "",
  href: ""
},

"publication-37": {},
"publication-37-texte": {
  text: ""
},
"publication-37-lien": {
  text: "",
  href: ""
},

"publication-38": {},
"publication-38-texte": {
  text: ""
},
"publication-38-lien": {
  text: "",
  href: ""
},

"publication-39": {},
"publication-39-texte": {
  text: ""
},
"publication-39-lien": {
  text: "",
  href: ""
},

"publication-40": {},
"publication-40-texte": {
  text: ""
},
"publication-40-lien": {
  text: "",
  href: ""
},

"publication-41": {},
"publication-41-texte": {
  text: ""
},
"publication-41-lien": {
  text: "",
  href: ""
},

"publication-42": {},
"publication-42-texte": {
  text: ""
},
"publication-42-lien": {
  text: "",
  href: ""
},

"publication-43": {},
"publication-43-texte": {
  text: ""
},
"publication-43-lien": {
  text: "",
  href: ""
},

"publication-44": {},
"publication-44-texte": {
  text: ""
},
"publication-44-lien": {
  text: "",
  href: ""
},

"publication-45": {},
"publication-45-texte": {
  text: ""
},
"publication-45-lien": {
  text: "",
  href: ""
},

"publication-46": {},
"publication-46-texte": {
  text: ""
},
"publication-46-lien": {
  text: "",
  href: ""
},

"publication-47": {},
"publication-47-texte": {
  text: ""
},
"publication-47-lien": {
  text: "",
  href: ""
},

"publication-48": {},
"publication-48-texte": {
  text: ""
},
"publication-48-lien": {
  text: "",
  href: ""
},

"publication-49": {},
"publication-49-texte": {
  text: ""
},
"publication-49-lien": {
  text: "",
  href: ""
},

"publication-50": {},
"publication-50-texte": {
  text: ""
},
"publication-50-lien": {
  text: "",
  href: ""
},


    

 // Cours
    // Cours 1
"cours-1": {},

"cours-1-title": { text: "Économie ouverte - Partie 1" },

"cours-1-slides": {},

"cours-1-slides-title": { text: "Diapositives" },

"cours-1-slides-list": {},

// Slides
"cours-1-slide-1": { text: "slides1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-2": { text: "slides2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-3": { text: "slides3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-4": { text: "slides4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-5": { text: "slides5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-6": { text: "slides6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-7": { text: "slides7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-8": { text: "slides8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-9": { text: "slides9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-10": { text: "slides10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-11": { text: "slides11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-12": { text: "slides12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-13": { text: "slides13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-14": { text: "slides14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-15": { text: "slides15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-16": { text: "slides16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-17": { text: "slides17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-18": { text: "slides18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-19": { text: "slides19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-slide-20": { text: "slides20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

// Exercises (conteneurs et titres)
"cours-1-exercises": {},
"cours-1-exercises-title": { text: "Exercices" },
"cours-1-exercises-list": {},
    
"cours-1-exercise-1": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-2": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-3": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-4": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-5": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-6": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-7": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-8": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-9": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-10": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-11": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-12": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-13": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-14": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-15": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-16": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-17": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-18": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-19": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-exercise-20": { text: "", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },

// Documents (conteneurs et titres)
"cours-1-documents": {},
"cours-1-documents-title": { text: "Documents" },
"cours-1-documents-list": {},

"cours-1-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },
"cours-1-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view?usp=drive_link" },



// Cours 2
"cours-2": {},

"cours-2-title": { text: "Économie ouverte - Partie 2" },

"cours-2-slides": {},

"cours-2-slides-title": { text: "Diapositives" },

"cours-2-slides-list": {},

// Slides
"cours-2-slide-1": { text: "slides1", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-1/view" },
"cours-2-slide-2": { text: "slides2", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-2/view" },
"cours-2-slide-3": { text: "slides3", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-3/view" },
"cours-2-slide-4": { text: "slides4", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-4/view" },
"cours-2-slide-5": { text: "slides5", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-5/view" },
"cours-2-slide-6": { text: "slides6", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-6/view" },
"cours-2-slide-7": { text: "slides7", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-7/view" },
"cours-2-slide-8": { text: "slides8", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-8/view" },
"cours-2-slide-9": { text: "slides9", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-9/view" },
"cours-2-slide-10": { text: "slides10", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-10/view" },
"cours-2-slide-11": { text: "slides11", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-11/view" },
"cours-2-slide-12": { text: "slides12", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-12/view" },
"cours-2-slide-13": { text: "slides13", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-13/view" },
"cours-2-slide-14": { text: "slides14", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-14/view" },
"cours-2-slide-15": { text: "slides15", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-15/view" },
"cours-2-slide-16": { text: "slides16", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-16/view" },
"cours-2-slide-17": { text: "slides17", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-17/view" },
"cours-2-slide-18": { text: "slides18", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-18/view" },
"cours-2-slide-19": { text: "slides19", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-19/view" },
"cours-2-slide-20": { text: "slides20", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-20/view" },

// Exercises (conteneurs et titres)
"cours-2-exercises": {},
    
"cours-2-exercises-title": { text: "Exercices" },
    
"cours-2-exercises-list": {},
    
"cours-2-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/ID-DRIVE-EX-1/view" },
"cours-2-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/ID-DRIVE-EX-2/view" },
"cours-2-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/ID-DRIVE-EX-3/view" },
"cours-2-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/ID-DRIVE-EX-4/view" },
"cours-2-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/ID-DRIVE-EX-5/view" },
"cours-2-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/ID-DRIVE-EX-6/view" },
"cours-2-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/ID-DRIVE-EX-7/view" },
"cours-2-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/ID-DRIVE-EX-8/view" },
"cours-2-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/ID-DRIVE-EX-9/view" },
"cours-2-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/ID-DRIVE-EX-10/view" },
"cours-2-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/ID-DRIVE-EX-11/view" },
"cours-2-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/ID-DRIVE-EX-12/view" },
"cours-2-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/ID-DRIVE-EX-13/view" },
"cours-2-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/ID-DRIVE-EX-14/view" },
"cours-2-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/ID-DRIVE-EX-15/view" },
"cours-2-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/ID-DRIVE-EX-16/view" },
"cours-2-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/ID-DRIVE-EX-17/view" },
"cours-2-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/ID-DRIVE-EX-18/view" },
"cours-2-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/ID-DRIVE-EX-19/view" },
"cours-2-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/ID-DRIVE-EX-20/view" },

// Documents (conteneurs et titres)
"cours-2-documents": {},
    
"cours-2-documents-title": { text: "Documents" },
    
"cours-2-documents-list": {},
    
"cours-2-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-1/view" },
"cours-2-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-2/view" },
"cours-2-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-3/view" },
"cours-2-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-4/view" },
"cours-2-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-5/view" },
"cours-2-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-6/view" },
"cours-2-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-7/view" },
"cours-2-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-8/view" },
"cours-2-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-9/view" },
"cours-2-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-10/view" },
"cours-2-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-11/view" },
"cours-2-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-12/view" },
"cours-2-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-13/view" },
"cours-2-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-14/view" },
"cours-2-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-15/view" },
"cours-2-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-16/view" },
"cours-2-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-17/view" },
"cours-2-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-18/view" },
"cours-2-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-19/view" },
"cours-2-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-20/view" },



// Cours 3
"cours-3": {},

"cours-3-title": { text: "Économie ouverte - Partie 3" },

"cours-3-slides": {},

"cours-3-slides-title": { text: "Diapositives" },

"cours-3-slides-list": {},

// Slides
"cours-3-slide-1": { text: "slides1", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-1/view" },
"cours-3-slide-2": { text: "slides2", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-2/view" },
"cours-3-slide-3": { text: "slides3", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-3/view" },
"cours-3-slide-4": { text: "slides4", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-4/view" },
"cours-3-slide-5": { text: "slides5", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-5/view" },
"cours-3-slide-6": { text: "slides6", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-6/view" },
"cours-3-slide-7": { text: "slides7", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-7/view" },
"cours-3-slide-8": { text: "slides8", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-8/view" },
"cours-3-slide-9": { text: "slides9", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-9/view" },
"cours-3-slide-10": { text: "slides10", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-10/view" },
"cours-3-slide-11": { text: "slides11", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-11/view" },
"cours-3-slide-12": { text: "slides12", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-12/view" },
"cours-3-slide-13": { text: "slides13", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-13/view" },
"cours-3-slide-14": { text: "slides14", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-14/view" },
"cours-3-slide-15": { text: "slides15", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-15/view" },
"cours-3-slide-16": { text: "slides16", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-16/view" },
"cours-3-slide-17": { text: "slides17", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-17/view" },
"cours-3-slide-18": { text: "slides18", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-18/view" },
"cours-3-slide-19": { text: "slides19", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-19/view" },
"cours-3-slide-20": { text: "slides20", href: "https://drive.google.com/file/d/ID-DRIVE-SLIDE-20/view" },

// Exercices
"cours-3-exercises": {},
"cours-3-exercises-title": { text: "Exercices" },
"cours-3-exercises-list": {},
  
"cours-3-exercise-1": { text: "Exercice 1", href: "https://drive.google.com/file/d/ID-DRIVE-EX-1/view" },
"cours-3-exercise-2": { text: "Exercice 2", href: "https://drive.google.com/file/d/ID-DRIVE-EX-2/view" },
"cours-3-exercise-3": { text: "Exercice 3", href: "https://drive.google.com/file/d/ID-DRIVE-EX-3/view" },
"cours-3-exercise-4": { text: "Exercice 4", href: "https://drive.google.com/file/d/ID-DRIVE-EX-4/view" },
"cours-3-exercise-5": { text: "Exercice 5", href: "https://drive.google.com/file/d/ID-DRIVE-EX-5/view" },
"cours-3-exercise-6": { text: "Exercice 6", href: "https://drive.google.com/file/d/ID-DRIVE-EX-6/view" },
"cours-3-exercise-7": { text: "Exercice 7", href: "https://drive.google.com/file/d/ID-DRIVE-EX-7/view" },
"cours-3-exercise-8": { text: "Exercice 8", href: "https://drive.google.com/file/d/ID-DRIVE-EX-8/view" },
"cours-3-exercise-9": { text: "Exercice 9", href: "https://drive.google.com/file/d/ID-DRIVE-EX-9/view" },
"cours-3-exercise-10": { text: "Exercice 10", href: "https://drive.google.com/file/d/ID-DRIVE-EX-10/view" },
"cours-3-exercise-11": { text: "Exercice 11", href: "https://drive.google.com/file/d/ID-DRIVE-EX-11/view" },
"cours-3-exercise-12": { text: "Exercice 12", href: "https://drive.google.com/file/d/ID-DRIVE-EX-12/view" },
"cours-3-exercise-13": { text: "Exercice 13", href: "https://drive.google.com/file/d/ID-DRIVE-EX-13/view" },
"cours-3-exercise-14": { text: "Exercice 14", href: "https://drive.google.com/file/d/ID-DRIVE-EX-14/view" },
"cours-3-exercise-15": { text: "Exercice 15", href: "https://drive.google.com/file/d/ID-DRIVE-EX-15/view" },
"cours-3-exercise-16": { text: "Exercice 16", href: "https://drive.google.com/file/d/ID-DRIVE-EX-16/view" },
"cours-3-exercise-17": { text: "Exercice 17", href: "https://drive.google.com/file/d/ID-DRIVE-EX-17/view" },
"cours-3-exercise-18": { text: "Exercice 18", href: "https://drive.google.com/file/d/ID-DRIVE-EX-18/view" },
"cours-3-exercise-19": { text: "Exercice 19", href: "https://drive.google.com/file/d/ID-DRIVE-EX-19/view" },
"cours-3-exercise-20": { text: "Exercice 20", href: "https://drive.google.com/file/d/ID-DRIVE-EX-20/view" },

// Documents
"cours-3-documents": {},
"cours-3-documents-title": { text: "Documents" },
"cours-3-documents-list": {},

"cours-3-document-1": { text: "Document 1", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-1/view" },
"cours-3-document-2": { text: "Document 2", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-2/view" },
"cours-3-document-3": { text: "Document 3", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-3/view" },
"cours-3-document-4": { text: "Document 4", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-4/view" },
"cours-3-document-5": { text: "Document 5", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-5/view" },
"cours-3-document-6": { text: "Document 6", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-6/view" },
"cours-3-document-7": { text: "Document 7", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-7/view" },
"cours-3-document-8": { text: "Document 8", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-8/view" },
"cours-3-document-9": { text: "Document 9", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-9/view" },
"cours-3-document-10": { text: "Document 10", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-10/view" },
"cours-3-document-11": { text: "Document 11", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-11/view" },
"cours-3-document-12": { text: "Document 12", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-12/view" },
"cours-3-document-13": { text: "Document 13", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-13/view" },
"cours-3-document-14": { text: "Document 14", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-14/view" },
"cours-3-document-15": { text: "Document 15", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-15/view" },
"cours-3-document-16": { text: "Document 16", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-16/view" },
"cours-3-document-17": { text: "Document 17", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-17/view" },
"cours-3-document-18": { text: "Document 18", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-18/view" },
"cours-3-document-19": { text: "Document 19", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-19/view" },
"cours-3-document-20": { text: "Document 20", href: "https://drive.google.com/file/d/ID-DRIVE-DOC-20/view" },


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

    if (!element) continue; // id inexistant dans le DOM : on ignore

    // --------------------
    // Cas suppression :
    // --------------------
    // Si c’est un ID de cours/sous‑partie ET que text === "" alors on supprime
    if (id.startsWith("cours-") && config.text !== undefined && config.text.trim() === "") {
      element.remove();
      continue; // pas besoin de traiter les autres propriétés
    }

    // --------------------
    // Sinon mise à jour :
    // --------------------
    if (config.text !== undefined) {
      element.innerHTML = config.text;
    }
    if (config.href !== undefined && element.tagName === "A") {
      element.href = config.href;
    }
  }

  //  Suppression des publications totalement vides

  document.querySelectorAll(".publication-item").forEach(pub => {
    const texte = pub.querySelector("span")?.textContent?.trim() || "";
    const lien  = pub.querySelector("a")?.textContent?.trim() || "";
    if (!texte && !lien) {
      pub.remove();
    }
  });

  //  Nettoyage automatique des sous-parties et cours vides

  nettoyerCoursVides();
}

// Fonction utilitaire : supprime les sous-parties vides puis les cours

function nettoyerCoursVides() {
  // Sélectionne tous les blocs <details id="cours-X">
  document.querySelectorAll('details[id^="cours-"]').forEach(coursElement => {
    const coursId = coursElement.id; // ex. "cours-1"

    // Les trois sous-parties standard
    const sousParties = ["slides", "exercises", "documents"];
    let compteurVides = 0;

    sousParties.forEach(part => {
      const section = document.getElementById(`${coursId}-${part}`);
      if (section) {
        // La liste <ul> supposée porter l’ID `${section.id}-list`
        const ul = section.querySelector("ul");
        const aEncoreDesLi = ul && ul.querySelector("li");
        if (!aEncoreDesLi) {
          section.remove();
          compteurVides++;
        }
      } else {
        // Sous-partie déjà supprimée précédemment
        compteurVides++;
      }
    });

    // Si les trois sous‑parties sont absentes ou vides -> supprime le cours
    if (compteurVides === sousParties.length) {
      coursElement.remove();
    }
  });
}

loadHTML("header-placeholder", "header.html", appliquerModifications);
loadHTML("footer-placeholder", "footer.html", appliquerModifications);

document.addEventListener("DOMContentLoaded", appliquerModifications);
