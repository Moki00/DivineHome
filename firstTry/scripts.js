// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-toFixThisSoon");

// make a phone call when a link is clicked
document.querySelectorAll('a[href^="clkn/tel/"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default browser behavior
    const phoneNumber = link.getAttribute("href").replace("clkn/tel/", "");
    window.location.href = `tel:${phoneNumber}`;
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form Validation
window.ub.form = {
  action: "modal",
  validationRules: {
    first_name: { required: true },
    last_name: { required: true },
    email: { required: true, email: true },
    phone_number: { required: false, phone: true },
  },
  validationMessages: {
    first_name: {},
    last_name: {},
    email: {},
    phone_number: {},
  },
  customValidators: {},
  url: "a-form_confirmation.html",
  lightboxSize: {
    desktop: { height: 180, width: 512 },
    mobile: { height: 180, width: 240 },
  },
  isConversionGoal: true,
};
window.module = { lp: { form: { data: window.ub.form } } };

window.ub.page.webFonts = [
  "Open Sans:700,regular,700italic",
  "Lato:700,regular",
  "Roboto Slab:700",
  "Poppins:800,600,regular,900,500",
];

window.ub = {
  page: {
    id: "582d001e-0943-402c-bccf-71a1d8790ad3",
    variantId: "a",
    usedAs: "main",
    name: "Divine Home Services",
    url: "http://www.divinehomeservices.com/makeLinkHere/",
    dimensions: {
      breakpoints: ["desktop", "mobile"],
      desktop: { height: 2915, width: 1060 },
      mobile: { height: 4686, width: 320 },
      mobileMaxWidth: 600,
    },
  },
  hooks: { beforeFormSubmit: [], afterFormSubmit: [] },
};

let validating = false;

let formElement = document.querySelector("form");
formElement.innerHTML += `<div
                id='recaptcha' 
                class='g-recaptcha' 
                data-sitekey='6Lc0OS8mAAAAACkcp6yEUbsUyJB4mK2i5-30QEwc'
                data-callback='onValidCaptcha' 
                data-size='invisible'></div>`;

let submitButton = formElement.querySelector(".lp-pom-button");
if (submitButton) {
  submitButton.onclick = checkCaptcha;
}

function onValidCaptcha(token) {
  validating = token;
  submitButton.click();
}

function checkCaptcha(event) {
  if (!validating) {
    event.preventDefault();
    grecaptcha.execute();
  }
}

(() => {
  const obs = new IntersectionObserver(
    (ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("ub-ani-play");
        } else {
          e.target.classList.remove("ub-ani-play");
        }
      });
    },
    { threshold: 0.5 }
  );
  const els = document.querySelectorAll('[class*="ub-ani"]');
  els.forEach((el) => obs.observe(el));
})();

function getCurrentYear() {
  return new Date().getFullYear();
}

const copyrightElement = document.getElementById("copyright");

if (getCurrentYear() > 2022) {
  copyrightElement.textContent = `© Copyright ${getCurrentYear()}`;
} else {
  copyrightElement.textContent = `© Copyright`;
}

window.ub = window.ub || {};
window.ub.captcha = window.ub.captcha || {};
window.ub.visitorId = "a191ed5f-474e-4d2a-9357-a1301e4f5087";
window.ub.routingStrategy = "single";
window.ub.contentRoutingStrategy = "single";
window.ub.domain = {};
