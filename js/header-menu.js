function initializeHeaderMenu() {
  const header = document.querySelector("header");
  if (!header) {
    return;
  }

  const triggers = header.querySelectorAll("[data-menu-trigger]");
  const allPanel = header.querySelector('[data-menu-panel="all"]');
  const deptPanel = header.querySelector('[data-menu-panel="dept"]');
  const deptItems = header.querySelectorAll("[data-dept-item]");
  const categoryItems = header.querySelectorAll("[data-category-item]");
  let currentState = null;
  let activeTrigger = null;
  const activeClasses = ["font-bold", "text-[#005CFF]"];

  if (!triggers.length || !allPanel || !deptPanel) {
    return;
  }

  const clearSelection = (elements) => {
    elements.forEach((element) => {
      element.classList.remove(...activeClasses);
    });
  };

  const selectItem = (elements, element, resetCategory) => {
    clearSelection(elements);
    if (resetCategory) {
      clearSelection(categoryItems);
    }
    element.classList.add(...activeClasses);
  };

  const setState = (state) => {
    currentState = state;
    const showAll = state === "all";
    const showDept = state === "dept";

    allPanel.classList.toggle("hidden", !showAll);
    allPanel.classList.toggle("lg:block", showAll);
    deptPanel.classList.toggle("hidden", !showDept);
    deptPanel.classList.toggle("lg:block", showDept);

    if (!state) {
      activeTrigger = null;
      clearSelection(triggers);
    }
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        return;
      }

      const targetState = trigger.dataset.menuTrigger;
      const isAlreadyActive =
        currentState === targetState && activeTrigger === trigger;

      if (isAlreadyActive) {
        setState(null);
        return;
      }

      activeTrigger = trigger;
      clearSelection(triggers);
      trigger.classList.add(...activeClasses);
      setState(targetState);
    });
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      setState(null);
    }
  });

  deptItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectItem(deptItems, item, true);
    });
  });

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectItem(categoryItems, item, false);
    });
  });

  clearSelection(triggers);
  clearSelection(deptItems);
  clearSelection(categoryItems);
  setState(null);
}
