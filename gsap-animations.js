<script>
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  console.log('GSAP script loaded');
  
  // Initialize animations
  initAnimations();
});

function initAnimations() {
  // Initial page load animations
  createIntroAnimation();
  
  // Scroll-based animations
  createScrollAnimations();
  
  // Interactive element animations
  createInteractiveAnimations();
  
  // Catalog slider animations
  createCatalogAnimations();
  
  // Project slider animations
  createProjectAnimations();
}

function createIntroAnimation() {
  // Initial loading animation for hero section
  const tl = gsap.timeline();
  
  tl.from('.brand-logo', { 
    duration: 1, 
    opacity: 0, 
    y: -30,
    ease: 'power3.out'
  })
  .from('.nav-link', { 
    duration: 0.6, 
    opacity: 0, 
    y: -20, 
    stagger: 0.1,
    ease: 'power2.out' 
  }, "-=0.5")
  .fromTo('.button-wrap', 
  { opacity: 0, scale: 0.9 }, 
  { duration: 0.6, opacity: 1, scale: 1 }, 
  "-=0.3")
  .from('.h1-80px-500', { 
    duration: 0.8, 
    opacity: 0, 
    y: 50,
    ease: 'power2.out' 
  }, "-=0.4")
  .from('.teg-item', { 
    duration: 0.5, 
    opacity: 0, 
    x: -20, 
    stagger: 0.08,
    ease: 'power1.out' 
  }, "-=0.5");
  
  // Animate background elements
  gsap.from('.bg-image', { 
    duration: 2, 
    opacity: 0, 
    scale: 1.1,
    ease: 'power2.out' 
  });
  
  // Corner elements animation
  gsap.from(['.corner-left', '.image-2-copy'], { 
    duration: 1.2, 
    opacity: 0, 
    rotate: -10,
    scale: 0.8,
    ease: 'elastic.out(1, 0.8)',
    stagger: 0.1
  });
}

function createScrollAnimations() {
  // Section titles reveal animation
  gsap.utils.toArray('.h2-80px-500').forEach(title => {
    gsap.from(title, { 
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      y: 80,
      opacity: 0,
      ease: 'power3.out'
    });
  });
  
  // Advantage items animation
  gsap.from('.advantage-item', { 
    scrollTrigger: {
      trigger: '.advantage-wrap',
      start: "top 75%"
    },
    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power2.out'
  });
  
  // Banner section animation
  gsap.from('.banner-block', { 
    scrollTrigger: {
      trigger: '.section-bgvideo',
      start: "top 70%"
    },
    y: 50,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out'
  });
  
  // Banner corners animation
  gsap.from('.banner-block .corner', { 
    scrollTrigger: {
      trigger: '.section-bgvideo',
      start: "top 70%"
    },
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    ease: 'back.out(1.7)'
  });
  
  // Footer animation
  gsap.from('#footer .div-block-12, #footer .div-block-9', { 
    scrollTrigger: {
      trigger: '#footer',
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    stagger: 0.25,
    duration: 0.8,
    ease: 'power2.out'
  });
}

function createInteractiveAnimations() {
  // Navigation hover effect
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { 
        duration: 0.3, 
        color: '#0000FF', 
        scale: 1.05, 
        ease: 'power1.out' 
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { 
        duration: 0.3, 
        color: '', 
        scale: 1, 
        ease: 'power1.out' 
      });
    });
  });
  
  // Button hover animation
  document.querySelectorAll('.button-wrap, .btn-pdf, .submit-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { 
        duration: 0.3, 
        scale: 1.05, 
        ease: 'power1.out' 
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { 
        duration: 0.3, 
        scale: 1, 
        ease: 'power1.out' 
      });
    });
  });
  
  // Form animation
  const openFormButtons = document.querySelectorAll('.btn-fixed, .button-wrap');
  const closeFormButton = document.querySelector('.close-btn');
  const formSection = document.querySelector('.section-form');
  
  if (formSection && openFormButtons.length) {
    // Hide form initially
    gsap.set(formSection, { opacity: 0, y: 20, display: 'none' });
    
    openFormButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Show form with animation
        gsap.set(formSection, { display: 'block' });
        gsap.to(formSection, { 
          duration: 0.5, 
          opacity: 1, 
          y: 0, 
          ease: 'power2.out' 
        });
      });
    });
    
    if (closeFormButton) {
      closeFormButton.addEventListener('click', () => {
        // Hide form with animation
        gsap.to(formSection, { 
          duration: 0.5, 
          opacity: 0, 
          y: 20, 
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(formSection, { display: 'none' });
          }
        });
      });
    }
  }
  
  // Product card animations
  const cardClasses = [
    '.card-basket', 
    '.card-bracket', 
    '.card-cassettes', 
    '.card-shaped', 
    '.card-ventilation', 
    '.card-non-standard'
  ];
  
  cardClasses.forEach(cardClass => {
    const card = document.querySelector(cardClass);
    const closeBtn = card?.querySelector('.close-card');
    
    if (card && closeBtn) {
      // Hide cards initially
      gsap.set(card, { opacity: 0, scale: 0.9, display: 'none' });
      
      closeBtn.addEventListener('click', () => {
        // Hide card with animation
        gsap.to(card, { 
          duration: 0.4, 
          opacity: 0, 
          scale: 0.9, 
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(card, { display: 'none' });
          }
        });
      });
    }
  });
  
  // Show product cards when clicking catalog items
  const catalogItems = document.querySelectorAll('.catalog-item');
  
  catalogItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index < cardClasses.length) {
        const card = document.querySelector(cardClasses[index]);
        if (card) {
          // Show card with animation
          gsap.set(card, { display: 'block' });
          gsap.to(card, { 
            duration: 0.5, 
            opacity: 1, 
            scale: 1, 
            ease: 'power2.out' 
          });
        }
      }
    });
  });
}

function createCatalogAnimations() {
  // Catalog items hover animations
  document.querySelectorAll('.catalog-item').forEach(item => {
    const image = item.querySelector('.item-img');
    const heading = item.querySelector('.item-heading');
    const hoverContent = item.querySelector('.item-content_hover');
    
    // Set initial state
    gsap.set(hoverContent, { opacity: 0, y: 20 });
    
    item.addEventListener('mouseenter', () => {
      gsap.to(image, { 
        duration: 0.4, 
        scale: 1.05, 
        ease: 'power1.out' 
      });
      
      gsap.to(heading, { 
        duration: 0.3, 
        opacity: 0, 
        y: -10, 
        ease: 'power1.in' 
      });
      
      gsap.to(hoverContent, { 
        duration: 0.4, 
        opacity: 1, 
        y: 0, 
        delay: 0.1, 
        ease: 'power2.out' 
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(image, { 
        duration: 0.4, 
        scale: 1, 
        ease: 'power1.out' 
      });
      
      gsap.to(heading, { 
        duration: 0.4, 
        opacity: 1, 
        y: 0, 
        delay: 0.1, 
        ease: 'power2.out' 
      });
      
      gsap.to(hoverContent, { 
        duration: 0.3, 
        opacity: 0, 
        y: 20, 
        ease: 'power1.in' 
      });
    });
  });
  
  // Animate catalog items on scroll
  const catalogSlider = document.querySelector('.catalog-slider');
  
  if (catalogSlider) {
    const catalogItems = catalogSlider.querySelectorAll('.catalog-item');
    
    gsap.from(catalogItems, { 
      scrollTrigger: {
        trigger: catalogSlider,
        start: "top 80%"
      },
      x: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });
  }
}

function createProjectAnimations() {
  // Project slider animations
  const projectSlider = document.querySelector('.slider-project');
  
  if (projectSlider) {
    // Animate project number counter
const projectCounter = document.querySelector('.golos-80px-500.txt-blue');

if (projectCounter) {
  // Создаём объект для анимации
  let counterValue = { value: 0 };
  
  // Запоминаем исходное текстовое содержимое, если нужно его сохранить для других целей
  const originalText = projectCounter.textContent;
  
  // Устанавливаем начальное значение "0"
  projectCounter.textContent = "0";
  
  gsap.to(counterValue, {
    scrollTrigger: {
      trigger: projectSlider,
      start: "top 80%",
      once: true // Важно! Запускаем анимацию только один раз
    },
    value: 25, // Целевое значение
    duration: 2,
    ease: "power2.out",
    onUpdate: function() {
      // Обновляем текст с текущим значением счетчика
      projectCounter.textContent = Math.round(counterValue.value);
    }
  });
}
    
    // Animate project slides when they become active
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const slide = mutation.target;
          if (slide.classList.contains('w-slide') && slide.classList.contains('swiper-slide-active')) {
            gsap.fromTo(slide.querySelector('.slide-list'), 
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            );
          }
        }
      });
    });
    
    document.querySelectorAll('.slider-project .w-slide').forEach(slide => {
      observer.observe(slide, { attributes: true });
    });
  }
}
</script>
