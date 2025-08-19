    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    });

    // Example: track CTA click (you can hook analytics here)
    document.getElementById('cta-agenda').addEventListener('click', ()=>{
      try{console.log('CTA Agende clicado') }catch(e){}
    })

    // Animações de entrada com Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Aplicar animações aos elementos
    document.addEventListener('DOMContentLoaded', () => {
      // Animar elementos com classe animate-on-scroll
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
      });

      // Animar elementos específicos das seções
      const sectionElements = document.querySelectorAll('#terapia .animate-on-scroll, #sobre .animate-on-scroll, #duvidas .animate-on-scroll');
      sectionElements.forEach((el, index) => {
        el.style.animationDelay = `${0.1 * index}s`;
      });

      // Efeito de parallax sutil no header
      let ticking = false;
      function updateHeader() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        if (scrolled > 50) {
          header.style.background = 'rgba(224, 215, 210, 0.98)';
          header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
          header.style.background = 'rgba(224, 215, 210, 0.95)';
          header.style.boxShadow = 'none';
        }
        ticking = false;
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateHeader);
          ticking = true;
        }
      }

      window.addEventListener('scroll', requestTick);

      // Animar contadores (se houver)
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        observer.observe(counter);
        counter.addEventListener('intersect', updateCounter);
      });
    });

    // Efeitos de hover adicionais
    document.addEventListener('DOMContentLoaded', () => {
      // Efeito de ripple nos botões
      const buttons = document.querySelectorAll('.btn-primary, .btn-ghost');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
          const ripple = document.createElement('span');
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = x + 'px';
          ripple.style.top = y + 'px';
          ripple.classList.add('ripple');
          
          this.appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      });

      // Efeito de tilt nas imagens
      const images = document.querySelectorAll('.photo-card img, .imagem-card img, .imagem-simples img');
      images.forEach(img => {
        img.addEventListener('mousemove', function(e) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        img.addEventListener('mouseleave', function() {
          this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
      });
    });

    // Smooth reveal para elementos da seção sobre
    const revealElements = document.querySelectorAll('#sobre p, #sobre .btn-primary');
    revealElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.transitionDelay = `${0.1 * index}s`;
      
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 1000 + (index * 100));
    });