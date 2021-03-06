const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// -------------Nav Bar------------------

const navAnchors = document.querySelectorAll("a");

navAnchors[0].textContent = siteContent["nav"]["nav-item-1"];
navAnchors[1].textContent = siteContent["nav"]["nav-item-2"];
navAnchors[2].textContent = siteContent["nav"]["nav-item-3"];
navAnchors[3].textContent = siteContent["nav"]["nav-item-4"];
navAnchors[4].textContent = siteContent["nav"]["nav-item-5"];
navAnchors[5].textContent = siteContent["nav"]["nav-item-6"];

navAnchors.forEach((element) => {
  element.style.color = "green";
});
const preNav = document.createElement("a");
preNav.classList.add("nav-item-0");
preNav.textContent = "Partners";
preNav.style.color = "green";
preNav.href = "#";

const postNav = document.createElement("a");
postNav.classList.add("nav-item-7");
postNav.textContent = "Resources";
postNav.style.color = "green";
postNav.href = "#";

const parentElement = document.querySelector("nav");
parentElement.prepend(preNav);
parentElement.append(postNav);

// ---------------CTA Div-----------------

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

ctaButton.addEventListener("mouseenter", (event) => {
  ctaButton.style.color = "white";
  ctaButton.style.backgroundColor = "dodgerBlue";
});
ctaButton.addEventListener("mouseleave", (event) => {
  ctaButton.style.color = "black";
  ctaButton.style.backgroundColor = "white";
});

// ---CTA Image---

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

// ------------Main Content----------------

// ---Middle Image---

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// ---Middle Content---

//-Headers-
const middleHeaders = document.querySelectorAll("h4");
middleHeaders[0].textContent = siteContent["main-content"]["features-h4"];
middleHeaders[1].textContent = siteContent["main-content"]["about-h4"];
middleHeaders[2].textContent = siteContent["main-content"]["services-h4"];
middleHeaders[3].textContent = siteContent["main-content"]["product-h4"];
middleHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
middleHeaders[5].textContent = siteContent["contact"]["contact-h4"];

//-Paragraphs-
const middleParagraphs = document.querySelectorAll(
  ".main-content .text-content p"
);

middleParagraphs[0].textContent =
  siteContent["main-content"]["features-content"];
middleParagraphs[1].textContent = siteContent["main-content"]["about-content"];
middleParagraphs[2].textContent =
  siteContent["main-content"]["services-content"];
middleParagraphs[3].textContent =
  siteContent["main-content"]["product-content"];
middleParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// ------------Contact---------------

const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

// -------------Footer---------------

const footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent["footer"]["copyright"];

const footer = document.querySelector("footer");
footer.style.backgroundColor = "black";
footerParagraph.style.color = "white";
footerParagraph.style.padding = "15px";
