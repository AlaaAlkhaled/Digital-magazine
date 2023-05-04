//Constants for the essential attractions cards
const eaCard1 = document.getElementById("card1");
const eaCard2 = document.getElementById("card2");
const eaCard3 = document.getElementById("card3");
const eaCard4 = document.getElementById("card4");

//Make the nav buttons scroll to certain sections
const homeBtn = document.querySelector("#homeBtn");
const attractionsBtn = document.querySelector("#attractionsBtn");

homeBtn.addEventListener("click", scrollToSection);
attractionsBtn.addEventListener("click", () => {
  const attractionsSection = document.getElementById("attractionsSection");
  attractionsSection.scrollIntoView({ behavior: "smooth" });
});
function scrollToSection() {
  const homeSection = document.getElementById("main-header");
  homeSection.scrollIntoView({ behavior: "smooth" });
}

//Make the essential attractions card jump to the article once pressed

function showArticle(articleId) {
  // Hide all articles
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.style.display = "none";
  });

  // Show the clicked article
  const article = document.getElementById(articleId);
  article.style.display = "block";
  article.scrollIntoView({ behavior: "smooth" });
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Hide all articles initially
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.style.display = "none";
  });

  eaCard1.addEventListener("click", () => showArticle("article1"));
  eaCard2.addEventListener("click", () => showArticle("article2"));
  eaCard3.addEventListener("click", () => showArticle("article3"));
  eaCard4.addEventListener("click", () => showArticle("article4"));
});

const images = [
  "img/20.jpg",
  "img/21.jpg",
  "img/26.jpg",
  "img/Cliff Madeira.jpg",
  "img/3.jpg",
];
const descriptions = [
  "image 1 description",
  "image 2 description",
  "image 3 description",
  "image 4 description",
  "image 5 description",
];
let currentIndex = 0;

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateImage();
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateImage();
}

function updateImage() {
  const img = document.querySelector(".image-container img");
  const description = document.querySelector(".image-description p");

  img.src = images[currentIndex];
  description.textContent = descriptions[currentIndex];
}

const cards = document.querySelectorAll(".card");
const articles = document.querySelectorAll(".activity-article");
const overlay = document.createElement("div");

overlay.classList.add("overlay");
document.body.appendChild(overlay);

function closeArticle() {
  overlay.innerHTML = "";
  overlay.style.display = "none";
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const article = articles[index].cloneNode(true);
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("close-button");

    closeButton.addEventListener("click", closeArticle);

    // Fix the issue by making the articles visible when they're cloned
    article.style.display = "block";

    overlay.appendChild(article);
    overlay.appendChild(closeButton);
    overlay.style.display = "flex";
  });
});
