// dark mode toggle with persistence
const themeToggle = document.querySelector('#theme-toggle');

function setTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// initialize theme from localStorage (or prefer system setting if not set)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme(true);
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

//menu toggle
document.querySelector("#menu-toggle").addEventListener("click", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
    document.querySelector("main").onclick = () => {
        nav.classList.add("hidden");
    }
});

// scroll to top button
const toTopButton = document.getElementById("to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
};

toTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 

// dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// smooth scrolling for home link
document.querySelector('a[href="/"]').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});