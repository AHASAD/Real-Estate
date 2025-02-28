document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
});

// our Testimonial

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.testimonial-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 24; // Including gap
    let isScrolling = false;

    function updateButtonStates() {
        prevBtn.style.opacity = wrapper.scrollLeft <= 0 ? '0.5' : '1';
        prevBtn.style.cursor = wrapper.scrollLeft <= 0 ? 'not-allowed' : 'pointer';
        
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        nextBtn.style.opacity = wrapper.scrollLeft >= maxScroll ? '0.5' : '1';
        nextBtn.style.cursor = wrapper.scrollLeft >= maxScroll ? 'not-allowed' : 'pointer';
    }

    function scrollWrapper(scrollOffset) {
        if (isScrolling) return;
        isScrolling = true;
        wrapper.scrollLeft += scrollOffset;
        setTimeout(() => {
            isScrolling = false;
            updateButtonStates();
        }, 300);
    }

    prevBtn.addEventListener('click', () => scrollWrapper(-cardWidth));
    nextBtn.addEventListener('click', () => scrollWrapper(cardWidth));

    wrapper.addEventListener('scroll', updateButtonStates);
    updateButtonStates();

    // Handle touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    wrapper.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            scrollWrapper(diff > 0 ? cardWidth : -cardWidth);
        }
    }
});

