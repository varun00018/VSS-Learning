// Initialize Lucide icons
lucide.createIcons();

// Data
const importantDates = [
    {
        exam: "JEE Main 2024 (Session 1)",
        date: "January 24 - February 1, 2024"
    },
    {
        exam: "JEE Main 2024 (Session 2)",
        date: "April 1 - April 15, 2024"
    },
    {
        exam: "NEET UG 2024",
        date: "May 5, 2024"
    },
    {
        exam: "JEE Advanced 2024",
        date: "May 26, 2024"
    },
    {
        exam: "BITSAT 2024",
        date: "June 20 - June 25, 2024"
    }
];

const successStories = [
    {
        name: "Priya Sharma",
        achievement: "AIR 5 in JEE Advanced 2023",
        college: "IIT Bombay - Computer Science",
        quote: "VSS Learning's structured approach and mentorship were key to my success. The faculty's dedication and innovative teaching methods helped me understand complex concepts with ease. The weekly mock tests and performance analysis helped me identify and work on my weak areas.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        name: "Rahul Verma",
        achievement: "AIR 8 in JEE Advanced 2023",
        college: "IIT Delhi - Electrical Engineering",
        quote: "The faculty's dedication and innovative teaching methods made complex topics easy to understand. The personalized mentorship program helped me stay focused and motivated throughout my preparation journey. The study material was comprehensive and well-structured.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
        name: "Maya Reddy",
        achievement: "AIR 1 in NEET 2023",
        college: "AIIMS Delhi - MBBS",
        quote: "The comprehensive study material and regular mock tests were invaluable for my preparation. The doubt clearing sessions and one-on-one mentoring helped me overcome challenges effectively. The test series was particularly helpful in building my confidence.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        name: "Arjun Patel",
        achievement: "AIR 3 in JEE Advanced 2023",
        college: "IIT Madras - Computer Science",
        quote: "The structured approach to problem-solving and the emphasis on fundamentals helped me excel in my preparation. The faculty's guidance and support were instrumental in my success. The online resources and recorded lectures were extremely helpful.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
        name: "Neha Singh",
        achievement: "AIR 2 in NEET 2023",
        college: "AIIMS Delhi - MBBS",
        quote: "The biology faculty at VSS Learning helped me develop a deep understanding of the subject. The regular tests and detailed analysis helped me track my progress effectively. The study environment was conducive to learning and growth.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
];

const features = [
    {
        title: "Expert Faculty",
        icon: "👨‍🏫",
        shortDesc: "Learn from India's top educators",
        fullDesc: "Our faculty includes IIT/AIIMS professors, subject matter experts with 15+ years of teaching experience, and industry professionals. Each instructor undergoes rigorous training in digital pedagogy and maintains a consistent track record of producing top rankers.",
        highlights: [
            "PhD holders from premier institutes",
            "Authors of renowned reference books",
            "Regular faculty training programs",
            "Personalized doubt resolution system"
        ]
    },
    {
        title: "Interactive Learning",
        icon: "💻",
        shortDesc: "Cutting-edge digital platform",
        fullDesc: "Experience learning like never before with our AI-powered platform. Features include adaptive learning paths, real-time progress tracking, and interactive 3D visualizations for complex topics.",
        highlights: [
            "Live interactive sessions",
            "Virtual labs for practical learning",
            "AI-based performance analytics",
            "Mobile-friendly interface"
        ]
    },
    {
        title: "Personalized Attention",
        icon: "🎯",
        shortDesc: "Individual mentorship",
        fullDesc: "Every student is assigned a dedicated mentor who tracks progress, provides regular feedback, and helps create personalized study plans. Our 1:10 mentor-student ratio ensures quality guidance.",
        highlights: [
            "Weekly mentorship calls",
            "Customized study plans",
            "Regular parent updates",
            "Career guidance sessions"
        ]
    }
];

const recentToppers = {
    JEE_Advanced_2023: [
        { rank: 1, name: "Arjun Patel", score: "350/360" },
        { rank: 5, name: "Priya Sharma", score: "348/360" },
        { rank: 8, name: "Rahul Verma", score: "345/360" },
        { rank: 12, name: "Ananya Singh", score: "342/360" },
        { rank: 15, name: "Karthik Raja", score: "340/360" }
    ],
    NEET_2023: [
        { rank: 1, name: "Maya Reddy", score: "715/720" },
        { rank: 3, name: "Rohan Joshi", score: "710/720" },
        { rank: 6, name: "Aisha Khan", score: "708/720" },
        { rank: 9, name: "Vikram Singh", score: "705/720" },
        { rank: 12, name: "Neha Gupta", score: "703/720" }
    ],
    GATE_2023: [
        { rank: 1, name: "Shreya Kumar", score: "990/1000" },
        { rank: 4, name: "Arun Verma", score: "985/1000" },
        { rank: 7, name: "Nisha Patel", score: "982/1000" },
        { rank: 10, name: "Raj Malhotra", score: "980/1000" },
        { rank: 13, name: "Meera Singh", score: "978/1000" }
    ]
};

// Current story index
let currentStoryIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderDates();
    renderFeatures();
    renderToppers();
    renderStories();
    startStoryAutoScroll();
});

// Render Important Dates
function renderDates() {
    const datesList = document.getElementById('datesList');
    datesList.innerHTML = importantDates.map(item => `
        <div class="date-item">
            <span class="date-exam">${item.exam}</span>
            <span class="date-value">${item.date}</span>
        </div>
    `).join('');
}

// Render Features
function renderFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = features.map((feature, index) => `
        <div class="feature-card" data-index="${index}">
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.shortDesc}</p>
        </div>
    `).join('');

    // Add click handlers for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.index);
            showFeatureDetails(features[index]);
        });
    });
}

// Show Feature Details Modal
function showFeatureDetails(feature) {
    const modal = document.createElement('div');
    modal.className = 'feature-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${feature.title}</h3>
            <p>${feature.fullDesc}</p>
            <ul>
                ${feature.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
            <button class="modal-close">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
}

// Render Toppers
function renderToppers() {
    const toppersGrid = document.getElementById('toppersGrid');
    toppersGrid.innerHTML = Object.entries(recentToppers).map(([exam, toppers]) => `
        <div class="topper-exam">
            <h3>${exam.replace(/_/g, ' ')}</h3>
            <div class="topper-list">
                ${toppers.map((topper, index) => `
                    <div class="topper-card">
                        <div class="topper-image">
                            <img src="https://images.unsplash.com/photo-${1500000000000 + index}" 
                                 alt="${topper.name}" />
                        </div>
                        <div class="topper-info">
                            <p class="topper-name">${topper.name}</p>
                            <div class="topper-details">
                                <span class="topper-rank">#${topper.rank}</span>
                                <span class="topper-score">Score: ${topper.score}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Success Stories
function renderStories() {
    const storiesTrack = document.getElementById('storiesTrack');
    storiesTrack.innerHTML = successStories.map((story, index) => `
        <div class="story-card">
            <div class="story-image">
                <img src="${story.image}" alt="${story.name}" />
            </div>
            <div class="story-content">
                <h3>${story.name}</h3>
                <p class="story-achievement">${story.achievement}</p>
                <p class="story-college">${story.college}</p>
                <p class="story-quote">"${story.quote}"</p>
            </div>
        </div>
    `).join('');

    // Add click handlers for carousel buttons
    document.getElementById('prevStory').addEventListener('click', () => {
        navigateStories('prev');
    });

    document.getElementById('nextStory').addEventListener('click', () => {
        navigateStories('next');
    });
}

// Navigate Stories
function navigateStories(direction) {
    if (direction === 'prev') {
        currentStoryIndex = currentStoryIndex === 0 ? successStories.length - 1 : currentStoryIndex - 1;
    } else {
        currentStoryIndex = currentStoryIndex === successStories.length - 1 ? 0 : currentStoryIndex + 1;
    }
    updateStoryPosition();
}

// Update Story Position
function updateStoryPosition() {
    const storiesTrack = document.getElementById('storiesTrack');
    storiesTrack.style.transform = `translateX(-${currentStoryIndex * 100}%)`;
}

// Auto-scroll Stories
function startStoryAutoScroll() {
    setInterval(() => {
        navigateStories('next');
    }, 5000);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});