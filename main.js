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
  document.getElementById("card4").addEventListener("click", () => showArticle("article4"));
});
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
  document.getElementById("card4").addEventListener("click", () => showArticle("article4"));
});

