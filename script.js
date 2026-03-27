// Data loaded from data.js

// --- Countdown logic ---
function initCountdown() {
    // March 28 2026, 19:30:00 (7:30 PM)
    const targetDate = new Date('March 28, 2026 19:30:00').getTime();

    const dEl = document.getElementById('days');
    const hEl = document.getElementById('hours');
    const mEl = document.getElementById('mins');
    const sEl = document.getElementById('secs');
    
    if(!dEl) return;

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            dEl.innerText = '00'; hEl.innerText = '00'; mEl.innerText = '00'; sEl.innerText = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dEl.innerText = days.toString().padStart(2, '0');
        hEl.innerText = hours.toString().padStart(2, '0');
        mEl.innerText = minutes.toString().padStart(2, '0');
        sEl.innerText = seconds.toString().padStart(2, '0');
    }, 1000);
}


// --- Interaction Logic: 3D Tilt Effect ---
function setupTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card, .team-card, .player-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -20; // Max 20deg
            const rotateY = ((x - centerX) / centerX) * 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            
            // Pop-out effects for internal elements
            const popElements = card.querySelectorAll('.team-logo, .team-name, .player-card-info, .stat-icon');
            popElements.forEach(el => {
                el.style.transform = `translateZ(60px)`;
                el.style.transition = 'transform 0.1s ease-out';
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            
            const popElements = card.querySelectorAll('.team-logo, .team-name, .player-card-info, .stat-icon');
            popElements.forEach(el => {
                el.style.transform = `translateZ(0px)`;
                el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            });

            setTimeout(() => {
                card.style.transition = '';
            }, 600);
        });
    });
}

// --- Render Functions ---

function renderTeams() {
    const container = document.getElementById('teams-container');
    if(!container) return;

    let html = '';
    TEAMS.forEach(team => {
        // Add dynamic CSS variable for hover colors
        const logoClass = team.id === 'srh' ? 'team-logo srh-fire-anim' : 'team-logo';
        html += `
            <a href="team.html?id=${team.id}" class="team-card ${team.id}" 
               style="--btn-color: ${team.colors.primary};"
               onmouseover="this.style.borderColor='${team.colors.primary}'; this.style.boxShadow='0 10px 40px ${team.colors.primary}40'"
               onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.5)'">
                <img src="${team.logo}" alt="${team.name}" class="${logoClass}">
                <h3 class="team-name">${team.shortName}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${team.name}</p>
            </a>
        `;
    });
    container.innerHTML = html;
}

function renderFixtures(fixtures, containerId = 'fixtures-container') {
    const container = document.getElementById(containerId);
    if(!container) return;

    let html = '';
    fixtures.forEach(match => {
        const homeTeam = TEAMS.find(t => t.shortName === match.home) || TEAMS[0];
        const awayTeam = TEAMS.find(t => t.shortName === match.away) || TEAMS[1];

        html += `
            <div class="fixture-card tilt-card">
                <div class="fixture-teams">
                    <img src="${homeTeam.logo}" style="width: 40px; height: 40px; object-fit: contain;">
                    <span>${match.home}</span>
                    <span class="fixture-vs">VS</span>
                    <span>${match.away}</span>
                    <img src="${awayTeam.logo}" style="width: 40px; height: 40px; object-fit: contain;">
                </div>
                <div class="fixture-details">
                    <p>📅 ${match.date}</p>
                    <p>📍 ${match.venue}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function initPrediction() {
    const btn = document.getElementById('repredict-btn');
    if(!btn) return;
    
    btn.addEventListener('click', predictWinner);
    predictWinner(); // Auto predict on load
}

function predictWinner() {
    const nameEl = document.getElementById('predicted-name');
    const probEl = document.getElementById('win-prob');
    const fillEl = document.getElementById('prediction-fill');
    const wrapper = document.querySelector('.team-logo-wrapper');
    
    // Reset state
    wrapper.classList.add('skeleton');
    wrapper.innerHTML = '';
    nameEl.textContent = 'Analyzing Model...';
    fillEl.style.width = '0%';
    probEl.textContent = '--%';

    setTimeout(() => {
        // Pick random team for demo purposes
        const randomTeam = TEAMS[Math.floor(Math.random() * TEAMS.length)];
        const prob = Math.floor(Math.random() * (45 - 20 + 1) + 20); // 20-45% prob

        wrapper.classList.remove('skeleton');
        wrapper.innerHTML = `<img src="${randomTeam.logo}" alt="">`;
        wrapper.style.borderColor = randomTeam.colors.primary;
        wrapper.style.boxShadow = `0 0 30px ${randomTeam.colors.primary}60`;
        
        nameEl.textContent = randomTeam.name;
        nameEl.style.color = randomTeam.colors.primary;

        fillEl.style.width = prob + '%';
        fillEl.style.background = `linear-gradient(90deg, ${randomTeam.colors.primary}, ${randomTeam.colors.secondary})`;
        probEl.textContent = prob + '%';

    }, 1500);
}

// --- Team Detail Page Logic ---
function loadTeamDetails() {
    const params = new URLSearchParams(window.location.search);
    let teamId = params.get('id');
    
    if(!teamId) teamId = 'csk'; // Default fallback

    const team = TEAMS.find(t => t.id === teamId);
    if(!team) return;

    // Set colors
    document.documentElement.style.setProperty('--team-primary', team.colors.primary);
    document.documentElement.style.setProperty('--team-secondary', team.colors.secondary);
    
    let extraClass = team.id === 'srh' ? 'srh-fire-anim' : '';

    document.getElementById('team-bg-logo-img').src = team.logo;
    document.getElementById('team-bg-logo-img').className = `team-bg-logo ${extraClass}`;
    document.getElementById('team-hero-logo').src = team.logo;
    document.getElementById('team-hero-logo').className = `team-logo-hero ${extraClass}`; // Apply class here
    document.getElementById('team-hero-name').textContent = team.name;
    document.getElementById('team-hero-stadium').textContent = team.stadium;
    document.title = `${team.name} | IPL 2026`;

    // Render Squad
    const squadGrid = document.getElementById('squad-grid');
    let squadHtml = '';
    team.squad.forEach(player => {
        squadHtml += `
            <div class="player-card">
                <div class="player-img-wrapper">
                    <img src="${player.img}" alt="${player.name}" onerror="this.src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png'">
                </div>
                <div class="player-card-info">
                    <h3>${player.name}</h3>
                    <p style="color: ${team.colors.primary}">${player.role}</p>
                </div>
            </div>
        `;
    });
    squadGrid.innerHTML = squadHtml;

    // Render Records & Ground
    document.getElementById('rec-titles').textContent = team.records.titles;
    document.getElementById('rec-score').textContent = team.records.highest;
    document.getElementById('rec-player').textContent = team.records.best;
    document.getElementById('rec-win').textContent = team.records.win;
    
    document.getElementById('ground-name').textContent = team.stadium;
    document.getElementById('ground-location').textContent = team.location;

    // Render Fixtures for team
    const teamFixtures = FIXTURES.filter(f => f.home === team.shortName || f.away === team.shortName);
    
    // If no fixtures naturally match, generate mock ones
    if (teamFixtures.length === 0) {
        teamFixtures.push({ home: team.shortName, away: 'MI', date: '5 Apr, 7:30 PM', venue: team.location });
        teamFixtures.push({ home: 'CSK', away: team.shortName, date: '10 Apr, 7:30 PM', venue: 'Chennai' });
    }

    renderFixtures(teamFixtures, 'team-fixtures-container');
    
    // Setup tilt on newly injected elements
    setupTiltEffect();
}

// --- Global Initialization ---
document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if(window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Only run if on homepage
    if(document.getElementById('teams-container')) {
        initCountdown();
        renderTeams();
        renderFixtures(FIXTURES);
        initPrediction();
        
        // Setup GSAP Animations
        if(typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.from('.gsap-reveal', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Animate team cards on scroll
            gsap.from('.team-card', {
                scrollTrigger: {
                    trigger: '.teams-section',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1
            });
            
            // Stats cards
            gsap.from('.stat-card', {
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 80%',
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1
            });
        }
    }

    // Delay tilt initialization slightly to allow DOM to render
    setTimeout(setupTiltEffect, 100);
});
