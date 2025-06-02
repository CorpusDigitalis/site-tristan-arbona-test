const siteData = {
  header: {
    brand: { href: "index.html", text: "Tristan Arbona" },
    links: [
      { href: "index.html", text: "Accueil" },
      { href: "cours.html", text: "Cours" },
      { href: "publications.html", text: "Publications" }
    ]
  },
  footer: {
    email: {
      href: "mailto:tristan.arbonaa@gmail.com",
      text: "tristan.arbonaa@gmail.com"
    },
    linkedin: {
      href: "https://www.linkedin.com/in/tristan-arbona-a4829a269/",
      text: "LinkedIn"
    },
    scholar: {
      href: "https://scholar.google.com",
      text: "Google Scholar"
    },
    cv: {
      href: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view",
      text: "CV"
    }
  }
};

window.addEventListener("DOMContentLoaded", () => {
  // HEADER
  const brandEl = document.getElementById("brand");
  if (brandEl) {
    brandEl.href = siteData.header.brand.href;
    brandEl.textContent = siteData.header.brand.text;
  }

  const headerLinks = siteData.header.links;
  const headerContainer = document.getElementById("header-links");
  if (headerContainer && headerLinks.length > 0) {
    headerContainer.innerHTML = "";
    headerLinks.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.text;
      headerContainer.appendChild(a);
    });
  }

  // FOOTER
  const f = siteData.footer;

  const emailEl = document.getElementById("email");
  if (emailEl) {
    emailEl.href = f.email.href;
    emailEl.textContent = f.email.text;
  }

  const linkedinEl = document.getElementById("linkedin");
  if (linkedinEl) {
    linkedinEl.href = f.linkedin.href;
    linkedinEl.textContent = f.linkedin.text;
  }

  const scholarEl = document.getElementById("scholar");
  if (scholarEl) {
    scholarEl.href = f.scholar.href;
    scholarEl.textContent = f.scholar.text;
  }

  const cvEl = document.getElementById("cv");
  if (cvEl) {
    cvEl.href = f.cv.href;
    cvEl.textContent = f.cv.text;
  }
});
