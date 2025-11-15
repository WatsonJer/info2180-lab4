document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const resultDiv = document.getElementById("result");

  function sanitizeInput(input) {
    const temp = document.createElement("div");
    temp.textContent = input;
    return temp.innerHTML;
  }

  function search() {
    const query = searchInput.value.trim();

    let url = "superheroes.php";
    if (query) {
      url += "?query=" + encodeURIComponent(query);
    }
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        resultDiv.innerHTML = data;
      })
      .catch((error) => {
        resultDiv.innerHTML =
          '<p class ="not-found">Error: ' +
          sanitizeInput(error.message) +
          "</p>";
      });
  }

  searchBtn.addEventListener("click", function () {
    search();
  });

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search();
    }
  });
});
