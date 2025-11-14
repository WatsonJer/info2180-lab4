document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", function () {
    fetch("superheroes.php")
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const listItems = tempDiv.querySelectorAll("li");

        const superheroList = Array.from(listItems)
          .map((li) => li.textContent)
          .join("\n");

        alert(superheroList);
      })
      .catch((error) => {
        alert("Error fetching superheroes");
      });
  });
});
