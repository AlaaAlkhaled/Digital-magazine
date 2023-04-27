function showArticle(articleId) {
  // Hide all articles
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.style.display = "none";
  });

  // Show the clicked article
  const article = document.getElementById(articleId);
  article.style.display = "block";
}

// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Hide all articles initially
  const articles = document.querySelectorAll(".article");
  articles.forEach((article) => {
    article.style.display = "none";
  });

  document.getElementById("card1").addEventListener("click", () => showArticle("article1"));
  document.getElementById("card2").addEventListener("click", () => showArticle("article2"));
  document.getElementById("card3").addEventListener("click", () => showArticle("article3"));
});

const images = [
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/16.jpg",
  "img/14.jpg",
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
