// Vector Art & Dynamic Poster Renderer for Fiona Bakshi's 12 Identity Shows

export function getPosterSVG(showSlug) {
  switch (showSlug) {
    case "19-still-loading":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0d1117" />
            <stop offset="50%" stop-color="#161b22" />
            <stop offset="100%" stop-color="#0a0c10" />
          </linearGradient>
          <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00f2fe" />
            <stop offset="100%" stop-color="#4facfe" />
          </linearGradient>
          <filter id="glow-1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="600" fill="url(#bg-1)" />
        
        <!-- Grid & Blueprint Lines -->
        <g stroke="rgba(0, 242, 254, 0.12)" stroke-width="1">
          <line x1="40" y1="0" x2="40" y2="600" />
          <line x1="200" y1="0" x2="200" y2="600" stroke-dasharray="4,4" />
          <line x1="360" y1="0" x2="360" y2="600" />
          <line x1="0" y1="120" x2="400" y2="120" />
          <line x1="0" y1="300" x2="400" y2="300" stroke-dasharray="4,4" />
          <line x1="0" y1="480" x2="400" y2="480" />
        </g>
        
        <!-- Abstract Wireframe & Loading Circle -->
        <circle cx="200" cy="270" r="110" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="12" />
        <circle cx="200" cy="270" r="110" fill="none" stroke="url(#cyan-glow)" stroke-width="12"
                stroke-dasharray="690" stroke-dashoffset="558" stroke-linecap="round" filter="url(#glow-1)" />
        
        <!-- Big Number 19 in Center -->
        <text x="200" y="295" font-family="'Inter', 'SF Pro Display', sans-serif" font-size="84" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="-2">19</text>
        
        <!-- Wireframe Face / Persona Silhouette Lines -->
        <path d="M140 270 Q200 160 260 270 Q200 380 140 270" fill="none" stroke="rgba(255, 75, 75, 0.4)" stroke-width="1.5" stroke-dasharray="3,3" />
        
        <!-- Progress Bar UI Element -->
        <g transform="translate(60, 420)">
          <rect width="280" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
          <rect width="53" height="8" rx="4" fill="url(#cyan-glow)" filter="url(#glow-1)" />
          <text x="0" y="28" font-family="'JetBrains Mono', monospace" font-size="11" fill="rgba(255,255,255,0.6)" letter-spacing="1">STATUS: IN_PROGRESS // 19%</text>
          <text x="280" y="28" font-family="'JetBrains Mono', monospace" font-size="11" fill="#00f2fe" text-anchor="end">v0.19-dev</text>
        </g>

        <!-- Glitch / Sketch Accents -->
        <path d="M70 180 L110 180 M90 160 L90 200" stroke="#e50914" stroke-width="2" />
        <text x="70" y="150" font-family="'JetBrains Mono', monospace" font-size="10" fill="#e50914" letter-spacing="2">CHAPTER 01</text>
        <text x="330" y="150" font-family="'JetBrains Mono', monospace" font-size="10" fill="rgba(255,255,255,0.4)" text-anchor="end">AGE MATRIX</text>
        
        <!-- Vignette & Lower Shadow -->
        <rect y="480" width="400" height="120" fill="url(#vignette-bottom)" opacity="0.9" />
        
        <!-- Show Title Overlay -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#00f2fe" letter-spacing="3">ORIGINAL IDENTITY SERIES</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="-0.5">19: STILL LOADING</text>
      </svg>`;

    case "the-label-on-the-wall":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="concrete-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1f2227" />
            <stop offset="50%" stop-color="#15171b" />
            <stop offset="100%" stop-color="#0a0b0d" />
          </linearGradient>
          <linearGradient id="label-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fdfbf7" />
            <stop offset="100%" stop-color="#e2ded6" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#concrete-bg)" />
        
        <!-- Brutalist Textured Concrete Lines -->
        <g stroke="rgba(255,255,255,0.04)" stroke-width="1.5">
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="200" x2="400" y2="200" />
          <line x1="0" y1="360" x2="400" y2="360" />
          <line x1="120" y1="0" x2="120" y2="600" />
          <line x1="280" y1="0" x2="280" y2="600" />
        </g>
        
        <!-- Architectural Specimen Wall Tag (Peeling Off) -->
        <g transform="translate(60, 160) rotate(-4)">
          <!-- Drop Shadow -->
          <rect x="8" y="12" width="260" height="180" rx="2" fill="rgba(0,0,0,0.7)" />
          <!-- Tag Base -->
          <rect width="260" height="180" rx="2" fill="url(#label-grad)" />
          
          <!-- Tag Header -->
          <rect width="260" height="28" fill="#2d3748" />
          <text x="12" y="18" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700" fill="#ffffff" letter-spacing="1">SYSTEM CLASSIFICATION</text>
          <circle cx="242" cy="14" r="4" fill="#e50914" />
          
          <!-- Stamped Text with strikethrough / unpeeled effect -->
          <text x="20" y="60" font-family="'JetBrains Mono', monospace" font-size="11" fill="#718096">INHERITED STATUS:</text>
          <text x="20" y="85" font-family="'Inter', sans-serif" font-size="20" font-weight="900" fill="#1a202c" letter-spacing="1">CASTE / LINEAGE</text>
          <line x1="18" y1="80" x2="210" y2="80" stroke="#e50914" stroke-width="3" />
          
          <text x="20" y="115" font-family="'Inter', sans-serif" font-size="11" fill="#4a5568">VERDICT: DOES NOT DEFINE</text>
          <text x="20" y="132" font-family="'JetBrains Mono', monospace" font-size="9" fill="#a0aec0">SPECIMEN #FB-02 // VOID</text>
          
          <!-- Peeling corner triangle -->
          <polygon points="260,140 260,180 220,180" fill="#cbd5e1" />
          <polygon points="260,140 220,180 230,140" fill="rgba(0,0,0,0.15)" />
        </g>
        
        <!-- Stencil Text on Wall -->
        <text x="70" y="420" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="rgba(255,255,255,0.2)" letter-spacing="4">DECONSTRUCTED</text>
        <text x="70" y="445" font-family="'JetBrains Mono', monospace" font-size="11" fill="#e50914" letter-spacing="2">CRITICAL SOCIAL INQUIRY</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#e50914" letter-spacing="3">DOCUMENTARY SERIES</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="26" font-weight="900" fill="#ffffff" letter-spacing="-0.5">THE LABEL ON THE WALL</text>
      </svg>`;

    case "delhi-between-the-lines":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="delhi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f111a" />
            <stop offset="100%" stop-color="#050608" />
          </linearGradient>
          <filter id="delhi-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="600" fill="url(#delhi-bg)" />
        
        <!-- Connaught Place Concentric Rings / Radial Urban Map -->
        <g transform="translate(200, 240)" opacity="0.35">
          <circle r="160" fill="none" stroke="#fbc531" stroke-width="1" stroke-dasharray="6,4" />
          <circle r="120" fill="none" stroke="#ffffff" stroke-width="1.5" />
          <circle r="80" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="3,3" />
          <circle r="40" fill="none" stroke="#fbc531" stroke-width="2" />
          <circle r="8" fill="#e50914" />
          <!-- Radial spokes -->
          <line x1="-160" y1="0" x2="160" y2="0" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2,2" />
          <line x1="0" y1="-160" x2="0" y2="160" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2,2" />
          <line x1="-113" y1="-113" x2="113" y2="113" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2,2" />
          <line x1="-113" y1="113" x2="113" y2="-113" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2,2" />
        </g>
        
        <!-- Delhi Metro Yellow Line & Violet Line Schematic -->
        <path d="M 60 460 L 140 320 L 200 240 L 260 160 L 340 40" fill="none" stroke="#fbc531" stroke-width="6" stroke-linecap="round" filter="url(#delhi-glow)" />
        <path d="M 320 460 L 240 340 L 200 240 L 120 180 L 40 100" fill="none" stroke="#9c88ff" stroke-width="6" stroke-linecap="round" filter="url(#delhi-glow)" />
        
        <!-- Metro Station Interchanges -->
        <circle cx="200" cy="240" r="9" fill="#ffffff" stroke="#e50914" stroke-width="4" />
        <circle cx="140" cy="320" r="6" fill="#ffffff" />
        <circle cx="260" cy="160" r="6" fill="#ffffff" />
        <circle cx="240" cy="340" r="6" fill="#ffffff" />
        
        <!-- Hindi Signboard Fragment -->
        <g transform="translate(40, 70)">
          <rect width="130" height="38" rx="4" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255,255,255,0.2)" />
          <text x="12" y="24" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#fbc531">नई दिल्ली</text>
          <text x="80" y="24" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">DELHI</text>
        </g>
        
        <!-- Coordinate Coordinates -->
        <text x="360" y="90" font-family="'JetBrains Mono', monospace" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="end">28.6139° N, 77.2090° E</text>
        <text x="360" y="105" font-family="'JetBrains Mono', monospace" font-size="9" fill="#fbc531" text-anchor="end">ORIGIN: URBAN CORE</text>
        
        <!-- Title -->
        <text x="30" y="520" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#fbc531" letter-spacing="3">URBAN DOCUSERIES</text>
        <text x="30" y="555" font-family="'Inter', sans-serif" font-size="24" font-weight="900" fill="#ffffff" letter-spacing="-0.5">DELHI, BETWEEN THE LINES</text>
      </svg>`;

    case "two-seats":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="warm-sunset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2d132c" />
            <stop offset="45%" stop-color="#801336" />
            <stop offset="75%" stop-color="#c72c41" />
            <stop offset="100%" stop-color="#ee4540" />
          </linearGradient>
          <linearGradient id="seat-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,0,0,0.8)" />
            <stop offset="100%" stop-color="#0a0a0f" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="#0a0b10" />
        
        <!-- Horizon Window Glowing Frame -->
        <rect x="40" y="80" width="320" height="340" rx="8" fill="url(#warm-sunset)" opacity="0.85" />
        
        <!-- Sun disc in horizon -->
        <circle cx="200" cy="240" r="60" fill="#fced96" opacity="0.9" />
        
        <!-- Horizon floor silhouette -->
        <rect x="40" y="280" width="320" height="140" fill="url(#seat-shadow)" />
        
        <!-- Minimalist Mid-Century Chair 1 (Left) -->
        <g transform="translate(100, 260)" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <!-- Backrest -->
          <line x1="15" y1="0" x2="15" y2="45" />
          <path d="M5 10 C5 0, 45 0, 45 10" stroke-width="3" />
          <!-- Seat cushion -->
          <rect x="5" y="45" width="45" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
          <!-- Legs -->
          <line x1="10" y1="55" x2="5" y2="90" />
          <line x1="45" y1="55" x2="50" y2="90" />
        </g>

        <!-- Small Shared Coffee Table -->
        <g transform="translate(180, 290)" stroke="#ffffff" stroke-width="1.5" fill="none">
          <ellipse cx="20" cy="15" rx="18" ry="6" fill="rgba(255,255,255,0.15)" />
          <line x1="20" y1="21" x2="20" y2="60" />
          <line x1="10" y1="60" x2="30" y2="60" />
          <!-- Two Small Mugs -->
          <rect x="12" y="7" width="5" height="6" fill="#fced96" />
          <rect x="22" y="7" width="5" height="6" fill="#fced96" />
        </g>
        
        <!-- Minimalist Mid-Century Chair 2 (Right) -->
        <g transform="translate(245, 260)" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <!-- Backrest -->
          <line x1="35" y1="0" x2="35" y2="45" />
          <path d="M5 10 C5 0, 45 0, 45 10" stroke-width="3" />
          <!-- Seat cushion -->
          <rect x="5" y="45" width="45" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
          <!-- Legs -->
          <line x1="10" y1="55" x2="5" y2="90" />
          <line x1="45" y1="55" x2="50" y2="90" />
        </g>

        <text x="200" y="130" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="middle" letter-spacing="4">PARALLEL INDEPENDENCE</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ee4540" letter-spacing="3">ROMANCE / SLICE OF LIFE</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="-0.5">TWO SEATS</text>
      </svg>`;

    case "home":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="terracotta-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#3d1308" />
            <stop offset="50%" stop-color="#7a2810" />
            <stop offset="100%" stop-color="#1b0803" />
          </linearGradient>
          <radialGradient id="diya-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffb703" stop-opacity="1" />
            <stop offset="50%" stop-color="#fb8500" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#fb8500" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="600" fill="url(#terracotta-bg)" />
        
        <!-- Intricate Jali Architectural Screen Pattern -->
        <g stroke="rgba(255, 183, 3, 0.15)" stroke-width="1" fill="none">
          ${Array.from({length: 8}).map((_, r) => 
            Array.from({length: 6}).map((_, c) => 
              `<polygon points="${c*70+35},${r*50} ${c*70+70},${r*50+25} ${c*70+35},${r*50+50} ${c*70},${r*50+25}" />
               <circle cx="${c*70+35}" cy="${r*50+25}" r="8" />`
            ).join('')
          ).join('')}
        </g>
        
        <!-- Central Luminous Brass Diya / Flame Silhouette -->
        <g transform="translate(200, 270)">
          <!-- Glow halo -->
          <circle r="100" fill="url(#diya-glow)" />
          
          <!-- Diya Bowl -->
          <path d="M-60 20 Q0 60 60 20 L50 10 Q0 30 -50 10 Z" fill="#d4af37" stroke="#ffd700" stroke-width="1.5" />
          <!-- Floating Diya Flame -->
          <path d="M0 -50 C-25 -10 -20 15 0 15 C20 15 25 -10 0 -50 Z" fill="#ffb703" />
          <path d="M0 -35 C-12 -8 -10 10 0 10 C10 10 12 -8 0 -35 Z" fill="#ffffff" />
        </g>
        
        <!-- Punjabi Phulkari / Marigold Flower Motif Accents -->
        <g transform="translate(200, 100)" stroke="#ffb703" stroke-width="1" opacity="0.6">
          <polygon points="0,-25 7,-7 25,0 7,7 0,25 -7,7 -25,0 -7,-7" fill="rgba(255,183,3,0.3)" />
        </g>
        
        <text x="200" y="150" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#ffb703" text-anchor="middle" letter-spacing="4">RITUAL · MEMORY · BELONGING</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffb703" letter-spacing="3">CULTURE & FAMILY</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="2">HOME</text>
      </svg>`;

    case "the-life-i-was-given":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pedestal-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1a1c23" />
            <stop offset="100%" stop-color="#0d0e12" />
          </linearGradient>
          <linearGradient id="gold-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#d4af37" />
            <stop offset="100%" stop-color="#f3e5ab" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#pedestal-bg)" />
        
        <!-- Museum Spotlight Beam -->
        <polygon points="120,0 280,0 350,420 50,420" fill="rgba(255,255,255,0.03)" />
        
        <!-- Clean Museum Pedestal / Vitrine -->
        <g transform="translate(100, 260)">
          <!-- Glass Case Frame -->
          <rect x="0" y="0" width="200" height="150" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
          
          <!-- Curated Aesthetic Objects inside: Drafting Pen, Architectural Block, Globe coordinate -->
          <line x1="30" y1="110" x2="70" y2="30" stroke="#d4af37" stroke-width="3" stroke-linecap="round" />
          <rect x="90" y="60" width="40" height="60" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
          <circle cx="160" cy="85" r="20" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="3,3" />
          <circle cx="160" cy="85" r="4" fill="#ffffff" />
          
          <!-- Pedestal Stand -->
          <rect x="-20" y="150" width="240" height="40" fill="#252936" />
          <text x="100" y="174" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.6)" text-anchor="middle" letter-spacing="2">SOCIOECONOMIC ACCESS // FOUNDATION</text>
        </g>
        
        <!-- Upper Coordinates & Curated Note -->
        <text x="200" y="100" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#d4af37" text-anchor="middle" letter-spacing="3">UNEARNED ACCESS · CRITICAL AWARENESS</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="url(#gold-accent)" letter-spacing="3">REALITY & REFLECTION</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="24" font-weight="900" fill="#ffffff" letter-spacing="-0.5">THE LIFE I WAS GIVEN</text>
      </svg>`;

    case "the-designer":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="designer-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0a192f" />
            <stop offset="100%" stop-color="#020c1b" />
          </linearGradient>
          <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(100, 255, 218, 0.2)" />
          </pattern>
        </defs>
        <rect width="400" height="600" fill="url(#designer-bg)" />
        <rect width="400" height="600" fill="url(#dot-grid)" />
        
        <!-- Isometric Industrial Design Cube / Ergonomic Model -->
        <g transform="translate(200, 240)">
          <!-- Isometric Box -->
          <!-- Top face -->
          <polygon points="0,-80 80,-40 0,0 -80,-40" fill="rgba(100, 255, 218, 0.15)" stroke="#64ffda" stroke-width="2" />
          <!-- Right face -->
          <polygon points="0,0 80,-40 80,60 0,100" fill="rgba(100, 255, 218, 0.08)" stroke="#64ffda" stroke-width="2" />
          <!-- Left face -->
          <polygon points="0,0 -80,-40 -80,60 0,100" fill="rgba(100, 255, 218, 0.03)" stroke="#64ffda" stroke-width="2" />
          
          <!-- Inner Ergonomic Curve Line -->
          <path d="M-50 -10 Q0 50 50 10" fill="none" stroke="#e50914" stroke-width="3" stroke-dasharray="4,4" />
          
          <!-- Dimension Arrows & Caliper Annotation -->
          <line x1="-95" y1="-30" x2="-95" y2="70" stroke="#64ffda" stroke-width="1.2" />
          <polygon points="-95,-35 -98,-28 -92,-28" fill="#64ffda" />
          <polygon points="-95,75 -98,68 -92,68" fill="#64ffda" />
          <text x="-105" y="25" font-family="'JetBrains Mono', monospace" font-size="9" fill="#64ffda" text-anchor="end">H: 140mm</text>
        </g>
        
        <!-- TRIZ Matrix & Prototyping Notes -->
        <g transform="translate(50, 390)">
          <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64ffda">METHOD: TRIZ // SYSTEMATIC INNOVATION</text>
          <text x="0" y="16" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.6)">PARAM: ERGONOMICS × MATERIAL REFINEMENT</text>
          <text x="0" y="32" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.4)">TOOLS: FOAM MODELING · CAD · TRIZ · SKETCHING</text>
        </g>
        
        <text x="350" y="80" font-family="'JetBrains Mono', monospace" font-size="11" fill="#64ffda" text-anchor="end">ID_STUDENT_01</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#64ffda" letter-spacing="3">INDUSTRIAL DESIGN CREATIVE</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="-0.5">THE DESIGNER</text>
      </svg>`;

    case "no-label-needed":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mono-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#171717" />
            <stop offset="100%" stop-color="#050505" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#mono-bg)" />
        
        <!-- Stripped Minimalist Silhouette -->
        <g transform="translate(200, 240)">
          <!-- Abstract Person Silhouette Outline -->
          <circle cx="0" cy="-60" r="45" fill="none" stroke="#ffffff" stroke-width="2" />
          <path d="M-80 60 C-80 -10 -40 -10 0 -10 C40 -10 80 -10 80 60" fill="none" stroke="#ffffff" stroke-width="2" />
          
          <!-- Clean Dissolving Tag Lines -->
          <g stroke="rgba(255,255,255,0.3)" stroke-width="1.5">
            <line x1="-120" y1="-120" x2="-120" y2="120" stroke-dasharray="2,6" />
            <line x1="120" y1="-120" x2="120" y2="120" stroke-dasharray="2,6" />
          </g>
        </g>
        
        <text x="200" y="380" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="4">UNCOMPLICATED TRUTH</text>
        <text x="200" y="405" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.4)" text-anchor="middle">JUST ONE COORDINATE OF MANY</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#e50914" letter-spacing="3">COMING-OF-AGE / DRAMA</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="26" font-weight="900" fill="#ffffff" letter-spacing="-0.5">NO LABEL NEEDED</text>
      </svg>`;

    case "her-space":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="her-space-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1a0b1e" />
            <stop offset="50%" stop-color="#2d1435" />
            <stop offset="100%" stop-color="#0a050d" />
          </linearGradient>
          <linearGradient id="door-glow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff79c6" />
            <stop offset="100%" stop-color="#bd93f9" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#her-space-bg)" />
        
        <!-- Deep One-Point Perspective Architectural Corridor -->
        <g stroke="rgba(255, 121, 198, 0.25)" stroke-width="1.5">
          <!-- Ceiling & Floor perspective orthogonals meeting at (200, 210) -->
          <line x1="0" y1="0" x2="200" y2="210" />
          <line x1="400" y1="0" x2="200" y2="210" />
          <line x1="0" y1="440" x2="200" y2="210" />
          <line x1="400" y1="440" x2="200" y2="210" />
          
          <!-- Distance portals -->
          <rect x="50" y="52" width="300" height="336" fill="none" />
          <rect x="110" y="115" width="180" height="202" fill="none" stroke-dasharray="4,4" />
          <rect x="155" y="162" width="90" height="102" fill="none" />
        </g>
        
        <!-- Glowing Doorway at Vanishing Point -->
        <rect x="175" y="150" width="50" height="80" rx="2" fill="url(#door-glow)" opacity="0.9" />
        
        <!-- Long Casting Shadow of Woman Figure Walking Forward -->
        <polygon points="190,230 210,230 270,440 130,440" fill="rgba(0,0,0,0.6)" />
        <circle cx="200" cy="180" r="6" fill="#1a0b1e" />
        <rect x="195" y="186" width="10" height="30" rx="3" fill="#1a0b1e" />
        
        <!-- Spatial Safety Matrix Overlay -->
        <circle cx="200" cy="360" r="70" fill="none" stroke="#ff79c6" stroke-width="1" stroke-dasharray="4,4" />
        <text x="200" y="365" font-family="'JetBrains Mono', monospace" font-size="8" fill="#ff79c6" text-anchor="middle" letter-spacing="2">PUBLIC / PRIVATE THRESHOLD</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ff79c6" letter-spacing="3">SOCIAL & SPATIAL IDENTITY</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="-0.5">HER SPACE</text>
      </svg>`;

    case "i-notice-things":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lens-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#091b1d" />
            <stop offset="100%" stop-color="#020809" />
          </linearGradient>
          <linearGradient id="emerald-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00f5d4" />
            <stop offset="100%" stop-color="#7b2cbf" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#lens-bg)" />
        
        <!-- Magnifying Reticle & Golden Ratio Spiral -->
        <g transform="translate(200, 240)">
          <!-- Golden Ratio Arc Spiral -->
          <path d="M 0,0 
                   A 10,10 0 0,1 10,10 
                   A 20,20 0 0,1 -10,30 
                   A 40,40 0 0,1 -50,-10 
                   A 80,80 0 0,1 30,-90 
                   A 140,140 0 0,1 170,50" 
                fill="none" stroke="#00f5d4" stroke-width="2" stroke-linecap="round" opacity="0.85" />
          
          <!-- Crosshairs & Measurement Reticle -->
          <circle r="120" fill="none" stroke="rgba(0, 245, 212, 0.2)" stroke-width="1.5" />
          <circle r="60" fill="none" stroke="rgba(0, 245, 212, 0.4)" stroke-width="1" stroke-dasharray="4,4" />
          <circle r="10" fill="none" stroke="#e50914" stroke-width="2" />
          <line x1="-140" y1="0" x2="140" y2="0" stroke="rgba(0, 245, 212, 0.3)" stroke-width="1" />
          <line x1="0" y1="-140" x2="0" y2="140" stroke="rgba(0, 245, 212, 0.3)" stroke-width="1" />
          
          <!-- Micro-pattern calibration ticks -->
          ${Array.from({length: 12}).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = Math.cos(angle) * 110;
            const y1 = Math.sin(angle) * 110;
            const x2 = Math.cos(angle) * 120;
            const y2 = Math.sin(angle) * 120;
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#00f5d4" stroke-width="1.5" />`;
          }).join('')}
        </g>
        
        <text x="50" y="420" font-family="'JetBrains Mono', monospace" font-size="10" fill="#00f5d4">COGNITION: HYPER-SPATIAL RECOGNITION</text>
        <text x="50" y="438" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.6)">ALIGNMENT: Δ 0.05mm // VISUAL-FIRST COGNITION</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#00f5d4" letter-spacing="3">EXPERIMENTAL PSYCHOLOGY</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="-0.5">I NOTICE THINGS</text>
      </svg>`;

    case "mirror-mirror":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mirror-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1f1610" />
            <stop offset="50%" stop-color="#3d2a1d" />
            <stop offset="100%" stop-color="#0a0705" />
          </linearGradient>
          <linearGradient id="warm-skin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c68642" />
            <stop offset="100%" stop-color="#8d5524" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#mirror-bg)" />
        
        <!-- Fractured Mirror Diagonal Split -->
        <polygon points="0,0 220,0 180,600 0,600" fill="rgba(255,255,255,0.03)" />
        <line x1="220" y1="0" x2="180" y2="600" stroke="#ffffff" stroke-width="2" stroke-dasharray="8,2" />
        
        <!-- Left Silhouette: External Gaze / Reflected Surface -->
        <g transform="translate(140, 240) scale(-1, 1)">
          <path d="M0 -70 C30 -70 45 -40 45 0 C45 30 30 60 10 90" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="3" />
          <circle cx="20" cy="-30" r="6" fill="none" stroke="rgba(255,255,255,0.4)" />
        </g>
        
        <!-- Right Silhouette: Internal Truth / Brown skin tone warmth -->
        <g transform="translate(260, 240)">
          <path d="M0 -70 C30 -70 45 -40 45 0 C45 30 30 60 10 90" fill="none" stroke="url(#warm-skin)" stroke-width="4" />
          <circle cx="20" cy="-30" r="6" fill="#c68642" />
        </g>
        
        <text x="200" y="110" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#c68642" text-anchor="middle" letter-spacing="4">SURFACE LAYER VS ESSENCE</text>
        <text x="200" y="390" font-family="'JetBrains Mono', monospace" font-size="9" fill="rgba(255,255,255,0.5)" text-anchor="middle">PERCEPTION IS ONLY ONE LAYER</text>
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#c68642" letter-spacing="3">PERSONAL IDENTITY ESSAY</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="30" font-weight="900" fill="#ffffff" letter-spacing="-0.5">MIRROR, MIRROR</text>
      </svg>`;

    case "lost-in-translation":
      return `
      <svg viewBox="0 0 400 600" class="poster-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="trans-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0d1b2a" />
            <stop offset="100%" stop-color="#1b263b" />
          </linearGradient>
        </defs>
        <rect width="400" height="600" fill="url(#trans-bg)" />
        
        <!-- Multilingual Typography Collage Layer -->
        <!-- Devanagari (Hindi) Big Background -->
        <text x="40" y="180" font-family="'Inter', 'Noto Sans Devanagari', sans-serif" font-size="64" font-weight="900" fill="rgba(255, 107, 107, 0.25)">पहचान</text>
        <text x="180" y="300" font-family="'Inter', 'Noto Sans Devanagari', sans-serif" font-size="48" font-weight="900" fill="rgba(255, 255, 255, 0.08)">अनुवाद</text>
        
        <!-- German Typography Layer -->
        <text x="40" y="270" font-family="'JetBrains Mono', monospace" font-size="32" font-weight="800" fill="#48cae4" letter-spacing="2">GESTALT</text>
        <text x="40" y="330" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="700" fill="rgba(72, 202, 228, 0.6)">[SPRACHE · FORM]</text>
        
        <!-- English Connective Layer -->
        <g transform="translate(40, 370)">
          <text x="0" y="0" font-family="'Inter', sans-serif" font-size="14" font-weight="700" fill="#ffffff">TRI-LINGUAL MATRIX:</text>
          <text x="0" y="22" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ff6b6b">HINDI (ROOTS) · ENGLISH (COMMERCE) · GERMAN (DESIGN)</text>
        </g>
        
        <!-- Phonetic Waveform -->
        <path d="M 40 430 Q 100 400 160 430 T 280 430 T 360 430" fill="none" stroke="#48cae4" stroke-width="2.5" />
        <path d="M 40 430 Q 100 450 160 430 T 280 430 T 360 430" fill="none" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="3,3" />
        
        <!-- Title -->
        <text x="30" y="525" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#48cae4" letter-spacing="3">LINGUISTIC DOCUMENTARY</text>
        <text x="30" y="560" font-family="'Inter', sans-serif" font-size="24" font-weight="900" fill="#ffffff" letter-spacing="-0.5">LOST IN TRANSLATION</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 400 600" class="poster-svg"><rect width="400" height="600" fill="#111"/></svg>`;
  }
}
