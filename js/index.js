document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  // Top property
  const carousel = document.querySelector(".carousel-inner");
  const cards = document.querySelectorAll(".property-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  // top property end

  mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Animate hamburger to X
    const spans = this.querySelectorAll("span");
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // scroll start
  window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // scroll End

  // Property type buttons toggle
  const propertyBtns = document.querySelectorAll(".property-type-btns button");

  propertyBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      propertyBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest("nav") && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
      const spans = mobileMenuBtn.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Form submission
  const searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your search logic here
    console.log("Search form submitted");
  });

  // Top property start
  // document.addEventListener('DOMContentLoaded', function() {
  // const carousel = document.querySelector('.carousel-inner');
  // const cards = document.querySelectorAll('.property-card');
  // const prevBtn = document.querySelector('.prev');
  // const nextBtn = document.querySelector('.next');
  // let currentIndex = 0;

  // function updateCarousel() {
  //     const cardWidth = cards[0].offsetWidth + 20; // Including gap
  //     carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  //     // Update button states
  //     prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
  //     prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';

  //     const maxIndex = cards.length - Math.floor(carousel.offsetWidth / cardWidth);
  //     nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
  //     nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
  // }

  // function handleResize() {
  //     currentIndex = 0;
  //     updateCarousel();
  // }

  // prevBtn.addEventListener('click', () => {
  //     if (currentIndex > 0) {
  //         currentIndex--;
  //         updateCarousel();
  //     }
  // });

  // nextBtn.addEventListener('click', () => {
  //     const cardWidth = cards[0].offsetWidth + 20;
  //     const maxIndex = cards.length - Math.floor(carousel.offsetWidth / cardWidth);
  //     if (currentIndex < maxIndex) {
  //         currentIndex++;
  //         updateCarousel();
  //     }
  // });

  // window.addEventListener('resize', handleResize);

  // Initial update
  // updateCarousel();
  // });

//   document.addEventListener("DOMContentLoaded", function () {
//     const wrapper = document.querySelector(".testimonial-wrapper");
//     const prevBtn = document.querySelector(".prev-btn");
//     const nextBtn = document.querySelector(".next-btn");
//     const cardWidth =
//       document.querySelector(".testimonial-card").offsetWidth + 24; 
      // Including gap
    // let isScrolling = false;

    // function updateButtonStates() {
    //   prevBtn.style.opacity = wrapper.scrollLeft <= 0 ? "0.5" : "1";
    //   prevBtn.style.cursor =
    //     wrapper.scrollLeft <= 0 ? "not-allowed" : "pointer";

    //   const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    //   nextBtn.style.opacity = wrapper.scrollLeft >= maxScroll ? "0.5" : "1";
    //   nextBtn.style.cursor =
    //     wrapper.scrollLeft >= maxScroll ? "not-allowed" : "pointer";
    // }

    // function scrollWrapper(scrollOffset) {
    //   if (isScrolling) return;
    //   isScrolling = true;
    //   wrapper.scrollLeft += scrollOffset;
    //   setTimeout(() => {
    //     isScrolling = false;
    //     updateButtonStates();
    //   }, 300);
    // }

    // prevBtn.addEventListener("click", () => scrollWrapper(-cardWidth));
    // nextBtn.addEventListener("click", () => scrollWrapper(cardWidth));

    // wrapper.addEventListener("scroll", updateButtonStates);
    // updateButtonStates();

    // Handle touch events for mobile swipe
//     let touchStartX = 0;
//     let touchEndX = 0;

//     wrapper.addEventListener("touchstart", (e) => {
//       touchStartX = e.changedTouches[0].screenX;
//     });

//     wrapper.addEventListener("touchend", (e) => {
//       touchEndX = e.changedTouches[0].screenX;
//       handleSwipe();
//     });

//     function handleSwipe() {
//       const swipeThreshold = 50;
//       const diff = touchStartX - touchEndX;

//       if (Math.abs(diff) > swipeThreshold) {
//         scrollWrapper(diff > 0 ? cardWidth : -cardWidth);
//       }
//     }
//   });
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
});
//   exp favorite citys end

// our testimonial Start

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".testimonial-wrapper");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let isScrolling = false;

  // Function to calculate card width including gap
  function getCardWidth() {
    const card = wrapper.querySelector(".testimonial-card");
    if (!card) return 0;

    // Get the computed style to get the actual rendered width
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;

    // Get the gap from the wrapper's computed style
    const wrapperStyle = window.getComputedStyle(wrapper);
    const gapValue = wrapperStyle.getPropertyValue("gap");
    const gap = Number.parseInt(gapValue, 10) || 24; // Default to 24px if parsing fails

    return cardWidth + gap;
  }

  // Update button states based on scroll position
  function updateButtonStates() {
    // Check if we're at the start
    const isAtStart = wrapper.scrollLeft <= 0;
    prevBtn.disabled = isAtStart;
    prevBtn.style.opacity = isAtStart ? "0.5" : "1";
    prevBtn.style.cursor = isAtStart ? "not-allowed" : "pointer";

    // Check if we're at the end
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    const isAtEnd = wrapper.scrollLeft >= maxScroll - 1; // -1 for rounding errors
    nextBtn.disabled = isAtEnd;
    nextBtn.style.opacity = isAtEnd ? "0.5" : "1";
    nextBtn.style.cursor = isAtEnd ? "not-allowed" : "pointer";
  }

  // Scroll the wrapper by the specified amount
  function scrollWrapper(scrollOffset) {
    if (isScrolling) return;

    isScrolling = true;
    wrapper.scrollLeft += scrollOffset;

    // Reset the isScrolling flag after the scroll animation completes
    setTimeout(() => {
      isScrolling = false;
      updateButtonStates();
    }, 300); // Match this with the CSS scroll-behavior duration
  }

  // Button click handlers
  prevBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    scrollWrapper(-cardWidth);
  });

  nextBtn.addEventListener("click", () => {
    const cardWidth = getCardWidth();
    scrollWrapper(cardWidth);
  });

  // Listen for scroll events to update button states
  wrapper.addEventListener("scroll", () => {
    updateButtonStates();
  });

  // Handle window resize to ensure correct button states
  window.addEventListener("resize", () => {
    updateButtonStates();
  });

  // Handle touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;

  wrapper.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  wrapper.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      const cardWidth = getCardWidth();
      scrollWrapper(diff > 0 ? cardWidth : -cardWidth);
    }
  }

  // Initialize button states
  updateButtonStates();

  // Add resize observer to handle dynamic content changes
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      updateButtonStates();
    });
    resizeObserver.observe(wrapper);
  }
});

// our testimonial End
