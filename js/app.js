/**
 * Aplication Controller & UI Logic for José Lucio Peraza Cárdenas Portfolio
 */
document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentCategory = 'all';
  let searchQuery = '';

  // DOM Elements
  const header = document.getElementById('siteHeader');
  const navLinks = document.getElementById('navLinks');
  const mobileToggle = document.getElementById('mobileToggle');
  const projectsGrid = document.getElementById('projectsGrid');
  const categoryFilters = document.getElementById('categoryFilters');
  const searchInput = document.getElementById('projectSearchInput');
  const skillsContainer = document.getElementById('skillsContainer');
  const timelineContainer = document.getElementById('timelineContainer');
  const heroStats = document.getElementById('heroStats');
  
  // Modal Elements
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectBadge = document.getElementById('modalProjectBadge');
  const modalFullDesc = document.getElementById('modalFullDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTags = document.getElementById('modalTags');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalLiveLink = document.getElementById('modalLiveLink');
  
  // Email Copy & Toast
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastNotice = document.getElementById('toastNotice');

  /* --------------------------------------------------------------------------
     1. INITIALIZE COMPONENTS
     -------------------------------------------------------------------------- */
  initHeaderScroll();
  initMobileNav();
  renderHeroStats();
  renderCategoryButtons();
  renderProjects();
  renderSkills();
  renderTimeline();
  initSearchAndFilters();
  initModalListeners();
  initEmailCopy();

  /* --------------------------------------------------------------------------
     2. HEADER & MOBILE NAV
     -------------------------------------------------------------------------- */
  function initHeaderScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  function initMobileNav() {
    if (!mobileToggle || !navLinks) return;
    
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="bi bi-x-lg"></i>' 
        : '<i class="bi bi-list"></i>';
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '<i class="bi bi-list"></i>';
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. HERO STATS RENDERING
     -------------------------------------------------------------------------- */
  function renderHeroStats() {
    if (!heroStats || !PORTFOLIO_DATA.profile.stats) return;
    
    heroStats.innerHTML = PORTFOLIO_DATA.profile.stats.map(stat => `
      <div class="stat-item">
        <span class="stat-number">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     4. CATEGORY FILTERS RENDERING
     -------------------------------------------------------------------------- */
  function renderCategoryButtons() {
    if (!categoryFilters || !PORTFOLIO_DATA.categories) return;

    categoryFilters.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
      <button 
        type="button" 
        class="filter-btn ${cat.id === 'all' ? 'active' : ''}" 
        data-category="${cat.id}"
      >
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     5. PROJECTS RENDERING & FILTERING
     -------------------------------------------------------------------------- */
  function getVisualIcon(visual) {
    const icons = {
      fingerprint: '<i class="bi bi-fingerprint" style="color: #10b981;"></i>',
      dashboard: '<i class="bi bi-speedometer2" style="color: #8b5cf6;"></i>',
      palette: '<i class="bi bi-palette2" style="color: #38bdf8;"></i>',
      truck: '<i class="bi bi-truck" style="color: #f97316;"></i>',
      security: '<i class="bi bi-shield-lock" style="color: #10b981;"></i>',
      code: '<i class="bi bi-code-square" style="color: #3b82f6;"></i>'
    };
    return icons[visual] || '<i class="bi bi-window" style="color: #38bdf8;"></i>';
  }

  function getBadgeClass(badge) {
    const cleaned = badge.toLowerCase().replace(/\s+/g, '');
    return `badge-${cleaned}`;
  }

  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const query = searchQuery.trim().toLowerCase();
      
      if (!query) return matchCat;

      const matchText = p.title.toLowerCase().includes(query) ||
                        p.shortDesc.toLowerCase().includes(query) ||
                        p.tags.some(t => t.toLowerCase().includes(query));

      return matchCat && matchText;
    });

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-search"></i>
          <h3>No se encontraron proyectos</h3>
          <p>Intenta con otros términos o selecciona otra categoría.</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => `
      <article class="project-card" data-id="${p.id}">
        <div class="card-header-visual">
          <div class="card-header-pattern"></div>
          <div class="card-header-accent" style="background: ${p.accentGlow};"></div>
          <div class="card-icon-illustration">
            ${getVisualIcon(p.previewVisual)}
          </div>
          <span class="card-badge ${getBadgeClass(p.badge)}">${p.badge}</span>
        </div>

        <div class="card-body">
          <div class="card-metric-tag">
            <i class="bi bi-stars"></i>
            <span>${p.metric}</span>
          </div>

          <h3 class="card-title">${p.title}</h3>
          <p class="card-description">${p.shortDesc}</p>

          <div class="card-tags">
            ${p.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            ${p.tags.length > 3 ? `<span class="tag-pill">+${p.tags.length - 3}</span>` : ''}
          </div>

          <div class="card-footer-actions">
            <button type="button" class="btn-details" data-action="open-modal" data-id="${p.id}">
              <span>Detalles del Proyecto</span>
              <i class="bi bi-arrow-right"></i>
            </button>

            <div class="card-links-group">
              ${p.githubUrl ? `
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="Ver código en GitHub" aria-label="Código fuente de ${p.title}">
                  <i class="bi bi-github"></i>
                </a>
              ` : ''}
              ${p.liveUrl ? `
                <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="icon-action-btn" title="Ver demo en vivo" aria-label="Demo en vivo de ${p.title}">
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listener for modal trigger
    projectsGrid.querySelectorAll('[data-action="open-modal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. SEARCH & CATEGORY FILTER LISTENERS
     -------------------------------------------------------------------------- */
  function initSearchAndFilters() {
    if (categoryFilters) {
      categoryFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;

        categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderProjects();
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProjects();
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. PROJECT DETAIL MODAL
     -------------------------------------------------------------------------- */
  function openProjectModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    modalProjectTitle.textContent = project.title;
    modalProjectBadge.textContent = `${project.badge} • ${project.metric}`;
    modalFullDesc.textContent = project.fullDesc;

    modalFeatures.innerHTML = project.keyFeatures.map(feat => `
      <li>
        <i class="bi bi-check2-circle"></i>
        <span>${feat}</span>
      </li>
    `).join('');

    modalTags.innerHTML = project.tags.map(tag => `
      <span class="modal-tag">${tag}</span>
    `).join('');

    if (modalGithubLink) {
      if (project.githubUrl) {
        modalGithubLink.href = project.githubUrl;
        modalGithubLink.style.display = 'inline-flex';
      } else {
        modalGithubLink.style.display = 'none';
      }
    }

    if (modalLiveLink) {
      if (project.liveUrl) {
        modalLiveLink.href = project.liveUrl;
        modalLiveLink.style.display = 'inline-flex';
      } else {
        modalLiveLink.style.display = 'none';
      }
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initModalListeners() {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
          closeProjectModal();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. SKILLS MATRIX RENDERING
     -------------------------------------------------------------------------- */
  function renderSkills() {
    if (!skillsContainer || !PORTFOLIO_DATA.skills) return;

    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
      <div class="skill-category-card">
        <div class="skill-card-header">
          <div class="skill-card-icon ${cat.color}">
            <i class="bi ${cat.icon}"></i>
          </div>
          <h3 class="skill-card-title">${cat.category}</h3>
        </div>

        <div class="skill-list">
          ${cat.items.map(item => `
            <div class="skill-item">
              <div class="skill-item-info">
                <span class="skill-name">${item.name}</span>
                <span class="skill-level">${item.level}</span>
              </div>
              <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${item.percent}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     9. EXPERIENCE & TIMELINE RENDERING
     -------------------------------------------------------------------------- */
  function renderTimeline() {
    if (!timelineContainer || !PORTFOLIO_DATA.experience) return;

    timelineContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${exp.role}</h3>
              <div class="timeline-company">
                <i class="bi bi-briefcase"></i>
                <span>${exp.company} • ${exp.location}</span>
              </div>
            </div>
            <span class="timeline-period">${exp.period}</span>
          </div>

          <p class="timeline-desc">${exp.description}</p>

          <ul class="timeline-bullets">
            ${exp.highlights.map(h => `
              <li>
                <i class="bi bi-check-circle-fill"></i>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     10. EMAIL COPY & TOAST
     -------------------------------------------------------------------------- */
  function initEmailCopy() {
    if (!copyEmailBtn) return;

    copyEmailBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast('¡Correo copiado al portapapeles!');
      }).catch(() => {
        // Fallback
        const temp = document.createElement('textarea');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast('¡Correo copiado al portapapeles!');
      });
    });
  }

  function showToast(message) {
    if (!toastNotice) return;
    const toastText = toastNotice.querySelector('.toast-text');
    if (toastText) toastText.textContent = message;
    
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }
});
