// 1. DOM-függő funkciók (csak akkor futnak, ha a HTML már betöltött)
document.addEventListener('DOMContentLoaded', () => {
    
    // AOS inicializálása (biztonsági ellenőrzéssel)
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // Scroll To Top logikája
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove("hidden");
            } else {
                scrollTopBtn.classList.add("hidden");
            }
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Dark Mode logikája
    const darkBtn = document.getElementById("darkModeBtn");
    const html = document.documentElement;

    if (html) {
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            if (darkBtn) darkBtn.textContent = "☀️";
        }

        if (darkBtn) {
            darkBtn.addEventListener("click", () => {
                html.classList.toggle("dark");
                
                if (html.classList.contains("dark")) {
                    localStorage.setItem("theme", "dark");
                    darkBtn.textContent = "☀️";
                } else {
                    localStorage.setItem("theme", "light");
                    darkBtn.textContent = "🌕";
                }
            });
        }
    }
});

// 2. Alpine.js komponensek (globális térben kell maradniuk!)
function PageManager() {
    return {
        currentYear: new Date().getFullYear(),
        lives: 3,
        activeProjectId: null,
        challenges: SITE_DATA.challenges,

        checkSkill(skill, challenge) {
            if (skill.disabled) return;

            if (skill.correct) {
                skill.state = 'correct';
            } else {
                skill.state = 'wrong';
                this.lives = (this.lives || 0) - 1;
            }

            skill.disabled = true;

            // JAVÍTVA: this.challenge.content helyett challenge.content
            const allCorrectFound = challenge.content
                .filter(s => s.correct)
                .every(s => s.state === 'correct');

            if (allCorrectFound) {
                challenge.completed = true;
                // JAVÍTVA: this.skills helyett challenge.content
                challenge.content.forEach(s => s.disabled = true);
            }

            if (!skill.correct) {
                setTimeout(() => {
                    skill.state = null;
                }, 2000);
            }
        }
    }
};

function HeroData() {
    return {
        name: 'Máté Pejnovac',
        age: new Date().getFullYear() - 1999 - (new Date() < new Date(new Date().getFullYear(), 4, 23)), 
        superSecretMode: true,
        location: "Hungary",
        bio: SITE_DATA.bio,
        projects: SITE_DATA.projects,
        experiences: SITE_DATA.experiences
    }
};