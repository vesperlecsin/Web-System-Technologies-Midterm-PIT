const projects = [
  {
    id: 1,
    name: "Nebula AI Assistant",
    category: "ai",
    icon: "fa-robot",
    tech: ["React", "TensorFlow", "OpenAI"],
    description: "AI-powered productivity assistant with 98% accuracy. Understands natural language and automates complex workflows.",
    impact: "⭐ 4.9/5 rating · 500k+ users",
    link: "nebula"
  },
  {
    id: 2,
    name: "EcoChain Blockchain",
    category: "web",
    icon: "fa-leaf",
    tech: ["Web3", "Solidity", "Vue.js"],
    description: "Carbon-tracking blockchain platform that reduced emissions tracking time by 75% for enterprise clients.",
    impact: "🏆 UN Innovation Award 2024",
    link: "ecochain"
  },
  {
    id: 3,
    name: "MediScan AI",
    category: "ai",
    icon: "fa-brain",
    tech: ["Python", "PyTorch", "FastAPI"],
    description: "Medical imaging diagnostic tool with 94% early detection rate for lung diseases. Deployed in 50+ clinics worldwide.",
    impact: "❤️ Saved 10k+ lives",
    link: "mediscan"
  },
  {
    id: 4,
    name: "FinFlow Dashboard",
    category: "web",
    icon: "fa-chart-line",
    tech: ["Next.js", "D3.js", "Tailwind"],
    description: "Real-time financial analytics platform processing 1M+ transactions daily with stunning data visualization.",
    impact: "💰 $2B assets managed",
    link: "finflow"
  },
  {
    id: 5,
    name: "TravelMind",
    category: "mobile",
    icon: "fa-map-marked-alt",
    tech: ["Flutter", "Firebase", "Google Maps API"],
    description: "AI-powered travel planner with 4.8M downloads. Featured as App of the Day in 15 countries.",
    impact: "📱 #1 Travel App",
    link: "travelmind"
  },
  {
    id: 6,
    name: "DevCollab",
    category: "web",
    icon: "fa-users",
    tech: ["React", "Socket.io", "MongoDB"],
    description: "Real-time code collaboration platform for remote teams. Used by 100k+ developers worldwide.",
    impact: "👥 100k+ developers",
    link: "devcollab"
  },
  // NEW PROJECT 1: AR/VR
  {
    id: 7,
    name: "MetaSpace VR",
    category: "ar",
    icon: "fa-vr-cardboard",
    tech: ["Unity", "WebXR", "Three.js"],
    description: "Immersive virtual reality collaboration space for remote teams. Features real-time avatars and spatial audio.",
    impact: "🥽 50k+ VR sessions",
    link: "metaspace"
  },
  // NEW PROJECT 2: EdTech
  {
    id: 8,
    name: "EduGenie",
    category: "ai",
    icon: "fa-graduation-cap",
    tech: ["Next.js", "OpenAI", "Supabase"],
    description: "Personalized AI tutor that adapts to each student's learning style. Used by 200+ schools globally.",
    impact: "🎓 95% student improvement",
    link: "edugenie"
  }
];

const archivedProjects = [
  {
    name: "Legacy Portfolio v3",
    tech: ["HTML5", "CSS3", "GSAP"],
    description: "Award-winning portfolio site that won Awwwards SOTD."
  },
  {
    name: "WeatherWise Pro",
    tech: ["React Native", "API", "Chart.js"],
    description: "Hyperlocal weather app with 2M+ downloads and 4.8 rating."
  },
  {
    name: "FitTrack Health",
    tech: ["Vue", "Node.js", "MongoDB"],
    description: "Fitness tracking platform used by 500k active users."
  }
];

// ========== RENDER FUNCTIONS ==========
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  
  grid.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-icon">
        <i class="fas ${p.icon}"></i>
      </div>
      <div class="project-content">
        <h4>${p.name}</h4>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <p>${p.description}</p>
        <div class="project-stats">
          <i class="fas fa-trophy"></i> ${p.impact}
        </div>
        <button class="btn-seemore" data-project="${p.link}">
          <i class="fas fa-eye"></i> View Case Study →
        </button>
      </div>
    </div>
  `).join('');
  
  attachProjectButtonListeners();
}

function renderArchived() {
  const archivedGrid = document.getElementById("archivedGrid");
  if (!archivedGrid) return;
  
  archivedGrid.innerHTML = archivedProjects.map(p => `
    <div class="project-card">
      <div class="project-icon">
        <i class="fas fa-archive"></i>
      </div>
      <div class="project-content">
        <h4>📦 ${p.name}</h4>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <p>${p.description}</p>
        <button class="btn-seemore archived-btn">
          <i class="fas fa-eye"></i> View Archive →
        </button>
      </div>
    </div>
  `).join('');
  
  attachArchivedButtonListeners();
}

function attachProjectButtonListeners() {
  document.querySelectorAll('#projectsGrid .btn-seemore').forEach(btn => {
    btn.removeEventListener('click', handleProjectClick);
    btn.addEventListener('click', handleProjectClick);
  });
}

function attachArchivedButtonListeners() {
  document.querySelectorAll('#archivedGrid .btn-seemore').forEach(btn => {
    btn.removeEventListener('click', handleArchiveClick);
    btn.addEventListener('click', handleArchiveClick);
  });
}

function handleProjectClick(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const projectCard = btn.closest('.project-card');
  const projectName = projectCard?.querySelector('h4')?.innerText || "this project";
  alert(`✨ Case study for "${projectName}"\n\nIncludes: UX research, wireframes, interactive prototype, A/B testing results, and performance metrics. Full case study available upon request.`);
}

function handleArchiveClick(e) {
  e.stopPropagation();
  alert(`📦 Archived project details available. Contact me for the full case study and code repository.`);
}

// ========== FILTER FUNCTIONALITY ==========
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.removeEventListener('click', handleFilterClick);
    btn.addEventListener('click', handleFilterClick);
  });
}

function handleFilterClick(e) {
  const btn = e.currentTarget;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active-filter'));
  btn.classList.add('active-filter');
  renderProjects(btn.dataset.filter);
}

// ========== DARK MODE TOGGLE ==========
function initDarkMode() {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (!toggleBtn) return;
  
  const icon = toggleBtn.querySelector('i');
  const text = toggleBtn.querySelector('span');
  
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    if (icon) icon.className = 'fas fa-moon';
    if (text) text.innerText = 'Dark Mode';
  }
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (icon) icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    if (text) text.innerText = isLight ? 'Dark Mode' : 'Light Mode';
  });
}

// ========== PERSONALIZATION ==========
function initPersonalization() {
  const setNameBtn = document.getElementById('setNameBtn');
  const visitorSpan = document.getElementById('visitorNameSpan');
  
  if (!setNameBtn || !visitorSpan) return;
  
  const savedName = localStorage.getItem('resumeVisitor');
  if (savedName) visitorSpan.innerText = savedName;
  
  setNameBtn.addEventListener('click', () => {
    let userName = prompt('✨ What\'s your name? I\'ll personalize your experience:');
    if (userName && userName.trim() !== '') {
      visitorSpan.innerText = userName.trim();
      localStorage.setItem('resumeVisitor', userName.trim());
    }
  });
}

// ========== FORM VALIDATION ==========
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');
  const feedbackDiv = document.getElementById('formFeedback');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName')?.value.trim() || '';
    const email = document.getElementById('formEmail')?.value.trim() || '';
    const message = document.getElementById('formMessage')?.value.trim() || '';
    
    if (!name || !email || !message) {
      if (feedbackDiv) {
        feedbackDiv.innerHTML = '❌ Please fill in all fields';
        feedbackDiv.style.color = '#ef4444';
      }
    } else if (!email.includes('@') || !email.includes('.')) {
      if (feedbackDiv) {
        feedbackDiv.innerHTML = '❌ Please enter a valid email address';
        feedbackDiv.style.color = '#ef4444';
      }
    } else {
      if (feedbackDiv) {
        feedbackDiv.innerHTML = '✅ Message sent successfully! I\'ll reply within 24 hours.';
        feedbackDiv.style.color = '#10b981';
      }
      contactForm.reset();
      setTimeout(() => {
        if (feedbackDiv) feedbackDiv.innerHTML = '';
      }, 4000);
    }
  });
}

// ========== SKILL FILTER ==========
function initSkillFilter() {
  const skillFilter = document.getElementById('skillFilter');
  const resetSkillsBtn = document.getElementById('resetSkillsBtn');
  const allSkills = document.querySelectorAll('.skill-item');
  
  if (skillFilter) {
    skillFilter.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      allSkills.forEach(skill => {
        const text = skill.textContent.toLowerCase();
        skill.style.display = text.includes(query) ? 'inline-block' : 'none';
      });
    });
  }
  
  if (resetSkillsBtn) {
    resetSkillsBtn.addEventListener('click', () => {
      if (skillFilter) skillFilter.value = '';
      allSkills.forEach(skill => skill.style.display = 'inline-block');
    });
  }
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========== INTERACTIVE UNIVERSE BACKGROUND ==========
function initUniverseBackground() {
  const canvas = document.getElementById('universeCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  // Stars array
  const stars = [];
  const numStars = 300;
  
  // Planets array
  const planets = [
    { x: 0.2, y: 0.3, radius: 25, speed: 0.0005, angle: 0, color: '#ff6b6b', glow: '#ff6b6b' },
    { x: 0.7, y: 0.6, radius: 35, speed: 0.0003, angle: 0, color: '#4ecdc4', glow: '#4ecdc4' },
    { x: 0.5, y: 0.8, radius: 20, speed: 0.0007, angle: 0, color: '#ffe66d', glow: '#ffe66d' },
    { x: 0.85, y: 0.2, radius: 28, speed: 0.0004, angle: 0, color: '#a78bfa', glow: '#a78bfa' },
    { x: 0.1, y: 0.7, radius: 18, speed: 0.0006, angle: 0, color: '#f43f5e', glow: '#f43f5e' }
  ];
  
  // Shooting stars
  let shootingStars = [];
  
  // Initialize stars
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: 0.005 + Math.random() * 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    });
  }
  
  // Create shooting star
  function createShootingStar() {
    if (Math.random() < 0.005) { // 0.5% chance per frame
      shootingStars.push({
        x: Math.random(),
        y: Math.random() * 0.5,
        length: 80,
        speed: 0.008,
        alpha: 0.8
      });
    }
  }
  
  // Animation variables
  let time = 0;
  
  function animate() {
    if (!ctx) return;
    
    time += 0.01;
    
    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    // Draw stars with twinkling
    stars.forEach(star => {
      const twinkle = Math.sin(star.twinklePhase + time * star.twinkleSpeed) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * twinkle})`;
      ctx.fill();
    });
    
    // Draw and update planets with orbit motion
    planets.forEach(planet => {
      planet.angle += planet.speed;
      
      // Orbital motion
      const orbitRadiusX = 0.08;
      const orbitRadiusY = 0.05;
      const centerX = planet.x;
      const centerY = planet.y;
      const orbitX = Math.sin(planet.angle) * orbitRadiusX;
      const orbitY = Math.cos(planet.angle * 0.7) * orbitRadiusY;
      
      const px = (centerX + orbitX) * width;
      const py = (centerY + orbitY) * height;
      
      // Planet glow
      ctx.beginPath();
      ctx.arc(px, py, planet.radius + 4, 0, Math.PI * 2);
      ctx.fillStyle = `${planet.color}20`;
      ctx.fill();
      
      // Planet body
      ctx.beginPath();
      ctx.arc(px, py, planet.radius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(px - 5, py - 5, 2, px, py, planet.radius);
      gradient.addColorStop(0, planet.color);
      gradient.addColorStop(1, `${planet.color}aa`);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Planet highlight
      ctx.beginPath();
      ctx.arc(px - 3, py - 3, planet.radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fill();
    });
    
    // Draw shooting stars
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += s.speed;
      s.y += s.speed * 0.3;
      s.alpha -= 0.01;
      
      if (s.x > 1 || s.y > 1 || s.alpha <= 0) {
        shootingStars.splice(i, 1);
        continue;
      }
      
      ctx.beginPath();
      ctx.moveTo(s.x * width, s.y * height);
      ctx.lineTo((s.x - s.length / width) * width, (s.y - s.length * 0.3 / height) * height);
      ctx.strokeStyle = `rgba(255, 255, 200, ${s.alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    createShootingStar();
    requestAnimationFrame(animate);
  }
  
  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
}

// ========== JQUERY INTERACTIONS ==========
$(document).ready(function() {
  // Toggle archived projects
  $('#toggleExtraProjects').on('click', function() {
    $('#hiddenProjectsArea').slideToggle(400);
    const isVisible = $('#hiddenProjectsArea').is(':visible');
    $(this).html(isVisible ? '<i class="fas fa-minus-circle"></i> Hide archived projects' : '<i class="fas fa-plus-circle"></i> Show archived projects');
  });
  
  // Send button hover effect
  $('.send-btn').hover(
    function() { $(this).html('<i class="fas fa-paper-plane"></i> Send message ✨'); },
    function() { $(this).html('<i class="fas fa-paper-plane"></i> Send Message'); }
  );
  
  // Nav active class on click
  $('.nav-links a').on('click', function() {
    $('.nav-links a').removeClass('active-nav');
    $(this).addClass('active-nav');
  });
  
  // Fade in animation for skill items
  $('.skill-item').each(function(i) {
    $(this).delay(i * 30).fadeIn(400);
  });
  
  // Contact message hover effect
  $('.contact-message').hover(
    function() { $(this).find('p').first().html('💜 Ready to create something amazing together? Let\'s talk! 💜'); },
    function() { $(this).find('p').first().html('Available for freelance collaborations, speaking engagements, and creative projects. I\'d love to bring your ideas to life.'); }
  );
});

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', function() {
  renderProjects();
  renderArchived();
  initFilterButtons();
  initDarkMode();
  initPersonalization();
  initFormValidation();
  initSkillFilter();
  initSmoothScroll();
  initUniverseBackground();
});