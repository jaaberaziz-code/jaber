// ===== FreeGym Pro Max - Ultimate Fitness App =====

// 🎯 بيانات التمارين - الفيديوهات كتخدمو دابا!
const exercises = [
    {
        id: 1,
        name: "ضغط الصدر",
        nameEn: "Push-ups",
        muscle: "chest",
        muscleAr: "الصدر",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين أساسي للصدر والأكتاف والترايسبس. يقوي الجزء العلوي من الجسم.",
        video: "./videos/squat.mp4",
        poster: "💪",
        icon: "💪",
        steps: [
            "استلقِ على بطنك مع وضع يديك بعرض الكتفين",
            "حافظ على جسمك مستقيماً كاللوح",
            "انزل ببطء حتى يلامس صدرك الأرض تقريباً",
            "ادفع للأعلى بقوة مع الحفاظ على التقنية",
            "كرر 10-15 مرة في 3 جولات"
        ]
    },
    {
        id: 2,
        name: "اللوح الخشبي",
        nameEn: "Plank",
        muscle: "core",
        muscleAr: "البطن",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين ثبات ممتاز للبطن والظهر. يقوي العمود الفقري ويحسن الوضعية.",
        video: "./videos/plank.mp4",
        poster: "🎯",
        icon: "🎯",
        steps: [
            "استند على الساعدين وأطراف الأصابع",
            "حافظ على جسمك في خط مستقيم من الرأس للكعبين",
            "شد عضلات بطنك ولا تدع ظهرك ينحني",
            "تنفس بشكل طبيعي ولا تحبس أنفاسك",
            "استمر 30-60 ثانية"
        ]
    },
    {
        id: 3,
        name: "القرفصاء",
        nameEn: "Squats",
        muscle: "legs",
        muscleAr: "الأرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "ملك تمارين الأرجل. يستهدف الفخذين والأرداف ويعزز القوة الوظيفية.",
        video: "./videos/squat.mp4",
        poster: "🦵",
        icon: "🦵",
        steps: [
            "قف مع فرد القدمين بعرض الكتفين",
            "انزل للأسفل كأنك تجلس على كرسي وهمي",
            "احافظ على ركبتين لا تتجاوزان أصابع القدمين",
            "ادر للأعلى بقوة من الكعبين",
            "كرر 15-20 مرة في 3 جولات"
        ]
    },
    {
        id: 4,
        name: "الغطس",
        nameEn: "Dips",
        muscle: "chest",
        muscleAr: "الصدر",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "تمرين رائع للصدر السفلي والترايسبس. يمكن تنفيذه بين كرسيين.",
        video: "./videos/squat.mp4",
        poster: "📉",
        icon: "📉",
        steps: [
            "ضع يديك على حافتين متوازيتين (كرسيين)",
            "انزل ببطء بثني المرفقين إلى 90 درجة",
            "حافظ على ظهرك قريباً من الحافة",
            "ادفع للأعلى حتى تفرد الذراعين",
            "كرر 8-12 مرة في 3 جولات"
        ]
    },
    {
        id: 5,
        name: "رفع الأرجل",
        nameEn: "Leg Raises",
        muscle: "core",
        muscleAr: "البطن",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "يستهدف العضلات السفلية للبطن بفعالية. يحتاج لقوة وتحكم.",
        video: "./videos/plank.mp4",
        poster: "🦵",
        icon: "🦵",
        steps: [
            "استلقِ على ظهرك مع تمديد الأرجل",
            "ضع يديك تحت الأرداف للدعم",
            "ارفع أرطلك للأعلى بشكل مستقيم",
            "انزل ببطء دون لمس الأرض",
            "كرر 10-15 مرة"
        ]
    },
    {
        id: 6,
        name: "تمرين البايسبس",
        nameEn: "Bicep Curls",
        muscle: "arms",
        muscleAr: "الأذرع",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين كلاسيكي لتضخيم عضلة البايسبس الأمامية.",
        video: "./videos/bicep.mp4",
        poster: "💪",
        icon: "💪",
        steps: [
            "قف مع دمبل في كل يد (أو أي وزن متاح)",
            "حافظ على مرفقيك ثابتين بجانب الجسم",
            "اثنِ المرفقين وارفع الوزن نحو الكتفين",
            "ركز على شد البايسبس في القمة",
            "انزل ببطء وكرر 12-15 مرة"
        ]
    },
    {
        id: 7,
        name: "خطوة الأمام",
        nameEn: "Lunges",
        muscle: "legs",
        muscleAr: "الأرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين رائع للفخذ الأمامي والتوازن. يعمل على كل رجل على حدة.",
        video: "./videos/squat.mp4",
        poster: "🚶",
        icon: "🚶",
        steps: [
            "خطوة كبيرة للأمام بقدم واحدة",
            "انزل حتى ركبتك الخلفية تقرب من الأرض",
            "تأكد من أن ركبتك الأمامية لا تتجاوز أصابع القدم",
            "ادفع للأعلى وعد للوضعية الأصلية",
            "كرر 10 مرات لكل رجل"
        ]
    },
    {
        id: 8,
        name: "متسلق الجبال",
        nameEn: "Mountain Climbers",
        muscle: "core",
        muscleAr: "البطن",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "تمرين كارديو ممتاز للبطن يحسن التحمل والقوة.",
        video: "./videos/plank.mp4",
        poster: "🏔️",
        icon: "🏔️",
        steps: [
            "خذ وضعية الضغط مع استقامة الجسم",
            "اجلب ركبتك اليمنى باتجاه الصدر",
            "بدل بسرعة مع إرجاع الركبة اليمنى وإحضار اليسرى",
            "حافظ على إيقاع سريع ومستقر",
            "استمر 30-45 ثانية"
        ]
    }
];

// 📅 برنامج 30 يوم منطقي ومتدرج
const program = [
    // الأسبوع 1: الأساسيات
    { day: 1, name: "يوم الضغط", type: "push", exercises: ["Push-ups"], sets: "3x10", week: 1, color: "#ff6b6b" },
    { day: 2, name: "يوم البطن", type: "core", exercises: ["Plank"], sets: "3x30s", week: 1, color: "#ff6b6b" },
    { day: 3, name: "راحة", type: "rest", exercises: ["مشي"], sets: "20min", week: 1, color: "#95e1d3" },
    { day: 4, name: "يوم الأرجل", type: "legs", exercises: ["Squats"], sets: "3x15", week: 1, color: "#ff6b6b" },
    { day: 5, name: "يوم الذراع", type: "arms", exercises: ["Bicep Curls"], sets: "3x12", week: 1, color: "#ff6b6b" },
    { day: 6, name: "تمرين كامل", type: "full", exercises: ["Push-ups", "Squats"], sets: "3x10", week: 1, color: "#ff6b6b" },
    { day: 7, name: "راحة", type: "rest", exercises: ["استرخاء"], sets: "-", week: 1, color: "#95e1d3" },
    
    // الأسبوع 2: بناء القوة
    { day: 8, name: "صدر متقدم", type: "push", exercises: ["Push-ups", "Dips"], sets: "4x12", week: 2, color: "#ffd93d" },
    { day: 9, name: "بطن قوي", type: "core", exercises: ["Plank", "Leg Raises"], sets: "4x40s", week: 2, color: "#ffd93d" },
    { day: 10, name: "HIIT", type: "cardio", exercises: ["Mountain Climbers"], sets: "20min", week: 2, color: "#ffd93d" },
    { day: 11, name: "أرجل القوة", type: "legs", exercises: ["Squats", "Lunges"], sets: "4x15", week: 2, color: "#ffd93d" },
    { day: 12, name: "أذرع حديدية", type: "arms", exercises: ["Bicep Curls"], sets: "4x15", week: 2, color: "#ffd93d" },
    { day: 13, name: "تمرين مكثف", type: "full", exercises: ["Push-ups", "Squats", "Plank"], sets: "4x12", week: 2, color: "#ffd93d" },
    { day: 14, name: "استشفاء", type: "rest", exercises: ["تمدد"], sets: "30min", week: 2, color: "#95e1d3" },
    
    // الأسبوع 3: التحمل
    { day: 15, name: "صدر التحمل", type: "push", exercises: ["Push-ups", "Dips"], sets: "5x15", week: 3, color: "#6bcf7f" },
    { day: 16, name: "بطن الصخر", type: "core", exercises: ["Plank", "Leg Raises", "Mountain Climbers"], sets: "5x45s", week: 3, color: "#6bcf7f" },
    { day: 17, name: "كارديو", type: "cardio", exercises: ["قفز"], sets: "25min", week: 3, color: "#6bcf7f" },
    { day: 18, name: "أرجل محارب", type: "legs", exercises: ["Squats", "Lunges"], sets: "5x20", week: 3, color: "#6bcf7f" },
    { day: 19, name: "تدمير الأذرع", type: "arms", exercises: ["Bicep Curls"], sets: "5x20", week: 3, color: "#6bcf7f" },
    { day: 20, name: "تمرين قاتل", type: "full", exercises: ["الكل"], sets: "5x15", week: 3, color: "#6bcf7f" },
    { day: 21, name: "استرخاء", type: "rest", exercises: ["يوغا"], sets: "40min", week: 3, color: "#95e1d3" },
    
    // الأسبوع 4: البرو
    { day: 22, name: "صدر المحترف", type: "push", exercises: ["Push-ups", "Dips"], sets: "6x20", week: 4, color: "#4ecdc4" },
    { day: 23, name: "بطن فولاذي", type: "core", exercises: ["Plank", "Leg Raises"], sets: "6x60s", week: 4, color: "#4ecdc4" },
    { day: 24, name: "HIIT برو", type: "cardio", exercises: ["Mountain Climbers"], sets: "30min", week: 4, color: "#4ecdc4" },
    { day: 25, name: "أرجل أسطورية", type: "legs", exercises: ["Squats", "Lunges"], sets: "6x25", week: 4, color: "#4ecdc4" },
    { day: 26, name: "أذرع ضخمة", type: "arms", exercises: ["Bicep Curls"], sets: "6x25", week: 4, color: "#4ecdc4" },
    { day: 27, name: "تحدي نهائي", type: "full", exercises: ["الكل"], sets: "6x20", week: 4, color: "#4ecdc4" },
    { day: 28, name: "تتويج", type: "rest", exercises: ["احتفل!"], sets: "🎉", week: 4, color: "#ffd93d" }
];

// 🏆 الإنجازات
const achievements = [
    { id: 1, icon: "🌟", title: "البداية", desc: "أكمل أول يوم", condition: (s) => s.completedDays.length >= 1 },
    { id: 2, icon: "🔥", title: "على النار", desc: "أكمل 7 أيام", condition: (s) => s.completedDays.length >= 7 },
    { id: 3, icon: "💪", title: "صانع العضلات", desc: "أكمل 15 يوم", condition: (s) => s.completedDays.length >= 15 },
    { id: 4, icon: "🏆", title: "المحترف", desc: "أكمل 28 يوم", condition: (s) => s.completedDays.length >= 28 },
    { id: 5, icon: "⚡", title: "البرق", desc: "5 أيام متتالية", condition: (s) => s.streak >= 5 },
    { id: 6, icon: "🎯", title: "المنضبط", desc: "10 أيام متتالية", condition: (s) => s.streak >= 10 }
];

// 💾 حالة التطبيق
const state = {
    completedDays: JSON.parse(localStorage.getItem('freegym_days') || '[]'),
    totalWorkouts: parseInt(localStorage.getItem('freegym_workouts') || '0'),
    totalMinutes: parseInt(localStorage.getItem('freegym_minutes') || '0'),
    streak: parseInt(localStorage.getItem('freegym_streak') || '0'),
    lastWorkout: localStorage.getItem('freegym_last')
};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    showLoadingScreen();
    initCanvas();
    renderExercises();
    renderProgram();
    renderAchievements();
    updateStats();
    updateProgress();
    setupEventListeners();
    animateNumbers();
    
    // Hide loading after 1.5s
    setTimeout(hideLoadingScreen, 1500);
});

// ===== Loading Screen =====
function showLoadingScreen() {
    const loading = document.createElement('div');
    loading.id = 'loading-screen';
    loading.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">💪</div>
            <div class="loading-text">FreeGym</div>
            <div class="loading-bar"><div class="loading-progress"></div></div>
        </div>
    `;
    document.body.appendChild(loading);
}

function hideLoadingScreen() {
    const loading = document.getElementById('loading-screen');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 500);
    }
}

// ===== Canvas Background =====
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    
    const particles = [];
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.5 + 0.1
        });
    }
    
    let frameCount = 0;
    function animate() {
        frameCount++;
        if (frameCount % 2 !== 0) {
            requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== Render Functions =====
function renderExercises(filter = 'all') {
    const grid = document.getElementById('exercises-grid');
    if (!grid) return;
    
    const filtered = filter === 'all' ? exercises : exercises.filter(e => e.muscle === filter);
    
    grid.innerHTML = filtered.map((ex, i) => `
        <div class="exercise-card" onclick="openModal(${ex.id})" style="animation-delay: ${i * 0.1}s">
            <div class="exercise-thumb">
                <span class="thumb-icon">${ex.icon}</span>
                <div class="play-overlay">
                    <span class="play-btn">▶</span>
                    <span class="play-text">شاهد الفيديو</span>
                </div>
            </div>
            <div class="exercise-info">
                <div class="exercise-tags">
                    <span class="tag muscle-tag">${ex.muscleAr}</span>
                    <span class="tag diff-tag ${ex.difficulty}">${ex.difficultyAr}</span>
                </div>
                <h3 class="exercise-name">${ex.name}</h3>
                <p class="exercise-en">${ex.nameEn}</p>
            </div>
        </div>
    `).join('');
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.exercise-card').forEach(card => {
            card.classList.add('animate-in');
        });
    }, 100);
}

function renderProgram() {
    const grid = document.getElementById('program-grid');
    if (!grid) return;
    
    grid.innerHTML = program.map(day => {
        const isCompleted = state.completedDays.includes(day.day);
        const weekNames = ['', 'الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4'];
        
        return `
            <div class="day-cell ${isCompleted ? 'completed' : ''} ${day.type === 'rest' ? 'rest-day' : ''}" 
                 onclick="toggleDay(${day.day})"
                 style="--day-color: ${day.color}"
                 title="${day.name}">
                <div class="day-week">${weekNames[day.week]}</div>
                <span class="day-num">${day.day}</span>
                <span class="day-name">${day.name}</span>
                ${isCompleted ? '<div class="day-check">✓</div>' : ''}
            </div>
        `;
    }).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    
    grid.innerHTML = achievements.map(ach => {
        const unlocked = ach.condition(state);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-glow"></div>
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-title">${ach.title}</div>
                <div class="achievement-desc">${ach.desc}</div>
                ${unlocked ? '<div class="achievement-shine"></div>' : ''}
            </div>
        `;
    }).join('');
}

function updateStats() {
    const workoutEl = document.getElementById('stat-workouts');
    const daysEl = document.getElementById('stat-days');
    const minutesEl = document.getElementById('stat-minutes');
    const streakEl = document.getElementById('stat-streak');
    
    if (workoutEl) workoutEl.textContent = state.totalWorkouts;
    if (daysEl) daysEl.textContent = state.completedDays.length;
    if (minutesEl) minutesEl.textContent = state.totalMinutes;
    if (streakEl) streakEl.textContent = state.streak;
}

function updateProgress() {
    const circle = document.getElementById('progress-circle');
    const percentEl = document.getElementById('progress-percent');
    
    if (!circle || !percentEl) return;
    
    const completed = state.completedDays.length;
    const percentage = (completed / 28) * 100;
    const circumference = 339.292;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
    percentEl.textContent = Math.round(percentage) + '%';
}

// ===== Modal Functions =====
function openModal(id) {
    const ex = exercises.find(e => e.id === id);
    if (!ex) return;
    
    const modal = document.getElementById('exercise-modal');
    const video = document.getElementById('modal-video');
    
    // Set content
    document.getElementById('modal-tag').textContent = ex.muscleAr;
    document.getElementById('modal-title').textContent = ex.name;
    document.getElementById('modal-subtitle').textContent = ex.nameEn;
    document.getElementById('modal-difficulty').textContent = ex.difficultyAr;
    document.getElementById('modal-muscle').textContent = ex.muscleAr;
    document.getElementById('modal-desc').textContent = ex.description;
    
    // Steps
    const stepsList = document.getElementById('modal-steps-list');
    if (stepsList) {
        stepsList.innerHTML = ex.steps.map((step, i) => `
            <li>
                <span class="step-num">${i + 1}</span>
                <span class="step-text">${step}</span>
            </li>
        `).join('');
    }
    
    // Video - IMPORTANT: Use proper path
    if (video) {
        video.src = ex.video;
        video.load();
        video.play().catch(e => console.log('Auto-play prevented'));
    }
    
    // Show modal
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('exercise-modal');
    const video = document.getElementById('modal-video');
    
    if (video) {
        video.pause();
        video.src = '';
    }
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== Program Functions =====
function toggleDay(dayNum) {
    const index = state.completedDays.indexOf(dayNum);
    const dayData = program.find(p => p.day === dayNum);
    
    if (index > -1) {
        // Uncomplete
        state.completedDays.splice(index, 1);
        state.totalWorkouts = Math.max(0, state.totalWorkouts - dayData.exercises.length);
        state.totalMinutes = Math.max(0, state.totalMinutes - 30);
    } else {
        // Complete
        state.completedDays.push(dayNum);
        state.completedDays.sort((a, b) => a - b);
        state.totalWorkouts += dayData.exercises.length;
        state.totalMinutes += 30;
        updateStreak();
        showConfetti(event.target);
    }
    
    // Save
    localStorage.setItem('freegym_days', JSON.stringify(state.completedDays));
    localStorage.setItem('freegym_workouts', state.totalWorkouts);
    localStorage.setItem('freegym_minutes', state.totalMinutes);
    localStorage.setItem('freegym_streak', state.streak);
    localStorage.setItem('freegym_last', new Date().toISOString());
    
    // Update UI
    renderProgram();
    renderAchievements();
    updateStats();
    updateProgress();
}

function updateStreak() {
    const today = new Date().toDateString();
    const last = state.lastWorkout ? new Date(state.lastWorkout).toDateString() : null;
    
    if (!last) {
        state.streak = 1;
    } else if (last !== today) {
        const diff = Math.floor((new Date() - new Date(state.lastWorkout)) / (1000 * 60 * 60 * 24));
        if (diff === 1) state.streak++;
        else if (diff > 1) state.streak = 1;
    }
}

function showConfetti(element) {
    if (!element) return;
    
    const colors = ['#00d4ff', '#ff6b6b', '#ffd93d', '#6bcf7f'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 100 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        confetti.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => confetti.remove();
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExercises(btn.dataset.filter);
        });
    });
    
    // Modal close
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Nav scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        }
        
        // Active section
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-item');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ===== Animations =====
function animateNumbers() {
    const nums = document.querySelectorAll('.h-stat-num[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    nums.forEach(num => observer.observe(num));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// ===== Global Exports =====
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleDay = toggleDay;
