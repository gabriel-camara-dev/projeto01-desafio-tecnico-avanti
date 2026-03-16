async function loadComponent(element) {
  const componentPath = element.dataset.component;
  const response = await fetch(componentPath);
  element.innerHTML = await response.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  const componentElements = document.querySelectorAll("[data-component]");
  await Promise.all(Array.from(componentElements).map(loadComponent));
  renderProducts();
  renderNavTemplate();
  initializeHeaderMenu();
  initializeSearch();
  initializeSwiper();
});
