const siteData = {
  footer: {
    email: "tristan.arbona@gmail.com",
    linkedin: "https://www.linkedin.com/in/tristan-arbona-a4829a269/",
    Scholar: "https://scholar.google.com/"
    cv: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const f = siteData.footer;

  const elements = {
    email: (el, value) => {
      el.href = "mailto:" + value;
      el.textContent = value;
    },
    linkedin: (el, value) => {
      el.href = value;
    },
    scholar: (el, value) => {
      el.href = value;
    },
    cv: (el, value) => {
      el.href = value;
    }
  };

  Object.entries(elements).forEach(([key, updater]) => {
    const el = document.getElementById(key);

    if (f[key]) {
      if (el) updater(el, f[key]);
    } else {
      if (el) el.remove(); // Supprime l’élément si pas dans siteData.footer
    }
  });
});
