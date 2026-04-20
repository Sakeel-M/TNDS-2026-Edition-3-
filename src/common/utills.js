export const scrollToSection = (sectionId, retries = 20) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }
    if (retries > 0) {
        setTimeout(() => scrollToSection(sectionId, retries - 1), 100);
    }
};