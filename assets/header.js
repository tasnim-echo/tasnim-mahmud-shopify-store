document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".header").forEach((header) => {
        const toggle = header.querySelector(".header-toggle");
        const mobileNav = header.querySelector(".header-mobile-nav");

        if (!toggle || !mobileNav) return;

        // Toggle mobile menu
        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";

            toggle.setAttribute("aria-expanded", String(!isOpen));
            toggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

            mobileNav.hidden = isOpen;
        });

        // Toggle mobile submenus
        header.querySelectorAll(".header-mobile-dropdown-toggle").forEach((button) => {
            button.addEventListener("click", () => {
                const isOpen = button.getAttribute("aria-expanded") === "true";
                const submenu = button.nextElementSibling;

                button.setAttribute("aria-expanded", String(!isOpen));
                submenu.hidden = isOpen;
            });
        });
    });
});
