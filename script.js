
// ================================
// 1. DARK MODE FUNCTIONALITY
// ================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load previously saved theme
const savedTheme = localStorage.getItem("edusphere-theme");

// Apply saved theme
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");

    themeToggle.setAttribute("aria-label", "Switch to light mode");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {

        themeIcon.classList.replace("fa-moon", "fa-sun");

        localStorage.setItem("edusphere-theme", "dark");

        themeToggle.setAttribute("aria-label", "Switch to light mode");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");

        localStorage.setItem("edusphere-theme", "light");

        themeToggle.setAttribute("aria-label", "Switch to dark mode");

    }

});


// ================================
// 2. MOBILE NAVIGATION
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuIcon = document.getElementById("menuIcon");

// Open and close mobile menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    if (isOpen) {

        menuIcon.classList.replace("fa-bars", "fa-xmark");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuIcon.classList.replace("fa-xmark", "fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});


// ================================
// 3. CLOSE MENU AFTER CLICKING LINK
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuIcon.classList.replace("fa-xmark", "fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


// =====================================
// HERO SECTION - VIDEO MODAL
// =====================================

const watchVideoBtn = document.getElementById("watchVideoBtn");
const videoModal = document.getElementById("videoModal");

const closeVideoBtn = document.getElementById("closeVideoBtn");
const modalDoneBtn = document.getElementById("modalDoneBtn");


// Open modal
watchVideoBtn.addEventListener("click", () => {

    videoModal.classList.add("show");

    videoModal.setAttribute("aria-hidden", "false");

});


// Close modal function
function closeVideoModal() {

    videoModal.classList.remove("show");

    videoModal.setAttribute("aria-hidden", "true");

}


// Close using X button
closeVideoBtn.addEventListener("click", closeVideoModal);


// Close using Explore button
modalDoneBtn.addEventListener("click", closeVideoModal);


// Close when clicking outside the popup
videoModal.addEventListener("click", (event) => {

    if (event.target === videoModal) {
        closeVideoModal();
    }

});


// Close with Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeVideoModal();
    }

});


// =====================================
// TESTIMONIAL CAROUSEL
// =====================================

const testimonialTrack = document.getElementById("testimonialTrack");

const prevTestimonial = document.getElementById("prevTestimonial");

const nextTestimonial = document.getElementById("nextTestimonial");

const testimonialPagination = document.getElementById(
    "testimonialPagination"
);

const testimonialCards = document.querySelectorAll(".testimonial-card");

let currentTestimonial = 0;


// =====================================
// DETERMINE VISIBLE CARDS
// =====================================

function getVisibleCards() {

    if (window.innerWidth <= 650) {
        return 1;
    }

    if (window.innerWidth <= 1000) {
        return 2;
    }

    return 3;
}


// =====================================
// CALCULATE MAXIMUM SLIDE
// =====================================

function getMaxSlide() {

    return Math.max(
        0,
        testimonialCards.length - getVisibleCards()
    );

}


// =====================================
// CREATE PAGINATION DOTS
// =====================================

function createTestimonialDots() {

    testimonialPagination.innerHTML = "";

    const totalDots = getMaxSlide() + 1;

    for (let i = 0; i < totalDots; i++) {

        const dot = document.createElement("button");

        dot.classList.add("testimonial-dot");

        dot.setAttribute(
            "aria-label",
            `Go to testimonial slide ${i + 1}`
        );

        dot.addEventListener("click", () => {

            currentTestimonial = i;

            updateTestimonialCarousel();

        });

        testimonialPagination.appendChild(dot);

    }

}


// =====================================
// UPDATE CAROUSEL
// =====================================

function updateTestimonialCarousel() {

    const card = testimonialCards[0];

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;

    const trackStyles = window.getComputedStyle(testimonialTrack);

    const gap = parseFloat(trackStyles.columnGap) || 0;

    const slideDistance = cardWidth + gap;

    const maxSlide = getMaxSlide();

    currentTestimonial = Math.min(
        currentTestimonial,
        maxSlide
    );

    testimonialTrack.style.transform =
        `translateX(-${currentTestimonial * slideDistance}px)`;


    // Update active pagination dot

    const dots = document.querySelectorAll(".testimonial-dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentTestimonial
        );

    });


    // Update arrow states

    prevTestimonial.disabled = currentTestimonial === 0;

    nextTestimonial.disabled = currentTestimonial === maxSlide;

}


// =====================================
// NEXT TESTIMONIAL
// =====================================

nextTestimonial.addEventListener("click", () => {

    if (currentTestimonial < getMaxSlide()) {

        currentTestimonial++;

        updateTestimonialCarousel();

    }

});



// =====================================
// HANDLE WINDOW RESIZE
// =====================================

let previousVisibleCards = getVisibleCards();

window.addEventListener("resize", () => {

    const currentVisibleCards = getVisibleCards();

    if (currentVisibleCards !== previousVisibleCards) {

        previousVisibleCards = currentVisibleCards;

        createTestimonialDots();

    }

    currentTestimonial = Math.min(
        currentTestimonial,
        getMaxSlide()
    );

    updateTestimonialCarousel();

});


// =====================================
// INITIALIZE CAROUSEL
// =====================================

createTestimonialDots();

updateTestimonialCarousel();


// =====================================
// EDUSPHERE CTA SECTION
// SCROLL REVEAL ANIMATION
// =====================================

const ctaSection = document.querySelector(".cta-section");

if (ctaSection) {

    // Check browser support
    if ("IntersectionObserver" in window) {

        // Prepare section for animation
        ctaSection.classList.add("cta-js-ready");

        const ctaObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        ctaSection.classList.add("cta-visible");

                        // Animate only once
                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

        ctaObserver.observe(ctaSection);

    } else {

        // Fallback for older browsers
        ctaSection.classList.add("cta-visible");

    }

}

/* ==================== FOOTER JAVASCRIPT ==================== */

// Automatically update copyright year

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}


// Back to Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Newsletter Form

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = newsletterEmail.value.trim();

        if (email === "") {
            newsletterMessage.textContent = "Please enter your email address.";
            return;
        }

        newsletterMessage.textContent =
            "Thanks for your interest! Newsletter integration is coming soon.";

        newsletterForm.reset();

    });

}

/* ==================== END FOOTER JAVASCRIPT ==================== */

/* =================================
   WHY CHOOSE EDUSPHERE INTERACTION
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach((card, index) => {

        // Initial animation delay
        card.style.transitionDelay = `${index * 80}ms`;

    });

});