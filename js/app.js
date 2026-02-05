// ===== FreeGym Zero to Expert - Ultimate Endurance Protocol =====

// 🎯 تمارين - غير 3 فيديوهات كاينين (bicep, plank, squat)
const exercises = [
    {
        id: 1,
        name: "ضغط الصدر",
        nameEn: "Push-ups",
        muscle: "chest",
        muscleAr: "الصدر",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين أساسي للصدر والأكتاف والترايسبس.",
        video: "./videos/squat.mp4",
        hasVideo: false, // فيديو تجريبي
        icon: "💪",
        steps: ["استلقِ على بطنك", "ادفع جسمك للأعلى", "انزل ببطء", "كرر 10-15 مرة"]
    },
    {
        id: 2,
        name: "اللوح الخشبي",
        nameEn: "Plank",
        muscle: "core",
        muscleAr: "البطن",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين ثبات للبطن والظهر.",
        video: "./videos/plank.mp4",
        hasVideo: true, // ✅ فيديو حقيقي
        icon: "🎯",
        steps: ["استند على الساعدين", "حافظ على استقامة الجسم", "شد البطن", "استمر 30-60 ثانية"]
    },
    {
        id: 3,
        name: "القرفصاء",
        nameEn: "Squats",
        muscle: "legs",
        muscleAr: "الأرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "ملك تمارين الأرجل.",
        video: "./videos/squat.mp4",
        hasVideo: true, // ✅ فيديو حقيقي
        icon: "🦵",
        steps: ["قف بعرض الكتفين", "انزل كأنك تجلس", "ادر للأعلى", "كرر 15-20 مرة"]
    },
    {
        id: 4,
        name: "الجرى",
        nameEn: "Running",
        muscle: "cardio",
        muscleAr: "كارديو",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "جري للتحمل والقلب.",
        video: "./videos/squat.mp4",
        hasVideo: false,
        icon: "🏃",
        steps: ["ابدأ ببطء", "حافظ على إيقاع", "تنفس بشكل منتظم", "زود السرعة تدريجياً"]
    },
    {
        id: 5,
        name: "البرابيز",
        nameEn: "Burpees",
        muscle: "full",
        muscleAr: "كامل الجسم",
        difficulty: "hard",
        difficultyAr: "صعب",
        description: "تمرين متكامل قوي جداً.",
        video: "./videos/squat.mp4",
        hasVideo: false,
        icon: "🔥",
        steps: ["قف مستقيماً", "انزل لوضعية الضغط", "ادفع واقفز", "كرر بسرعة"]
    },
    {
        id: 6,
        name: "سحب عالي",
        nameEn: "Pull-ups",
        muscle: "back",
        muscleAr: "الظهر",
        difficulty: "hard",
        difficultyAr: "صعب",
        description: "تمرين قوي للظهر.",
        video: "./videos/bicep.mp4",
        hasVideo: false, // فيديو تجريبي (bicep ماشي pullups)
        icon: "🔙",
        steps: ["امسك العقلة", "اسحب جسمك للأعلى", "انزل ببطء", "كرر 5-10 مرات"]
    },
    {
        id: 7,
        name: "الغطس",
        nameEn: "Dips",
        muscle: "chest",
        muscleAr: "الصدر",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "للصدر السفلي والترايسبس.",
        video: "./videos/squat.mp4",
        hasVideo: false,
        icon: "📉",
        steps: ["ضع يديك على حافة", "انزل بثني المرفقين", "ادفع للأعلى", "كرر 8-12 مرة"]
    },
    {
        id: 8,
        name: "خطوة الأمام",
        nameEn: "Lunges",
        muscle: "legs",
        muscleAr: "الأرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "للأرجل والتوازن.",
        video: "./videos/squat.mp4",
        hasVideo: false,
        icon: "🚶",
        steps: ["خطوة للأمام", "انزل للأسفل", "ادر للأعلى", "بدل الأرجل"]
    },
    {
        id: 9,
        name: "الحبل",
        nameEn: "Jump Rope",
        muscle: "cardio",
        muscleAr: "كارديو",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "للتحمل والتنسيق.",
        video: "./videos/plank.mp4",
        hasVideo: false,
        icon: "➰",
        steps: ["امسك الحبل", "اقفز بإيقاع", "حافظ على السرعة", "استمر 5-10 دقائق"]
    },
    {
        id: 10,
        name: "المشي بثقل",
        nameEn: "Ruck March",
        muscle: "full",
        muscleAr: "كامل الجسم",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "مشي مع حقيبة ثقيلة.",
        video: "./videos/squat.mp4",
        hasVideo: false,
        icon: "🎒",
        steps: ["ضع حقيبة 5-10kg", "امشِ بخطوات ثابتة", "حافظ على وضعية مستقيمة", "استمر 30-60 دقيقة"]
    }
];

// 📅 برنامج Zero to Expert - 30 يوم صعب!
const program = [
    // Week 1: Foundation (2 Sessions/Day)
    { day: 1, name: "اليوم 1", session1: "30min Slow Jog", session2: "100 Pushups + 100 Squats", week: 1, color: "#4ade80", sessions: 2 },
    { day: 2, name: "اليوم 2", session1: "45min Brisk Walk", session2: "15min Plank (Accumulated)", week: 1, color: "#4ade80", sessions: 2 },
    { day: 3, name: "اليوم 3", session1: "30min Slow Jog", session2: "5 Rounds: 10 Burpees, 20 Lunges", week: 1, color: "#4ade80", sessions: 2 },
    { day: 4, name: "اليوم 4", session1: "Active Recovery", session2: "Stretch/Walk", week: 1, color: "#95e1d3", sessions: 0 },
    { day: 5, name: "اليوم 5", session1: "40min Run (Steady)", session2: "150 Air Squats", week: 1, color: "#4ade80", sessions: 2 },
    { day: 6, name: "اليوم 6", session1: "45min Walk w/ 5kg", session2: "Max Pushups in 10min", week: 1, color: "#4ade80", sessions: 2 },
    { day: 7, name: "راحة", session1: "Rest", session2: "Rest", week: 1, color: "#95e1d3", sessions: 0 },
    
    // Week 2: The Ramp Up (3 Sessions/Day)
    { day: 8, name: "اليوم 8", session1: "5km Run", session2: "100 Pullups (Total)", session3: "30min Stretching", week: 2, color: "#fbbf24", sessions: 3 },
    { day: 9, name: "اليوم 9", session1: "HIIT: 30s Sprint/30s Rest (20min)", session2: "200 Pushups", session3: "Core Circuit (20min)", week: 2, color: "#fbbf24", sessions: 3 },
    { day: 10, name: "اليوم 10", session1: "45min Ruck (10kg)", session2: "100 Dips", session3: "Leg Mobility", week: 2, color: "#fbbf24", sessions: 3 },
    { day: 11, name: "راحة", session1: "Rest", session2: "Rest", session3: "Rest", week: 2, color: "#95e1d3", sessions: 0 },
    { day: 12, name: "اليوم 12", session1: "6km Run", session2: "Bodyweight Circuit (30min)", session3: "Yoga/Stretch", week: 2, color: "#fbbf24", sessions: 3 },
    { day: 13, name: "اليوم 13", session1: "Hill Sprints (15min)", session2: "200 Squats", session3: "10min Plank", week: 2, color: "#fbbf24", sessions: 3 },
    { day: 14, name: "اليوم 14", session1: "Long Hike (90min)", session2: "Rest", session3: "Foam Roll/Stretch", week: 2, color: "#fbbf24", sessions: 1 },
    
    // Week 3: The Hardening (4 Sessions/Day)
    { day: 15, name: "اليوم 15", session1: "06:00 - 8km Run", session2: "12:00 - Calisthenics: 10 Rounds", session3: "17:00 - Tabata Burpees", session4: "21:00 - Full Body Stretch", week: 3, color: "#fb923c", sessions: 4 },
    { day: 16, name: "اليوم 16", session1: "06:00 - 8km Run", session2: "12:00 - 150 Pullups", session3: "17:00 - HIIT Circuit", session4: "21:00 - Stretch", week: 3, color: "#fb923c", sessions: 4 },
    { day: 17, name: "اليوم 17", session1: "06:00 - 10km Run", session2: "12:00 - 300 Pushups", session3: "17:00 - Burpees/Lunges", session4: "21:00 - Yoga", week: 3, color: "#fb923c", sessions: 4 },
    { day: 18, name: "اليوم 18", session1: "06:00 - 8km Run", session2: "12:00 - 200 Dips", session3: "17:00 - Core Destruction", session4: "21:00 - Stretch", week: 3, color: "#fb923c", sessions: 4 },
    { day: 19, name: "اليوم 19", session1: "06:00 - 12km Run", session2: "12:00 - 500 Squats", session3: "17:00 - HIIT", session4: "21:00 - Foam Roll", week: 3, color: "#fb923c", sessions: 4 },
    { day: 20, name: "اليوم 20", session1: "06:00 - Ruck 10km (15kg)", session2: "12:00 - 400 Pushups", session3: "17:00 - Full Body Circuit", session4: "21:00 - Stretch", week: 3, color: "#fb923c", sessions: 4 },
    { day: 21, name: "راحة كاملة", session1: "FULL REST", session2: "Recovery", week: 3, color: "#95e1d3", sessions: 0 },
    
    // Week 4: Expert Status (5 Sessions/Day - The Hell Week)
    { day: 22, name: "الجحيم 1", session1: "05:00 - 10km Run", session2: "09:00 - 300 Pushups + 100 Pullups", session3: "13:00 - 30min Jump Rope", session4: "17:00 - 400m Lunges", session5: "21:00 - Ice Bath + Stretch", week: 4, color: "#ef4444", sessions: 5 },
    { day: 23, name: "الجحيم 2", session1: "05:00 - 12km Run", session2: "09:00 - 400 Pushups", session3: "13:00 - Boxing Shadow", session4: "17:00 - 500 Squats", session5: "21:00 - Stretch", week: 4, color: "#ef4444", sessions: 5 },
    { day: 24, name: "الجحيم 3", session1: "05:00 - 8km Run", session2: "09:00 - 200 Burpees", session3: "13:00 - 100 Dips", session4: "17:00 - 15min Plank", session5: "21:00 - Recovery", week: 4, color: "#ef4444", sessions: 5 },
    { day: 25, name: "الجحيم 4", session1: "05:00 - Ruck 15km (20kg)", session2: "09:00 - 500 Pushups", session3: "13:00 - Core Circuit", session4: "17:00 - 300 Lunges", session5: "21:00 - Ice Bath", week: 4, color: "#ef4444", sessions: 5 },
    { day: 26, name: "الجحيم 5", session1: "05:00 - 15km Run", session2: "09:00 - 300 Pullups", session3: "13:00 - HIIT 40min", session4: "17:00 - 600 Squats", session5: "21:00 - Stretch", week: 4, color: "#ef4444", sessions: 5 },
    { day: 27, name: "الجحيم 6", session1: "05:00 - 20km Run", session2: "09:00 - 500 Burpees", session3: "13:00 - Full Body", session4: "17:00 - Max Reps", session5: "21:00 - Recovery", week: 4, color: "#ef4444", sessions: 5 },
    { day: 28, name: "اليوم 28", session1: "05:00 - 10km Easy", session2: "09:00 - Light Workout", session3: "13:00 - Mobility", session4: "17:00 - Stretch", week: 4, color: "#fbbf24", sessions: 4 },
    
    // Final Test
    { day: 29, name: "الاستعداد", session1: "Light Jog", session2: "Stretching", session3: "Mental Prep", week: 5, color: "#a855f7", sessions: 2 },
    { day: 30, name: "🏆 الاختبار النهائي", session1: "15km RUN أو 1000 Burpees", session2: "FOR TIME!", week: 5, color: "#fbbf24", sessions: 1, isFinal: true }
];

// 🏆 الإنجازات
const achievements = [
    { id: 1, icon: "🌟", title: "البداية", desc: "أكمل أول يوم", condition: (s) => s.completedDays.length >= 1 },
    { id: 2, icon: "🔥", title: "الأسبوع 1", desc: "أكمل 7 أيام", condition: (s) => s.completedDays.length >= 7 },
    { id: 3, icon: "💪", title: "الأسبوع 2", desc: "أكمل 14 يوم", condition: (s) => s.completedDays.length >= 14 },
    { id: 4, icon: "⚡", title: "الأسبوع 3", desc: "أكمل 21 يوم", condition: (s) => s.completedDays.length >= 21 },
    { id: 5, icon: "🎯", title: "الجحيم", desc: "أكمل الأسبوع 4", condition: (s) => s.completedDays.length >= 28 },
    { id: 6, icon: "🏆", title: "المحترف", desc: "أكمل الاختبار النهائي!", condition: (s) => s.completedDays.includes(30) }
];

// 💾 حالة التطبيق
const state = {
    completedDays: JSON.parse(localStorage.getItem('freegym_days') || '[]'),
    totalWorkouts: parseInt(localStorage.getItem('freegym_workouts') || '0'),
    totalMinutes: parseInt(localStorage.getItem('freegym_minutes') || '0'),
    streak: parseInt(localStorage.getItem('freegym_streak') || '0'),
    lastWorkout: localStorage.getItem('freegym_last'),
    darkMode: localStorage.getItem('freegym_theme') !== 'light'
};

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    showLoadingScreen();
    initCanvas();
    renderExercises();
    renderProgram();
    renderAchievements();
    updateStats();
    updateProgress();
    setupEventListeners();
    animateNumbers();
    
    setTimeout(hideLoadingScreen, 1500);
});

// ===== Theme Toggle =====
function toggleTheme() {
    state.darkMode = !state.darkMode;
    localStorage.setItem('freegym_theme', state.darkMode ? 'dark' : 'light');
    applyTheme();
}

function applyTheme() {
    document.body.classList.toggle('light-mode', !state.darkMode);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = state.darkMode ? '☀️' : '🌙';
}

// ===== Loading Screen =====
function showLoadingScreen() {
    const loading = document.createElement('div');
    loading.id = 'loading-screen';
    loading.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">💪</div>
            <div class="loading-text">Zero to Expert</div>
            <div class="loading-sub">برنامج التحول الشامل</div>
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

// ===== Canvas =====
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
            ctx.fillStyle = state.darkMode 
                ? `rgba(0, 212, 255, ${p.alpha})`
                : `rgba(0, 100, 200, ${p.alpha})`;
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
    
    grid.innerHTML = filtered.map((ex, i) => {
        // إذا عندو فيديو حقيقي، نبين "شاهد الفيديو"
        // إذا ماشي فيديو حقيقي، نبين "فيديو تجريبي" ولا غير الأيقونة
        const videoLabel = ex.hasVideo ? 'شاهد الفيديو' : 'فيديو تجريبي';
        const videoClass = ex.hasVideo ? 'has-video' : 'demo-video';
        
        return `
        <div class="exercise-card ${videoClass}" onclick="openModal(${ex.id})" style="animation-delay: ${i * 0.1}s">
            <div class="exercise-thumb">
                <span class="thumb-icon">${ex.icon}</span>
                <div class="play-overlay">
                    <span class="play-btn">▶</span>
                    <span class="play-text">${videoLabel}</span>
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
    `;
    }).join('');
    
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
        const weekNames = ['', 'الأسبوع 1', 'الأسبوع 2', 'الأسبوع 3', 'الأسبوع 4', 'الاختبار'];
        const sessionText = day.sessions === 0 ? 'راحة' : `${day.sessions} جلسات`;
        
        return `
            <div class="day-cell ${isCompleted ? 'completed' : ''} ${day.isFinal ? 'final-day' : ''} ${day.sessions === 0 ? 'rest-day' : ''}" 
                 onclick="toggleDay(${day.day})"
                 style="--day-color: ${day.color}">
                <div class="day-week">${weekNames[day.week]}</div>
                <span class="day-num">${day.day}</span>
                <span class="day-name">${day.name}</span>
                <span class="day-sessions">${sessionText}</span>
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
    const percentage = (completed / 30) * 100;
    const circumference = 339.292;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
    percentEl.textContent = Math.round(percentage) + '%';
}

// ===== Modal =====
function openModal(id) {
    const ex = exercises.find(e => e.id === id);
    if (!ex) return;
    
    const modal = document.getElementById('exercise-modal');
    const video = document.getElementById('modal-video');
    
    document.getElementById('modal-tag').textContent = ex.muscleAr;
    document.getElementById('modal-title').textContent = ex.name;
    document.getElementById('modal-subtitle').textContent = ex.nameEn;
    document.getElementById('modal-difficulty').textContent = ex.difficultyAr;
    document.getElementById('modal-muscle').textContent = ex.muscleAr;
    document.getElementById('modal-desc').textContent = ex.description;
    
    const stepsList = document.getElementById('modal-steps-list');
    if (stepsList) {
        stepsList.innerHTML = ex.steps.map((step, i) => `
            <li>
                <span class="step-num">${i + 1}</span>
                <span class="step-text">${step}</span>
            </li>
        `).join('');
    }
    
    if (video) {
        video.src = ex.video;
        video.load();
        video.play().catch(e => console.log('Auto-play prevented'));
    }
    
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

// ===== Program Toggle =====
function toggleDay(dayNum) {
    const index = state.completedDays.indexOf(dayNum);
    const dayData = program.find(p => p.day === dayNum);
    
    if (index > -1) {
        state.completedDays.splice(index, 1);
        state.totalWorkouts = Math.max(0, state.totalWorkouts - (dayData.sessions || 0));
        state.totalMinutes = Math.max(0, state.totalMinutes - (dayData.sessions * 30));
    } else {
        state.completedDays.push(dayNum);
        state.completedDays.sort((a, b) => a - b);
        state.totalWorkouts += (dayData.sessions || 0);
        state.totalMinutes += (dayData.sessions * 30);
        updateStreak();
        showConfetti(event.target);
    }
    
    localStorage.setItem('freegym_days', JSON.stringify(state.completedDays));
    localStorage.setItem('freegym_workouts', state.totalWorkouts);
    localStorage.setItem('freegym_minutes', state.totalMinutes);
    localStorage.setItem('freegym_streak', state.streak);
    localStorage.setItem('freegym_last', new Date().toISOString());
    
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
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExercises(btn.dataset.filter);
        });
    });
    
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        
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
    
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
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
window.toggleTheme = toggleTheme;
