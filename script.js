document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.querySelector(".hero-content").style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});


/* Enhanced Floating Particles */
function createParticles() {
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.width = particle.style.height = Math.random() * 4 + 2 + "px";
        particle.style.animationDuration = Math.random() * 15 + 10 + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(particle);
    }
}
createParticles();


/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
    const max = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / max) * 100;
    document.getElementById("scrollBar").style.width = progress + "%";
});


/* Smooth Scroll with Active Nav */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
       
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
       
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


/* Update Active Nav on Scroll */
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });


    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


/* Form Submission */
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for your message! 🌟");
    this.reset();
});