// ===== Jaber Pro - Advanced Workout App =====

// 📋 بيانات التمارين مع الفيديوهات
const exercises = [
    {
        id: 1,
        name: "ضغط الصدر",
        nameEn: "Push-ups",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين أساسي للصدر والأكتاف والترايسبس. يمكن تنفيذه في أي مكان بدون معدات.",
        video: "videos/pushup.mp4",
        icon: "💪",
        steps: [
            "استلقِ على بطنك مع وضع يديك على عرض الكتفين",
            "ادفع جسمك للأعلى بشكل مستقيم",
            "انزل ببطء حتى تقرب صدرك من الأرض",
            "كرر الحركة من 10-15 مرة"
        ]
    },
    {
        id: 2,
        name: "سحب عالي",
        nameEn: "Pull-ups",
        muscle: "back",
        muscleAr: "ظهر",
        difficulty: "hard",
        difficultyAr: "صعب",
        description: "تمرين قوي للظهر والبايسبس. يحتاج لعقلة أو بار.",
        video: "videos/pullup.mp4",
        icon: "🔙",
        steps: [
            "امسك العقلة بقبضة متباعدة",
            "اسحب جسمك للأعلى حتى يصل ذقنك فوق العقلة",
            "انزل ببطء مع التحكم",
            "كرر من 5-10 مرات"
        ]
    },
    {
        id: 3,
        name: "قرفصاء",
        nameEn: "Squats",
        muscle: "legs",
        muscleAr: "أرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "ملك تمارين الأرجل. يستهدف الفخذين والأرداف.",
        video: "videos/squat.mp4",
        icon: "🦵",
        steps: [
            "قف مع فرد القدمين على عرض الكتفين",
            "انزل للأسفل كأنك تجلس على كرسي",
            "احافظ على ظهرك مستقيماً",
            "ادر للأعلى وكرر 15-20 مرة"
        ]
    },
    {
        id: 4,
        name: "اللوح الخشبي",
        nameEn: "Plank",
        muscle: "core",
        muscleAr: "بطن",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين ثبات للبطن والوسط. يقوي العمود الفقري.",
        video: "videos/plank.mp4",
        icon: "🎯",
        steps: [
            "استند على الساعدين وأطراف الأصابع",
            "احافظ على جسمك مستقيماً كاللوح",
            "شد بطنك ولا تدع ظهرك ينحني",
            "استمر من 30-60 ثانية"
        ]
    },
    {
        id: 5,
        name: "ضغط الماس",
        nameEn: "Diamond Push-ups",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "ضغط متقدم يستهدف الترايسبس أكثر من الصدر.",
        video: "videos/pushup.mp4",
        icon: "💎",
        steps: [
            "ضع يديك على شكل ماسة تحت صدرك",
            "ادفع جسمك للأعلى",
            "ركز على شد الترايسبس",
            "كرر من 8-12 مرة"
        ]
    },
    {
        id: 6,
        name: "خطوة الأمام",
        nameEn: "Lunges",
        muscle: "legs",
        muscleAr: "أرجل",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين رائع للأرجل والتوازن. يستهدف الفخذ الأمامي.",
        video: "videos/squat.mp4",
        icon: "🚶",
        steps: [
            "خطوة كبيرة للأمام بقدم واحدة",
            "انزل حتى ركبتك الخلفية تقرب من الأرض",
            "ادفع للأعلى وعد للوضعية الأصلية",
            "كرر مع الرجل الأخرى 10 مرات لكل جانب"
        ]
    },
    {
        id: 7,
        name: "غطس",
        nameEn: "Dips",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "تمرين للصدر السفلي والترايسبس. يمكن تنفيذه بين كرسيين.",
        video: "videos/dips.mp4",
        icon: "📉",
        steps: [
            "ضع يديك على حافتين متوازيتين",
            "انزل ببطء بثني المرفقين",
            "ادفع للأعلى حتى تفرد ذراعيك",
            "كرر من 8-12 مرة"
        ]
    },
    {
        id: 8,
        name: "متسلق الجبال",
        nameEn: "Mountain Climbers",
        muscle: "core",
        muscleAr: "بطن",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "تمرين كارديو للبطن يحسن التحمل.",
        video: "videos/plank.mp4",
        icon: "🏔️",
        steps: [
            "خذ وضعية الضغط",
            "اجلب ركبتك اليمنى للصدر",
            "بدل بسرعة مع الركبة اليسرى",
            "استمر لـ30-45 ثانية"
        ]
    },
    {
        id: 9,
        name: "رفع الأرجل",
        nameEn: "Leg Raises",
        muscle: "core",
        muscleAr: "بطن",
        difficulty: "medium",
        difficultyAr: "متوسط",
        description: "يستهدف العضلات السفلية للبطن.",
        video: "videos/legraise.mp4",
        icon: "🦵",
        steps: [
            "استلقِ على ظهرك مع تمديد الأرجل",
            "ارفع أرطلك للأعلى بشكل مستقيم",
            "انزل ببطء دون لمس الأرض",
            "كرر 10-15 مرة"
        ]
    },
    {
        id: 10,
        name: "تمرين البايسبس",
        nameEn: "Bicep Curls",
        muscle: "arms",
        muscleAr: "أذرع",
        difficulty: "easy",
        difficultyAr: "سهل",
        description: "تمرين كلاسيكي لتضخيم عضلة البايسبس.",
        video: "videos/Bicep Curl Front.mp4",
        icon: "💪",
        steps: [
            "قف مع دمبل في كل يد",
            "اثنِ المرفقين وارفع الدمبل",
            "ركز على شد البايسبس",
            "انزل ببطء وكرر 12-15 مرة"
        ]
    }
];

// 📅 برنامج 30 يوم
const program = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const patterns = [
        { type: 'chest', name: 'يوم الصدر', color: '#ff6b6b' },
        { type: 'back', name: 'يوم الظهر', color: '#4ecdc4' },
        { type: 'rest', name: 'راحة', color: '#95e1d3' },
        { type: 'legs', name: 'يوم الأرجل', color: '#ffd93d' },
        { type: 'core', name: 'يوم البطن', color: '#a8e6cf' },
        { type: 'full', name: 'تمرين كامل', color: '#ff8b94' },
        { type: 'active', name: 'راحة نشطة', color: '#c7ceea' }
    ];
    
    const pattern = patterns[i % 7];
    
    return {
        day,
        name: pattern.name,
        type: pattern.type,
        color: pattern.color,
        exercises: getExercisesForDay(pattern.type),
        duration: pattern.type === 'rest' ? 0 : pattern.type === 'active' ? 20 : 45
    };
});

function getExercisesForDay(type) {
    const mapping = {
        chest: ['Push-ups', 'Dips', 'Diamond Push-ups'],
        back: ['Pull-ups', ' Superman'],
        legs: ['Squats', 'Lunges'],
        core: ['Plank', 'Mountain Climbers', 'Leg Raises'],
        full: ['Push-ups', 'Squats', 'Plank'],
        active: ['Walking', 'Stretching'],
        rest: []
    };
    return mapping[type] || [];
}

// 🎯 حالة التطبيق
let state = {
    currentFilter: 'all',
    completedDays: JSON.parse(localStorage.getItem('completedDays') || '[]'),
    totalWorkouts: parseInt(localStorage.getItem('totalWorkouts') || '0'),
    streakDays: parseInt(localStorage.getItem('streakDays') || '0'),
    totalMinutes: parseInt(localStorage.getItem('totalMinutes') || '0')
};

// ===== DOM Elements =====
const exercisesGrid = document.getElementById('exercises-grid');
const programCalendar = document.getElementById('program-calendar');
const modal = document.getElementById('exercise-modal');
const modalVideo = document.getElementById('modal-video');

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    renderExercises();
    renderProgram();
    updateStats();
    setupEventListeners();
    animateOnScroll();
});

// ===== Render Functions =====
function renderExercises(filter = 'all') {
    const filtered = filter === 'all' 
        ? exercises 
        : exercises.filter(e => e.muscle === filter);
    
    exercisesGrid.innerHTML = filtered.map(ex => `
        <div class="exercise-card" onclick="openExerciseModal(${ex.id})" data-aos="fade-up">
            <div class="exercise-image">
                <span style="font-size: 5rem;">${ex.icon}</span>
            </div>
            <div class="exercise-info">
                <span class="exercise-muscle">${ex.muscleAr}</span>
                <h3 class="exercise-name">${ex.name}</h3>
                <p class="exercise-name-en">${ex.nameEn}</p>
                <div class="exercise-meta">
                    <span class="difficulty ${ex.difficulty}">${ex.difficultyAr}</span>
                    <span>▶ فيديو</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProgram() {
    programCalendar.innerHTML = program.map(day => {
        const isCompleted = state.completedDays.includes(day.day);
        return `
            <div class="day-card ${isCompleted ? 'completed' : ''}" 
                 onclick="toggleDay(${day.day})"
                 style="--day-color: ${day.color}"
                 data-aos="fade-up"
                 data-aos-delay="${day.day * 50}">
                <span class="day-number">${day.day}</span>
                <span class="day-label">${day.name}</span>
            </div>
        `;
    }).join('');
    
    updateProgress();
}

function updateProgress() {
    const completed = state.completedDays.length;
    const percentage = (completed / 30) * 100;
    
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('completed-days').textContent = completed;
}

function updateStats() {
    document.getElementById('total-workouts').textContent = state.totalWorkouts;
    document.getElementById('streak-days').textContent = state.streakDays;
    document.getElementById('total-minutes').textContent = state.totalMinutes;
    document.getElementById('muscle-count').textContent = '5';
}

// ===== Event Handlers =====
function setupEventListeners() {
    // Muscle tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExercises(btn.dataset.muscle);
        });
    });
    
    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
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
    
    // Nav active state
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
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
function openExerciseModal(id) {
    const exercise = exercises.find(e => e.id === id);
    if (!exercise) return;
    
    document.getElementById('modal-muscle').textContent = exercise.muscleAr;
    document.getElementById('modal-title').textContent = `${exercise.name} (${exercise.nameEn})`;
    document.getElementById('modal-difficulty').textContent = exercise.difficultyAr;
    document.getElementById('modal-target').textContent = exercise.muscleAr;
    document.getElementById('modal-description').textContent = exercise.description;
    
    // Steps
    document.getElementById('modal-steps').innerHTML = exercise.steps
        .map(step => `<li>${step}</li>`)
        .join('');
    
    // Video
    modalVideo.querySelector('source').src = exercise.video;
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
    
    if (index > -1) {
        state.completedDays.splice(index, 1);
        state.totalWorkouts = Math.max(0, state.totalWorkouts - program[dayNum - 1].exercises.length);
        state.totalMinutes = Math.max(0, state.totalMinutes - program[dayNum - 1].duration);
    } else {
        state.completedDays.push(dayNum);
        state.totalWorkouts += program[dayNum - 1].exercises.length;
        state.totalMinutes += program[dayNum - 1].duration;
        
        // Celebrate
        celebrate();
    }
    
    // Save
    localStorage.setItem('completedDays', JSON.stringify(state.completedDays));
    localStorage.setItem('totalWorkouts', state.totalWorkouts);
    localStorage.setItem('totalMinutes', state.totalMinutes);
    
    // Update UI
    renderProgram();
    updateStats();
}

// ===== Utilities =====
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function celebrate() {
    // Simple celebration animation
    const btn = event.target.closest('.day-card');
    if (btn) {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 200);
    }
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.exercise-card, .day-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== Export for global access =====
window.openExerciseModal = openExerciseModal;
window.closeModal = closeModal;
window.toggleDay = toggleDay;
window.scrollToSection = scrollToSection;
