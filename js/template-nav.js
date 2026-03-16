function renderNavTemplate() {
  const header = document.querySelector("header");
  if (!header) {
    return;
  }

  const counts = {
    topDepartments: 8,
    panelDepartments: 16,
    categoryColumns: 3,
    categoriesPerColumn: 9,
  };

  const topDepartments = header.querySelector("[data-nav-departments]");
  const allPanelDepartments = header.querySelector("[data-all-panel-departments]");
  const allPanelCategories = header.querySelector("[data-all-panel-categories]");
  const deptPanelCategories = header.querySelector("[data-dept-panel-categories]");

  if (topDepartments) {
    topDepartments.innerHTML = Array.from({ length: counts.topDepartments })
      .map(
        () => `
          <button
            type="button"
            data-menu-trigger="dept"
            class="menu-trigger flex-none whitespace-nowrap px-1 text-left"
          >
            Departamento
          </button>
        `
      )
      .join("");
  }

  if (allPanelDepartments) {
    allPanelDepartments.innerHTML = Array.from({ length: counts.panelDepartments })
      .map(
        () => `
          <button
            type="button"
            data-dept-item
            class="flex w-full items-center justify-between text-left"
          >
            Departamento <img src="./assets/arrow.png" alt="Seta" />
          </button>
        `
      )
      .join("");
  }

  if (allPanelCategories) {
    const columns = Array.from({ length: counts.categoryColumns })
      .map(() => {
        const categories = Array.from({ length: counts.categoriesPerColumn })
          .map(
            () => `
              <button type="button" data-category-item class="block text-left">
                Categoria
              </button>
            `
          )
          .join("");

        return `<div class="space-y-2">${categories}</div>`;
      })
      .join("");

    allPanelCategories.innerHTML = `<div class="grid grid-cols-3 gap-x-8">${columns}</div>`;
  }

  if (deptPanelCategories) {
    const columns = Array.from({ length: counts.categoryColumns })
      .map((_, columnIndex) => {
        const title =
          columnIndex === 0
            ? '<p class="mb-1 font-bold text-black">Departamento</p>'
            : '<div class="h-[28px]"></div>';

        const categories = Array.from({ length: counts.categoriesPerColumn })
          .map(
            () => `
              <button type="button" data-category-item class="block text-left">
                Categoria
              </button>
            `
          )
          .join("");

        return `<div class="space-y-2">${title}${categories}</div>`;
      })
      .join("");

    deptPanelCategories.innerHTML = `<div class="grid grid-cols-3 gap-x-8">${columns}</div>`;
  }
}
