document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Service Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            serviceCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Before / After Interactive Slider
    const sliderContainer = document.getElementById('ba-slider');
    const afterImg = document.getElementById('after-img');
    const sliderHandle = document.getElementById('slider-handle');

    if (sliderContainer && afterImg && sliderHandle) {
        let isSliding = false;

        const updateSlider = (x) => {
            const rect = sliderContainer.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;

            if (position < 0) position = 0;
            if (position > 100) position = 100;

            afterImg.style.width = `${position}%`;
            sliderHandle.style.left = `${position}%`;
        };

        sliderContainer.addEventListener('mousedown', (e) => {
            isSliding = true;
            updateSlider(e.clientX);
        });

        window.addEventListener('mouseup', () => {
            isSliding = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isSliding) return;
            updateSlider(e.clientX);
        });

        // Touch events for mobile
        sliderContainer.addEventListener('touchstart', (e) => {
            isSliding = true;
            updateSlider(e.touches[0].clientX);
        });

        window.addEventListener('touchend', () => {
            isSliding = false;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isSliding) return;
            updateSlider(e.touches[0].clientX);
        });
    }

    // 4. Header Shadow on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});