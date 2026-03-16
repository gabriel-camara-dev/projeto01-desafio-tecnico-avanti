function renderProducts() {
  const productLists = document.querySelectorAll("[data-product-list]");
  if (!productLists.length) {
    return;
  }

  const products = [1, 2, 3, 4, 5, 6];

  const html = products
    .map(
      () => `
        <section class="swiper-slide rounded-2xl border border-[#E5E5E5] bg-white p-3 shadow-sm">
          <span class="inline-flex rounded bg-[#00264E] px-2 py-1 text-[10px] font-bold uppercase text-white">Novo</span>

          <img src="./assets/product.png" alt="Produto" class="mx-auto mt-3 h-40 w-full rounded-lg object-cover sm:h-56" />

          <h3 class="mt-4 text-sm leading-5 text-[#303030]">Lorem ipsum dolor sit amet consectetur adipiscing elit</h3>

          <p class="mt-2 text-xs text-black line-through">R$ 100,00</p>

          <div class="mt-1 flex items-start gap-2">
            <p class="text-base font-extrabold text-black">R$79,90</p>
            <span class="rounded bg-[#5EC0BE] px-2 py-1 text-[11px] font-bold text-white"><u>10% OFF</u></span>
          </div>

          <p class="mt-1 text-xs text-[#303030]">Ou em ate <span class="font-bold">10x de R$ 7,90</span></p>

          <button class="mt-4 w-full rounded-lg bg-[#005CFF] py-3 text-sm font-bold text-white">Comprar</button>
        </section>
      `
    )
    .join("");

  productLists.forEach((list) => {
    list.innerHTML = html;
  });
}
