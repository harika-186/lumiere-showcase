/* ============================================================
   LUMIÈRE — Application
   ============================================================ */

// --- Router ---
const Router = (() => {
  const handlers = {};

  function navigate(page, params = {}) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));

    const target = document.getElementById(`page-${page}`);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const link = document.querySelector(`[data-page="${page}"]`);
    if (link) link.classList.add('active');

    if (handlers[page]) handlers[page](params);
  }

  function on(page, fn) { handlers[page] = fn; }

  return { navigate, on };
})();

// --- Nav scroll behaviour ---
const initNav = () => {
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};

// --- Landing Page ---
const renderLanding = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  const grid = document.querySelector('.featured-grid');
  grid.innerHTML = featuredProducts.map((p, i) => `
    <article class="featured-card" data-id="${p.id}" role="button" aria-label="View ${p.name}">
      <img src="${p.image}" alt="${p.name}" class="featured-card__img" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="featured-card__overlay"></div>
      <div class="featured-card__info">
        <span class="t-label featured-card__category">${p.category}</span>
        <h3 class="t-heading featured-card__name">${p.name}</h3>
        <span class="featured-card__price">€${p.price}</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', () => {
      Router.navigate('detail', { id: card.dataset.id });
    });
  });
};

// --- Product Listing Page ---
const ListingPage = (() => {
  let activeCategory = 'all';
  let sortOrder = 'default';

  const getFiltered = () => {
    let products = activeCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.category === activeCategory);

    if (sortOrder === 'asc')  products.sort((a, b) => a.price - b.price);
    if (sortOrder === 'desc') products.sort((a, b) => b.price - a.price);
    if (sortOrder === 'name') products.sort((a, b) => a.name.localeCompare(b.name));

    return products;
  };

  const renderCards = () => {
    const products = getFiltered();
    const grid = document.querySelector('.product-grid');

    if (!products.length) {
      grid.innerHTML = `
        <div class="no-results">
          <div class="no-results__icon">∅</div>
          <p>No fragrances in this category.</p>
        </div>`;
      return;
    }

    grid.innerHTML = products.map(p => `
      <article class="product-card" data-id="${p.id}" role="button" aria-label="View ${p.name}">
        <div class="product-card__img-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-card__img" loading="lazy">
          <div class="product-card__overlay">
            <button class="product-card__cta">View Details</button>
          </div>
        </div>
        <div class="product-card__body">
          <span class="t-label product-card__category">${p.category}</span>
          <h3 class="product-card__name">${p.name}</h3>
          <p class="product-card__desc">${p.shortDescription}</p>
          <span class="t-price">€${p.price}</span>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        Router.navigate('detail', { id: card.dataset.id });
      });
    });
  };

  const init = () => {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        activeCategory = tab.dataset.category;
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderCards();
      });
    });

    // Sort select
    const sortEl = document.querySelector('.sort-select');
    if (sortEl) {
      sortEl.addEventListener('change', () => {
        sortOrder = sortEl.value;
        renderCards();
      });
    }

    renderCards();
  };

  return { init };
})();

// --- Detail Page ---
const DetailPage = (() => {
  const render = ({ id }) => {
    const product = PRODUCTS.find(p => p.id === id);
    const container = document.getElementById('detail-content');

    if (!product) {
      container.innerHTML = `
        <div class="error-state animate-in">
          <div class="error-state__code">404</div>
          <h2 class="t-heading error-state__title">Fragrance Not Found</h2>
          <p class="error-state__body">The scent you're searching for does not exist in our collection, or may have been discontinued.</p>
          <button class="btn btn--outline" onclick="Router.navigate('listing')">
            Return to Collection
            <span class="btn__arrow"></span>
          </button>
        </div>`;
      return;
    }

    const noteRow = (tier, notes) => `
      <div class="notes-row">
        <span class="notes-tier">${tier}</span>
        <span class="notes-list">${notes.join(', ')}</span>
      </div>`;

    container.innerHTML = `
      <div class="detail-layout animate-in">
        <div class="detail-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="detail-img">
          <div class="detail-img-caption">
            <span class="t-label" style="color: var(--c-text-muted);">${product.size}</span>
          </div>
        </div>

        <div class="detail-info">
          <span class="t-label detail-category">${product.category}</span>
          <h1 class="t-display detail-name">${product.name}</h1>

          <div class="detail-price-row">
            <span class="detail-price-label">Prix</span>
            <span class="detail-price-num">€${product.price}</span>
            <span class="detail-size">${product.size}</span>
          </div>

          <p class="detail-desc">${product.fullDescription}</p>

          <div class="notes-block">
            <h3 class="notes-block__title">Fragrance Composition</h3>
            ${noteRow('Top', product.fragranceNotes.top)}
            ${noteRow('Heart', product.fragranceNotes.heart)}
            ${noteRow('Base', product.fragranceNotes.base)}
          </div>

          <div class="specs-block">
            <div class="specs-block__header">Details &amp; Specifications</div>
            <div class="spec-row">
              <span class="spec-row__key">Format</span>
              <span class="spec-row__val">${product.size}</span>
            </div>
            <div class="spec-row">
              <span class="spec-row__key">Longevity</span>
              <span class="spec-row__val">${product.longevity}</span>
            </div>
            <div class="spec-row">
              <span class="spec-row__key">Occasion</span>
              <span class="spec-row__val">${product.occasion}</span>
            </div>
            <div class="spec-row">
              <span class="spec-row__key">Category</span>
              <span class="spec-row__val" style="text-transform: capitalize;">${product.category}</span>
            </div>
          </div>

          <button class="btn btn--outline" onclick="Router.navigate('listing')">
            ← Back to Collection
          </button>
        </div>
      </div>
    `;
  };

  return { render };
})();

// --- Bootstrap ---
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderLanding();
  ListingPage.init();

  Router.on('detail', DetailPage.render);

  // Nav links
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => Router.navigate(el.dataset.page));
  });

  // CTA on hero
  document.getElementById('hero-cta')?.addEventListener('click', () => {
    Router.navigate('listing');
  });

  // Start on landing
  Router.navigate('landing');
});

// Expose Router globally for inline onclick handlers
window.Router = Router;
