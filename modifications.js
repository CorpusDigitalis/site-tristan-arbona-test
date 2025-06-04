const siteData = {
  footer: {
    email: "tristan.arbonaa@gmail.com",
    linkedin: "https://www.linkedin.com/in/tristan-arbona-a4829a269/",
    scholar: "https://scholar.google.com",
    cv: "https://drive.google.com/file/d/1iy_p1gbycwSr_AFHjfRfNRiofvvcXwD7/view"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const f = siteData.footer;

  const emailEl = document.getElementById("email");
  if(emailEl) {
    emailEl.href = "mailto:" + f.email;
    emailEl.textContent = f.email;
  }

  const linkedinEl = document.getElementById("linkedin");
  if(linkedinEl) linkedinEl.href = f.linkedin;

  const scholarEl = document.getElementById("scholar");
  if(scholarEl) scholarEl.href = f.scholar;

  const cvEl = document.getElementById("cv");
  if(cvEl) cvEl.href = f.cv;
});
