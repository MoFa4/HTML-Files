
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".Gallery img");
    const config = {
        rootMargin: "50px 0px",
        threshold: 0.01
    };

    let observer = new IntersectionObserver((entries, self) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute("data-src");
        if (!src) return;
        img.src = src;
    }
});


document.querySelectorAll(".Gallery img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
