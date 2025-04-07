document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-form input");
    const recipeCards = document.querySelectorAll(".recipe-card");
  
    searchInput.addEventListener("input", function () {
      const searchText = searchInput.value.toLowerCase().trim();
  
      recipeCards.forEach((card) => {
        const recipeTitle = card.querySelector("h3").textContent.toLowerCase();
        const recipeCategory = card.querySelector("p strong").textContent.toLowerCase();
  
        if (recipeTitle.includes(searchText) || recipeCategory.includes(searchText)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
  