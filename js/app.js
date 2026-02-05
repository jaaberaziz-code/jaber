// 📋 بيانات التمارين
const exercises = [
    {
        id: 1,
        name: "Push-ups",
        nameAr: "ضغط الصدر",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "easy",
        description: "تمرين أساسي للصدر والأكتاف والترايسبس"
    },
    {
        id: 2,
        name: "Pull-ups",
        nameAr: "سحب عالي",
        muscle: "back",
        muscleAr: "ظهر",
        difficulty: "hard",
        description: "تمرين قوي للظهر والبايسبس"
    },
    {
        id: 3,
        name: "Squats",
        nameAr: "قرفصاء",
        muscle: "legs",
        muscleAr: "أرجل",
        difficulty: "easy",
        description: "ملك تمارين الأرجل"
    },
    {
        id: 4,
        name: "Plank",
        nameAr: "اللوح الخشبي",
        muscle: "core",
        muscleAr: "بطن",
        difficulty: "easy",
        description: "تمرين ثبات للبطن والوسط"
    },
    {
        id: 5,
        name: "Diamond Push-ups",
        nameAr: "ضغط الماس",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "medium",
        description: "ضغط متقدم يستهدف الترايسبس أكثر"
    },
    {
        id: 6,
        name: "Lunges",
        nameAr: "خطوة الأمام",
        muscle: "legs",
        muscleAr: "أرجل",
        difficulty: "easy",
        description: "تمرين رائع للأرجل والتوازن"
    },
    {
        id: 7,
        name: "Dips",
        nameAr: "غطس",
        muscle: "chest",
        muscleAr: "صدر",
        difficulty: "medium",
        description: "تمرين للصدر السفلي والترايسبس"
    },
    {
        id: 8,
        name: "Mountain Climbers",
        nameAr: "متسلق الجبال",
        muscle: "core",
        muscleAr: "بطن",
        difficulty: "medium",
        description: "تمرين كارديو للبطن"
    }
];

// 📅 برنامج 30 يوم
const program = [
    { day: 1, name: "يوم الصدر", exercises: ["Push-ups", "Dips", "Diamond Push-ups"], sets: "3x12" },
    { day: 2, name: "يوم الظهر", exercises: ["Pull-ups"], sets: "5x5" },
    { day: 3, name: "راحة", exercises: ["استرخاء"], sets: "-" },
    { day: 4, name: "يوم الأرجل", exercises: ["Squats", "Lunges"], sets: "4x15" },
    { day: 5, name: "يوم البطن", exercises: ["Plank", "Mountain Climbers"], sets: "3x30s" },
    { day: 6, name: "تمرين كامل", exercises: ["Push-ups", "Squats", "Plank"], sets: "3x10" },
    { day: 7, name: "راحة نشطة", exercises: ["مشي خفيف"], sets: "20min" },
    { day: 8, name: "يوم الصدر", exercises: ["Push-ups", "Dips"], sets: "4x12" },
    { day: 9, name: "يوم الظهر", exercises: ["Pull-ups"], sets: "5x6" },
    { day: 10, name: "راحة", exercises: ["استرخاء"], sets: "-" },
    { day: 11, name: "يوم الأرجل", exercises: ["Squats", "Lunges"], sets: "4x20" },
    { day: 12, name: "يوم البطن", exercises: ["Plank", "Mountain Climbers"], sets: "4x30s" },
    { day: 13, name: "HIIT", exercises: ["Burpees", "Jumping Jacks"], sets: "20min" },
    { day: 14, name: "راحة", exercises: ["استرخاء"], sets: "-" },
    { day: 15, name: "نصف البرنامج!", exercises: ["تقييم"], sets: "-" }
];

// 🎯 المتغيرات العامة
let currentFilter = 'all';
let completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');

// 📋 عرض التمارين
function renderExercises(filter = 'all') {
    const container = document.getElementById('exercises-list');
    const filtered = filter === 'all' ? exercises : exercises.filter(e => e.muscle === filter);
    
    container.innerHTML = filtered.map(ex => `
        <div class="exercise-card">
            <h3>${ex.nameAr} (${ex.name})</h3>
            <p class="muscle">💪 ${ex.muscleAr}</p>
            <p>${ex.description}</p>
            <span class="difficulty ${ex.difficulty}">
                ${ex.difficulty === 'easy' ? 'سهل' : ex.difficulty === 'medium' ? 'متوسط' : 'صعب'}
            </span>
        </div>
    `).join('');
}

// 🔍 فلترة التمارين
function filterExercises(muscle) {
    currentFilter = muscle;
    renderExercises(muscle);
}

// 📅 عرض البرنامج
function renderProgram() {
    const container = document.getElementById('program-list');
    
    container.innerHTML = program.map(day => `
        <div class="day-card ${completedDays.includes(day.day) ? 'completed' : ''}" 
             onclick="toggleDay(${day.day})">
            <h3>يوم ${day.day}</h3>
            <p>${day.name}</p>
            <small>${day.exercises.join(', ')}</small>
        </div>
    `).join('');
    
    updateStats();
}

// ✅ تبديل حالة اليوم
function toggleDay(dayNum) {
    if (completedDays.includes(dayNum)) {
        completedDays = completedDays.filter(d => d !== dayNum);
    } else {
        completedDays.push(dayNum);
    }
    
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    renderProgram();
}

// 📊 تحديث الإحصائيات
function updateStats() {
    document.getElementById('days-completed').textContent = completedDays.length;
    
    let totalWorkouts = 0;
    completedDays.forEach(day => {
        const dayData = program.find(p => p.day === day);
        if (dayData && dayData.exercises[0] !== 'استرخاء') {
            totalWorkouts += dayData.exercises.length;
        }
    });
    
    document.getElementById('total-workouts').textContent = totalWorkouts;
}

// 🚀 تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    renderExercises();
    renderProgram();
});
