export const fadeIn = (element: Element, duration: number = 500): void => {
  element.classList.add('opacity-0');
  
  setTimeout(() => {
    element.classList.remove('opacity-0');
    element.classList.add('transition-opacity');
    element.classList.add('duration-500');
    element.classList.add('opacity-100');
  }, 10);
  
  setTimeout(() => {
    element.classList.remove('transition-opacity', 'duration-500');
  }, duration + 50);
};

export const observeElements = (): void => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
};