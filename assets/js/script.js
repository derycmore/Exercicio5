document.addEventListener("DOMContentLoaded", () => {
    const toggleBall = document.querySelector(".toggle-ball");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    let currentTheme = 1;

    body.classList.add('theme-1');

        themeToggle.addEventListener("click", () => {
            currentTheme++;
            if (currentTheme > 3) currentTheme = 1;


        toggleBall.className = "toggle-ball"; 
        toggleBall.classList.add(`pos${currentTheme}`);


        body.classList = (`theme-${currentTheme}`);
        });
    }
);  




