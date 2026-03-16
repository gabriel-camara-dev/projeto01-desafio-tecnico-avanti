function initializeSearch() {
  const header = document.querySelector("header");
  if (!header) {
    return;
  }

  const searchInput = header.querySelector("[data-search-input]");
  const searchButton = header.querySelector("[data-search-button]");
  const searchResult = header.querySelector("[data-search-result]");

  if (!searchInput || !searchButton || !searchResult) {
    return;
  }

  const renderSearchResult = () => {
    const searchTerm = searchInput.value.trim();
    const hasSearch = searchTerm.length > 0;

    searchResult.classList.toggle("hidden", !hasSearch);
    searchResult.textContent = hasSearch
      ? `Você buscou por: '${searchTerm}'`
      : "";
  };

  const handleSubmit = (event) => {
    if (event.type === "keydown" && event.key !== "Enter") {
      return;
    }
    renderSearchResult();
  };

  searchButton.addEventListener("click", handleSubmit);
  searchInput.addEventListener("keydown", handleSubmit);
}
