  let search = document.getElementById("search");
let items = document.querySelectorAll("#list li");

search.addEventListener("input", () => {
  let value = search.value.toLowerCase();

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});
