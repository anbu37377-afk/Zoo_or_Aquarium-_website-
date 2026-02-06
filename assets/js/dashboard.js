/**
 * Dashboard Specific JS
 * Handles sidebar navigation and UI updates
 */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar .nav-link, .navbar-nav .nav-link');
    const pageTitle = document.querySelector('.flex-grow-1 h2.fw-bold');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Allow logout and external links to function normally
            if (href !== '#' && href !== '') return;

            e.preventDefault();

            // Update active state for all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Find matching link in other nav (mobile vs desktop) and activate it
            const linkText = link.textContent.trim();
            navLinks.forEach(l => {
                if (l.textContent.trim() === linkText) {
                    l.classList.add('active');
                }
            });

            // Update main content title
            if (pageTitle) {
                pageTitle.textContent = linkText;
            }

            // Close mobile menu if open (for mobile nav)
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && mobileMenu.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(mobileMenu);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    console.log('Dashboard interaction initialized');
});
