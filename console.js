const siteData = {
  footerLinks: [
    { title: "tristan.arbona@gmail.com", url: "mailto:tristan.arbona@gmail.com" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/tristan-arbona-a4829a269/" },
    { title: "Google Scholar", url: "https://scholar.google.com" },
    { title: "CV", url: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view" }
  ],
  footerCopyright: "CorpusDigitalis",

  courses: [
    {
      title: "Exemple de nom de cours 1",
      subsections: [
        {
          title: "Slides",
          links: [
            { title: "slides.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" },
            { title: "slides2.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
            // ... jusqu'à 20 max
          ]
        },
        {
          title: "Exercices",
          links: [
            { title: "exercice.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
          ]
        },
        {
          title: "Documents",
          links: [
            { title: "document.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
          ]
        }
      ]
    },
    {
      title: "Exemple de nom de cours 2",
      subsections: [
        {
          title: "Slides",
          links: [
            { title: "slides.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
          ]
        },
        {
          title: "Exercices",
          links: [
            { title: "exercice.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
          ]
        },
        {
          title: "Documents",
          links: [
            { title: "document.pdf", url: "https://drive.google.com/file/d/1-IZoG-GmCkJKZ_duSRNgTxFpPJ11pmIs/view" }
          ]
        }
      ]
    }
    // Ajoute autant de cours que tu veux ici
  ]
};

// Fonction pour construire le footer
function buildFooter(footerId, links, copyright) {
  const footer = document.getElementById(footerId);
  footer.innerHTML = ""; // reset

  const linksDiv = document.createElement("div");
  linksDiv.classList.add("footer-links");

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.title;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    linksDiv.appendChild(a);
  });

  footer.appendChild(linksDiv);

  const copyrightDiv = document.createElement("div");
  copyrightDiv.classList.add("small-text");
  copyrightDiv.textContent = copyright;
  footer.appendChild(copyrightDiv);
}

// Fonction pour construire les cours et sous-parties
function buildCourses(containerId, courses) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  courses.forEach(cours => {
    const coursDetails = document.createElement("details");
    const coursSummary = document.createElement("summary");
    coursSummary.textContent = cours.title;
    coursDetails.appendChild(coursSummary);

    cours.subsections.forEach(sub => {
      const subDetails = document.createElement("details");
      const subSummary = document.createElement("summary");
      subSummary.textContent = sub.title;
      subDetails.appendChild(subSummary);

      const ul = document.createElement("ul");
      ul.classList.add("resource-list");

      // Limite à 20 liens max
      sub.links.slice(0, 20).forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = link.title;
        li.appendChild(a);
        ul.appendChild(li);
      });

      subDetails.appendChild(ul);
      coursDetails.appendChild(subDetails);
    });

    container.appendChild(coursDetails);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  buildFooter("footer", siteData.footerLinks, siteData.footerCopyright);
  buildCourses("courses-container", siteData.courses);
});
