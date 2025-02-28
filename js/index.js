document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Top property
        const carousel = document.querySelector('.carousel-inner');
        const cards = document.querySelectorAll('.property-card');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        // top property end
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Property type buttons toggle
    const propertyBtns = document.querySelectorAll('.property-type-btns button');
    
    propertyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            propertyBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Form submission
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your search logic here
        console.log('Search form submitted');
    });


    // Top property start
    // document.addEventListener('DOMContentLoaded', function() {
        // const carousel = document.querySelector('.carousel-inner');
        // const cards = document.querySelectorAll('.property-card');
        // const prevBtn = document.querySelector('.prev');
        // const nextBtn = document.querySelector('.next');
        // let currentIndex = 0;

        function updateCarousel() {
            const cardWidth = cards[0].offsetWidth + 20; // Including gap
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            // Update button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
            
            const maxIndex = cards.length - Math.floor(carousel.offsetWidth / cardWidth);
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
            nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
        }

        function handleResize() {
            currentIndex = 0;
            updateCarousel();
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 20;
            const maxIndex = cards.length - Math.floor(carousel.offsetWidth / cardWidth);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });

        window.addEventListener('resize', handleResize);
        
        // Initial update
        updateCarousel();
    // });
    // Top Property end


    // Exp favorite citys
    function scaleImage(card) {
        const img = card.querySelector("img");
        img.style.transform = "scale(1.1)";
      }
      function resetScale(card) {
        const img = card.querySelector("img");
        img.style.transform = "scale(1)";
      } // Add click event listeners to make cards interactive document.querySelectorAll('.city-card').forEach(card => { card.addEventListener('click', () => { // You can add navigation or modal functionality here const cityName = card.querySelector('.city-name').textContent; console.log(`Clicked on ${cityName}`); }); });
    
      //   exp favorite citys end
});

