/**
 * SeguridadPrivadaMX - Main JavaScript
 * Optimizado para evitar forced reflows
 */

(function() {
    'use strict';

    // Cache de variables para evitar reflows
    let isMobile = false;
    let resizeTimeout = null;

    // Función para verificar si es móvil (solo se ejecuta cuando es necesario)
    function checkMobile() {
        isMobile = window.matchMedia('(max-width: 768px)').matches;
    }

    // Debounce para resize
    function debounce(func, wait) {
        return function executedFunction(...args) {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // FAQ Accordion functionality
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        if (!faqItems.length) return;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                // Usar requestAnimationFrame para agrupar cambios DOM
                requestAnimationFrame(() => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        });
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const navToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            requestAnimationFrame(() => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        });
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Dropdown menu functionality for mobile
    function initDropdownMenu() {
        const dropdownItems = document.querySelectorAll('.nav-item-dropdown');
        if (!dropdownItems.length) return;

        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (!link) return;

            link.addEventListener('click', function(e) {
                // Solo en móvil
                if (!isMobile) return;

                e.preventDefault();
                requestAnimationFrame(() => {
                    item.classList.toggle('active');
                });
            });
        });
    }

    // Handle resize con debounce
    function handleResize() {
        const wasIsMobile = isMobile;
        checkMobile();

        // Solo actualizar DOM si cambió el estado
        if (wasIsMobile && !isMobile) {
            requestAnimationFrame(() => {
                document.querySelectorAll('.nav-item-dropdown.active').forEach(item => {
                    item.classList.remove('active');
                });
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) navMenu.classList.remove('active');
            });
        }
    }

    // Inicialización
    function init() {
        checkMobile();
        initFaqAccordion();
        initMobileMenu();
        initSmoothScroll();
        initDropdownMenu();

        // Resize listener con debounce
        window.addEventListener('resize', debounce(handleResize, 150), { passive: true });
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
