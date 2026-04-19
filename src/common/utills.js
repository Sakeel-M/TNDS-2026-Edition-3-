export const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        // Smooth scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};