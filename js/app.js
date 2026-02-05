// ===== FreeGym Pro - Ultimate Fitness App =====

// 🎯 بيانات التمارين مع فيديوهات شغالة
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
        video: "videos/squat.mp4", // استخدام فيديو موجود كـdemo
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
        video: "videos/plank.mp4",
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
        video: "videos/squat.mp4",
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
        video: "videos/squat.mp4",
        icon: "📉",
        steps: [
            "ضع يديك على حافتين متوازيتين (كرسيين)',
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
        video: "videos/plank.mp4",
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
        video: "videos/bicep.mp4",
        icon: "💪",
        steps: [
            "قف مع دمبل في كل يد (أو أي وزن متاح)',
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
        video: "videos/squat.mp4",
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
        video: "videos/plank.mp4",
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
    // الأسبوع 1: الأساسيات (سهل)
    ...Array.from({ length: 7 }, (_, i) => {
        const day = i + 1;
        const workouts = [
            { name: 'يوم الضغط', type: 'push', exercises: ['Push-ups'], sets: '3x10' },
            { name: 'يوم البطن', type: 'core', exercises: ['Plank'], sets: '3x30s' },
            { name: 'راحة نشطة', type: 'rest', exercises: ['مشي'], sets: '20min' },
            { name: 'يوم الأرجل', type: 'legs', exercises: ['Squats'], sets: '3x15' },
            { name: 'يوم الذراع', type: 'arms', exercises: ['Bicep Curls'], sets: '3x12' },
            { name: 'تمرين كامل', type: 'full', exercises: ['Push-ups', 'Squats'], sets: '3x10' },
            { name: 'يوم راحة', type: 'rest', exercises: ['استرخاء'], sets: '-' }
        ];
        return {
            day,
            ...workouts[i],
            week: 1,
            color: '#ff6b6b'
        };
    }),
    // الأسبوع 2: بناء القوة (متوسط)
    ...Array.from({ length: 7 }, (_, i) => {
        const day = i + 8;
        const workouts = [
            { name: 'صدر متقدم', type: 'push', exercises: ['Push-ups', 'Dips'], sets: '4x12' },
            { name: 'بطن قوي', type: 'core', exercises: ['Plank', 'Leg Raises'], sets: '4x40s' },
            { name: 'HIIT', type: 'cardio', exercises: ['Mountain Climbers'], sets: '20min' },
            { name: 'أرجل القوة', type: 'legs', exercises: ['Squats', 'Lunges'], sets: '4x15' },
            { name: 'أذرع حديدية', type: 'arms', exercises: ['Bicep Curls'], sets: '4x15' },
            { name: 'تمرين مكثف', type: 'full', exercises: ['Push-ups', 'Squats', 'Plank'], sets: '4x12' },
            { name: 'استشفاء', type: 'rest', exercises: ['تمدد'], sets: '30min' }
        ];
        return {
            day,
            ...workouts[i],
            week: 2,
            color: '#ffd93d'
        };
    }),
    // الأسبوع 3: التحمل (صعب)
    ...Array.from({ length: 7 }, (_, i) => {
        const day = i + 15;
        const workouts = [
            { name: 'صدر التحمل', type: 'push', exercises: ['Push-ups', 'Dips'], sets: '5x15' },
            { name: 'بطن الصخر', type: 'core', exercises: ['Plank', 'Leg Raises', 'Mountain Climbers'], sets: '5x45s' },
            { name: 'كارديو', type: 'cardio', exercises: ['قفز'], sets: '25min' },
            { name: 'أرجل محارب', type: 'legs', exercises: ['Squats', 'Lunges'], sets: '5x20' },
            { name: 'تدمير الأذرع', type: 'arms', exercises: ['Bicep Curls'], sets: '5x20' },
            { name: 'تمرين قاتل', type: 'full', exercises: ['الكل'], sets: '5x15' },
            { name: 'استرخاء', type: 'rest', exercises: ['يوغا'], sets: '40min' }
        ];
        return {
            day,
            ...workouts[i],
            week: 3,
            color: '#6bcf7f'
        };
    }),
    // الأسبوع 4: التقنية والقوة (برو)
    ...Array.from({ length: 7 }, (_, i) => {
        const day = i + 22;
        const workouts = [
            { name: 'صدر المحترف', type: 'push', exercises: ['Push-ups', 'Dips'], sets: '6x20' },
            { name: 'بطن فولاذي', type: 'core', exercises: ['Plank', 'Leg Raises'], sets: '6x60s' },
            { name: 'HIIT برو', type: 'cardio', exercises: ['Mountain Climbers'], sets: '30min' },
            { name: 'أرجل أسطورية', type: 'legs', exercises: ['Squats', 'Lunges'], sets: '6x25' },
            { name: 'أذرع ضخمة', type: 'arms', exercises: ['Bicep Curls'], sets: '6x25' },
            { name: 'تحدي نهائي', type: 'full', exercises: ['الكل'], sets: '6x20' },
            { name: 'تتويج 🏆', type: 'rest', exercises: ['احتفل!'], sets: '🎉' }
        ];
        return {
            day,
            ...workouts[i],
            week: 4,
            color: '#4ecdc4'
        };
    })
];

// 🏆 الإنجازات
const achievements = [
    { id: 1, icon: '🌟', title: 'البداية', desc: 'أكمل أول يوم', condition: () => state.completedDays.length >= 1 },
    { id: 2, icon: '🔥', title: 'على النار', desc: 'أكمل 7 أيام', condition: () => state.completedDays.length >= 7 },
    { id: 3, icon: '💪', title: 'صانع العضلات', desc: 'أكمل 15 يوم', condition: () => state.completedDays.length >= 15 },
    { id: 4, icon: '🏆', title: 'المحترف', desc: 'أكمل 30 يوم', condition: () => state.completedDays.length >= 30 },
    { id: 5, icon: '⚡', title: 'البرق', desc: '5 أيام متتالية', condition: () => state.streak >= 5 },
    { id: 6, icon: '🎯', title: 'المنضبط', desc: '10 أيام متتالية', condition: () => state.streak >= 10 }
];

// 💾 حالة التطبيق
const state = {
    completedDays: JSON.parse(localStorage.getItem('freegym_days') || '[]'),
    totalWorkouts: parseInt(localStorage.getItem('freegym_workouts') || '0'),
    totalMinutes: parseInt(localStorage.getItem('freegym_minutes') || '0'),
    streak: parseInt(localStorage.getItem('freegym_streak') || '0'),
    lastWorkout: localStorage.getItem('freegym_last')
};

// ===== DOM Elements =====
const exercisesGrid = document.getElementById('exercises-grid');
const programGrid = document.getElementById('program-grid');
const achievementsGrid = document.getElementById('achievements-grid');
const modal = document.getElementById('exercise-modal');
const modalVideo = document.getElementById('modal-video');
const progressCircle = document.getElementById('progress-circle');

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    renderExercises();
    renderProgram();
    renderAchievements();
    updateStats();
    updateProgress();
    setupEventListeners();
    animateNumbers();
});

// ===== Canvas Background =====
function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
    }));
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== Render Functions =====
function renderExercises(filter = 'all') {
    const filtered = filter === 'all' ? exercises : exercises.filter(e => e.muscle === filter);
    
    exercisesGrid.innerHTML = filtered.map(ex => `
        <div class="exercise-card" onclick="openModal(${ex.id})" data-aos="fade-up">
            <div class="exercise-thumb">
                <span class="thumb-icon">${ex.icon}</span>
                <span class="play-btn">▶</span>
            </div>
            <div class="exercise-info">
                <span class="exercise-tag">${ex.muscleAr}</span>
                <h3 class="exercise-name">${ex.name}</h3>
                <p class="exercise-en">${ex.nameEn}</p>
                <div class="exercise-meta">
                    <span class="diff-badge ${ex.difficulty}">${ex.difficultyAr}</span>
                    <span>▶ فيديو</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProgram() {
    programGrid.innerHTML = program.map(day => {
        const isCompleted = state.completedDays.includes(day.day);
        return `
            <div class="day-cell ${isCompleted ? 'completed' : ''}" onclick="toggleDay(${day.day})">
                <span class="day-num">${day.day}</span>
                <span class="day-label">${day.name.substring(0, 4)}</span>
            </div>
        `;
    }).join('');
}

function renderAchievements() {
    achievementsGrid.innerHTML = achievements.map(ach => {
        const unlocked = ach.condition();
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-title">${ach.title}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
        `;
    }).join('');
}

function updateStats() {
    document.getElementById('stat-workouts').textContent = state.totalWorkouts;
    document.getElementById('stat-days').textContent = state.completedDays.length;
    document.getElementById('stat-minutes').textContent = state.totalMinutes;
    document.getElementById('stat-streak').textContent = state.streak;
}

function updateProgress() {
    const completed = state.completedDays.length;
    const percentage = (completed / 30) * 100;
    const circumference = 339.292;
    const offset = circumference - (percentage / 100) * circumference;
    
    if (progressCircle) {
        progressCircle.style.strokeDashoffset = offset;
    }
    
    document.getElementById('progress-percent').textContent = Math.round(percentage) + '%';
}

// ===== Event Handlers =====
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExercises(btn.dataset.filter);
        });
    });
    
    // Modal
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Nav active
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-item');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Modal Functions =====
function openModal(id) {
    const ex = exercises.find(e => e.id === id);
    if (!ex) return;
    
    document.getElementById('modal-tag').textContent = ex.muscleAr;
    document.getElementById('modal-title').textContent = ex.name;
    document.getElementById('modal-subtitle').textContent = ex.nameEn;
    document.getElementById('modal-difficulty').textContent = ex.difficultyAr;
    document.getElementById('modal-muscle').textContent = ex.muscleAr;
    document.getElementById('modal-desc').textContent = ex.description;
    
    document.getElementById('modal-steps-list').innerHTML = ex.steps
        .map(step => `<li>${step}</li>`).join('');
    
    modalVideo.querySelector('source').src = ex.video;
    modalVideo.load();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalVideo.pause();
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
        
        // Update streak
        updateStreak();
        
        // Celebration
        confettiEffect();
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
    const lastWorkout = state.lastWorkout ? new Date(state.lastWorkout).toDateString() : null;
    
    if (!lastWorkout) {
        state.streak = 1;
    } else if (lastWorkout === today) {
        // Already worked out today
    } else {
        const lastDate = new Date(state.lastWorkout);
        const todayDate = new Date();
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            state.streak++;
        } else if (diffDays > 1) {
            state.streak = 1;
        }
    }
}

function confettiEffect() {
    const btn = event.target.closest('.day-cell');
    if (btn) {
        btn.style.transform = 'scale(1.1)';
        btn.style.boxShadow = '0 0 30px var(--success)';
        setTimeout(() => {
            btn.style.transform = '';
            btn.style.boxShadow = '';
        }, 300);
    }
}

function animateNumbers() {
    const nums = document.querySelectorAll('.h-stat-num[data-target]');
    nums.forEach(num => {
        const target = parseInt(num.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                num.textContent = target;
                clearInterval(timer);
            } else {
                num.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== Global Exports =====
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleDay = toggleDay;
