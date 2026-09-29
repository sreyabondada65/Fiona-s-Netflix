import { IDENTITY_SHOWS, ROWS_CONFIG } from './data.js';
import { getPosterSVG } from './posters.js';
import { soundFx } from './audio.js';

class NetflixFionaApp {
  constructor() {
    this.shows = IDENTITY_SHOWS;
    this.rows = ROWS_CONFIG;
    this.watchedShowIds = new Set();
    this.myListShowIds = new Set(["show-1", "show-7"]);
    this.currentShow = null;
    this.savedScrollPosition = 0;
    this.isMuted = true;

    this.initElements();
    this.bindEvents();
    this.renderRows();
    this.initHeroCanvas();
    this.updateProgressUI();
  }

  initElements() {
    this.loginScreen = document.getElementById('loginScreen');
    this.profileCard = document.getElementById('profileFiona');
    this.appWrapper = document.getElementById('appWrapper');
    this.navbar = document.getElementById('navbar');
    this.rowsContainer = document.getElementById('rowsContainer');
    this.netflixNavLogo = document.getElementById('netflixNavLogo');
    this.navProfileTrigger = document.getElementById('navProfileTrigger');
    this.loginBrandLogo = document.getElementById('loginBrandLogo');
    
    // Modal
    this.detailModalBackdrop = document.getElementById('detailModalBackdrop');
    this.modalHeroWrap = document.getElementById('modalHeroWrap');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalMatch = document.getElementById('modalMatch');
    this.modalYear = document.getElementById('modalYear');
    this.modalRating = document.getElementById('modalRating');
    this.modalDuration = document.getElementById('modalDuration');
    this.modalCategoryBadge = document.getElementById('modalCategoryBadge');
    this.modalQuoteText = document.getElementById('modalQuoteText');
    this.modalSynopsis = document.getElementById('modalSynopsis');
    this.modalCreatorNote = document.getElementById('modalCreatorNote');
    this.modalGenreList = document.getElementById('modalGenreList');
    this.modalTagsList = document.getElementById('modalTagsList');
    this.modalEpisodesList = document.getElementById('modalEpisodesList');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.modalBackBtn = document.getElementById('modalBackBtn');
    this.modalPlayBtn = document.getElementById('modalPlayBtn');
    this.modalListBtn = document.getElementById('modalListBtn');

    // Navigation & Counters
    this.progressCountEl = document.getElementById('progressCount');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.searchToggleBtn = document.getElementById('searchToggleBtn');
    this.aboutToggleBtn = document.getElementById('aboutToggleBtn');
    this.myListNavBtn = document.getElementById('myListNavBtn');
    this.homeNavBtn = document.getElementById('homeNavBtn');
    this.showsNavBtn = document.getElementById('showsNavBtn');

    // Drawers & Overlays
    this.searchDrawer = document.getElementById('searchDrawer');
    this.searchInput = document.getElementById('searchInput');
    this.searchResults = document.getElementById('searchResults');
    this.searchCloseBtn = document.getElementById('searchCloseBtn');
    
    this.aboutDrawer = document.getElementById('aboutDrawer');
    this.aboutCloseBtn = document.getElementById('aboutCloseBtn');

    // Final Discovery
    this.finalDiscoveryOverlay = document.getElementById('finalDiscoveryOverlay');
    this.finalDismissBtn = document.getElementById('finalDismissBtn');
    this.finalExploreMapBtn = document.getElementById('finalExploreMapBtn');

    // Hero Play Button
    this.heroPlayBtn = document.getElementById('heroPlayBtn');
    this.heroMoreInfoBtn = document.getElementById('heroMoreInfoBtn');
  }

  bindEvents() {
    // 1. Profile Login Interaction
    this.profileCard.addEventListener('click', (e) => {
      e.preventDefault();
      this.loginAsFiona();
    });

    // 2. Netflix Logo Click -> Takes user back to Profile Selection Screen ("Who's watching?")
    if (this.netflixNavLogo) {
      this.netflixNavLogo.addEventListener('click', (e) => {
        e.preventDefault();
        this.showProfileSelection();
      });
    }

    if (this.navProfileTrigger) {
      this.navProfileTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.showProfileSelection();
      });
    }

    if (this.loginBrandLogo) {
      this.loginBrandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        soundFx.playHoverTick();
      });
    }

    // 3. Scroll listener for navbar background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    });

    // 4. Modal Close & Back Actions
    this.modalCloseBtn.addEventListener('click', () => this.closeDetailModal());
    this.modalBackBtn.addEventListener('click', () => this.closeDetailModal());
    this.detailModalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.detailModalBackdrop) {
        this.closeDetailModal();
      }
    });

    // 5. Modal Action Buttons
    this.modalPlayBtn.addEventListener('click', () => {
      soundFx.playModalOpen();
      this.triggerPlayEffect();
    });

    this.modalListBtn.addEventListener('click', () => {
      if (!this.currentShow) return;
      if (this.myListShowIds.has(this.currentShow.id)) {
        this.myListShowIds.delete(this.currentShow.id);
        this.modalListBtn.innerHTML = `<span>＋</span> Add to My List`;
      } else {
        this.myListShowIds.add(this.currentShow.id);
        this.modalListBtn.innerHTML = `<span>✓</span> In My List`;
      }
      soundFx.playHoverTick();
    });

    // 6. Sound toggle
    this.soundToggleBtn.addEventListener('click', () => {
      const isMuted = soundFx.toggleMute();
      this.isMuted = isMuted;
      this.soundToggleBtn.innerHTML = isMuted 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
      if (!isMuted) soundFx.playHoverTick();
    });

    // 7. Search Drawer
    this.searchToggleBtn.addEventListener('click', () => this.openSearch());
    this.searchCloseBtn.addEventListener('click', () => this.closeSearch());
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

    // 8. About Drawer
    this.aboutToggleBtn.addEventListener('click', () => this.openAbout());
    this.aboutCloseBtn.addEventListener('click', () => this.closeAbout());

    // 9. Navigation Clicks
    this.homeNavBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    this.showsNavBtn.addEventListener('click', () => {
      document.getElementById('rowsContainer').scrollIntoView({ behavior: 'smooth' });
    });
    this.myListNavBtn.addEventListener('click', () => {
      this.filterByMyList();
    });

    // 10. Hero Actions
    this.heroPlayBtn.addEventListener('click', () => {
      const firstShow = this.shows.find(s => s.slug === "19-still-loading");
      if (firstShow) this.openShowDetail(firstShow);
    });
    this.heroMoreInfoBtn.addEventListener('click', () => {
      this.openAbout();
    });

    // 11. Final Discovery Actions
    this.finalDismissBtn.addEventListener('click', () => {
      this.finalDiscoveryOverlay.classList.remove('active');
    });
    this.finalExploreMapBtn.addEventListener('click', () => {
      this.finalDiscoveryOverlay.classList.remove('active');
      this.openAbout();
    });

    // 12. Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.detailModalBackdrop.classList.contains('active')) {
          this.closeDetailModal();
        } else if (this.searchDrawer.classList.contains('active')) {
          this.closeSearch();
        } else if (this.aboutDrawer.classList.contains('active')) {
          this.closeAbout();
        } else if (this.finalDiscoveryOverlay.classList.contains('active')) {
          this.finalDiscoveryOverlay.classList.remove('active');
        }
      }
    });
  }

  showProfileSelection() {
    soundFx.playModalClose();
    this.closeDetailModal();
    this.closeSearch();
    this.closeAbout();

    this.appWrapper.classList.remove('active');
    this.loginScreen.classList.remove('hidden');
  }

  loginAsFiona() {
    soundFx.playIntroBoom();
    this.loginScreen.classList.add('hidden');
    this.appWrapper.classList.add('active');
    window.scrollTo(0, 0);
  }

  renderRows() {
    this.rowsContainer.innerHTML = '';

    this.rows.forEach(rowConfig => {
      const rowEl = document.createElement('section');
      rowEl.className = 'content-row';
      rowEl.id = `row-${rowConfig.id}`;

      const headerEl = document.createElement('div');
      headerEl.className = 'row-header';
      headerEl.innerHTML = `
        <h2 class="row-title">
          <span>${rowConfig.title}</span>
        </h2>
        <span class="row-indicator">${rowConfig.showSlugs.length} Shows</span>
      `;
      rowEl.appendChild(headerEl);

      const cardsGrid = document.createElement('div');
      cardsGrid.className = 'row-cards-container';

      rowConfig.showSlugs.forEach(slug => {
        const show = this.shows.find(s => s.slug === slug);
        if (show) {
          const card = this.createPosterCard(show);
          cardsGrid.appendChild(card);
        }
      });

      rowEl.appendChild(cardsGrid);
      this.rowsContainer.appendChild(rowEl);
    });
  }

  createPosterCard(show) {
    const card = document.createElement('div');
    card.className = 'poster-card';
    card.setAttribute('data-show-id', show.id);
    card.setAttribute('data-slug', show.slug);

    const isWatched = this.watchedShowIds.has(show.id);
    const posterSVG = getPosterSVG(show.slug);

    card.innerHTML = `
      <div class="poster-inner">
        ${posterSVG}
        ${isWatched ? `<div class="poster-watched-badge"><span>✓</span> Watched</div>` : ''}
        <div class="poster-progress-bar">
          <div class="poster-progress-fill" style="width: ${show.progress}%"></div>
        </div>
      </div>

      <!-- Hover Preview Panel -->
      <div class="hover-preview-panel">
        <div class="hover-media-header">
          ${posterSVG}
        </div>
        <div class="hover-body">
          <div class="hover-actions-row">
            <div class="hover-left-btns">
              <button class="hover-btn-round hover-btn-play" title="Play Chapter" aria-label="Play">▶</button>
              <button class="hover-btn-round hover-btn-add" title="Add to List" aria-label="Add to List">＋</button>
              <button class="hover-btn-round" title="Like" aria-label="Like">👍</button>
            </div>
            <button class="hover-btn-round hover-btn-expand" title="Explore Details" aria-label="Expand">⌄</button>
          </div>
          
          <div class="hover-title">${show.title}</div>
          
          <div class="hover-meta-row">
            <span class="meta-match">${show.matchScore}% Match</span>
            <span class="meta-badge">${show.rating}</span>
            <span class="hover-category-tag">${show.category}</span>
          </div>

          <div class="hover-quote-box">
            <p class="hover-quote-text">“${show.quote}”</p>
          </div>

          <div class="hover-genres">${show.genre}</div>
        </div>
      </div>
    `;

    // Audio hover feedback
    card.addEventListener('mouseenter', () => {
      soundFx.playHoverTick();
    });

    // Card click opens full modal
    card.addEventListener('click', (e) => {
      this.savedScrollPosition = window.scrollY;
      this.openShowDetail(show);
    });

    return card;
  }

  openShowDetail(show) {
    this.currentShow = show;
    soundFx.playModalOpen();

    // Mark as watched
    if (!this.watchedShowIds.has(show.id)) {
      this.watchedShowIds.add(show.id);
      this.updateProgressUI();
      this.refreshCardWatchedBadges();
      
      // Check if all 12 watched
      if (this.watchedShowIds.size === 12) {
        setTimeout(() => {
          this.triggerFinalDiscovery();
        }, 1200);
      }
    }

    // Populate Modal Content
    this.modalHeroWrap.innerHTML = getPosterSVG(show.slug);
    this.modalTitle.textContent = show.title;
    this.modalMatch.textContent = `${show.matchScore}% Match`;
    this.modalYear.textContent = show.year;
    this.modalRating.textContent = show.rating;
    this.modalDuration.textContent = show.duration;
    this.modalCategoryBadge.textContent = `CATEGORY: ${show.category}`;
    this.modalQuoteText.textContent = `“${show.quote}”`;
    this.modalSynopsis.textContent = show.synopsis;
    this.modalCreatorNote.textContent = show.creatorNote;
    this.modalGenreList.textContent = `${show.genre} (${show.subGenres.join(', ')})`;

    // In My List status
    if (this.myListShowIds.has(show.id)) {
      this.modalListBtn.innerHTML = `<span>✓</span> In My List`;
    } else {
      this.modalListBtn.innerHTML = `<span>＋</span> Add to My List`;
    }

    // Tags
    this.modalTagsList.innerHTML = show.tags.map(t => `<span class="info-tag">${t}</span>`).join('');

    // Episodes
    this.modalEpisodesList.innerHTML = show.episodes.map(ep => `
      <div class="episode-item">
        <span class="episode-num">${ep.num}</span>
        <div class="episode-info">
          <div class="episode-top-row">
            <span class="episode-title">${ep.title}</span>
            <span class="episode-length">${ep.length}</span>
          </div>
          <p class="episode-desc">${ep.desc}</p>
        </div>
      </div>
    `).join('');

    // Open backdrop
    this.detailModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeDetailModal() {
    soundFx.playModalClose();
    this.detailModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    
    // Preserve exact scroll position
    window.scrollTo(0, this.savedScrollPosition);
  }

  triggerPlayEffect() {
    const quoteBox = document.querySelector('.modal-identity-statement');
    if (quoteBox) {
      quoteBox.style.boxShadow = "0 0 30px rgba(229, 9, 20, 0.8)";
      quoteBox.style.transform = "scale(1.02)";
      setTimeout(() => {
        quoteBox.style.boxShadow = "";
        quoteBox.style.transform = "";
      }, 400);
    }
  }

  updateProgressUI() {
    const count = this.watchedShowIds.size;
    this.progressCountEl.textContent = `${count} / 12 Explored`;
  }

  refreshCardWatchedBadges() {
    const allCards = document.querySelectorAll('.poster-card');
    allCards.forEach(card => {
      const showId = card.getAttribute('data-show-id');
      const inner = card.querySelector('.poster-inner');
      const existingBadge = inner.querySelector('.poster-watched-badge');

      if (this.watchedShowIds.has(showId)) {
        if (!existingBadge) {
          const badge = document.createElement('div');
          badge.className = 'poster-watched-badge';
          badge.innerHTML = `<span>✓</span> Watched`;
          inner.appendChild(badge);
        }
      }
    });
  }

  triggerFinalDiscovery() {
    soundFx.playFinalUnlock();
    this.finalDiscoveryOverlay.classList.add('active');
  }

  openSearch() {
    this.searchDrawer.classList.add('active');
    this.searchInput.focus();
    this.handleSearch(this.searchInput.value);
  }

  closeSearch() {
    this.searchDrawer.classList.remove('active');
  }

  handleSearch(query) {
    const q = query.trim().toLowerCase();
    this.searchResults.innerHTML = '';

    const filtered = this.shows.filter(show => 
      show.title.toLowerCase().includes(q) ||
      show.category.toLowerCase().includes(q) ||
      show.genre.toLowerCase().includes(q) ||
      show.quote.toLowerCase().includes(q) ||
      show.tags.some(t => t.toLowerCase().includes(q))
    );

    if (filtered.length === 0) {
      this.searchResults.innerHTML = `<div style="color: var(--text-dim); padding: 1rem 0;">No shows match "${query}"</div>`;
      return;
    }

    filtered.forEach(show => {
      const item = document.createElement('div');
      item.className = 'episode-item';
      item.style.cursor = 'pointer';
      item.innerHTML = `
        <div style="width: 50px; height: 50px; flex-shrink: 0;">
          ${getPosterSVG(show.slug)}
        </div>
        <div class="episode-info">
          <div class="episode-top-row">
            <span class="episode-title">${show.title}</span>
            <span class="hover-category-tag">${show.category}</span>
          </div>
          <p class="episode-desc" style="font-size: 0.8rem;">“${show.quote}”</p>
        </div>
      `;
      item.addEventListener('click', () => {
        this.closeSearch();
        this.openShowDetail(show);
      });
      this.searchResults.appendChild(item);
    });
  }

  openAbout() {
    this.aboutDrawer.classList.add('active');
  }

  closeAbout() {
    this.aboutDrawer.classList.remove('active');
  }

  filterByMyList() {
    const myListShows = this.shows.filter(s => this.myListShowIds.has(s.id));
    if (myListShows.length > 0) {
      this.openShowDetail(myListShows[0]);
    }
  }

  initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }
}

// Instantiate on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  window.fionaStreamingApp = new NetflixFionaApp();
});
